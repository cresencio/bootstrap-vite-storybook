import type { Meta, StoryObj } from '@storybook/react';
import { Button, LinkButton, IconButton, CloseButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Bootstrap/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Bootstrap buttons with support for multiple sizes, states, and variants.

## Components

- **Button** - Main button component with loading state support
- **LinkButton** - Anchor element styled as a button
- **IconButton** - Button with icon and accessible label
- **CloseButton** - Bootstrap close/dismiss button

## Features

- 9 color variants + outline versions
- 3 sizes (sm, md, lg)
- Loading state with spinner
- Active/toggle state
- Polymorphic (button, link)
- Icon button support`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
      description: 'The button variant/color theme',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'md' },
      },
    },
    outline: {
      control: 'boolean',
      description: 'Render as outline style',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    active: {
      control: 'boolean',
      description: 'Active/pressed state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loadingText: {
      control: 'text',
      description: 'Text to show during loading state',
    },
    toggle: {
      control: 'boolean',
      description: 'Enable toggle button behavior',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

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

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

// ============================================================================
// All Variants
// ============================================================================

export const AllVariants: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" outline>Primary</Button>
      <Button variant="secondary" outline>Secondary</Button>
      <Button variant="success" outline>Success</Button>
      <Button variant="danger" outline>Danger</Button>
      <Button variant="warning" outline>Warning</Button>
      <Button variant="info" outline>Info</Button>
      <Button variant="light" outline>Light</Button>
      <Button variant="dark" outline>Dark</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons for a more subtle appearance with transparent backgrounds.',
      },
    },
  },
};

// ============================================================================
// Sizes
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="sm">Small</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes: small, medium (default), and large.',
      },
    },
  },
};

// ============================================================================
// States
// ============================================================================

export const DisabledState: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="primary" outline disabled>Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons have reduced opacity and pointer-events disabled.',
      },
    },
  },
};

export const ActiveState: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" active>Active</Button>
      <Button variant="secondary" active>Active</Button>
      <Button variant="primary" outline active>Active Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `active` prop to show pressed/active state.',
      },
    },
  },
};

// ============================================================================
// Loading State
// ============================================================================

export const LoadingState: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" loading>
        Save Changes
      </Button>
      <Button variant="success" loading loadingText="Saving...">
        Save
      </Button>
      <Button variant="danger" loading loadingText="Deleting...">
        Delete
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `loading` prop to show a spinner and disable the button. Optionally provide `loadingText` for custom loading text.',
      },
    },
  },
};

export const LoadingSizes: Story = {
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Button variant="primary" size="lg" loading>
        Large
      </Button>
      <Button variant="primary" loading>
        Default
      </Button>
      <Button variant="primary" size="sm" loading>
        Small
      </Button>
    </div>
  ),
};

// ============================================================================
// Toggle Buttons
// ============================================================================

export const ToggleButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button toggle>Toggle button</Button>
      <Button variant="primary" toggle>Toggle button</Button>
      <Button variant="primary" toggle active>Active toggle</Button>
      <Button variant="primary" toggle disabled>Disabled toggle</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `toggle` prop for on/off toggle behavior with `data-bs-toggle="button"`. Pre-toggle with `active` prop.',
      },
    },
  },
};

// ============================================================================
// LinkButton
// ============================================================================

export const LinkButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <LinkButton href="#" variant="primary">Primary Link</LinkButton>
      <LinkButton href="#" variant="secondary">Secondary Link</LinkButton>
      <LinkButton href="#" variant="success" outline>Outline Link</LinkButton>
      <LinkButton variant="danger" disabled>Disabled Link</LinkButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`LinkButton` renders an anchor element styled as a button. Use when navigation is the primary action.',
      },
    },
  },
};

// ============================================================================
// IconButton
// ============================================================================

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
);

export const IconButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap align-items-center">
      <IconButton icon={<DownloadIcon />} label="Download" variant="primary" />
      <IconButton icon={<TrashIcon />} label="Delete" variant="danger" outline />
      <IconButton icon={<PlusIcon />} label="Add" iconPosition="end" variant="success" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`IconButton` combines an icon with a text label. Use `iconPosition` to place icon at start or end.',
      },
    },
  },
};

export const IconOnlyButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <IconButton icon={<DownloadIcon />} label="Download" variant="primary" iconOnly />
      <IconButton icon={<TrashIcon />} label="Delete" variant="danger" iconOnly />
      <IconButton icon={<PlusIcon />} label="Add" variant="success" iconOnly />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `iconOnly` for icon-only buttons. The label is visually hidden but accessible to screen readers.',
      },
    },
  },
};

// ============================================================================
// CloseButton
// ============================================================================

export const CloseButtons: Story = {
  render: () => (
    <div className="d-flex gap-3 align-items-center">
      <CloseButton />
      <CloseButton disabled />
      <div className="bg-dark p-3">
        <CloseButton white />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`CloseButton` for dismissing content like modals and alerts. Use `white` variant on dark backgrounds.',
      },
    },
  },
};

// ============================================================================
// Block Buttons
// ============================================================================

export const BlockButtons: Story = {
  render: () => (
    <div className="d-grid gap-2">
      <Button variant="primary">Block Button</Button>
      <Button variant="secondary">Block Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create full-width block buttons using Bootstrap\'s `d-grid` utility class on the parent.',
      },
    },
  },
};

export const ResponsiveBlockButtons: Story = {
  render: () => (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use responsive utilities to stack buttons on small screens and align horizontally on larger screens.',
      },
    },
  },
};

// ============================================================================
// With Icons (Inline)
// ============================================================================

export const WithInlineIcons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary">
        <DownloadIcon /> <span className="ms-2">Download</span>
      </Button>
      <Button variant="success">
        <span className="me-2">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </Button>
      <Button variant="danger" outline>
        <TrashIcon /> <span className="ms-2">Delete</span>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can also add icons directly as children for full control over layout.',
      },
    },
  },
};

// ============================================================================
// Button Tags
// ============================================================================

export const ButtonTags: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap align-items-center">
      <LinkButton href="#" variant="primary">Link</LinkButton>
      <Button type="submit" variant="primary">Submit</Button>
      <Button type="reset" variant="secondary">Reset</Button>
      <input className="btn btn-primary" type="button" value="Input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be rendered as different HTML elements. Use `LinkButton` for anchors, `Button` for buttons.',
      },
    },
  },
};
