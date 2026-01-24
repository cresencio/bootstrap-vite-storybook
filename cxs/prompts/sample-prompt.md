# Sample Prompt: Code Review Assistant

**Purpose**: This sample prompt template demonstrates how to structure clear, reproducible instructions for AI agents or human collaborators in the Context eXchange System.

---

## Prompt Metadata

- **Name**: code-review-assistant
- **Version**: 1.0.0
- **Category**: Quality Assurance
- **Target**: AI Agent / Human Reviewer
- **Created**: 2025-01-XX

---

## Context

You are assisting with code review for a project following the Context eXchange System (CXS) methodology. Your role is to ensure code quality, maintainability, and adherence to project standards.

## Objective

Review the provided code changes and provide constructive feedback focusing on:
1. Code correctness and potential bugs
2. Adherence to coding standards
3. Documentation quality
4. Test coverage
5. Performance implications
6. Security considerations

## Inputs Required

Before executing this prompt, ensure you have:
- [ ] Code diff or changed files
- [ ] Project coding standards document
- [ ] Relevant contract specifications
- [ ] Context pack with project background

## Instructions

1. **Initial Scan**: Review all changed files to understand the scope
2. **Contract Alignment**: Verify changes fulfill contract requirements
3. **Code Analysis**: Check for:
   - Logic errors or edge cases
   - Code smells or anti-patterns
   - Naming consistency
   - Error handling completeness
4. **Documentation Review**: Ensure:
   - Functions/classes have clear docstrings
   - Complex logic is commented
   - README updated if needed
5. **Test Verification**: Confirm:
   - New code has corresponding tests
   - Test coverage meets project minimum (e.g., 80%)
   - Edge cases are tested
6. **Security Check**: Look for:
   - Input validation issues
   - Sensitive data exposure
   - Authentication/authorization gaps
7. **Generate Report**: Provide structured feedback

## Output Format

Provide your review in the following structure:

```markdown
# Code Review Report

## Summary
[Brief overview of changes and overall assessment]

## Critical Issues
- [Issue 1: Description, Location, Severity]
- [Issue 2: Description, Location, Severity]

## Suggestions
- [Suggestion 1: Improvement opportunity]
- [Suggestion 2: Enhancement idea]

## Positive Highlights
- [Highlight 1: Well-implemented aspect]
- [Highlight 2: Good practice example]

## Contract Alignment
✅ Meets contract requirements
❌ Deviations from contract: [List]

## Recommendation
[ ] Approve - Ready to merge
[ ] Approve with minor changes
[ ] Request changes - Must address critical issues
[ ] Reject - Fundamental rework needed
```

## Example Usage

```bash
# Step 1: Create context pack with code changes
cp -r src/ cxs/packs/pack-20250115-review/

# Step 2: Reference this prompt in your review request
echo "prompts/sample-prompt.md" > cxs/packs/pack-20250115-review/prompt.ref

# Step 3: Execute review (human or AI agent)
# ... perform review following this prompt ...

# Step 4: Save results to outbox
cp review-report.md cxs/outbox/review-20250115.md

# Step 5: Log the run
echo "cycle-001,review-001,2025-01-15T14:30:00Z,completed,Code review for feature X,pack-20250115-review,review-20250115" >> cxs/ledger/runs.csv
```

## Constraints

- Review should be completed within 30 minutes for standard changes
- Focus on blocking issues first, then suggestions
- Be specific with file names and line numbers
- Provide code examples for suggested improvements where helpful

## Success Criteria

- All critical issues identified
- Clear, actionable feedback provided
- Review report follows output format
- Recommendation clearly stated

## Notes

- This is a template prompt for demonstration purposes
- Customize sections based on your project's specific needs
- Add project-specific checklists or criteria as needed
- Maintain consistency across reviews by using standardized prompts
- Version prompts when updating review criteria or standards
