# Bootstrap + Vite + Storybook

A fully-customizable component library using Bootstrap 5, React, TypeScript, and Vite with comprehensive Storybook documentation.

## Features

- **Vite 7.2** - Lightning-fast development with HMR
- **React 19** - Latest React with TypeScript support
- **Bootstrap 5.3** - Customizable via SCSS
- **Storybook 10** - Component documentation and development environment
- **Three-Tier Design System** - Global tokens → Bootstrap mapping → Component variables
- **Runtime Theming** - Light/dark mode switching with CSS custom properties
- **Autodocs** - Automatic documentation generation from stories and TypeScript props

## Project Structure

```
src/
├── components/
│   ├── Accordion/
│   │   ├── Accordion.tsx          # Component implementation
│   │   ├── Accordion.stories.tsx  # Storybook stories with autodocs
│   │   └── _variables.scss        # Component-specific SCSS variables
│   └── Alert/
│       ├── Alert.tsx
│       ├── Alert.stories.tsx
│       └── _variables.scss
└── styles/
    ├── _tokens.scss              # Global design tokens
    └── bootstrap-custom.scss     # Bootstrap variable mapping
```

## Component Structure

Each component folder is self-contained with:

1. **`.tsx`** - React component with TypeScript interfaces
2. **`.stories.tsx`** - Storybook stories with `tags: ['autodocs']` for automatic documentation
3. **`_variables.scss`** - Component-specific SCSS customizations

### Storybook Autodocs

Components use Storybook's autodocs feature, which automatically generates comprehensive documentation from:

- Component props and TypeScript types
- JSDoc comments in the component file
- Story examples and variants
- Controls for interactive testing

To enable autodocs, add to your story meta:

```typescript
const meta: Meta<ComponentProps> = {
  title: 'Category/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Component description here...',
      },
    },
  },
  argTypes: {
    propName: {
      description: 'Prop description',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
};
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build for production
npm run build

# Preview production build
npm run preview
```

## Theming

See [THEMING.md](docs/THEMING.md) for comprehensive theming documentation including:

- Three-tier design token architecture
- SCSS variable customization
- CSS custom properties for runtime theming
- Light/dark mode implementation with electric neon colors

### Quick Theme Overview

**Light Mode**: Standard Bootstrap pastel colors
**Dark Mode**: Electric neon color palette with glowing effects

- Primary: Electric cyan (#00d4ff)
- Success: Neon green (#00ff88)  
- Warning: Electric yellow (#ffea00)
- Danger: Hot pink (#ff2a6d)
- Info: Bright cyan (#00ffff)
- Secondary: Electric lavender (#b19cd9)

Toggle themes in Storybook using the toolbar theme switcher.

## Adding New Components

See [COMPONENT_GUIDE.md](docs/COMPONENT_GUIDE.md) for step-by-step instructions on:

- Creating new components with the standard structure
- Writing Storybook stories with autodocs
- Adding component-specific SCSS variables
- Best practices and testing checklist

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
