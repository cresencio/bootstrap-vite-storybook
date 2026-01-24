import type { Meta, StoryObj } from '@storybook/react';
import Nav from './Nav';
import type { NavProps, NavItem } from './Nav';

const meta: Meta<NavProps> = {
  title: 'Bootstrap/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Navigation component with support for tabs, pills, underline styles, and dropdowns. Built with flexbox for responsive layouts.',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of navigation items',
      table: {
        type: { summary: 'NavItem[]' },
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'tabs', 'pills', 'underline'],
      description: 'Visual style variant',
      table: {
        type: { summary: "'default' | 'tabs' | 'pills' | 'underline'" },
        defaultValue: { summary: "'default'" },
      },
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of nav items',
      table: {
        type: { summary: "'start' | 'center' | 'end'" },
        defaultValue: { summary: "'start'" },
      },
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    fill: {
      control: 'select',
      options: ['none', 'fill', 'justified'],
      description: 'Fill behavior for nav items',
      table: {
        type: { summary: "'none' | 'fill' | 'justified'" },
        defaultValue: { summary: "'none'" },
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
    onSelect: {
      action: 'selected',
      description: 'Callback when a nav item is clicked',
      table: {
        type: { summary: '(itemId: string) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<NavProps>;

const defaultItems: NavItem[] = [
  { id: 'active', label: 'Active', active: true },
  { id: 'link1', label: 'Link' },
  { id: 'link2', label: 'Link' },
  { id: 'disabled', label: 'Disabled', disabled: true },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'The base nav component with default styling. Uses flexbox and provides a foundation for all navigation styles.',
      },
    },
  },
};

export const Tabs: Story = {
  args: {
    items: defaultItems,
    variant: 'tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab-styled navigation. Use `variant="tabs"` for a tabbed interface appearance.',
      },
    },
  },
};

export const Pills: Story = {
  args: {
    items: defaultItems,
    variant: 'pills',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pill-styled navigation with rounded backgrounds on active items.',
      },
    },
  },
};

export const Underline: Story = {
  args: {
    items: defaultItems,
    variant: 'underline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Underline-styled navigation with a border under the active item.',
      },
    },
  },
};

export const CenterAligned: Story = {
  args: {
    items: defaultItems,
    alignment: 'center',
  },
  parameters: {
    docs: {
      description: {
        story: 'Center-aligned navigation using `alignment="center"`.',
      },
    },
  },
};

export const EndAligned: Story = {
  args: {
    items: defaultItems,
    alignment: 'end',
  },
  parameters: {
    docs: {
      description: {
        story: 'Right-aligned navigation using `alignment="end"`.',
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    items: defaultItems,
    layout: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertically stacked navigation using `layout="vertical"`.',
      },
    },
  },
};

export const VerticalPills: Story = {
  args: {
    items: defaultItems,
    variant: 'pills',
    layout: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical pills navigation, commonly used for sidebar navigation.',
      },
    },
  },
};

const fillItems: NavItem[] = [
  { id: 'active', label: 'Active', active: true },
  { id: 'longer', label: 'Much longer nav link' },
  { id: 'link', label: 'Link' },
  { id: 'disabled', label: 'Disabled', disabled: true },
];

export const Fill: Story = {
  args: {
    items: fillItems,
    variant: 'pills',
    fill: 'fill',
  },
  parameters: {
    docs: {
      description: {
        story: 'Nav items fill available width proportionally using `fill="fill"`.',
      },
    },
  },
};

export const Justified: Story = {
  args: {
    items: fillItems,
    variant: 'pills',
    fill: 'justified',
  },
  parameters: {
    docs: {
      description: {
        story: 'Nav items fill available width with equal widths using `fill="justified"`.',
      },
    },
  },
};

const dropdownItems: NavItem[] = [
  { id: 'active', label: 'Active', active: true },
  {
    id: 'dropdown',
    label: 'Dropdown',
    dropdown: [
      { label: 'Action', href: '#' },
      { label: 'Another action', href: '#' },
      { label: 'Something else here', href: '#' },
      { divider: true, label: '' },
      { label: 'Separated link', href: '#' },
    ],
  },
  { id: 'link', label: 'Link' },
  { id: 'disabled', label: 'Disabled', disabled: true },
];

export const TabsWithDropdown: Story = {
  args: {
    items: dropdownItems,
    variant: 'tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with an integrated dropdown menu. Note: For accessibility, avoid using dropdowns in dynamic tabbed interfaces.',
      },
    },
  },
};

export const PillsWithDropdown: Story = {
  args: {
    items: dropdownItems,
    variant: 'pills',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pills with an integrated dropdown menu.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h6>Default</h6>
        <Nav items={defaultItems} />
      </div>
      <div>
        <h6>Tabs</h6>
        <Nav items={defaultItems} variant="tabs" />
      </div>
      <div>
        <h6>Pills</h6>
        <Nav items={defaultItems} variant="pills" />
      </div>
      <div>
        <h6>Underline</h6>
        <Nav items={defaultItems} variant="underline" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all nav variants side by side.',
      },
    },
  },
};

export const AllAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h6>Start (Default)</h6>
        <Nav items={defaultItems} alignment="start" />
      </div>
      <div>
        <h6>Center</h6>
        <Nav items={defaultItems} alignment="center" />
      </div>
      <div>
        <h6>End</h6>
        <Nav items={defaultItems} alignment="end" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all alignment options.',
      },
    },
  },
};
