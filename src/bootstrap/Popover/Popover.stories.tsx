import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover, PopoverTrigger } from './Popover';
import { usePopover } from './usePopover';

const meta: Meta<typeof Popover> = {
  title: 'Bootstrap/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Popovers are similar to tooltips but provide more content space with a title and body.
They are ideal for displaying additional information, hints, or interactive content.

## Features

- **Rich Content**: Supports both title (header) and body content
- **Placements**: Top, right, bottom, left, or auto positioning
- **Multiple Triggers**: Click, hover, focus, or manual control
- **HTML Support**: Can render HTML content in the popover
- **Programmatic Control**: usePopover hook for manual control
- **Dismissible**: Click anywhere outside to close (with click trigger)

## Components

- \`Popover\` - Wrapper component for any element
- \`PopoverTrigger\` - Self-rendering trigger element
- \`usePopover\` - Hook for programmatic control
        `,
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'The popover body content',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      control: 'text',
      description: 'The popover header title (optional)',
      table: {
        type: { summary: 'string' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left', 'auto'],
      description: 'Popover placement relative to the trigger',
      table: {
        type: { summary: 'PopoverPlacement' },
        defaultValue: { summary: 'right' },
      },
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus', 'manual', 'hover focus'],
      description: 'How the popover is triggered',
      table: {
        type: { summary: 'PopoverTrigger' },
        defaultValue: { summary: 'click' },
      },
    },
    html: {
      control: 'boolean',
      description: 'Allow HTML content in the popover',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animation: {
      control: 'boolean',
      description: 'Apply a CSS fade transition',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    delay: {
      control: 'object',
      description: 'Delay showing and hiding the popover (ms)',
      table: {
        type: { summary: 'number | { show: number; hide: number }' },
        defaultValue: { summary: '0' },
      },
    },
    customClass: {
      control: 'text',
      description: 'Custom CSS class for the popover',
      table: {
        type: { summary: 'string' },
      },
    },
    offset: {
      control: 'object',
      description: 'Offset of the popover [x, y]',
      table: {
        type: { summary: '[number, number]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

/**
 * Basic popover with title and content.
 */
export const Default: Story = {
  args: {
    title: 'Popover Title',
    content: 'And here\'s some amazing content. It\'s very engaging. Right?',
    placement: 'right',
  },
  render: (args) => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <Popover {...args}>
        <button className="btn btn-lg btn-danger">Click to toggle popover</button>
      </Popover>
    </div>
  ),
};

/**
 * Popover with only body content, no title.
 */
export const NoTitle: Story = {
  args: {
    content: 'This popover has no title, just body content.',
    placement: 'right',
  },
  render: (args) => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <Popover {...args}>
        <button className="btn btn-primary">Simple Popover</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers can be used without a title for simpler content.',
      },
    },
  },
};

/**
 * Popovers positioned on all four sides.
 */
export const Placements: Story = {
  render: () => (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ minHeight: '300px' }}>
      <Popover title="Top Popover" content="Popover content on top." placement="top">
        <button className="btn btn-secondary">Top</button>
      </Popover>
      <Popover title="Right Popover" content="Popover content on the right." placement="right">
        <button className="btn btn-secondary">Right</button>
      </Popover>
      <Popover title="Bottom Popover" content="Popover content on bottom." placement="bottom">
        <button className="btn btn-secondary">Bottom</button>
      </Popover>
      <Popover title="Left Popover" content="Popover content on the left." placement="left">
        <button className="btn btn-secondary">Left</button>
      </Popover>
      <Popover title="Auto Popover" content="Popover auto-positions based on available space." placement="auto">
        <button className="btn btn-secondary">Auto</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers can be positioned on any side of the trigger element. Use `auto` for automatic positioning.',
      },
    },
  },
};

/**
 * Different trigger types for showing popovers.
 */
export const Triggers: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <Popover title="Click Trigger" content="Click anywhere outside to dismiss." trigger="click">
        <button className="btn btn-primary">Click</button>
      </Popover>
      <Popover title="Hover Trigger" content="Move mouse away to dismiss." trigger="hover">
        <button className="btn btn-primary">Hover</button>
      </Popover>
      <Popover title="Focus Trigger" content="Click elsewhere or tab away to dismiss." trigger="focus">
        <button className="btn btn-primary">Focus</button>
      </Popover>
      <Popover title="Hover + Focus" content="Triggered by hover or focus." trigger="hover focus">
        <button className="btn btn-primary">Hover/Focus</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers can be triggered by click (default), hover, focus, or a combination.',
      },
    },
  },
};

/**
 * Popover with HTML content enabled.
 */
export const HtmlContent: Story = {
  args: {
    title: '<em>Formatted</em> Title',
    content: '<strong>Bold text</strong> and <a href="#">a link</a>. You can use any HTML!',
    html: true,
    placement: 'right',
  },
  render: (args) => (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <Popover {...args}>
        <button className="btn btn-info">HTML Popover</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Enable `html: true` to render HTML content in the popover. Content is sanitized by default.',
      },
    },
  },
};

/**
 * Popover with show/hide delay.
 */
export const WithDelay: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <Popover 
        title="Delayed Popover" 
        content="This popover has a 500ms delay." 
        trigger="hover"
        delay={500}
      >
        <button className="btn btn-secondary">Uniform Delay (500ms)</button>
      </Popover>
      <Popover 
        title="Custom Delays" 
        content="Quick to show, slow to hide." 
        trigger="hover"
        delay={{ show: 100, hide: 1000 }}
      >
        <button className="btn btn-secondary">Show: 100ms / Hide: 1000ms</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add delays to prevent accidental triggers. Use an object for different show/hide delays.',
      },
    },
  },
};

/**
 * Popover without animation.
 */
export const NoAnimation: Story = {
  args: {
    title: 'No Animation',
    content: 'This popover appears instantly without fade animation.',
    animation: false,
  },
  render: (args) => (
    <div className="d-flex justify-content-center" style={{ minHeight: '150px' }}>
      <Popover {...args}>
        <button className="btn btn-warning">Instant Popover</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disable the fade animation for instant appearance.',
      },
    },
  },
};

/**
 * Popover with custom offset from trigger.
 */
export const WithOffset: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3 justify-content-center" style={{ minHeight: '200px' }}>
      <Popover title="Default Offset" content="No custom offset applied.">
        <button className="btn btn-secondary">Default</button>
      </Popover>
      <Popover title="X Offset" content="Shifted 20px horizontally." offset={[20, 0]}>
        <button className="btn btn-secondary">X: 20px</button>
      </Popover>
      <Popover title="Y Offset" content="Shifted 20px vertically." offset={[0, 20]}>
        <button className="btn btn-secondary">Y: 20px</button>
      </Popover>
      <Popover title="Both Offsets" content="Shifted 10px in both directions." offset={[10, 10]}>
        <button className="btn btn-secondary">X: 10, Y: 10</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use offset to adjust the popover position relative to the trigger element.',
      },
    },
  },
};

/**
 * Popovers on different element types.
 */
export const DifferentElements: Story = {
  render: () => (
    <div className="d-flex flex-wrap align-items-center gap-4">
      <Popover title="Button Popover" content="Triggered from a button.">
        <button className="btn btn-primary">Button</button>
      </Popover>
      <Popover title="Link Popover" content="Triggered from a link.">
        <a href="#" className="text-decoration-none">Link Element</a>
      </Popover>
      <Popover title="Badge Popover" content="Triggered from a badge.">
        <span className="badge bg-success">Badge</span>
      </Popover>
      <Popover title="Icon Popover" content="Triggered from an icon.">
        <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>ℹ️</span>
      </Popover>
      <Popover title="Text Popover" content="Triggered from inline text.">
        <span className="text-primary" style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          hover text
        </span>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers can be attached to any element - buttons, links, badges, icons, or text.',
      },
    },
  },
};

/**
 * Popovers with different Bootstrap button variants.
 */
export const WithButtonVariants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      {(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'] as const).map((variant) => (
        <Popover 
          key={variant}
          title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Popover`}
          content={`This is a ${variant} button with a popover.`}
        >
          <button className={`btn btn-${variant}`}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </button>
        </Popover>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers work with all Bootstrap button variants.',
      },
    },
  },
};

/**
 * Using PopoverTrigger for self-rendering elements.
 */
export const WithPopoverTrigger: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <PopoverTrigger
        as="button"
        className="btn btn-primary"
        title="Button Trigger"
        content="Using PopoverTrigger with as='button'"
      >
        Button Trigger
      </PopoverTrigger>
      <PopoverTrigger
        as="span"
        className="badge bg-info"
        title="Span Trigger"
        content="Using PopoverTrigger with as='span'"
        trigger="hover"
      >
        Hover Badge
      </PopoverTrigger>
      <PopoverTrigger
        as="a"
        className="text-decoration-none"
        title="Link Trigger"
        content="Using PopoverTrigger with as='a'"
      >
        Click Link
      </PopoverTrigger>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'PopoverTrigger renders its own element, useful when you need more control over the trigger element.',
      },
    },
  },
};

/**
 * Long content in a popover.
 */
export const LongContent: Story = {
  args: {
    title: 'Extended Information',
    content: `This is a popover with a lot of content. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
    placement: 'right',
  },
  render: (args) => (
    <div className="d-flex justify-content-center" style={{ minHeight: '250px' }}>
      <Popover {...args}>
        <button className="btn btn-secondary">Long Content</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers automatically accommodate longer content. Consider using HTML for better formatting.',
      },
    },
  },
};

/**
 * Popover with rich HTML content.
 */
export const RichHtmlContent: Story = {
  args: {
    title: 'User Profile',
    content: `
      <div class="d-flex align-items-center mb-2">
        <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" 
             style="width: 40px; height: 40px; font-size: 1.2rem;">
          JD
        </div>
        <div class="ms-2">
          <strong>John Doe</strong><br>
          <small class="text-muted">Software Engineer</small>
        </div>
      </div>
      <hr class="my-2">
      <div class="small">
        <div><strong>Email:</strong> john@example.com</div>
        <div><strong>Team:</strong> Frontend</div>
      </div>
    `,
    html: true,
    placement: 'right',
  },
  render: (args) => (
    <div className="d-flex justify-content-center" style={{ minHeight: '250px' }}>
      <Popover {...args}>
        <button className="btn btn-outline-primary">View Profile</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'With HTML enabled, you can create rich interactive popover content like user cards.',
      },
    },
  },
};

/**
 * Popover with custom styling.
 */
export const CustomStyling: Story = {
  render: () => (
    <>
      <style>{`
        .custom-popover .popover-header {
          background-color: #6f42c1;
          color: white;
        }
        .custom-popover .popover-body {
          background-color: #f8f9fa;
        }
        .custom-popover.bs-popover-end > .popover-arrow::after {
          border-right-color: #f8f9fa;
        }
      `}</style>
      <div className="d-flex justify-content-center" style={{ minHeight: '150px' }}>
        <Popover 
          title="Custom Styled" 
          content="This popover has custom styling applied via customClass."
          customClass="custom-popover"
        >
          <button className="btn btn-purple" style={{ backgroundColor: '#6f42c1', color: 'white' }}>
            Custom Style
          </button>
        </Popover>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `customClass` to add custom CSS classes for styling the popover.',
      },
    },
  },
};

/**
 * Multiple popovers that can be open simultaneously.
 */
export const MultiplePopovers: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3 justify-content-center" style={{ minHeight: '200px' }}>
      <Popover title="First Popover" content="This is the first popover." placement="top">
        <button className="btn btn-primary">First</button>
      </Popover>
      <Popover title="Second Popover" content="This is the second popover." placement="top">
        <button className="btn btn-secondary">Second</button>
      </Popover>
      <Popover title="Third Popover" content="This is the third popover." placement="top">
        <button className="btn btn-success">Third</button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple popovers can be triggered independently. Click triggers allow multiple popovers to be open at once.',
      },
    },
  },
};

/**
 * Popover as an info helper.
 */
export const InfoHelper: Story = {
  render: () => (
    <div className="card" style={{ maxWidth: '400px' }}>
      <div className="card-body">
        <h5 className="card-title">
          Account Settings
          <Popover 
            title="Help" 
            content="Configure your account preferences here. Changes are saved automatically."
            placement="right"
          >
            <span className="ms-2 text-muted" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
              ⓘ
            </span>
          </Popover>
        </h5>
        <div className="mb-3">
          <label className="form-label">
            Email Notifications
            <Popover 
              content="Choose how often you receive email updates about your account activity."
              placement="right"
              trigger="hover"
            >
              <span className="ms-1 text-info" style={{ cursor: 'help' }}>ⓘ</span>
            </Popover>
          </label>
          <select className="form-select">
            <option>Daily digest</option>
            <option>Instant</option>
            <option>Weekly summary</option>
            <option>None</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Privacy Level
            <Popover 
              title="Privacy Settings"
              content="<ul class='mb-0 ps-3'><li><strong>Public:</strong> Anyone can see</li><li><strong>Friends:</strong> Only connections</li><li><strong>Private:</strong> Only you</li></ul>"
              html={true}
              placement="right"
            >
              <span className="ms-1 text-info" style={{ cursor: 'help' }}>ⓘ</span>
            </Popover>
          </label>
          <select className="form-select">
            <option>Public</option>
            <option>Friends only</option>
            <option>Private</option>
          </select>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers are great for inline help and information icons in forms.',
      },
    },
  },
};

/**
 * Using the usePopover hook for programmatic control.
 */
export const UsePopoverHook: Story = {
  name: 'usePopover Hook',
  render: function UsePopoverStory() {
    const { ref, show, hide, toggle } = usePopover({
      title: 'Programmatic Popover',
      content: 'This popover is controlled via the usePopover hook.',
      placement: 'right',
      trigger: 'manual',
    });

    return (
      <div className="d-flex flex-column align-items-center gap-3" style={{ minHeight: '200px' }}>
        <button ref={ref as React.RefObject<HTMLButtonElement>} className="btn btn-lg btn-primary">
          Target Element
        </button>
        <div className="btn-group">
          <button className="btn btn-outline-success" onClick={show}>Show</button>
          <button className="btn btn-outline-danger" onClick={hide}>Hide</button>
          <button className="btn btn-outline-primary" onClick={toggle}>Toggle</button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `usePopover` hook for programmatic control over popovers.',
      },
    },
  },
};

/**
 * Dismissible popover on next click.
 */
export const DismissiblePopover: Story = {
  render: () => (
    <div className="d-flex justify-content-center" style={{ minHeight: '200px' }}>
      <Popover 
        title="Dismissible" 
        content="Click anywhere outside the popover to close it."
        trigger="focus"
      >
        <a 
          href="#" 
          className="btn btn-danger"
          role="button"
          onClick={(e) => e.preventDefault()}
        >
          Dismissible popover
        </a>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using `trigger="focus"` allows the popover to be dismissed by clicking anywhere else.',
      },
    },
  },
};

/**
 * Popover with list content.
 */
export const ListContent: Story = {
  args: {
    title: 'Quick Actions',
    content: `
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action py-2">
          📧 Send Email
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2">
          📞 Call
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2">
          📅 Schedule Meeting
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 text-danger">
          🗑️ Delete
        </a>
      </div>
    `,
    html: true,
    placement: 'bottom',
  },
  render: (args) => (
    <div className="d-flex justify-content-center" style={{ minHeight: '300px' }}>
      <Popover {...args}>
        <button className="btn btn-outline-secondary">
          Actions ▾
        </button>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Popovers can contain list-based content for quick action menus.',
      },
    },
  },
};
