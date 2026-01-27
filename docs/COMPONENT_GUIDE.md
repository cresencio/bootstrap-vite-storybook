# Component Development Guide

This guide explains how to add new components to the project following our established patterns.

## Component Folder Structure

Each component lives in its own folder under `src/bootstrap/` with three required files:

```
ComponentName/
├── ComponentName.tsx          # React component implementation
├── ComponentName.stories.tsx  # Storybook stories with autodocs
└── _variables.scss            # Component-specific SCSS variables
```

## Building Blocks Pattern

We use a **compound component pattern** for flexibility. Each component typically includes:

1. **Main Component** - The primary container (e.g., `Card`, `Alert`, `Accordion`)
2. **Building Blocks** - Sub-components for composition (e.g., `CardHeader`, `CardBody`, `CardTitle`)
3. **Simple Wrapper** - Convenience component for common patterns (e.g., `SimpleCard`, `SimpleAlert`)

```tsx
// Building blocks pattern example
<Card>
  <CardHeader>Featured</CardHeader>
  <CardBody>
    <CardTitle>Title</CardTitle>
    <CardText>Content here</CardText>
  </CardBody>
  <CardFooter>Footer</CardFooter>
</Card>

// Simple wrapper for common patterns
<SimpleCard title="Title" text="Content" header="Featured" footer="Footer" />
```

## File Templates

### 1. Component Implementation (`ComponentName.tsx`)

```tsx
import React from 'react';

// ============================================================================
// Types
// ============================================================================

export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

// ============================================================================
// Main Component
// ============================================================================

export interface ComponentNameProps {
  /** Component content */
  children: React.ReactNode;
  /** Visual variant */
  variant?: ComponentVariant;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ComponentName description.
 *
 * @example
 * ```tsx
 * <ComponentName variant="primary">
 *   <ComponentNameItem>Content</ComponentNameItem>
 * </ComponentName>
 * ```
 */
export function ComponentName({
  children,
  variant = 'primary',
  className = '',
}: ComponentNameProps) {
  const classes = [
    'component-class',
    `component-${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

// ============================================================================
// Building Block: ComponentNameItem
// ============================================================================

export interface ComponentNameItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Individual item within ComponentName.
 */
export function ComponentNameItem({
  children,
  className = '',
}: ComponentNameItemProps) {
  return (
    <div className={`component-item ${className}`.trim()}>
      {children}
    </div>
  );
}

// ============================================================================
// SimpleComponentName (Convenience Wrapper)
// ============================================================================

export interface SimpleComponentNameProps {
  /** Title text */
  title?: string;
  /** Body content */
  children?: React.ReactNode;
  /** Visual variant */
  variant?: ComponentVariant;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Convenience wrapper for common ComponentName patterns.
 *
 * For full control, use the building block components.
 */
export function SimpleComponentName({
  title,
  children,
  variant = 'primary',
  className = '',
}: SimpleComponentNameProps) {
  return (
    <ComponentName variant={variant} className={className}>
      {title && <ComponentNameItem>{title}</ComponentNameItem>}
      {children}
    </ComponentName>
  );
}

export default ComponentName;
```

### 2. Storybook Stories (`ComponentName.stories.tsx`)

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import {
  ComponentName,
  ComponentNameItem,
  SimpleComponentName,
} from './ComponentName';
import type { ComponentNameProps } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Bootstrap/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],  // Required for automatic documentation
  parameters: {
    docs: {
      description: {
        component: `
Description of the component and its purpose.

## Building Block Components

- **ComponentName** - Main container
- **ComponentNameItem** - Individual item
- **SimpleComponentName** - Convenience wrapper
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Visual variant',
      table: {
        type: { summary: 'ComponentVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      control: false,
      description: 'Component content',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ComponentNameProps>;

// ============================================================================
// Basic Examples
// ============================================================================

/**
 * Default component example.
 */
export const Default: Story = {
  render: () => (
    <ComponentName>
      <ComponentNameItem>Item 1</ComponentNameItem>
      <ComponentNameItem>Item 2</ComponentNameItem>
    </ComponentName>
  ),
};

/**
 * All available variants.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2">
      {(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as const).map((variant) => (
        <ComponentName key={variant} variant={variant}>
          <ComponentNameItem>{variant} variant</ComponentNameItem>
        </ComponentName>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All eight contextual variants.',
      },
    },
  },
};

// ============================================================================
// SimpleComponentName
// ============================================================================

/**
 * SimpleComponentName convenience wrapper.
 */
export const Simple: Story = {
  render: () => (
    <SimpleComponentName title="Simple Title" variant="success">
      Additional content here
    </SimpleComponentName>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use SimpleComponentName for common patterns without building blocks.',
      },
    },
  },
};

// ============================================================================
// With Events
// ============================================================================

/**
 * Component with event callbacks.
 */
export const WithEvents: Story = {
  render: () => (
    <ComponentName onSomeEvent={action('someEvent')}>
      <ComponentNameItem>Click to trigger event</ComponentNameItem>
    </ComponentName>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates event callbacks. Check the Actions panel.',
      },
    },
  },
};
```

### 3. SCSS Variables (`_variables.scss`)

```scss
// ComponentName Variables
// Override Bootstrap or define custom variables for this component

// Example: Custom colors
$component-bg: var(--color-surface) !default;
$component-text: var(--color-body-text) !default;
$component-border: var(--color-border) !default;

// Example: Custom spacing
$component-padding: var(--spacing-md) !default;
$component-margin: var(--spacing-sm) !default;

// Example: Custom borders
$component-border-width: var(--border-width) !default;
$component-border-radius: var(--border-radius) !default;
```

## Registering Component Variables

After creating `_variables.scss`, import it in `src/styles/bootstrap-custom.scss`:

```scss
// Component-level customizations
@import '../bootstrap/Accordion/variables';
@import '../bootstrap/Alert/variables';
@import '../bootstrap/ComponentName/variables';  // Add your new component
```

## Best Practices

### Component Implementation

1. **Use function components** - `export function Component()` not `const Component: React.FC`
2. **Group by section** - Use comment headers to organize: Types, Main, Building Blocks, Simple
3. **Export everything** - Named exports for all components and types
4. **Support className prop** - Allow custom CSS classes on every component
5. **Document with JSDoc** - Add `@example` blocks showing usage
6. **Use `as` prop** - For polymorphic elements (headings, buttons, etc.)

### Storybook Stories

1. **Include `tags: ['autodocs']`** - Required for automatic documentation
2. **Add `parameters.docs.description.component`** - Describe all building blocks
3. **Use section comments** - Organize stories into logical groups
4. **Import from `storybook/actions`** - Not `@storybook/addon-actions`
5. **Show all variants** - Create an "AllVariants" story mapping over options
6. **Demonstrate building blocks** - Show both composition and simple patterns

### Props Documentation (argTypes)

```tsx
argTypes: {
  propName: {
    control: 'select',           // or 'text', 'boolean', 'number', false
    options: ['a', 'b', 'c'],    // for select controls
    description: 'What this prop does',
    table: {
      type: { summary: 'TypeName' },
      defaultValue: { summary: 'defaultValue' },
    },
  },
}
```

### SCSS Variables

1. **Use CSS custom properties** - Reference `--token-name` from `_tokens.scss`
2. **Provide !default flag** - Allow variables to be overridden
3. **Follow naming convention** - Use `$component-property` pattern
4. **Group logically** - Colors, spacing, borders, typography, etc.

## Component Categories

Components are organized under `src/bootstrap/`:

- **Bootstrap/** - Components wrapping or extending Bootstrap (Accordion, Alert, Button, Card, etc.)

## Testing Checklist

Before committing a new component:

- [ ] Component renders without errors
- [ ] All stories display correctly in Storybook
- [ ] `tags: ['autodocs']` is included in meta
- [ ] All building blocks are exported and documented
- [ ] Props have proper argTypes with descriptions
- [ ] SCSS variables are imported in `bootstrap-custom.scss`
- [ ] Theme switching works (light/dark mode)
- [ ] TypeScript has no errors
- [ ] className prop works on all components

## Example Components

Reference these completed components for patterns:

| Component | Pattern Highlights |
|-----------|-------------------|
| **Accordion** | Compound components, `useId` hook, `alwaysOpen` prop |
| **Alert** | Bootstrap JS events, `AlertHeading`/`AlertLink` blocks |
| **Badge** | `PositionedBadge`, `as` prop for polymorphism |
| **Button** | `IconButton`/`LinkButton`/`CloseButton`, loading state |
| **ButtonGroup** | `ToggleButtonGroup` with checkbox/radio, controlled mode |
| **Card** | Full building blocks suite, `SimpleCard` wrapper |

## Resources

- [Storybook Autodocs](https://storybook.js.org/docs/writing-docs/autodocs)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Project Theming Guide](./THEMING.md)
