import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './Breadcrumb';
import type { BreadcrumbProps } from './Breadcrumb';

const meta: Meta<BreadcrumbProps> = {
  title: 'Bootstrap/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Indicate the current page\'s location within a navigational hierarchy that automatically adds separators via CSS.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
      table: {
        type: { summary: 'BreadcrumbItem[]' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the navigation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"breadcrumb"' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<BreadcrumbProps>;

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home', active: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'A breadcrumb with a single active item representing the current page.',
      },
    },
  },
};

export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Library', active: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'A breadcrumb showing navigation from Home to the current Library page.',
      },
    },
  },
};

export const ThreeItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'Data', active: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'A breadcrumb with three levels showing the navigation hierarchy.',
      },
    },
  },
};

export const AllExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All breadcrumb examples from the Bootstrap documentation showing single, two-level, and three-level navigation hierarchies.',
      },
    },
  },
};

export const CustomDivider: Story = {
  render: () => (
    <nav style={{ '--bs-breadcrumb-divider': "'>'", } as React.CSSProperties} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dividers are automatically added in CSS through `::before` and `content`. They can be changed by modifying the `--bs-breadcrumb-divider` CSS custom property, or through the `$breadcrumb-divider` Sass variable. This way, you get a global divider that you can override without recompiling CSS at any time.',
      },
    },
  },
};

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
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use an embedded SVG icon as the divider via the `--bs-breadcrumb-divider` CSS custom property. Inlined SVG requires properly escaped characters (e.g., `<`, `>`, `#` must be URL-encoded). In Sass, you can use the `$breadcrumb-divider` variable with Bootstrap\'s `escape-svg()` function to handle escaping automatically.',
      },
    },
  },
};

export const NoDivider: Story = {
  render: () => (
    <nav style={{ '--bs-breadcrumb-divider': "''", } as React.CSSProperties} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Remove the divider by setting `--bs-breadcrumb-divider: \'\';` (empty strings in CSS custom properties count as a value), or in Sass use `$breadcrumb-divider: none;`.',
      },
    },
  },
};
