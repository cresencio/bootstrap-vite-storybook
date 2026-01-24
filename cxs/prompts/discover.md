# Discover Prompt Template

**Purpose**: Systematically explore and map the structure, components, and characteristics of a project or domain.

---

## Prompt Metadata

- **Name**: discover
- **Version**: 1.0.0
- **Category**: Exploration
- **Target**: AI Agent / Human Analyst
- **Created**: 2025-10-04

---

## Context

You are conducting discovery to understand the structure, patterns, and characteristics of a target system, codebase, or domain. This discovery will inform future analysis and documentation efforts.

## Objective

Systematically explore and document:
1. Overall structure and organization
2. Key components and their relationships
3. Patterns and conventions
4. Dependencies and interfaces
5. Configuration and setup requirements

## Inputs Required

Before executing this prompt, ensure you have:
- [ ] Target system or domain to explore
- [ ] Access to relevant documentation or code
- [ ] Discovery scope and boundaries defined
- [ ] Output format preferences specified

## Instructions

1. **High-Level Mapping**: Identify major components, modules, or areas
2. **Structure Analysis**: Document organization patterns and hierarchies
3. **Interface Discovery**: Map connections, dependencies, and data flows
4. **Convention Identification**: Note naming patterns, coding styles, or standards
5. **Configuration Review**: Identify setup requirements and key configurations
6. **Documentation Gaps**: Note areas lacking documentation or clarity

## Output Format

Provide discovery results in structured format:

```markdown
# Discovery Report: [Target Name]

## Overview
[Brief description of what was discovered]

## Structure Map
- Component A
  - Sub-component A1
  - Sub-component A2
- Component B
  - Sub-component B1

## Key Patterns
- Pattern 1: [Description]
- Pattern 2: [Description]

## Dependencies
- External: [List external dependencies]
- Internal: [List internal module dependencies]

## Configuration Points
- Config 1: [Purpose and location]
- Config 2: [Purpose and location]

## Notable Findings
- Finding 1: [Significant observation]
- Finding 2: [Important characteristic]

## Recommendations
- Next steps for deeper analysis
- Areas requiring clarification
- Suggested documentation improvements
```

## Success Criteria

- Complete structural overview captured
- Key patterns and conventions identified
- Dependencies and interfaces mapped
- Actionable recommendations provided
- Documentation gaps highlighted

## Notes

- Focus on understanding rather than judgment
- Document what exists, not what should exist
- Be systematic and thorough in exploration
- Highlight both strengths and potential concerns