# Design System Architecture

This project uses a three-tier theming system with runtime theme switching for maximum flexibility and maintainability.

## Architecture Overview

```
┌─────────────────────────────────────────────────┐
│  _tokens.scss (Design System Source of Truth)  │
│  - SCSS Variables (build-time)                 │
│  - CSS Custom Properties (runtime theming)     │
│  - Colors, Typography, Spacing, Breakpoints    │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  bootstrap-custom.scss (Bootstrap Mapping)      │
│  - Maps tokens → Bootstrap variables           │
│  - Imports component variables                  │
└─────────────────┬───────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────┐
│  components/*/\_variables.scss (Overrides)      │
│  - Component-specific customizations            │
│  - Uses tokens or Bootstrap vars                │
└─────────────────────────────────────────────────┘
```

## File Structure

```
src/
├── styles/
│   ├── _tokens.scss              ← Design tokens (colors, spacing, etc.)
│   └── bootstrap-custom.scss     ← Bootstrap configuration
└── components/
    ├── Accordion/
    │   └── _variables.scss       ← Accordion-specific overrides
    └── Alert/
        └── _variables.scss       ← Alert-specific overrides
```

## How to Customize

### 1. Global Design Changes (Tokens)

Edit `src/styles/_tokens.scss` to change your design system fundamentals:

```scss
// Change your brand colors
$token-color-brand-primary: #ff6b6b;

// Adjust spacing scale
$token-spacing-4: 1.25rem;

// Modify breakpoints
$token-breakpoint-lg: 1024px;
```

**Use tokens for:**
- Brand colors
- Typography scale
- Spacing system
- Breakpoints
- Shadows, borders, transitions

### 2. Bootstrap Variable Mapping

Edit `src/styles/bootstrap-custom.scss` to map tokens to Bootstrap:

```scss
// Map your token to Bootstrap's $primary
$primary: $token-color-brand-primary;

// Or use a different token
$primary: $token-color-danger;
```

### 3. Component-Specific Overrides

Edit `src/components/{ComponentName}/_variables.scss`:

```scss
// In Accordion/_variables.scss
$accordion-padding-y: $token-spacing-6;  // Use a token
$accordion-button-active-bg: #f0f0f0;   // Or a custom value
```

## Benefits

✅ **Single Source of Truth** - All design decisions in `_tokens.scss`  
✅ **Component Isolation** - Each component's variables in its own folder  
✅ **Bootstrap Integration** - Seamlessly maps to Bootstrap variables  
✅ **Runtime Theme Switching** - Toggle light/dark themes without recompiling  
✅ **Easy Theming** - Change tokens to rebrand entire application  
✅ **Type Safety** - Token naming makes purpose clear  

## Runtime Theme Switching

This project supports dynamic light/dark theme switching using CSS custom properties.

### How It Works

1. **CSS Variables** in `_tokens.scss` define theme-aware colors:
   ```scss
   :root {
     --color-body-bg: #ffffff;
     --color-body-text: #212529;
   }
   
   .dark {
     --color-body-bg: #212529;
     --color-body-text: #f8f9fa;
   }
   ```

2. **Important**: Bootstrap SCSS variables cannot use CSS `var()` at compile time. Instead:
   - Bootstrap variables use static SCSS tokens (`$body-bg: $token-color-white`)
   - Theme-specific overrides are applied with custom CSS after Bootstrap compiles
   - Runtime theming is handled by CSS custom properties in body styles

3. **Theme switching** is handled by a custom toolbar decorator compatible with Storybook 10

### Using Theme Toggle in Storybook

- Look for the "Theme" dropdown in the Storybook toolbar (top toolbar)
- Select "Light" (sun icon) or "Dark" (moon icon) to switch themes
- Theme preference is applied immediately to all stories

### Customizing Themes

Edit the CSS custom properties in `src/styles/_tokens.scss`:

```scss
:root {
  // Light theme colors
  --color-body-bg: #ffffff;
  --color-body-text: #212529;
  --color-border: #dee2e6;
}

.dark {
  // Dark theme colors
  --color-body-bg: #1a1a1a;  // Custom dark background
  --color-body-text: #e0e0e0; // Custom light text
  --color-border: #495057;
}
```

### Adding New Theme-Aware Colors

1. Add CSS variable to both `:root` and `.dark`:
   ```scss
   :root {
     --color-link: #0d6efd;
   }
   
   .dark {
     --color-link: #6ea8fe;
   }
   ```

2. Use in Bootstrap mapping:
   ```scss
   $link-color: var(--color-link);
   ```  

## Token Naming Convention

Tokens follow this pattern:
```
$token-{category}-{variant}-{state}
```

Examples:
- `$token-color-brand-primary`
- `$token-spacing-4`
- `$token-font-size-lg`
- `$token-border-radius-md`

## Customization Workflow

1. **Start with tokens** - Change `_tokens.scss` for global changes
2. **Fine-tune components** - Edit component `_variables.scss` for specific needs
3. **Bootstrap mapping** - Adjust `bootstrap-custom.scss` only if needed

## Example: Rebranding

To rebrand your entire app:

```scss
// In _tokens.scss
$token-color-brand-primary: #8b5cf6;  // Purple
$token-color-brand-secondary: #ec4899; // Pink
$token-border-radius-base: 0.5rem;    // Rounder
$token-spacing-base: 1.25rem;         // More spacious
```

All components automatically inherit these changes!

## Adding New Components

When creating a new component:

1. Create component folder: `src/components/MyComponent/`
2. Add `_variables.scss` with component-specific variables
3. Import in `bootstrap-custom.scss`:
   ```scss
   @import '../components/MyComponent/variables';
   ```

## Reference

- **Bootstrap Variables**: https://getbootstrap.com/docs/5.3/customize/sass/
- **Design Tokens**: https://spectrum.adobe.com/page/design-tokens/
