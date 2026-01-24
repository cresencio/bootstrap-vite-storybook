#!/usr/bin/env python3
"""
CXS Command Line Interface

Automation tool for Context eXchange System operations:
- Create new cycles
- Scaffold context packs
- Log runs with validation
- Validate ledger entries
"""

import argparse
import csv
import os
import sys
from datetime import datetime, timezone
from pathlib import Path


def get_cxs_root() -> Path:
    """Find the cxs directory root."""
    # Check common locations
    candidates = [
        Path("cxs"),
        Path("../.."),  # If running from cxs/tools/
        Path("."),
    ]
    
    for candidate in candidates:
        if (candidate / "cycles" / "current").exists():
            return candidate.resolve()
    
    # Try to find cxs in parent directories
    current = Path.cwd()
    while current != current.parent:
        if (current / "cxs" / "cycles" / "current").exists():
            return (current / "cxs").resolve()
        current = current.parent
    
    raise FileNotFoundError("Cannot find cxs directory. Run from project root or cxs/tools/")


def get_current_cycle(cxs_root: Path) -> str:
    """Read the current cycle ID."""
    cycle_file = cxs_root / "cycles" / "current"
    if cycle_file.exists():
        return cycle_file.read_text().strip()
    return "unset"


def timestamp_now() -> str:
    """Get current timestamp in ISO 8601 format."""
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def date_stamp() -> str:
    """Get current date stamp for naming."""
    return datetime.now().strftime("%Y%m%d-%H%M%S")


# =============================================================================
# Command: new-cycle
# =============================================================================

def cmd_new_cycle(args):
    """Create a new cycle."""
    cxs_root = get_cxs_root()
    
    # Generate cycle ID
    if args.name:
        cycle_id = f"{args.name}-{datetime.now().strftime('%Y%m%d')}"
    else:
        cycle_id = f"cycle-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    
    # Write to cycles/current
    cycle_file = cxs_root / "cycles" / "current"
    old_cycle = get_current_cycle(cxs_root)
    cycle_file.write_text(cycle_id + "\n")
    
    print(f"✅ New cycle created: {cycle_id}")
    print(f"   Previous cycle: {old_cycle}")
    print(f"   File updated: {cycle_file}")
    
    # Optionally log cycle change to changelog
    if args.log_changelog:
        changelog = cxs_root / "ledger" / "CHANGELOG_TIMELINE.md"
        entry = f"""
---

## Cycle Started: {cycle_id}

**Date:** {datetime.now().strftime('%Y-%m-%d')}  
**Previous Cycle:** {old_cycle}  
**Event:** New cycle initiated  
**Details:** {args.description or 'Cycle created via cxs_cli.py'}
"""
        with open(changelog, "a") as f:
            f.write(entry)
        print(f"   Changelog updated: {changelog}")
    
    return 0


# =============================================================================
# Command: new-pack
# =============================================================================

def cmd_new_pack(args):
    """Create a new context pack with scaffolding."""
    cxs_root = get_cxs_root()
    cycle_id = get_current_cycle(cxs_root)
    
    # Generate pack directory name
    pack_name = f"pack-{date_stamp()}"
    if args.name:
        pack_name = f"pack-{args.name}-{date_stamp()}"
    
    pack_dir = cxs_root / "packs" / pack_name
    pack_dir.mkdir(parents=True, exist_ok=True)
    
    # Create subdirectories
    (pack_dir / "inputs").mkdir(exist_ok=True)
    (pack_dir / "config").mkdir(exist_ok=True)
    
    # Copy contract if specified
    contract_ref = args.contract or "process"
    contract_file = cxs_root / "contracts" / f"{contract_ref}.contract"
    if contract_file.exists():
        (pack_dir / "contract.md").write_text(contract_file.read_text())
    
    # Create meta.yaml
    meta_content = f"""# Context Pack Metadata
cycle_id: "{cycle_id}"
pack_name: "{pack_name}"
created: "{timestamp_now()}"
contract: "{contract_ref}.contract"
description: "{args.description or 'Context pack for ' + cycle_id}"
status: "in-progress"

# Input files and references
inputs: []

# Expected outputs
outputs: []

# Dependencies
dependencies: []

# Notes
notes: |
  Pack created by cxs_cli.py
  Add your notes and context here.
"""
    (pack_dir / "meta.yaml").write_text(meta_content)
    
    # Create notes.md
    notes_content = f"""# Pack Notes: {pack_name}

**Cycle:** {cycle_id}  
**Created:** {timestamp_now()}  
**Contract:** {contract_ref}.contract

## Objective

{args.description or 'Describe the objective of this pack.'}

## Context

Add relevant context, background information, and references here.

## Progress

- [ ] Initial setup
- [ ] Work in progress
- [ ] Review and validation
- [ ] Completion and logging

## Notes

Add working notes as you progress.
"""
    (pack_dir / "notes.md").write_text(notes_content)
    
    print(f"✅ Context pack created: {pack_dir}")
    print(f"   Cycle: {cycle_id}")
    print(f"   Contract: {contract_ref}.contract")
    print(f"   Structure:")
    print(f"     ├── meta.yaml")
    print(f"     ├── contract.md")
    print(f"     ├── notes.md")
    print(f"     ├── inputs/")
    print(f"     └── config/")
    
    return 0


# =============================================================================
# Command: log-run
# =============================================================================

VALID_STATUSES = ["completed", "failed", "partial", "in-progress", "cancelled"]

LEDGER_HEADER = [
    "timestamp",
    "session_id",
    "cycle_id",
    "contract_ref",
    "agent_id",
    "tokens_or_runtime",
    "status",
    "notes"
]


def validate_ledger_row(row: list) -> tuple[bool, str]:
    """Validate a ledger row against the schema."""
    if len(row) != len(LEDGER_HEADER):
        return False, f"Expected {len(LEDGER_HEADER)} columns, got {len(row)}"
    
    # Validate timestamp format (basic check)
    timestamp = row[0]
    if not timestamp or "T" not in timestamp:
        return False, f"Invalid timestamp format: {timestamp}"
    
    # Validate status
    status = row[6]
    if status not in VALID_STATUSES:
        return False, f"Invalid status '{status}'. Must be one of: {VALID_STATUSES}"
    
    # Check required fields are not empty
    required_indices = [0, 1, 2, 3, 4, 6]  # timestamp, session, cycle, contract, agent, status
    for idx in required_indices:
        if not row[idx].strip():
            return False, f"Required field '{LEDGER_HEADER[idx]}' is empty"
    
    return True, ""


def cmd_log_run(args):
    """Log a run to the ledger with validation."""
    cxs_root = get_cxs_root()
    cycle_id = args.cycle or get_current_cycle(cxs_root)
    
    # Build the row
    row = [
        args.timestamp or timestamp_now(),
        args.session,
        cycle_id,
        args.contract,
        args.agent,
        args.runtime or "",
        args.status,
        args.notes or ""
    ]
    
    # Validate
    valid, error = validate_ledger_row(row)
    if not valid:
        print(f"❌ Validation failed: {error}")
        return 1
    
    # Check/create ledger file
    ledger_file = cxs_root / "ledger" / "runs.csv"
    
    # Ensure header exists
    if not ledger_file.exists() or ledger_file.stat().st_size == 0:
        with open(ledger_file, "w", newline="", encoding="utf-8") as f:
            writer = csv.writer(f)
            writer.writerow(LEDGER_HEADER)
    else:
        # Verify header matches
        with open(ledger_file, "r", encoding="utf-8") as f:
            reader = csv.reader(f)
            existing_header = next(reader, None)
            if existing_header != LEDGER_HEADER:
                print(f"❌ Ledger header mismatch!")
                print(f"   Expected: {LEDGER_HEADER}")
                print(f"   Found: {existing_header}")
                return 1
    
    # Append the row
    with open(ledger_file, "a", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(row)
    
    print(f"✅ Run logged successfully")
    print(f"   Session: {row[1]}")
    print(f"   Cycle: {row[2]}")
    print(f"   Contract: {row[3]}")
    print(f"   Agent: {row[4]}")
    print(f"   Status: {row[6]}")
    print(f"   Ledger: {ledger_file}")
    
    return 0


# =============================================================================
# Command: validate
# =============================================================================

def cmd_validate(args):
    """Validate the ledger file."""
    cxs_root = get_cxs_root()
    ledger_file = cxs_root / "ledger" / "runs.csv"
    
    if not ledger_file.exists():
        print(f"❌ Ledger file not found: {ledger_file}")
        return 1
    
    print(f"Validating: {ledger_file}")
    
    errors = 0
    row_count = 0
    
    with open(ledger_file, "r", newline="", encoding="utf-8") as f:
        reader = csv.reader(f)
        
        # Check header
        header = next(reader, None)
        if header != LEDGER_HEADER:
            print(f"❌ Header mismatch")
            print(f"   Expected: {LEDGER_HEADER}")
            print(f"   Found: {header}")
            errors += 1
        else:
            print(f"✅ Header valid")
        
        # Check rows
        for i, row in enumerate(reader, start=2):
            row_count += 1
            valid, error = validate_ledger_row(row)
            if not valid:
                print(f"❌ Line {i}: {error}")
                errors += 1
    
    print(f"\nValidation complete:")
    print(f"   Rows checked: {row_count}")
    print(f"   Errors found: {errors}")
    
    if errors == 0:
        print(f"✅ Ledger is valid!")
        return 0
    else:
        print(f"❌ Ledger has {errors} error(s)")
        return 1


# =============================================================================
# Command: status
# =============================================================================

def cmd_status(args):
    """Show current CXS status."""
    cxs_root = get_cxs_root()
    
    print("╔════════════════════════════════════════╗")
    print("║          CXS Status                    ║")
    print("╚════════════════════════════════════════╝")
    print()
    
    # Current cycle
    cycle_id = get_current_cycle(cxs_root)
    print(f"📍 Current Cycle: {cycle_id}")
    
    # Count packs
    packs_dir = cxs_root / "packs"
    pack_count = len([p for p in packs_dir.iterdir() if p.is_dir() and not p.name.startswith(".")])
    print(f"📦 Context Packs: {pack_count}")
    
    # Count runs in ledger
    ledger_file = cxs_root / "ledger" / "runs.csv"
    run_count = 0
    if ledger_file.exists():
        with open(ledger_file, "r") as f:
            run_count = sum(1 for _ in f) - 1  # Subtract header
    print(f"📊 Logged Runs: {run_count}")
    
    # Count outputs
    outbox_dir = cxs_root / "outbox"
    output_count = len([f for f in outbox_dir.iterdir() if f.is_file() and not f.name.startswith(".")])
    print(f"📤 Outputs: {output_count}")
    
    # Show recent runs
    if run_count > 0:
        print()
        print("📋 Recent Runs:")
        with open(ledger_file, "r") as f:
            reader = csv.DictReader(f)
            rows = list(reader)
            for row in rows[-3:]:  # Last 3 runs
                print(f"   • [{row.get('status', 'unknown')}] {row.get('notes', 'No notes')[:50]}")
    
    print()
    print(f"📁 CXS Root: {cxs_root}")
    
    return 0


# =============================================================================
# Main
# =============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="CXS Command Line Interface",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s new-cycle --name "feature-auth"
  %(prog)s new-pack --contract analyze --description "Data analysis"
  %(prog)s log-run --session run-001 --contract process.contract --agent claude --status completed --notes "Task done"
  %(prog)s validate
  %(prog)s status
"""
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # new-cycle
    p_cycle = subparsers.add_parser("new-cycle", help="Create a new cycle")
    p_cycle.add_argument("--name", "-n", help="Cycle name prefix")
    p_cycle.add_argument("--description", "-d", help="Cycle description")
    p_cycle.add_argument("--log-changelog", "-l", action="store_true", help="Log to changelog")
    p_cycle.set_defaults(func=cmd_new_cycle)
    
    # new-pack
    p_pack = subparsers.add_parser("new-pack", help="Create a new context pack")
    p_pack.add_argument("--name", "-n", help="Pack name suffix")
    p_pack.add_argument("--contract", "-c", default="process", help="Contract type (process, analyze, document)")
    p_pack.add_argument("--description", "-d", help="Pack description")
    p_pack.set_defaults(func=cmd_new_pack)
    
    # log-run
    p_log = subparsers.add_parser("log-run", help="Log a run to the ledger")
    p_log.add_argument("--session", "-s", required=True, help="Session ID")
    p_log.add_argument("--contract", "-c", required=True, help="Contract reference")
    p_log.add_argument("--agent", "-a", required=True, help="Agent ID")
    p_log.add_argument("--runtime", "-r", help="Tokens or runtime")
    p_log.add_argument("--status", required=True, choices=VALID_STATUSES, help="Execution status")
    p_log.add_argument("--notes", "-n", help="Run notes/description")
    p_log.add_argument("--cycle", help="Override cycle ID (defaults to current)")
    p_log.add_argument("--timestamp", "-t", help="Override timestamp (ISO 8601)")
    p_log.set_defaults(func=cmd_log_run)
    
    # validate
    p_validate = subparsers.add_parser("validate", help="Validate the ledger")
    p_validate.set_defaults(func=cmd_validate)
    
    # status
    p_status = subparsers.add_parser("status", help="Show CXS status")
    p_status.set_defaults(func=cmd_status)
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return 1
    
    try:
        return args.func(args)
    except FileNotFoundError as e:
        print(f"❌ Error: {e}")
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
