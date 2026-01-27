import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { Alert, AlertHeading, AlertLink, SimpleAlert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Bootstrap/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Alerts provide contextual feedback messages for typical user actions.
They support eight color variants and can be made dismissible.

## Features
- **Variants**: 8 contextual color options
- **Dismissible**: Optional close button with fade animation
- **Events**: Bootstrap JS events (close, closed)
- **Building blocks**: AlertHeading, AlertLink for custom content

## Components
- \`Alert\` - Main component
- \`AlertHeading\` - Styled heading for alerts
- \`AlertLink\` - Styled link for alerts
- \`SimpleAlert\` - Convenience wrapper with heading prop
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'The alert variant/color theme',
      table: {
        type: { summary: 'AlertVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Show dismiss button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Whether the alert is visible (controlled mode)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    fade: {
      control: 'boolean',
      description: 'Enable fade animation when dismissing',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
    onClose: {
      action: 'close',
      description: 'Callback fired immediately when close is called',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onClosed: {
      action: 'closed',
      description: 'Callback fired when alert has been closed and transitions complete',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// ============================================================================
// Basic Variants
// ============================================================================

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'A simple primary alert—check it out!',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'A simple secondary alert—check it out!',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'A simple success alert—check it out!',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'A simple danger alert—check it out!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'A simple warning alert—check it out!',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'A simple info alert—check it out!',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'A simple light alert—check it out!',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'A simple dark alert—check it out!',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="d-flex flex-column gap-2">
      <Alert variant="primary">A simple primary alert—check it out!</Alert>
      <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
      <Alert variant="success">A simple success alert—check it out!</Alert>
      <Alert variant="danger">A simple danger alert—check it out!</Alert>
      <Alert variant="warning">A simple warning alert—check it out!</Alert>
      <Alert variant="info">A simple info alert—check it out!</Alert>
      <Alert variant="light">A simple light alert—check it out!</Alert>
      <Alert variant="dark">A simple dark alert—check it out!</Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All eight contextual alert variants.',
      },
    },
  },
};

// ============================================================================
// Dismissible
// ============================================================================

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    dismissible: true,
    children: (
      <>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Dismissible alert with close button. Uses Bootstrap JS for smooth fade animation.',
      },
    },
  },
};

export const WithEvents: Story = {
  name: 'With Event Callbacks',
  args: {
    variant: 'info',
    dismissible: true,
    children: 'Click the close button to see events in the Actions panel.',
    onClose: action('close'),
    onClosed: action('closed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates Bootstrap alert events: `close.bs.alert` fires immediately, `closed.bs.alert` fires after transition.',
      },
    },
  },
};

// ============================================================================
// With Links
// ============================================================================

export const WithLinks: Story = {
  name: 'With Alert Links',
  render: () => (
    <div className="d-flex flex-column gap-2">
      <Alert variant="primary">
        A simple primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
      </Alert>
      <Alert variant="secondary">
        A simple secondary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
      </Alert>
      <Alert variant="success">
        A simple success alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
      </Alert>
      <Alert variant="danger">
        A simple danger alert with <AlertLink href="#">an example link</AlertLink>. Give it a click if you like.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `AlertLink` component for properly styled links that match the alert variant.',
      },
    },
  },
};

// ============================================================================
// Additional Content
// ============================================================================

export const WithAdditionalContent: Story = {
  name: 'With Additional Content',
  render: () => (
    <Alert variant="success">
      <AlertHeading>Well done!</AlertHeading>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alerts can contain additional HTML elements like headings, paragraphs, and dividers using `AlertHeading`.',
      },
    },
  },
};

// ============================================================================
// With Icons
// ============================================================================

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="d-flex flex-column gap-2">
      <Alert variant="primary" className="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Info:">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
        <div>An example primary alert with an icon</div>
      </Alert>

      <Alert variant="success" className="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Success:">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <div>An example success alert with an icon</div>
      </Alert>

      <Alert variant="warning" className="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>An example warning alert with an icon</div>
      </Alert>

      <Alert variant="danger" className="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Danger:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>An example danger alert with an icon</div>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flexbox utilities and Bootstrap Icons to create alerts with icons.',
      },
    },
  },
};

// ============================================================================
// SimpleAlert
// ============================================================================

export const Simple: Story = {
  name: 'SimpleAlert',
  render: () => (
    <div className="d-flex flex-column gap-2">
      <SimpleAlert variant="success" heading="Well done!" dismissible>
        Your profile has been updated successfully.
      </SimpleAlert>

      <SimpleAlert variant="danger" heading="Error!">
        There was a problem processing your request.
      </SimpleAlert>

      <SimpleAlert variant="info">
        This is a simple info alert without a heading.
      </SimpleAlert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SimpleAlert is a convenience wrapper that accepts a `heading` prop for common patterns.',
      },
    },
  },
};

// ============================================================================
// Building Blocks
// ============================================================================

export const BuildingBlocks: Story = {
  name: 'Building Blocks Pattern',
  render: () => (
    <Alert variant="info" dismissible>
      <AlertHeading as="h5">Custom Alert Structure</AlertHeading>
      <p>
        This alert uses the building block components for maximum flexibility.
        You can use <AlertLink href="#">AlertLink</AlertLink> for styled links.
      </p>
      <hr />
      <div className="d-flex gap-2">
        <button className="btn btn-sm btn-info">Take Action</button>
        <button className="btn btn-sm btn-outline-info">Learn More</button>
      </div>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the building block components (\`AlertHeading\`, \`AlertLink\`) for complete control over alert content.

\`\`\`tsx
<Alert variant="info" dismissible>
  <AlertHeading>Title</AlertHeading>
  <p>Content with <AlertLink href="#">a link</AlertLink>.</p>
</Alert>
\`\`\`
        `,
      },
    },
  },
};

// ============================================================================
// Controlled Visibility
// ============================================================================

export const ControlledVisibility: Story = {
  name: 'Controlled Visibility',
  args: {
    variant: 'primary',
    show: true,
    children: 'This alert visibility is controlled via the `show` prop in the Controls panel.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `show` prop for controlled visibility. Toggle it in the Controls panel.',
      },
    },
  },
};
