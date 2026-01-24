# Postmortem Prompt Template

**Purpose**: Conduct thorough analysis of completed projects, incidents, or significant events to extract learnings and improve future performance.

---

## Prompt Metadata

- **Name**: postmortem
- **Version**: 1.0.0
- **Category**: Learning
- **Target**: AI Agent / Project Team
- **Created**: 2025-10-04

---

## Context

You are conducting a postmortem analysis to objectively examine what happened, why it happened, and how to improve future outcomes. This is a learning-focused, blame-free analysis.

## Objective

Analyze and document:
1. What happened (timeline and facts)
2. What went well (successes and strengths)
3. What could be improved (challenges and gaps)
4. Root causes of issues
5. Actionable improvements for future

## Inputs Required

Before executing this prompt, ensure you have:
- [ ] Complete timeline of events
- [ ] Participation from key stakeholders
- [ ] Access to relevant data and documentation
- [ ] Safe, blame-free environment established
- [ ] Commitment to implement learnings

## Instructions

1. **Timeline Construction**: Build factual sequence of events
2. **Success Analysis**: Identify what worked well and why
3. **Challenge Identification**: Document issues and obstacles
4. **Root Cause Analysis**: Dig deeper into underlying causes
5. **Learning Extraction**: Derive actionable insights
6. **Action Planning**: Define specific improvement actions

## Output Format

Provide comprehensive postmortem report:

```markdown
# Postmortem Report: [Project/Event Name]

**Date**: [Postmortem date]  
**Participants**: [Names and roles]  
**Facilitator**: [Name]  
**Event Period**: [Start date] to [End date]

## Executive Summary
[Brief overview of the event/project and key learnings]

## Event Timeline
| Date/Time | Event | Impact | Notes |
|-----------|-------|--------|-------|
| [DateTime] | [What happened] | [Effect] | [Context] |
| [DateTime] | [What happened] | [Effect] | [Context] |

## What Went Well ✅
- **[Success Area 1]**: [Description and why it worked]
- **[Success Area 2]**: [Description and why it worked]
- **[Success Area 3]**: [Description and why it worked]

## Challenges & Issues ⚠️
- **[Challenge 1]**: [Description and impact]
- **[Challenge 2]**: [Description and impact]
- **[Challenge 3]**: [Description and impact]

## Root Cause Analysis
### Issue: [Primary Issue]
- **Immediate Cause**: [Direct trigger]
- **Contributing Factors**: [Underlying conditions]
- **Root Cause**: [Fundamental reason]

### Issue: [Secondary Issue]
- **Immediate Cause**: [Direct trigger]
- **Contributing Factors**: [Underlying conditions]
- **Root Cause**: [Fundamental reason]

## Key Learnings
1. **[Learning 1]**: [Insight and application]
2. **[Learning 2]**: [Insight and application]
3. **[Learning 3]**: [Insight and application]

## Action Items
### Immediate Actions (0-30 days)
- [ ] [Action 1] - [Owner] - [Due date]
- [ ] [Action 2] - [Owner] - [Due date]

### Short-term Improvements (1-6 months)
- [ ] [Action 1] - [Owner] - [Due date]
- [ ] [Action 2] - [Owner] - [Due date]

### Long-term Changes (6+ months)
- [ ] [Action 1] - [Owner] - [Target date]
- [ ] [Action 2] - [Owner] - [Target date]

## Metrics & Measurements
**Success Metrics to Track**:
- [Metric 1]: [Current baseline] → [Target improvement]
- [Metric 2]: [Current baseline] → [Target improvement]

## Prevention Strategies
- **Process Changes**: [Specific process improvements]
- **Tool Improvements**: [Technology or tool changes]
- **Training Needs**: [Knowledge or skill gaps to address]
- **Communication**: [Information flow improvements]

## Follow-up Plan
- **Review Date**: [When to check progress on action items]
- **Success Measurement**: [How to evaluate improvement]
- **Documentation Update**: [What processes/docs need updating]
```

## Postmortem Types

Adapt approach based on context:
- **Project Postmortem**: Completed project analysis
- **Incident Postmortem**: System failure or security incident
- **Release Postmortem**: Software deployment analysis
- **Process Postmortem**: Workflow or procedure evaluation
- **Team Postmortem**: Collaboration and team dynamics

## Success Criteria

- Comprehensive timeline documented
- Both successes and failures analyzed
- Root causes identified, not just symptoms
- Actionable improvements defined
- Commitment to implement changes secured
- Learning shared with broader organization

## Notes

- Maintain blame-free, learning-focused atmosphere
- Focus on systems and processes, not individual blame
- Be specific with action items and ownership
- Share learnings beyond immediate team
- Track implementation of improvements
- Consider creating process changes to prevent recurrence