# Policy Apply Prompt Template

**Purpose**: Apply organizational policies, standards, and governance rules to projects or deliverables.

---

## Prompt Metadata

- **Name**: policy_apply
- **Version**: 1.0.0
- **Category**: Governance
- **Target**: AI Agent / Compliance Officer
- **Created**: 2025-10-04

---

## Context

You are applying organizational policies, coding standards, security requirements, or other governance rules to ensure compliance and consistency across projects.

## Objective

Ensure compliance with:
1. Organizational policies and standards
2. Security and privacy requirements
3. Quality assurance criteria
4. Documentation standards
5. Regulatory compliance needs

## Inputs Required

Before executing this prompt, ensure you have:
- [ ] Target artifacts to evaluate (code, documents, designs)
- [ ] Applicable policies and standards documents
- [ ] Policy evaluation criteria and checklists
- [ ] Authority to make compliance recommendations

## Instructions

1. **Policy Review**: Identify all applicable policies and standards
2. **Artifact Analysis**: Examine target artifacts against policy requirements
3. **Compliance Check**: Systematically evaluate each policy requirement
4. **Gap Identification**: Document any non-compliance issues
5. **Recommendation Generation**: Provide specific remediation steps
6. **Risk Assessment**: Evaluate compliance risks and priorities

## Output Format

Provide policy compliance report:

```markdown
# Policy Compliance Report: [Project/Artifact Name]

## Executive Summary
[Overall compliance status and key findings]

## Policies Evaluated
- [Policy Name 1]: [Version] - [Compliance Status]
- [Policy Name 2]: [Version] - [Compliance Status]

## Compliance Status
✅ **Compliant Areas**
- [Area 1]: [Brief description]
- [Area 2]: [Brief description]

⚠️ **Partial Compliance**
- [Issue 1]: [Description and recommended action]
- [Issue 2]: [Description and recommended action]

❌ **Non-Compliance Issues**
- [Critical Issue 1]: [Description, impact, and required action]
- [Critical Issue 2]: [Description, impact, and required action]

## Risk Assessment
- **High Risk**: [Critical compliance gaps]
- **Medium Risk**: [Important but not critical issues]
- **Low Risk**: [Minor improvements needed]

## Recommendations
1. [Immediate action required]
2. [Short-term improvement]
3. [Long-term enhancement]

## Sign-off Requirements
- [ ] Legal review (if applicable)
- [ ] Security approval (if applicable)
- [ ] Architecture review (if applicable)
```

## Policy Categories

Common policy areas to evaluate:
- **Security**: Data protection, access controls, encryption
- **Privacy**: Personal data handling, consent management
- **Quality**: Code standards, testing requirements, documentation
- **Architecture**: Design patterns, technology choices, scalability
- **Operations**: Deployment, monitoring, maintenance procedures
- **Legal**: License compliance, regulatory requirements

## Success Criteria

- All applicable policies identified and evaluated
- Compliance status clearly documented
- Non-compliance issues prioritized by risk
- Specific remediation steps provided
- Sign-off requirements identified

## Notes

- Be thorough but practical in policy application
- Consider business context when assessing risk
- Provide clear, actionable recommendations
- Document any policy interpretation decisions
- Escalate critical compliance issues appropriately