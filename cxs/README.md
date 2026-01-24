# Context eXchange System (CXS)

A lightweight, stack-agnostic framework for managing context between humans, AI agents, and tools.

## ⚡ Quick Start for AI Agents

**Token-efficient onboarding**: Read `QUICKSTART.md` (~400 tokens) to get operational immediately.

For comprehensive reference details, read `agents.md` (~1000 tokens).

## Overview

The Context eXchange System (CXS) provides a standardized structure for:
- **Contracts**: Define interfaces, rules, and expectations for interactions
- **Packs**: Bundle context, data, and dependencies for reproducible runs
- **Sessions**: Track execution cycles and maintain state across runs
- **Ledgers**: Record all activities for audit trails and reproducibility

**Design Philosophy**: CXS optimizes for token efficiency in AI agent workflows through just-in-time documentation loading.

## Directory Structure

```
cxs/
├── QUICKSTART.md  # ⚡ Token-efficient quick start (~400 tokens)
├── agents.md      # AI agent reference guide (~1000 tokens)
├── README.md      # This file - user documentation
├── contracts/     # Contract definitions and interfaces
├── packs/         # Context packs bundled for execution
├── outbox/        # Output artifacts and results
├── ledger/        # Audit logs and run history
│   ├── runs.csv               # CSV log of all runs
│   └── CHANGELOG_TIMELINE.md  # Append-only event log
├── project/       # Project-specific configurations
├── prompts/       # Prompt templates and instructions
├── cycles/        # Cycle management
│   └── current    # Current active cycle ID
└── archive/       # Historical data and retired artifacts
```

## Usage

### Starting a New Cycle

Cycles represent discrete work sessions or iterations. To start a new cycle:

```bash
# Update the current cycle ID
echo "cycle-002" > cxs/cycles/current
```

### Defining Contracts

Contracts specify the interface and expectations for a task or interaction. Create contract files in `cxs/contracts/`:

```yaml
# Example: cxs/contracts/data-processing.yml
name: data-processing
version: 1.0.0
inputs:
  - data_source: path/to/input
  - format: json
outputs:
  - processed_data: path/to/output
  - report: path/to/report.md
```

### Creating Context Packs

Context packs bundle all necessary context for reproducible execution:

1. Create a pack directory: `cxs/packs/pack-YYYYMMDD-HHMMSS/`
2. Include:
   - Contract reference
   - Input data or references
   - Configuration files
   - Dependencies manifest

### Recording Runs

All runs should be logged to `cxs/ledger/runs.csv`:

```csv
timestamp,session_id,cycle_id,contract_ref,agent_id,tokens_or_runtime,status,notes
2025-01-15T10:30:00Z,run-001,cycle-001,process.contract,ai-agent,15min,completed,Initial data processing
```

### Logging Events

Append significant events to `cxs/ledger/CHANGELOG_TIMELINE.md`:

```markdown
## Feature: New Data Pipeline

**Date:** 2025-01-15  
**Event:** Implemented new data processing pipeline  
**Details:** Added ETL contract and initial processing workflow.
```

## Principles

1. **Token Efficient**: Optimized for minimal AI agent onboarding cost
2. **Stack Agnostic**: Works with any programming language or tool
3. **Reproducible**: All runs can be recreated from context packs
4. **Auditable**: Complete history in ledgers
5. **Collaborative**: Clear contracts enable team coordination
6. **Explainable**: Documentation and logs explain all decisions

## Best Practices

- **Version contracts**: Use semantic versioning for contract definitions
- **Atomic packs**: Each pack should be self-contained
- **Descriptive logs**: Include meaningful descriptions in run logs
- **Regular archival**: Move old cycles to archive/ periodically
- **Clear prompts**: Write explicit, unambiguous prompt templates

## Getting Started

### For AI Agents (Token-Optimized)
1. **Start here**: Read `QUICKSTART.md` (~400 tokens)
2. Check current cycle: Read `cycles/current`
3. Pick contract from `contracts/` (read just-in-time)
4. Use prompt templates from `prompts/` (read just-in-time)
5. Create context pack, execute, log to `ledger/runs.csv`

### For Humans
1. Review sample contracts in `contracts/`
2. Review sample prompts in `prompts/`
3. Create your first context pack in `packs/`
4. Execute and log your run to `ledger/runs.csv`
5. Review outputs in `outbox/`
6. Archive completed cycles when done

## License

MIT License - See LICENSE file for details
