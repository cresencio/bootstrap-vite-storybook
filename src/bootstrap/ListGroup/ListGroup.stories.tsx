import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ListGroup, ListGroupItem, SimpleListGroup, ListGroupItemContent } from './ListGroup';
import type { ListGroupVariant } from './ListGroup';

const meta: Meta<typeof ListGroup> = {
  title: 'Bootstrap/ListGroup',
  component: ListGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
List groups display a series of content flexibly and powerfully.

## Features
- **Variants**: Contextual colors for items
- **Actions**: Clickable/linkable items
- **Layouts**: Vertical, horizontal, flush, numbered
- **Custom Content**: Rich content with headings, badges, metadata

## Components
- \`ListGroup\` - Container component
- \`ListGroupItem\` - Individual list items
- \`SimpleListGroup\` - Data-driven convenience component
- \`ListGroupItemContent\` - Structured content layout
        `,
      },
    },
  },
  argTypes: {
    numbered: {
      description: 'Render as ordered/numbered list',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    flush: {
      description: 'Remove borders and rounded corners',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    horizontal: {
      description: 'Horizontal layout (true or breakpoint)',
      control: { type: 'select' },
      options: [false, true, 'sm', 'md', 'lg', 'xl', 'xxl'],
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

export const Default: Story = {
  render: () => (
    <ListGroup>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  ),
};

export const ActiveItem: Story = {
  name: 'Active Item',
  render: () => (
    <ListGroup>
      <ListGroupItem active>An active item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `active` prop to indicate the current active selection.',
      },
    },
  },
};

export const DisabledItems: Story = {
  name: 'Disabled Items',
  render: () => (
    <ListGroup>
      <ListGroupItem disabled>A disabled item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem disabled>Another disabled item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled items appear muted and are not interactive.',
      },
    },
  },
};

export const Links: Story = {
  name: 'Links',
  render: () => (
    <ListGroup>
      <ListGroupItem href="#" active>The current link item</ListGroupItem>
      <ListGroupItem href="#">A second link item</ListGroupItem>
      <ListGroupItem href="#">A third link item</ListGroupItem>
      <ListGroupItem href="#" disabled>A disabled link item</ListGroupItem>
      <ListGroupItem href="#">And a fifth one</ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `href` to render items as anchor links.',
      },
    },
  },
};

export const Buttons: Story = {
  name: 'Buttons',
  render: function ButtonsStory() {
    const [active, setActive] = useState(0);
    const items = ['First button', 'Second button', 'Third button', 'Fourth button', 'Fifth button'];

    return (
      <ListGroup>
        {items.map((item, index) => (
          <ListGroupItem
            key={index}
            action
            active={active === index}
            onClick={() => setActive(index)}
          >
            {item}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `onClick` or `action` to render items as buttons.',
      },
    },
  },
};

export const Flush: Story = {
  name: 'Flush',
  render: () => (
    <ListGroup flush>
      <ListGroupItem>An item</ListGroupItem>
      <ListGroupItem>A second item</ListGroupItem>
      <ListGroupItem>A third item</ListGroupItem>
      <ListGroupItem>A fourth item</ListGroupItem>
      <ListGroupItem>And a fifth one</ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Remove borders and rounded corners to render edge-to-edge in a parent container.',
      },
    },
  },
};

export const Numbered: Story = {
  name: 'Numbered',
  render: () => (
    <ListGroup numbered>
      <ListGroupItem>A list item</ListGroupItem>
      <ListGroupItem>A list item</ListGroupItem>
      <ListGroupItem>A list item</ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Render as a numbered/ordered list.',
      },
    },
  },
};

export const NumberedWithContent: Story = {
  name: 'Numbered with Custom Content',
  render: () => (
    <ListGroup numbered>
      <ListGroupItem className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Content for list item
        </div>
        <span className="badge bg-primary rounded-pill">14</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Content for list item
        </div>
        <span className="badge bg-primary rounded-pill">2</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Content for list item
        </div>
        <span className="badge bg-primary rounded-pill">1</span>
      </ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numbered list with custom content and badges.',
      },
    },
  },
};

export const Horizontal: Story = {
  name: 'Horizontal',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <ListGroup horizontal>
        <ListGroupItem>An item</ListGroupItem>
        <ListGroupItem>A second item</ListGroupItem>
        <ListGroupItem>A third item</ListGroupItem>
      </ListGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Display list items horizontally instead of vertically.',
      },
    },
  },
};

export const HorizontalResponsive: Story = {
  name: 'Horizontal Responsive',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div>
        <small className="text-muted">horizontal="sm"</small>
        <ListGroup horizontal="sm">
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <small className="text-muted">horizontal="md"</small>
        <ListGroup horizontal="md">
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </div>
      <div>
        <small className="text-muted">horizontal="lg"</small>
        <ListGroup horizontal="lg">
          <ListGroupItem>An item</ListGroupItem>
          <ListGroupItem>A second item</ListGroupItem>
          <ListGroupItem>A third item</ListGroupItem>
        </ListGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal layout at specific breakpoints and up.',
      },
    },
  },
};

export const Variants: Story = {
  name: 'Contextual Variants',
  render: () => {
    const variants: (ListGroupVariant | undefined)[] = [
      undefined,
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];

    return (
      <ListGroup>
        {variants.map((variant) => (
          <ListGroupItem key={variant || 'default'} variant={variant}>
            A simple {variant || 'default'} list group item
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Contextual color variants for list items.',
      },
    },
  },
};

export const VariantsActionable: Story = {
  name: 'Variants (Actionable)',
  render: () => {
    const variants: (ListGroupVariant | undefined)[] = [
      undefined,
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];

    return (
      <ListGroup>
        {variants.map((variant) => (
          <ListGroupItem key={variant || 'default'} variant={variant} action onClick={() => {}}>
            A simple {variant || 'default'} list group item
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Actionable items with contextual colors have hover/focus states.',
      },
    },
  },
};

export const WithBadges: Story = {
  name: 'With Badges',
  render: () => (
    <ListGroup>
      <ListGroupItem className="d-flex justify-content-between align-items-center">
        A list item
        <span className="badge bg-primary rounded-pill">14</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex justify-content-between align-items-center">
        A second list item
        <span className="badge bg-primary rounded-pill">2</span>
      </ListGroupItem>
      <ListGroupItem className="d-flex justify-content-between align-items-center">
        A third list item
        <span className="badge bg-primary rounded-pill">1</span>
      </ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add badges to show counts or status.',
      },
    },
  },
};

export const CustomContent: Story = {
  name: 'Custom Content',
  render: () => (
    <ListGroup>
      <ListGroupItem action active>
        <ListGroupItemContent
          heading="List group item heading"
          meta="3 days ago"
        >
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </ListGroupItemContent>
      </ListGroupItem>
      <ListGroupItem action>
        <ListGroupItemContent
          heading="List group item heading"
          meta="3 days ago"
        >
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </ListGroupItemContent>
      </ListGroupItem>
      <ListGroupItem action>
        <ListGroupItemContent
          heading="List group item heading"
          meta="3 days ago"
        >
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small className="text-body-secondary">And some muted small print.</small>
        </ListGroupItemContent>
      </ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use ListGroupItemContent for structured rich content.',
      },
    },
  },
};

export const WithBadgesAndContent: Story = {
  name: 'With Badges and Content',
  render: () => (
    <ListGroup>
      <ListGroupItem action>
        <ListGroupItemContent
          heading="Messages"
          badge={5}
          badgeVariant="danger"
        >
          You have unread messages
        </ListGroupItemContent>
      </ListGroupItem>
      <ListGroupItem action>
        <ListGroupItemContent
          heading="Notifications"
          badge={12}
          badgeVariant="primary"
        >
          New notifications available
        </ListGroupItemContent>
      </ListGroupItem>
      <ListGroupItem action>
        <ListGroupItemContent
          heading="Tasks"
          badge={3}
          badgeVariant="warning"
        >
          Pending tasks to complete
        </ListGroupItemContent>
      </ListGroupItem>
    </ListGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combine badges with structured content.',
      },
    },
  },
};

export const Checkboxes: Story = {
  name: 'With Checkboxes',
  render: function CheckboxStory() {
    const [checked, setChecked] = useState<Record<number, boolean>>({
      1: true,
      2: false,
      3: false,
    });

    const toggle = (id: number) => {
      setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
      <ListGroup>
        {[1, 2, 3].map((id) => (
          <ListGroupItem key={id} className="d-flex gap-2">
            <input
              className="form-check-input flex-shrink-0"
              type="checkbox"
              checked={checked[id]}
              onChange={() => toggle(id)}
              id={`checkbox-${id}`}
            />
            <label className="form-check-label stretched-link" htmlFor={`checkbox-${id}`}>
              List item {id}
            </label>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'List items with checkboxes for selection.',
      },
    },
  },
};

export const RadioButtons: Story = {
  name: 'With Radio Buttons',
  render: function RadioStory() {
    const [selected, setSelected] = useState(1);

    return (
      <ListGroup>
        {[1, 2, 3].map((id) => (
          <ListGroupItem key={id} className="d-flex gap-2">
            <input
              className="form-check-input flex-shrink-0"
              type="radio"
              name="listGroupRadio"
              checked={selected === id}
              onChange={() => setSelected(id)}
              id={`radio-${id}`}
            />
            <label className="form-check-label stretched-link" htmlFor={`radio-${id}`}>
              Option {id}
            </label>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'List items with radio buttons for single selection.',
      },
    },
  },
};

export const SimpleListGroupExample: Story = {
  name: 'SimpleListGroup',
  render: () => (
    <SimpleListGroup
      items={[
        { content: 'First item', key: 1 },
        { content: 'Second item (active)', key: 2, active: true },
        { content: 'Third item (success)', key: 3, variant: 'success' },
        { content: 'Fourth item (disabled)', key: 4, disabled: true },
        { content: 'Fifth item', key: 5 },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use SimpleListGroup for data-driven list rendering.',
      },
    },
  },
};

export const InCard: Story = {
  name: 'In Card',
  render: () => (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Featured</div>
          <ListGroup flush>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem>A third item</ListGroupItem>
          </ListGroup>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <ListGroup flush>
            <ListGroupItem>An item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem>A third item</ListGroupItem>
          </ListGroup>
          <div className="card-footer">Card footer</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flush variant when placing inside cards.',
      },
    },
  },
};

export const NavigationMenu: Story = {
  name: 'Navigation Menu Example',
  render: function NavMenuStory() {
    const [active, setActive] = useState('dashboard');

    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: '📊' },
      { id: 'orders', label: 'Orders', icon: '📦', badge: 5 },
      { id: 'products', label: 'Products', icon: '🛍️' },
      { id: 'customers', label: 'Customers', icon: '👥' },
      { id: 'analytics', label: 'Analytics', icon: '📈' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
    ];

    return (
      <div style={{ maxWidth: '280px' }}>
        <ListGroup flush>
          {menuItems.map((item) => (
            <ListGroupItem
              key={item.id}
              action
              active={active === item.id}
              onClick={() => setActive(item.id)}
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <span className="me-2">{item.icon}</span>
                {item.label}
              </span>
              {item.badge && (
                <span className="badge bg-danger rounded-pill">{item.badge}</span>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'List group styled as a sidebar navigation menu.',
      },
    },
  },
};

export const NotificationList: Story = {
  name: 'Notification List Example',
  render: () => {
    const notifications = [
      {
        title: 'New comment on your post',
        message: 'John Doe commented: "Great article!"',
        time: '2 min ago',
        unread: true,
      },
      {
        title: 'Order shipped',
        message: 'Your order #12345 has been shipped',
        time: '1 hour ago',
        unread: true,
      },
      {
        title: 'Payment received',
        message: 'Payment of $99.00 received',
        time: '3 hours ago',
        unread: false,
      },
      {
        title: 'New follower',
        message: 'Jane Smith started following you',
        time: 'Yesterday',
        unread: false,
      },
    ];

    return (
      <ListGroup>
        {notifications.map((notif, index) => (
          <ListGroupItem
            key={index}
            action
            className={notif.unread ? 'bg-light' : ''}
          >
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">
                {notif.unread && <span className="badge bg-primary me-2">New</span>}
                {notif.title}
              </h6>
              <small className="text-body-secondary">{notif.time}</small>
            </div>
            <p className="mb-0 text-body-secondary small">{notif.message}</p>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'List group styled as a notification list.',
      },
    },
  },
};
