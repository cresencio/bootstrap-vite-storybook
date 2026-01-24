# CXS Quick Start (AI Agents)

**Context eXchange System** - Token-efficient infrastructure for managing context, contracts, and audit trails.

## Core Workflow (5 Steps)

1. **Check current cycle**: Read `cycles/current`
2. **Select contract**: Choose from `contracts/[process|analyze|document].contract`
3. **Create context pack**: Create folder in `packs/` (e.g., `pack-YYYYMMDD-HHMMSS`)
4. **Execute work**: Follow contract → place outputs in `outbox/`
5. **Log execution**: Append to `ledger/runs.csv`

## Essential Rules

- **Domain Neutral**: Use generic, cross-domain language
- **Follow Contracts**: Adhere to contract specifications
- **Bundle Context**: Include all inputs/configs in pack for reproducibility
- **Just-In-Time Reading**: Read templates from `prompts/` only when needed
- **Maintain Audit Trail**: Log all activities, update `ledger/CHANGELOG_TIMELINE.md` for significant events

## Directory Map

```
cxs/
├── contracts/      # Interface specs (read when selecting contract)
├── prompts/        # Templates (read just-in-time)
├── project/        # Project configs (read if needed)
├── packs/          # Context bundles (create per cycle)
├── cycles/current  # Active cycle ID
├── ledger/         # Audit logs
├── outbox/         # Outputs
└── archive/        # Historical data
```

## Log Format (ledger/runs.csv)

```csv
timestamp,session_id,cycle_id,contract_ref,agent_id,tokens_or_runtime,status,notes
2025-10-04T14:30:00Z,session-001,sample-cycle,process.contract,ai-agent,5min,completed,Task description
```

## Available Contracts

- **process.contract** - Generic workflow execution
- **analyze.contract** - Analysis and insights
- **document.contract** - Documentation generation

## Available Prompts (Read Just-In-Time)

- `discover.md` - Systematic exploration
- `schema_extract.md` - Data schema docs
- `policy_apply.md` - Compliance framework
- `cost_discipline.md` - Resource optimization
- `handoff_note.md` - Knowledge transfer
- `handoff_status.md` - Context awareness check
- `postmortem.md` - Retrospective analysis
- `verification_checklist.md` - Quality validation

## Token Efficiency Note

⚡ **This quickstart is designed for minimal token consumption (~400 tokens).**

- Read contracts/prompts only when needed (just-in-time)
- For comprehensive details: `agents.md` (~2000 tokens)
- For examples: `packs/_sample_cycle/meta.yaml`

## Quick Example

### Linux/macOS (Bash)
```bash
# 1. Check cycle
CYCLE=$(cat cycles/current)

# 2. Create pack
PACK="packs/pack-$(date +%Y%m%d-%H%M%S)"
mkdir -p $PACK

# 3. Copy relevant contract
cp contracts/process.contract $PACK/

# 4. Do work (outputs to outbox/)
# [your work here]

# 5. Log
echo "$(date -Iseconds),run-001,$CYCLE,process.contract,ai-agent,10min,completed,Task completed" >> ledger/runs.csv
```

### Windows (PowerShell)
```powershell
# 1. Check cycle
$CYCLE = Get-Content cycles/current

# 2. Create pack
$PACK = "packs/pack-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
New-Item -ItemType Directory -Path $PACK -Force

# 3. Copy relevant contract
Copy-Item contracts/process.contract $PACK/

# 4. Do work (outputs to outbox/)
# [your work here]

# 5. Log
"$(Get-Date -Format 'o'),run-001,$CYCLE,process.contract,ai-agent,10min,completed,Task completed" | Add-Content ledger/runs.csv
```

**Ready to work? Check `cycles/current` and begin!**
