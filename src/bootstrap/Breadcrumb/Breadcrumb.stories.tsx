import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem, SimpleBreadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Bootstrap/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Breadcrumbs indicate the current page's location within a navigational hierarchy. Separators are automatically added via CSS.

## Components

- **Breadcrumb** - Container component (nav with ol)
- **BreadcrumbItem** - Individual breadcrumb item
- **SimpleBreadcrumb** - Convenience wrapper using items array

## Features

- Automatic CSS separators
- Custom dividers via prop or CSS variable
- SVG icon dividers
- Accessible with proper ARIA attributes`,
      },
    },
  },
  argTypes: {
    children: {
      description: 'Breadcrumb content (BreadcrumbItem components)',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'breadcrumb' },
      },
    },
    divider: {
      control: 'text',
      description: 'Custom divider character',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the nav element',
    },
    listClassName: {
      control: 'text',
      description: 'Additional CSS classes for the ol element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

// ============================================================================
// Building Blocks Pattern
// ============================================================================

/** Basic breadcrumb using building block components. */
export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** Single item representing the current page. */
export const SingleItem: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem active>Home</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** Two-level navigation hierarchy. */
export const TwoItems: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem active>Library</BreadcrumbItem>
    </Breadcrumb>
  ),
};

/** Three-level navigation hierarchy. */
export const ThreeItems: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  ),
};

// ============================================================================
// SimpleBreadcrumb
// ============================================================================

/** SimpleBreadcrumb accepts an items array for common patterns. */
export const Simple: Story = {
  render: () => (
    <SimpleBreadcrumb
      items={[
        { label: 'Home', href: '#' },
        { label: 'Products', href: '#' },
        { label: 'Category', href: '#' },
        { label: 'Current Item', active: true },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `SimpleBreadcrumb` with an items array when you don\'t need custom content in each item.',
      },
    },
  },
};

// ============================================================================
// Custom Dividers
// ============================================================================

/** Use the divider prop to change the separator character. */
export const CustomDivider: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Breadcrumb divider=">">
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Library</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb divider="→">
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Library</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb divider="•">
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Library</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Change the divider by passing a `divider` prop. This sets the `--bs-breadcrumb-divider` CSS custom property.',
      },
    },
  },
};

/** Use an SVG icon as the divider via CSS custom property. */
export const SvgDivider: Story = {
  render: () => (
    <nav
      style={{
        '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'%236c757d\'/%3E%3C/svg%3E")',
      } as React.CSSProperties}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use an embedded SVG icon as the divider via the `--bs-breadcrumb-divider` CSS custom property. SVG requires proper URL encoding.',
      },
    },
  },
};

/** Remove the divider entirely. */
export const NoDivider: Story = {
  render: () => (
    <nav
      style={{ '--bs-breadcrumb-divider': "''" } as React.CSSProperties}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Remove the divider by setting `--bs-breadcrumb-divider: \'\'` (empty string).',
      },
    },
  },
};

// ============================================================================
// All Examples
// ============================================================================

/** All breadcrumb levels shown together. */
export const AllExamples: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Library</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All breadcrumb examples showing single, two-level, and three-level navigation hierarchies.',
      },
    },
  },
};

// ============================================================================
// Deep Navigation
// ============================================================================

/** Deep navigation with many levels. */
export const DeepNavigation: Story = {
  render: () => (
    <SimpleBreadcrumb
      items={[
        { label: 'Home', href: '#' },
        { label: 'Category', href: '#' },
        { label: 'Subcategory', href: '#' },
        { label: 'Section', href: '#' },
        { label: 'Subsection', href: '#' },
        { label: 'Current Page', active: true },
      ]}
    />
  ),
};

// ============================================================================
// Building Blocks Documentation
// ============================================================================

/** Using building blocks for custom content. */
export const BuildingBlocks: Story = {
  render: () => (
    <Breadcrumb ariaLabel="Product navigation">
      <BreadcrumbItem href="#">
        <span className="d-flex align-items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
          </svg>
          Home
        </span>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem active>Widget Pro</BreadcrumbItem>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the building block components (`Breadcrumb`, `BreadcrumbItem`) for complete control over breadcrumb content, such as adding icons.',
      },
    },
  },
};
