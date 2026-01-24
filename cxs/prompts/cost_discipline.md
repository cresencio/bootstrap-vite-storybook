# Cost Discipline Prompt Template

**Purpose**: Evaluate and optimize resource utilization, costs, and efficiency in projects and operations.

---

## Prompt Metadata

- **Name**: cost_discipline
- **Version**: 1.0.0
- **Category**: Operations
- **Target**: AI Agent / Financial Analyst
- **Created**: 2025-10-04

---

## Context

You are analyzing resource usage, costs, and efficiency to identify optimization opportunities and ensure responsible resource utilization.

## Objective

Assess and optimize:
1. Resource utilization patterns
2. Cost efficiency metrics
3. Performance vs cost trade-offs
4. Waste identification and elimination
5. Budget alignment and forecasting

## Inputs Required

Before executing this prompt, ensure you have:
- [ ] Resource usage data (compute, storage, bandwidth, time)
- [ ] Cost information and pricing models
- [ ] Performance metrics and requirements
- [ ] Budget constraints and targets
- [ ] Historical baseline data for comparison

## Instructions

1. **Resource Analysis**: Examine current resource utilization patterns
2. **Cost Breakdown**: Analyze costs by category and usage patterns
3. **Efficiency Metrics**: Calculate cost per unit of output or value
4. **Waste Identification**: Find underutilized or unnecessary resources
5. **Optimization Opportunities**: Identify areas for improvement
6. **Recommendation Prioritization**: Rank opportunities by impact and effort

## Output Format

Provide cost analysis and recommendations:

```markdown
# Cost Discipline Report: [Project/System Name]

## Executive Summary
[Current cost status, key findings, and potential savings]

## Current Resource Utilization
- **Compute**: [Usage patterns, peaks, averages]
- **Storage**: [Utilization rates, growth trends]
- **Network**: [Bandwidth usage, transfer costs]
- **Human Resources**: [Time allocation, efficiency metrics]

## Cost Breakdown
| Category | Current Cost | % of Budget | Trend |
|----------|-------------|-------------|-------|
| Category 1 | $X,XXX | XX% | ↑/↓/→ |
| Category 2 | $X,XXX | XX% | ↑/↓/→ |

## Efficiency Metrics
- Cost per transaction: $X.XX
- Cost per user: $X.XX
- Cost per feature delivered: $X.XX
- Resource utilization rate: XX%

## Waste Identification
❌ **High Impact Waste**
- [Waste source 1]: [Cost impact] - [Immediate action]
- [Waste source 2]: [Cost impact] - [Immediate action]

⚠️ **Medium Impact Opportunities**
- [Opportunity 1]: [Potential savings] - [Effort required]
- [Opportunity 2]: [Potential savings] - [Effort required]

## Optimization Recommendations
1. **Quick Wins** (0-30 days)
   - [Action 1]: [Expected savings] - [Implementation effort]
   - [Action 2]: [Expected savings] - [Implementation effort]

2. **Medium Term** (1-6 months)
   - [Action 1]: [Expected savings] - [Investment required]
   - [Action 2]: [Expected savings] - [Investment required]

3. **Strategic** (6+ months)
   - [Action 1]: [Expected impact] - [Investment required]
   - [Action 2]: [Expected impact] - [Investment required]

## Financial Impact Summary
- **Immediate Savings Potential**: $X,XXX/month
- **Medium-term Optimization**: $X,XXX/month
- **ROI on Optimization Investment**: XXX%
```

## Key Metrics to Track

- **Cost Efficiency**: Cost per unit of value delivered
- **Resource Utilization**: Percentage of capacity actually used
- **Waste Ratio**: Unused or inefficient resource percentage
- **Cost Trend**: Month-over-month cost changes
- **Budget Variance**: Actual vs planned spending

## Success Criteria

- Comprehensive cost and utilization analysis completed
- Waste sources identified and quantified
- Optimization opportunities prioritized by impact
- Clear implementation roadmap provided
- Expected ROI calculated for recommendations

## Notes

- Balance cost optimization with performance requirements
- Consider total cost of ownership, not just direct costs
- Factor in implementation effort and risks
- Track metrics over time to measure optimization success
- Consider both technical and operational optimization opportunities