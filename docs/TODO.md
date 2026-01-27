# Component Fixes Cycle — component-fixes-20260127

## Phase 1: Bug Fixes

- [ ] Fix ButtonGroup dropdown flush alignment (dropdowns not flush with edge of other buttons)

## Phase 2: Story Improvements

- [ ] Add form example to Dropdown stories (use NavbarForm pattern)
- [ ] Use Nav component in Card Navigation story (replace raw HTML)

## Phase 3: Component State Audit

- [ ] Audit components for missing hover/focus/active states
- [ ] Document any state issues found for fixing

## Phase 4: Dark Mode (after all bugs fixed)

- [ ] Add missing states for dark mode
- [ ] Review dark mode colors across all components
- [ ] Ensure electric/neon color scheme consistency
- [ ] Fix any dark mode contrast or visibility issues

---

## Completed

### This Cycle
- [x] Accordion refactored - compound components, alwaysOpen, useId, SimpleAccordion
- [x] Alert refactored - AlertHeading/AlertLink, Bootstrap JS events, SimpleAlert
- [x] Badge refactored - PositionedBadge/NotificationDot, as prop, position prop
- [x] Breadcrumb refactored - BreadcrumbItem, divider prop, SimpleBreadcrumb
- [x] Button refactored - LinkButton/IconButton/CloseButton, loading state, toggle
- [x] ButtonGroup refactored - ButtonToolbar/ToggleButtonGroup, checkbox/radio support
- [x] Card refactored - Full building blocks suite (12 components), SimpleCard
- [x] COMPONENT_GUIDE.md updated - Removed MDX, added building blocks pattern

### Previous Cycle
- [x] Create navbar component and add story to dropdown
- [x] Create form for dropdown (NavbarForm component created)
