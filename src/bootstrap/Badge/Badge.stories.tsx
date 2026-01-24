import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import type { BadgeProps } from './Badge';
import { Button } from '../Button/Button';

const meta: Meta<BadgeProps> = {
  title: 'Bootstrap/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Badges are small count and labeling components. They scale to match the size of the immediate parent element by using relative font sizing and em units.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'The badge variant/color theme',
      table: {
        type: { summary: 'BadgeVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    bg: {
      control: 'boolean',
      description: 'Use background color with contrasting text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    pill: {
      control: 'boolean',
      description: 'Render as a pill shape with rounded corners',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
type Story = StoryObj<BadgeProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const InHeadings: Story = {
  render: () => (
    <div>
      <h1>Example heading <Badge variant="secondary">New</Badge></h1>
      <h2>Example heading <Badge variant="secondary">New</Badge></h2>
      <h3>Example heading <Badge variant="secondary">New</Badge></h3>
      <h4>Example heading <Badge variant="secondary">New</Badge></h4>
      <h5>Example heading <Badge variant="secondary">New</Badge></h5>
      <h6>Example heading <Badge variant="secondary">New</Badge></h6>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges scale to match the size of the immediate parent element.',
      },
    },
  },
};

export const PillBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="primary" pill>Primary</Badge>
      <Badge variant="secondary" pill>Secondary</Badge>
      <Badge variant="success" pill>Success</Badge>
      <Badge variant="danger" pill>Danger</Badge>
      <Badge variant="warning" pill>Warning</Badge>
      <Badge variant="info" pill>Info</Badge>
      <Badge variant="light" pill>Light</Badge>
      <Badge variant="dark" pill>Dark</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the pill prop to make badges more rounded with a larger border-radius.',
      },
    },
  },
};

export const CounterBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Button variant="primary" className="position-relative">
        Inbox
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>
      </Button>
      
      <Button variant="primary" className="position-relative">
        Profile
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges can be used as notification counters on buttons.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
    </div>
  ),
};
