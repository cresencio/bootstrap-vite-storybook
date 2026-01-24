import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger } from './Tooltip';
import { useTooltip } from './useTooltip';
import type { TooltipPlacement } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Bootstrap/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Tooltips display informative text when users hover over, focus on, or tap an element.

## Features
- **Placements**: top, right, bottom, left, auto
- **Triggers**: hover, focus, click, manual
- **HTML Content**: Support for rich HTML tooltips
- **Delays**: Configurable show/hide delays
- **Programmatic Control**: useTooltip hook for manual control

## Components
- \`Tooltip\` - Wrapper component for existing elements
- \`TooltipTrigger\` - Renders its own trigger element
- \`useTooltip\` - Hook for programmatic control

## Note
Tooltips require Bootstrap's JavaScript to function. The tooltip is automatically
initialized when the component mounts and disposed when it unmounts.
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Tooltip content text',
      control: { type: 'text' },
    },
    placement: {
      description: 'Tooltip position relative to trigger',
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left', 'auto'],
      table: { defaultValue: { summary: 'top' } },
    },
    trigger: {
      description: 'How the tooltip is triggered',
      control: { type: 'select' },
      options: ['hover', 'focus', 'click', 'manual', 'hover focus'],
      table: { defaultValue: { summary: 'hover focus' } },
    },
    html: {
      description: 'Allow HTML in tooltip content',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    animation: {
      description: 'Enable fade animation',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'true' } },
    },
    delay: {
      description: 'Delay in ms before showing/hiding',
      control: { type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '80px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip title="Default tooltip">
      <button className="btn btn-primary">Hover me</button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  name: 'Placements',
  render: () => {
    const placements: TooltipPlacement[] = ['top', 'right', 'bottom', 'left'];
    
    return (
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        {placements.map((placement) => (
          <Tooltip key={placement} title={`Tooltip on ${placement}`} placement={placement}>
            <button className="btn btn-secondary text-capitalize">
              {placement}
            </button>
          </Tooltip>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltips can be positioned on any side of the trigger element.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '100px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const AutoPlacement: Story = {
  name: 'Auto Placement',
  render: () => (
    <Tooltip title="Auto-positioned tooltip" placement="auto">
      <button className="btn btn-info">Auto Placement</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `auto` placement to dynamically position based on available space.',
      },
    },
  },
};

export const TriggerHover: Story = {
  name: 'Trigger: Hover',
  render: () => (
    <Tooltip title="Hover-only tooltip" trigger="hover">
      <button className="btn btn-primary">Hover Only</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Show tooltip only on mouse hover.',
      },
    },
  },
};

export const TriggerFocus: Story = {
  name: 'Trigger: Focus',
  render: () => (
    <Tooltip title="Focus-only tooltip" trigger="focus">
      <button className="btn btn-primary">Focus Only (Tab to me)</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Show tooltip only on focus (keyboard navigation).',
      },
    },
  },
};

export const TriggerClick: Story = {
  name: 'Trigger: Click',
  render: () => (
    <Tooltip title="Click-triggered tooltip" trigger="click">
      <button className="btn btn-primary">Click Me</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Show tooltip on click. Click again or outside to dismiss.',
      },
    },
  },
};

export const HtmlContent: Story = {
  name: 'HTML Content',
  render: () => (
    <Tooltip
      title="<strong>Bold</strong> and <em>italic</em> text"
      html
    >
      <button className="btn btn-primary">HTML Tooltip</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Enable HTML content with the `html` prop for rich formatting.',
      },
    },
  },
};

export const WithDelay: Story = {
  name: 'With Delay',
  render: () => (
    <div className="d-flex gap-3">
      <Tooltip title="500ms delay" delay={500}>
        <button className="btn btn-secondary">500ms Delay</button>
      </Tooltip>
      <Tooltip title="1000ms delay" delay={1000}>
        <button className="btn btn-secondary">1s Delay</button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add delay before showing/hiding the tooltip.',
      },
    },
  },
};

export const NoAnimation: Story = {
  name: 'No Animation',
  render: () => (
    <Tooltip title="No fade animation" animation={false}>
      <button className="btn btn-primary">No Animation</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disable the fade animation for instant show/hide.',
      },
    },
  },
};

export const CustomClass: Story = {
  name: 'Custom Class',
  render: () => (
    <Tooltip title="Custom styled tooltip" customClass="bg-danger">
      <button className="btn btn-danger">Custom Style</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add custom CSS classes to the tooltip element.',
      },
    },
  },
};

export const OnLinks: Story = {
  name: 'On Links',
  render: () => (
    <p>
      Here is some text with a{' '}
      <Tooltip title="Link tooltip">
        <a href="#">tooltip on a link</a>
      </Tooltip>{' '}
      in the middle of a sentence.
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips work on any element including inline links.',
      },
    },
  },
};

export const OnIcons: Story = {
  name: 'On Icons',
  render: () => (
    <div className="d-flex gap-3 align-items-center">
      <Tooltip title="Information">
        <span style={{ cursor: 'pointer', fontSize: '1.5rem' }}>ℹ️</span>
      </Tooltip>
      <Tooltip title="Warning">
        <span style={{ cursor: 'pointer', fontSize: '1.5rem' }}>⚠️</span>
      </Tooltip>
      <Tooltip title="Success">
        <span style={{ cursor: 'pointer', fontSize: '1.5rem' }}>✅</span>
      </Tooltip>
      <Tooltip title="Error">
        <span style={{ cursor: 'pointer', fontSize: '1.5rem' }}>❌</span>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use tooltips on icons to provide context.',
      },
    },
  },
};

export const OnDisabledElements: Story = {
  name: 'On Disabled Elements',
  render: () => (
    <div className="d-flex gap-3">
      <Tooltip title="This button is disabled" allowOnDisabled>
        <button className="btn btn-primary" disabled>
          Disabled Button
        </button>
      </Tooltip>
      <Tooltip title="This input is disabled" allowOnDisabled>
        <input
          type="text"
          className="form-control"
          placeholder="Disabled input"
          disabled
          style={{ width: '200px' }}
        />
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `allowOnDisabled` to show tooltips on disabled elements.',
      },
    },
  },
};

export const TooltipTriggerComponent: Story = {
  name: 'TooltipTrigger Component',
  render: () => (
    <div className="d-flex gap-3">
      <TooltipTrigger title="Button tooltip" as="button" className="btn btn-primary">
        Button
      </TooltipTrigger>
      <TooltipTrigger title="Span tooltip" as="span" className="badge bg-secondary">
        Badge
      </TooltipTrigger>
      <TooltipTrigger title="Div tooltip" as="div" className="p-2 border rounded">
        Div Element
      </TooltipTrigger>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TooltipTrigger renders its own element with the `as` prop.',
      },
    },
  },
};

export const UseTooltipHook: Story = {
  name: 'useTooltip Hook',
  render: function UseTooltipStory() {
    const { ref, show, hide, toggle } = useTooltip({
      title: 'Programmatic tooltip',
      trigger: 'manual',
    });

    return (
      <div className="d-flex flex-column gap-3 align-items-center">
        <button ref={ref as React.RefObject<HTMLButtonElement>} className="btn btn-primary">
          Target Element
        </button>
        <div className="btn-group">
          <button className="btn btn-outline-primary btn-sm" onClick={show}>
            Show
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={hide}>
            Hide
          </button>
          <button className="btn btn-outline-primary btn-sm" onClick={toggle}>
            Toggle
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `useTooltip` hook for programmatic control over tooltips.',
      },
    },
  },
};

export const FormFieldHelp: Story = {
  name: 'Form Field Help',
  render: () => (
    <form style={{ maxWidth: '400px' }}>
      <div className="mb-3">
        <label className="form-label">
          Username
          <Tooltip title="Choose a unique username between 3-20 characters">
            <span className="ms-1 text-muted" style={{ cursor: 'help' }}>ⓘ</span>
          </Tooltip>
        </label>
        <input type="text" className="form-control" placeholder="Enter username" />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Password
          <Tooltip title="Must be at least 8 characters with 1 number and 1 special character">
            <span className="ms-1 text-muted" style={{ cursor: 'help' }}>ⓘ</span>
          </Tooltip>
        </label>
        <input type="password" className="form-control" placeholder="Enter password" />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Email
          <Tooltip title="We'll never share your email with anyone">
            <span className="ms-1 text-muted" style={{ cursor: 'help' }}>ⓘ</span>
          </Tooltip>
        </label>
        <input type="email" className="form-control" placeholder="Enter email" />
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common pattern: tooltips for form field help text.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TableHeaderHelp: Story = {
  name: 'Table Header Help',
  render: () => (
    <table className="table">
      <thead>
        <tr>
          <th>
            Name
            <Tooltip title="Full name of the user">
              <span className="ms-1 text-muted" style={{ cursor: 'help' }}>ⓘ</span>
            </Tooltip>
          </th>
          <th>
            Status
            <Tooltip title="Current account status: Active, Pending, or Inactive">
              <span className="ms-1 text-muted" style={{ cursor: 'help' }}>ⓘ</span>
            </Tooltip>
          </th>
          <th>
            LTV
            <Tooltip title="Lifetime Value: Total revenue from this customer">
              <span className="ms-1 text-muted" style={{ cursor: 'help' }}>ⓘ</span>
            </Tooltip>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td><span className="badge bg-success">Active</span></td>
          <td>$1,234</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td><span className="badge bg-warning">Pending</span></td>
          <td>$567</td>
        </tr>
      </tbody>
    </table>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips on table headers to explain column meanings.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ButtonGroup: Story = {
  name: 'Button Group',
  render: () => (
    <div className="btn-group">
      <Tooltip title="Bold text" placement="top">
        <button className="btn btn-outline-secondary">B</button>
      </Tooltip>
      <Tooltip title="Italic text" placement="top">
        <button className="btn btn-outline-secondary"><em>I</em></button>
      </Tooltip>
      <Tooltip title="Underline text" placement="top">
        <button className="btn btn-outline-secondary"><u>U</u></button>
      </Tooltip>
      <Tooltip title="Strikethrough" placement="top">
        <button className="btn btn-outline-secondary"><s>S</s></button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tooltips on toolbar buttons to show keyboard shortcuts or labels.',
      },
    },
  },
};

export const LongContent: Story = {
  name: 'Long Content',
  render: () => (
    <Tooltip title="This is a much longer tooltip that contains more detailed information. It will wrap to multiple lines automatically based on the max-width setting.">
      <button className="btn btn-primary">Long Tooltip</button>
    </Tooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Long tooltip content automatically wraps.',
      },
    },
  },
};

export const MultipleElements: Story = {
  name: 'Multiple Elements',
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      {Array.from({ length: 8 }, (_, i) => (
        <Tooltip key={i} title={`Tooltip #${i + 1}`}>
          <button className="btn btn-outline-primary btn-sm">
            Button {i + 1}
          </button>
        </Tooltip>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple tooltips work independently.',
      },
    },
  },
};
