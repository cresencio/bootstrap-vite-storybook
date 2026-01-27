# Component Fixes Cycle — component-fixes-20260127

## Phase 1: Bug Fixes

- [x] Fix ButtonGroup dropdown flush alignment (added `btnGroup` prop to Dropdown)

## Phase 2: Story Improvements

- [x] Add form example to Dropdown stories (already exists - Forms story at line 762)
- [x] Use Nav component in Card Navigation story (replaced raw HTML with Nav component)

## Phase 3: Component State Audit

- [x] Audit components for missing hover/focus/active states
- [x] Document any state issues found for fixing

### State Audit Findings

**Components with complete state variables:** ✅
- Accordion, Dropdown, ListGroup, Nav, Navbar, Pagination, Carousel

**Components missing state variables:** ⚠️
- [x] **Button** (HIGH) - Added hover/active shade amounts and focus box-shadow
- [x] **Breadcrumb** (MEDIUM) - Added link-color and link-hover-color
- [ ] Alert, Badge (LOW) - Generally static, but could add if needed

**Non-interactive components (no states needed):** ✅
- Card, Modal, Offcanvas, Collapse, Placeholder, Popover, Progress, Scrollspy, Spinner, Tabs, Toast, Tooltip, ButtonGroup

## Phase 4: Dark Mode (after all bugs fixed)

- [x] Add missing states for dark mode
- [x] Review dark mode colors across all components
- [x] Ensure electric/neon color scheme consistency
- [x] Fix any dark mode contrast or visibility issues

### Dark Mode Components Added
- ListGroup (all 8 variants + action states)
- Progress (bar glow effects)
- Card (surface colors)
- Pagination (active/hover glow)
- Modal/Offcanvas (surface + close button filter)
- Toast (surface + header styling)
- Nav/Tabs/Pills (active states + borders)
- Dropdown (menu + items styling)
- Spinner (variant colors)
- Tooltip/Popover (surface + arrow colors)
- Breadcrumb (item/divider colors)
- Carousel (controls + indicators)

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
