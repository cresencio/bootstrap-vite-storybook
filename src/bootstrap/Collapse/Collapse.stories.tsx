import type { Meta, StoryObj } from '@storybook/react';
import Collapse, { CollapseToggle } from './Collapse';
import type { CollapseProps } from './Collapse';

const meta: Meta<CollapseProps> = {
  title: 'Bootstrap/Collapse',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toggle the visibility of content with a smooth height/width transition. Supports vertical and horizontal collapse animations.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to show/hide',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    show: {
      control: 'boolean',
      description: 'Whether the collapse is shown',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    horizontal: {
      control: 'boolean',
      description: 'Use horizontal collapse (width instead of height)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the collapse container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    id: {
      control: 'text',
      description: 'Custom ID for the collapse element',
      table: {
        type: { summary: 'string' },
      },
    },
    onHide: {
      action: 'hide.bs.collapse',
      description: 'Callback fired immediately when hide is called',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onHidden: {
      action: 'hidden.bs.collapse',
      description: 'Callback fired when collapse has been hidden',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onShow: {
      action: 'show.bs.collapse',
      description: 'Callback fired immediately when show is called',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onShown: {
      action: 'shown.bs.collapse',
      description: 'Callback fired when collapse has been shown',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CollapseProps>;

export const Default: Story = {
  render: () => (
    <div>
      <p className="d-inline-flex gap-1">
        <CollapseToggle target="collapseExample" variant="primary">
          Toggle collapse
        </CollapseToggle>
      </p>
      <Collapse id="collapseExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </Collapse>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic collapse with a button toggle. Click the button to show/hide the content.',
      },
    },
  },
};

export const InitiallyOpen: Story = {
  render: () => (
    <div>
      <p className="d-inline-flex gap-1">
        <CollapseToggle target="collapseOpen" variant="primary" expanded>
          Toggle collapse
        </CollapseToggle>
      </p>
      <Collapse id="collapseOpen" show>
        <div className="card card-body">
          This collapse is open by default. Use the `show` prop to control the initial state.
        </div>
      </Collapse>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A collapse that starts in the open state using the `show` prop.',
      },
    },
  },
};

export const LinkToggle: Story = {
  render: () => (
    <div>
      <p className="d-inline-flex gap-1">
        <CollapseToggle target="collapseLinkExample" variant="primary" asLink>
          Link with href
        </CollapseToggle>
        <CollapseToggle target="collapseLinkExample" variant="primary">
          Button with data-bs-target
        </CollapseToggle>
      </p>
      <Collapse id="collapseLinkExample">
        <div className="card card-body">
          Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </Collapse>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `asLink` prop to render the toggle as an anchor element instead of a button.',
      },
    },
  },
};

export const Horizontal: Story = {
  render: () => (
    <div>
      <p>
        <CollapseToggle target="collapseWidthExample" variant="primary">
          Toggle width collapse
        </CollapseToggle>
      </p>
      <div style={{ minHeight: '120px' }}>
        <Collapse id="collapseWidthExample" horizontal>
          <div className="card card-body" style={{ width: '300px' }}>
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </div>
        </Collapse>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `horizontal` prop to transition width instead of height. Set a fixed width on the child element.',
      },
    },
  },
};

export const MultipleTargets: Story = {
  render: () => (
    <div>
      <p className="d-inline-flex gap-1">
        <CollapseToggle target="multiCollapseExample1" variant="primary" asLink>
          Toggle first element
        </CollapseToggle>
        <CollapseToggle target="multiCollapseExample2" variant="primary">
          Toggle second element
        </CollapseToggle>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Toggle both elements
        </button>
      </p>
      <div className="row">
        <div className="col">
          <Collapse id="multiCollapseExample1" className="multi-collapse">
            <div className="card card-body">
              Some placeholder content for the first collapse component of this multi-collapse example.
            </div>
          </Collapse>
        </div>
        <div className="col">
          <Collapse id="multiCollapseExample2" className="multi-collapse">
            <div className="card card-body">
              Some placeholder content for the second collapse component of this multi-collapse example.
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple collapse elements can be controlled by different toggles. Use a shared class selector to toggle multiple elements at once.',
      },
    },
  },
};

export const ButtonVariants: Story = {
  render: () => (
    <div>
      <p className="d-inline-flex gap-1 flex-wrap">
        <CollapseToggle target="collapseVariants" variant="primary">Primary</CollapseToggle>
        <CollapseToggle target="collapseVariants" variant="secondary">Secondary</CollapseToggle>
        <CollapseToggle target="collapseVariants" variant="success">Success</CollapseToggle>
        <CollapseToggle target="collapseVariants" variant="danger">Danger</CollapseToggle>
        <CollapseToggle target="collapseVariants" variant="warning">Warning</CollapseToggle>
        <CollapseToggle target="collapseVariants" variant="info">Info</CollapseToggle>
        <CollapseToggle target="collapseVariants" variant="outline-primary">Outline</CollapseToggle>
      </p>
      <Collapse id="collapseVariants">
        <div className="card card-body">
          Toggle buttons can use any Bootstrap button variant via the `variant` prop.
        </div>
      </Collapse>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The CollapseToggle component supports all Bootstrap button variants.',
      },
    },
  },
};

export const WithEvents: Story = {
  render: () => (
    <div>
      <p className="d-inline-flex gap-1">
        <CollapseToggle target="collapseEvents" variant="primary">
          Toggle (check Actions panel)
        </CollapseToggle>
      </p>
      <Collapse id="collapseEvents">
        <div className="card card-body">
          This collapse fires events that you can listen to: show, shown, hide, hidden.
        </div>
      </Collapse>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the event callbacks to respond to collapse state changes. Check the Actions panel in Storybook to see events firing.',
      },
    },
  },
};
