# Component Development Guide

This guide explains how to add new components to the project following our established patterns.

## Component Folder Structure

Each component lives in its own folder under `src/components/` with four required files:

```
ComponentName/
├── ComponentName.tsx          # React component implementation
├── ComponentName.stories.tsx  # Storybook stories
├── ComponentName.docs.mdx     # MDX documentation
└── _variables.scss            # Component-specific SCSS variables
```

## File Templates

### 1. Component Implementation (`ComponentName.tsx`)

```tsx
import React from 'react';

export interface ComponentNameProps {
  /** Prop description */
  propName?: string;
  /** Children content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  propName = 'default',
  children,
  className = '',
}) => {
  return (
    <div className={`component-class ${className}`.trim()}>
      {children}
    </div>
  );
};

export default ComponentName;
```

### 2. Storybook Stories (`ComponentName.stories.tsx`)

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from './ComponentName';
import type { ComponentNameProps } from './ComponentName';

const meta: Meta<ComponentNameProps> = {
  title: 'Bootstrap/ComponentName',  // or 'Custom/ComponentName'
  component: ComponentName,
  argTypes: {
    propName: {
      control: 'text',
      description: 'Prop description',
    },
  },
};

export default meta;
type Story = StoryObj<ComponentNameProps>;

export const Default: Story = {
  args: {
    propName: 'example',
    children: 'Example content',
  },
};

export const Variant: Story = {
  args: {
    propName: 'variant',
    children: 'Variant content',
  },
};
```

### 3. MDX Documentation (`ComponentName.docs.mdx`)

```mdx
import { Meta, Canvas, Controls } from '@storybook/blocks';
import * as ComponentNameStories from './ComponentName.stories';

<Meta of={ComponentNameStories} />

# Component Name

Brief one-line description of the component.

## Overview

Detailed explanation of what the component does, when to use it, and any important notes.

## Examples

### Default

<Canvas of={ComponentNameStories.Default} />

### Variant Example

<Canvas of={ComponentNameStories.Variant} />

## Props

<Controls of={ComponentNameStories.Default} />
```

### 4. SCSS Variables (`_variables.scss`)

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
@import '../components/Accordion/variables';
@import '../components/Alert/variables';
@import '../components/ComponentName/variables';  // Add your new component
```

## Best Practices

### Component Implementation

1. **Use TypeScript interfaces** - Define clear prop types with JSDoc comments
2. **Export both named and default** - `export const Component` and `export default Component`
3. **Provide sensible defaults** - Use default parameters for optional props
4. **Support className prop** - Allow custom CSS classes for flexibility
5. **Document all props** - Add JSDoc comments for Storybook's Controls panel

### Storybook Stories

1. **Remove autodocs tag** - We use custom MDX documentation
2. **Create multiple stories** - Show different variants and use cases
3. **Use descriptive names** - Story names should clearly indicate what they demonstrate
4. **Add argTypes** - Provide controls and descriptions for all props
5. **Use actions** - Log events with `action: 'eventName'` for callbacks

### MDX Documentation

1. **Import from .stories.tsx** - Use `import * as Stories from './Component.stories'`
2. **Use Meta of={Stories}** - This merges the stories with the docs
3. **Include overview** - Explain what the component does and when to use it
4. **Show examples** - Use `<Canvas>` to display live, interactive examples
5. **Add Props table** - Use `<Controls>` to auto-generate props documentation

### SCSS Variables

1. **Use CSS custom properties** - Reference `--token-name` from `_tokens.scss`
2. **Provide !default flag** - Allow variables to be overridden
3. **Follow naming convention** - Use `$component-property` pattern
4. **Group logically** - Colors, spacing, borders, typography, etc.
5. **Document purpose** - Add comments explaining what each variable controls

## Component Categories

Organize components into logical categories in Storybook:

- **Bootstrap/** - Components that wrap or extend Bootstrap components
- **Custom/** - Completely custom components built from scratch
- **Layout/** - Layout-related components (Grid, Container, etc.)
- **Forms/** - Form inputs and related components

## Testing Checklist

Before committing a new component:

- [ ] Component renders without errors
- [ ] All stories display correctly in Storybook
- [ ] MDX documentation shows properly with live examples
- [ ] Props table is accurate and complete
- [ ] SCSS variables are imported in `bootstrap-custom.scss`
- [ ] Theme switching works (light/dark mode)
- [ ] TypeScript types are correct
- [ ] Component is accessible (check with Storybook's a11y addon)
- [ ] README is updated if necessary

## Example: Adding a Badge Component

Here's a complete example of adding a new Badge component:

1. Create `src/components/Badge/Badge.tsx`
2. Create `src/components/Badge/Badge.stories.tsx`
3. Create `src/components/Badge/Badge.docs.mdx`
4. Create `src/components/Badge/_variables.scss`
5. Import in `src/styles/bootstrap-custom.scss`:
   ```scss
   @import '../components/Badge/variables';
   ```
6. Run Storybook and verify it appears under "Bootstrap/Badge"
7. Test all variants and theme switching

## Resources

- [Storybook MDX Documentation](https://storybook.js.org/docs/writing-docs/mdx)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Project Theming Guide](../THEMING.md)
