# AI Agent Guide

This file provides guidance to AI agents working with code in this repository.

---

## 🔄 Context eXchange System (CXS)

**If you're joining mid-project or resuming after a break**, use CXS to get up to speed quickly.

### Why CXS Exists
AI agents lose context between sessions. CXS solves this by providing:
- **Cycle tracking** - Know what work session you're in
- **Audit ledger** - See what was done previously
- **Handoff notes** - Structured context for seamless transitions
- **Context packs** - Reproducible bundles of work

### Quick CXS Onboarding (Do This First!)

1. **Check current cycle**: `cat cxs/cycles/current`
2. **Review recent activity**: `cat cxs/ledger/runs.csv` (last 5 entries)
3. **Check outbox**: `ls cxs/outbox/` for recent deliverables
4. **Use handoff prompt**: Read `cxs/prompts/handoff_status.md` for structured status check

### When Completing Work

1. **Log your session**: Append to `cxs/ledger/runs.csv`
2. **Document deliverables**: Place outputs in `cxs/outbox/`
3. **Create handoff note**: Use `cxs/prompts/handoff_note.md` template
4. **Update changelog**: For significant events, append to `cxs/ledger/CHANGELOG_TIMELINE.md`

### CXS Directory Reference

| Path | Purpose |
|------|---------|
| `cxs/cycles/current` | Active cycle ID |
| `cxs/ledger/runs.csv` | Execution log |
| `cxs/outbox/` | Output artifacts |
| `cxs/prompts/` | Templates (read just-in-time) |
| `cxs/packs/` | Context bundles |

**Full CXS docs**: `cxs/QUICKSTART.md` (~400 tokens) or `cxs/agents.md` (~1000 tokens)

---

## Project Overview

This is a Bootstrap 5 + React + TypeScript component library built with Vite and documented in Storybook. It features a three-tier design system (global tokens → Bootstrap mapping → component variables) with runtime theming support for light/dark modes.

## Essential Commands

### Development
```bash
npm run dev              # Start Vite dev server
npm run storybook        # Start Storybook on port 6006 (primary development environment)
```

### Building
```bash
npm run build            # TypeScript compilation + Vite build
npm run build-storybook  # Build static Storybook
npm run preview          # Preview production build
```

### Quality
```bash
npm run lint             # Run ESLint
```

### Testing
The project uses Vitest integrated with Storybook via `@storybook/addon-vitest`. Tests are defined in story files using the `play` function and run in a Playwright browser environment.

```bash
npx vitest               # Run tests (configured in vite.config.ts)
```

## Architecture

### Three-Tier Theming System

The theming architecture uses three distinct layers that work together:

1. **Global Design Tokens** (`src/styles/_tokens.scss`)
   - Central source of truth for all design decisions
   - Defines both SCSS variables (compile-time) and CSS custom properties (runtime)
   - Contains light/dark theme definitions using CSS custom properties
   - Example: `$token-color-brand-primary`, `--color-primary`

2. **Bootstrap Variable Mapping** (`src/styles/bootstrap-custom.scss`)
   - Maps design tokens to Bootstrap's SCSS variables
   - Imports component-specific `_variables.scss` files
   - Imports Bootstrap after all customizations
   - Applies runtime theme overrides using CSS custom properties for dark mode

3. **Component Variables** (e.g., `src/components/Accordion/_variables.scss`)
   - Component-specific SCSS variable overrides
   - Imported by `bootstrap-custom.scss` before Bootstrap itself

**Key Pattern**: SCSS variables are for compile-time Bootstrap customization. CSS custom properties (defined in `_tokens.scss`) enable runtime theme switching between light/dark modes.

### Dark Mode Implementation

Dark mode uses electric/neon colors defined in `_tokens.scss`:
- Primary: `#00d4ff` (electric cyan)
- Success: `#00ff88` (neon green)
- Warning: `#ffea00` (electric yellow)
- Danger: `#ff2a6d` (hot pink)

Dark mode styling is applied via `.dark` class and `[data-theme="dark"]` attribute. Storybook toolbar allows theme switching via a decorator in `.storybook/preview.ts`.

### Component Structure

Bootstrap components follow a strict pattern under `src/bootstrap/`:

```
src/bootstrap/ComponentName/
├── ComponentName.tsx           # React component with TypeScript interfaces
├── ComponentName.stories.tsx   # Storybook stories with autodocs
└── _variables.scss             # Component-specific SCSS variables
```

Custom/extended components go in `src/components/` for grouping custom functionality.

**Component Requirements**:
- Export TypeScript interfaces for props (e.g., `AccordionProps`)
- Use JSDoc comments for prop documentation (appears in autodocs)
- Handle Bootstrap events via `useRef` and `addEventListener` (e.g., `hide.bs.collapse`)
- Bootstrap JS is imported in `.storybook/preview.ts`, enabling data-bs-* attributes

**Story Requirements**:
- Must include `tags: ['autodocs']` in meta for automatic documentation
- Use `parameters.docs.description.component` for component-level docs
- Define comprehensive `argTypes` with descriptions and table metadata
- Use `action()` for event callbacks to log in Storybook Actions panel

### Storybook Configuration

- **Main config**: `.storybook/main.ts` - Defines story patterns, addons (docs, a11y, vitest), and SCSS preprocessing options
- **Preview config**: `.storybook/preview.ts` - Imports Bootstrap styles/JS, defines global theme toolbar, applies theme decorator
- **Addons**: Uses `@storybook/addon-docs` for autodocs, `@storybook/addon-a11y` for accessibility checks, `@storybook/addon-vitest` for testing

### Build Configuration

- **Vite** (`vite.config.ts`): React with React Compiler enabled, SCSS preprocessing with deprecation warnings suppressed, Vitest integration with Storybook test addon
- **TypeScript**: Project references architecture using `tsconfig.app.json` and `tsconfig.node.json`
- **React Compiler**: Enabled via `babel-plugin-react-compiler` in Vite config (impacts dev/build performance)

## Common Development Workflows

### Adding a New Component

1. Create component directory under `src/components/`
2. Create `ComponentName.tsx` with TypeScript interfaces and JSDoc comments
3. Create `ComponentName.stories.tsx` with `tags: ['autodocs']` and comprehensive argTypes
4. Create `_variables.scss` for component-specific SCSS overrides (if needed)
5. Import `_variables.scss` in `src/styles/bootstrap-custom.scss` (before Bootstrap import)
6. If using Bootstrap JavaScript, attach event listeners via `useRef` and `addEventListener`

### Modifying Theme Colors

1. Edit global tokens in `src/styles/_tokens.scss`
2. Update CSS custom properties in `:root` (light) and `.dark` (dark mode)
3. If changing Bootstrap variables, edit mappings in `src/styles/bootstrap-custom.scss`
4. For dark mode component styling, add rules under `.dark` selector in `bootstrap-custom.scss`

### Working with Bootstrap JavaScript

Bootstrap JS is imported globally in `.storybook/preview.ts`. Components can:
- Use `data-bs-*` attributes for Bootstrap behavior (e.g., `data-bs-toggle="collapse"`)
- Listen to Bootstrap events using `addEventListener` on element refs (e.g., `hide.bs.collapse`, `shown.bs.collapse`)
- See `src/components/Accordion/Accordion.tsx` for the event listener pattern

## Important Notes

- **SCSS Deprecation Warnings**: Suppressed via `quietDeps: true` and `silenceDeprecations` in both Vite and Storybook configs
- **Storybook is Primary Dev Environment**: Use `npm run storybook` for component development, not `npm run dev`
- **Autodocs Over MDX**: This project uses Storybook's autodocs feature instead of MDX documentation files
- **Bootstrap 5.3**: Uses Bootstrap's JavaScript for component behavior (imported in preview.ts)
- **React 19**: Latest React version with React Compiler enabled
