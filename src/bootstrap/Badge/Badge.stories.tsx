import type { Meta, StoryObj } from '@storybook/react';
import { Badge, PositionedBadge, NotificationDot } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Bootstrap/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Badges are small count and labeling components that scale to match the size of their parent element using relative font sizing and \`em\` units.

## Components

- **Badge** - The main badge component for labels and counts
- **PositionedBadge** - Absolutely positioned badge for notification counters
- **NotificationDot** - Small dot indicator for status notifications

## Features

- Scales with parent element size
- Multiple color variants
- Pill shape option
- Polymorphic (renders as span, a, or button)
- Positioned badges for notification indicators
- Accessible with visually hidden text support`,
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
    children: {
      control: 'text',
      description: 'Badge content',
    },
    pill: {
      control: 'boolean',
      description: 'Render as a pill shape with more rounded corners',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    as: {
      control: 'select',
      options: ['span', 'a', 'button'],
      description: 'HTML element to render as',
      table: {
        type: { summary: "'span' | 'a' | 'button'" },
        defaultValue: { summary: 'span' },
      },
    },
    href: {
      control: 'text',
      description: 'Link href (when as="a")',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ============================================================================
// Basic Variants
// ============================================================================

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

// ============================================================================
// Feature Stories
// ============================================================================

/** Badges scale to match the size of the immediate parent element by using relative font sizing and em units. */
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
};

/** Use the pill prop for a more rounded badge shape. */
export const PillBadges: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
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
};

/** Badges can be used inside buttons to provide a counter. */
export const InButton: Story = {
  render: () => (
    <button type="button" className="btn btn-primary">
      Notifications <Badge variant="secondary">4</Badge>
    </button>
  ),
};

/** Use PositionedBadge for notification counters on buttons. Parent needs `position-relative`. */
export const PositionedCounter: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Positioned badges are used for notification counters. The parent element must have `position-relative` class.',
      },
    },
  },
  render: () => (
    <div className="d-flex gap-4">
      <button type="button" className="btn btn-primary position-relative">
        Inbox
        <PositionedBadge variant="danger">
          99+
        </PositionedBadge>
      </button>
      <button type="button" className="btn btn-secondary position-relative">
        Messages
        <PositionedBadge variant="success">
          5
        </PositionedBadge>
      </button>
    </div>
  ),
};

/** Use NotificationDot for a simple status indicator without a count. */
export const DotIndicator: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Notification dots are small indicators without text content. Always provide `visuallyHiddenText` for accessibility.',
      },
    },
  },
  render: () => (
    <div className="d-flex gap-4">
      <button type="button" className="btn btn-primary position-relative">
        Profile
        <NotificationDot variant="danger" visuallyHiddenText="New alerts" />
      </button>
      <button type="button" className="btn btn-secondary position-relative">
        Settings
        <NotificationDot variant="success" visuallyHiddenText="All synced" />
      </button>
    </div>
  ),
};

/** PositionedBadge supports different positions relative to the parent. */
export const BadgePositions: Story = {
  render: () => (
    <div className="d-flex gap-5 p-4">
      <button type="button" className="btn btn-outline-primary position-relative">
        Top End
        <PositionedBadge position="top-end" variant="danger">1</PositionedBadge>
      </button>
      <button type="button" className="btn btn-outline-primary position-relative">
        Top Start
        <PositionedBadge position="top-start" variant="danger">2</PositionedBadge>
      </button>
      <button type="button" className="btn btn-outline-primary position-relative">
        Bottom End
        <PositionedBadge position="bottom-end" variant="danger">3</PositionedBadge>
      </button>
      <button type="button" className="btn btn-outline-primary position-relative">
        Bottom Start
        <PositionedBadge position="bottom-start" variant="danger">4</PositionedBadge>
      </button>
    </div>
  ),
};

/** Badge can render as a link using the `as` prop. */
export const AsLink: Story = {
  args: {
    variant: 'primary',
    children: 'Clickable Badge',
    as: 'a',
    href: '#',
  },
};

/** All available badge variants in one view. */
export const AllVariants: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
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

/** All variants as pills. */
export const AllPillVariants: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
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
};

/** PositionedBadge with visually hidden text for screen readers. */
export const AccessibleBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `visuallyHiddenText` to provide context for screen readers about what the badge count represents.',
      },
    },
  },
  render: () => (
    <button type="button" className="btn btn-primary position-relative">
      Inbox
      <PositionedBadge variant="danger" visuallyHiddenText="unread messages">
        99+
      </PositionedBadge>
    </button>
  ),
};
