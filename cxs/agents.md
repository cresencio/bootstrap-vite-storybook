# CXS AI Agent Reference

**Context eXchange System** - Stack-agnostic infrastructure for managing context, contracts, and audit trails.

---

## 🎯 Token Efficiency First

**⚡ IMPORTANT: CXS is designed to minimize token consumption during onboarding.**

### Quick Onboarding Path (< 500 tokens)
1. **Start here**: Read `QUICKSTART.md` (~400 tokens)
2. **Just-in-time reading**: Load contracts/prompts only when needed
3. **Full reference**: Read this file only if you need comprehensive details

### Token Budget Strategy
- Use `QUICKSTART.md` for immediate work
- Read specific contracts from `contracts/` only when selecting one
- Load prompt templates from `prompts/` only when applying them
- Reference `project/` configs on-demand, not upfront
- Avoid reading all files during orientation

---

## What is CXS?

CXS provides neutral infrastructure that any project can adopt for:
- **📋 Contracts**: Standardized interfaces and expectations
- **📦 Packs**: Bundled context for reproducible execution
- **🔄 Cycles**: Tracked execution sessions with audit trails
- **📊 Ledgers**: Historical logs for accountability

**Key Principle**: CXS is infrastructure, not application. Maintain domain neutrality and cross-stack compatibility.

---

## Directory Reference

| Directory | Purpose | When to Read |
|-----------|---------|--------------|
| `contracts/` | Interface definitions (process, analyze, document) | When selecting contract |
| `prompts/` | Standardized templates (discover, handoff, etc.) | When needing template |
| `project/` | Project-specific configs (manifest, policies, etc.) | If working on project tasks |
| `packs/` | Context bundles for execution cycles | When creating/reviewing pack |
| `cycles/` | Current cycle ID (`cycles/current`) | Always check first |
| `ledger/` | Audit logs (`runs.csv`, `CHANGELOG_TIMELINE.md`) | When logging/reviewing |
| `outbox/` | Output artifacts | When placing outputs |
| `archive/` | Historical data | When archiving |

---

## Core Workflow

1. **Check cycle**: Read `cycles/current`
2. **Select contract**: Choose from `contracts/`
3. **Create pack**: `packs/pack-YYYYMMDD-HHMMSS/`
4. **Execute**: Follow contract → outputs to `outbox/`
5. **Log**: Append to `ledger/runs.csv`

---

## Contracts Reference

**Available**: `process.contract`, `analyze.contract`, `document.contract`

Each contract specifies:
- Required inputs
- Expected outputs
- Validation gates
- Success criteria
- Error handling

**Pattern**: Copy relevant contract to your pack, follow its specifications.

---

## Prompts Reference

**Available templates** (read just-in-time):
- `discover.md` - Systematic exploration and mapping
- `schema_extract.md` - Data structure documentation
- `policy_apply.md` - Compliance and governance
- `cost_discipline.md` - Resource optimization
- `handoff_note.md` - Knowledge transfer
- `handoff_status.md` - Context awareness check
- `postmortem.md` - Retrospective analysis
- `verification_checklist.md` - Quality validation

**Pattern**: Copy relevant prompt to your pack when needed.

---

## Context Packs

**Structure**: `packs/pack-YYYYMMDD-HHMMSS/`

**Must include**:
- `meta.yaml` - Pack metadata (see `_sample_cycle/meta.yaml` for structure)
- Contract reference
- Input data or references
- Configuration files

**Purpose**: Complete reproducibility - anyone should be able to recreate your work from the pack.

---

## Audit Trail Requirements

### ledger/runs.csv
```csv
timestamp,session_id,cycle_id,contract_ref,agent_id,tokens_or_runtime,status,notes
```

**Always log**: Every execution session

### ledger/CHANGELOG_TIMELINE.md
**Log when**: Significant events, milestones, changes

**Format**:
```markdown
## Event Title
**Date:** YYYY-MM-DD
**Event:** Brief description
**Details:** Additional context
```

---

## Key Principles

### Domain Neutrality
- Use generic, cross-industry language
- Avoid domain-specific terms
- Keep templates broadly applicable

### Reproducibility
- Bundle complete context in packs
- Document all inputs and configurations
- Maintain clear provenance

### Auditability
- Log every activity
- Document decisions and rationale
- Enable future review

---

## Project Integration

**When working on project-specific tasks**, reference:
- `project/manifest.yaml` - Project metadata and constraints
- `project/policies.yaml` - Project standards
- `project/data_contracts.yaml` - Data interfaces
- `project/stack_profile.yaml` - Technology context
- `project/structure_map.yaml` - Organization map
- `project/functional_requirements.yaml` - Requirements

**Pattern**: Read only what's needed for your current task.

---

## Quality Checklist

Before completing work, verify:
- [ ] Contract requirements satisfied
- [ ] Outputs in `outbox/` with clear naming
- [ ] Execution logged in `ledger/runs.csv`
- [ ] Context pack updated with results
- [ ] Significant changes in `ledger/CHANGELOG_TIMELINE.md`
- [ ] Domain neutrality maintained
- [ ] Documentation complete

---

## Examples & Templates

- **Contract template**: `contracts/sample-contract.md`
- **Prompt template**: `prompts/sample-prompt.md`
- **Pack structure**: `packs/_sample_cycle/meta.yaml`
- **Quick workflow**: `QUICKSTART.md`

---

## Remember

✅ **DO**:
- Work within the system
- Maintain neutrality and reusability
- Focus on your task, respect CXS patterns
- Document for future agents/humans
- Read files just-in-time to conserve tokens

❌ **DON'T**:
- Modify CXS infrastructure itself
- Use domain-specific language in CXS files
- Read all templates upfront (token waste)
- Skip logging and audit trails
