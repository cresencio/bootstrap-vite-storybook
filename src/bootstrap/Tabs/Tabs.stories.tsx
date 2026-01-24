import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabList, TabButton, TabContent, TabPanel } from './Tabs';
import type { TabItem } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Bootstrap/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Tabs organize content into separate views where only one view is visible at a time.
Built on Bootstrap's tab JavaScript for accessibility and keyboard navigation.

## Features
- **Variants**: tabs, pills, underline styles
- **Layouts**: horizontal, vertical, fill, justified
- **Animations**: optional fade transitions
- **Accessibility**: full keyboard navigation and ARIA support
- **Controlled/Uncontrolled**: works both ways

## Components
- \`Tabs\` - All-in-one component with items array
- \`TabList\` / \`TabButton\` / \`TabContent\` / \`TabPanel\` - Building blocks for custom layouts
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of tab items with id, label, and content',
      control: { type: 'object' },
    },
    variant: {
      description: 'Visual style of the tabs',
      control: { type: 'select' },
      options: ['tabs', 'pills', 'underline'],
      table: {
        defaultValue: { summary: 'tabs' },
      },
    },
    defaultActiveId: {
      description: 'ID of the initially active tab (uncontrolled)',
      control: { type: 'text' },
    },
    activeId: {
      description: 'ID of the active tab (controlled)',
      control: { type: 'text' },
    },
    fill: {
      description: 'Tabs fill the available width proportionally',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    justified: {
      description: 'Tabs have equal width',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    vertical: {
      description: 'Display tabs vertically',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fade: {
      description: 'Enable fade animation on tab panes',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    onTabChange: {
      description: 'Callback when active tab changes',
      action: 'tabChanged',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleItems: TabItem[] = [
  {
    id: 'home',
    label: 'Home',
    content: (
      <div className="p-3">
        <h5>Home Tab</h5>
        <p>
          This is the home tab content. Welcome to our tabbed interface! 
          Click on the other tabs to see more content.
        </p>
      </div>
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    content: (
      <div className="p-3">
        <h5>Profile Tab</h5>
        <p>
          This is the profile tab content. Here you would typically see 
          user profile information and settings.
        </p>
      </div>
    ),
  },
  {
    id: 'messages',
    label: 'Messages',
    content: (
      <div className="p-3">
        <h5>Messages Tab</h5>
        <p>
          This is the messages tab content. View and manage your messages here.
        </p>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div className="p-3">
        <h5>Settings Tab</h5>
        <p>
          Configure your preferences and account settings in this tab.
        </p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: 'tabs',
    fade: true,
  },
};

export const Pills: Story = {
  name: 'Pills Variant',
  args: {
    items: sampleItems,
    variant: 'pills',
    fade: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs styled as pills with rounded backgrounds.',
      },
    },
  },
};

export const Underline: Story = {
  name: 'Underline Variant',
  args: {
    items: sampleItems,
    variant: 'underline',
    fade: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal underline style tabs.',
      },
    },
  },
};

export const Fill: Story = {
  name: 'Fill Width',
  args: {
    items: sampleItems.slice(0, 3),
    variant: 'tabs',
    fill: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs fill the available width proportionally based on content.',
      },
    },
  },
};

export const Justified: Story = {
  name: 'Justified (Equal Width)',
  args: {
    items: sampleItems.slice(0, 3),
    variant: 'tabs',
    justified: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'All tabs have equal width.',
      },
    },
  },
};

export const Vertical: Story = {
  name: 'Vertical Layout',
  args: {
    items: sampleItems,
    variant: 'pills',
    vertical: true,
    navClassName: 'me-3',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs displayed vertically with content to the side.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDisabledTab: Story = {
  name: 'With Disabled Tab',
  args: {
    items: [
      ...sampleItems.slice(0, 2),
      {
        id: 'disabled',
        label: 'Disabled',
        content: <p>You should not see this.</p>,
        disabled: true,
      },
      sampleItems[3],
    ],
    variant: 'tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be disabled to prevent interaction.',
      },
    },
  },
};

export const WithIcons: Story = {
  name: 'With Icons',
  args: {
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <span>🏠</span>,
        content: (
          <div className="p-3">
            <h5>Home</h5>
            <p>Welcome home!</p>
          </div>
        ),
      },
      {
        id: 'profile',
        label: 'Profile',
        icon: <span>👤</span>,
        content: (
          <div className="p-3">
            <h5>Profile</h5>
            <p>Your profile information.</p>
          </div>
        ),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: <span>🔔</span>,
        content: (
          <div className="p-3">
            <h5>Notifications</h5>
            <p>Your notifications will appear here.</p>
          </div>
        ),
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <span>⚙️</span>,
        content: (
          <div className="p-3">
            <h5>Settings</h5>
            <p>Configure your preferences.</p>
          </div>
        ),
      },
    ],
    variant: 'tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can include icons alongside labels.',
      },
    },
  },
};

export const NoFade: Story = {
  name: 'Without Fade Animation',
  args: {
    items: sampleItems,
    variant: 'tabs',
    fade: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disable fade animation for instant tab switching.',
      },
    },
  },
};

export const Controlled: Story = {
  name: 'Controlled Mode',
  render: function ControlledStory() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
      <div>
        <div className="mb-3">
          <strong>External Controls:</strong>
          <div className="btn-group ms-3">
            {sampleItems.map((item) => (
              <button
                key={item.id}
                className={`btn btn-sm ${activeTab === item.id ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <Tabs
          items={sampleItems}
          activeId={activeTab}
          onTabChange={setActiveTab}
          variant="tabs"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Control the active tab externally using `activeId` and `onTabChange`.',
      },
    },
  },
};

export const WithRichContent: Story = {
  name: 'Rich Content',
  args: {
    items: [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div className="p-3">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Statistics</h5>
                    <p className="card-text">View your usage statistics and analytics.</p>
                    <button className="btn btn-primary btn-sm">View Details</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Quick Actions</h5>
                    <p className="card-text">Common actions and shortcuts.</p>
                    <button className="btn btn-secondary btn-sm">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'table',
        label: 'Data Table',
        content: (
          <div className="p-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Admin</td>
                  <td><span className="badge bg-success">Active</span></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>User</td>
                  <td><span className="badge bg-success">Active</span></td>
                </tr>
                <tr>
                  <td>Bob Wilson</td>
                  <td>bob@example.com</td>
                  <td>User</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: 'form',
        label: 'Form',
        content: (
          <div className="p-3">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={3} placeholder="Enter your message"></textarea>
              </div>
              <button type="button" className="btn btn-primary">Submit</button>
            </form>
          </div>
        ),
      },
    ],
    variant: 'tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can contain any rich content including tables, forms, and cards.',
      },
    },
  },
};

export const CardIntegration: Story = {
  name: 'Card Integration',
  render: () => (
    <div className="card">
      <div className="card-header">
        <TabList variant="tabs" className="card-header-tabs">
          <TabButton target="card-home" active>Home</TabButton>
          <TabButton target="card-profile">Profile</TabButton>
          <TabButton target="card-contact">Contact</TabButton>
        </TabList>
      </div>
      <div className="card-body">
        <TabContent>
          <TabPanel id="card-home" active>
            <h5 className="card-title">Home</h5>
            <p className="card-text">
              Tabs integrated into a card header for a cohesive look.
              This pattern is useful for settings pages or dashboards.
            </p>
            <button className="btn btn-primary">Go somewhere</button>
          </TabPanel>
          <TabPanel id="card-profile">
            <h5 className="card-title">Profile</h5>
            <p className="card-text">
              Update your profile information and preferences here.
            </p>
            <button className="btn btn-primary">Save changes</button>
          </TabPanel>
          <TabPanel id="card-contact">
            <h5 className="card-title">Contact</h5>
            <p className="card-text">
              Get in touch with us for support or feedback.
            </p>
            <button className="btn btn-primary">Send message</button>
          </TabPanel>
        </TabContent>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using TabList, TabButton, TabContent, and TabPanel for custom layouts like card integration.',
      },
    },
  },
};

export const PillsWithBadges: Story = {
  name: 'Pills with Badges',
  render: () => (
    <>
      <TabList variant="pills">
        <TabButton target="inbox" active>
          Inbox <span className="badge bg-primary ms-1">4</span>
        </TabButton>
        <TabButton target="drafts">
          Drafts <span className="badge bg-secondary ms-1">2</span>
        </TabButton>
        <TabButton target="sent">Sent</TabButton>
        <TabButton target="spam">
          Spam <span className="badge bg-danger ms-1">12</span>
        </TabButton>
      </TabList>
      <TabContent className="mt-3">
        <TabPanel id="inbox" active>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">New message from John</h6>
                <small>3 mins ago</small>
              </div>
              <p className="mb-1 text-muted">Hey, just wanted to check in...</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">Meeting reminder</h6>
                <small>1 hour ago</small>
              </div>
              <p className="mb-1 text-muted">Don't forget about the meeting at 3pm</p>
            </a>
          </div>
        </TabPanel>
        <TabPanel id="drafts">
          <p className="text-muted">Your draft messages will appear here.</p>
        </TabPanel>
        <TabPanel id="sent">
          <p className="text-muted">Your sent messages will appear here.</p>
        </TabPanel>
        <TabPanel id="spam">
          <p className="text-muted">Spam messages are automatically filtered.</p>
        </TabPanel>
      </TabContent>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pills style with notification badges for counts.',
      },
    },
  },
};

export const VerticalWithPills: Story = {
  name: 'Vertical Pills Navigation',
  render: () => (
    <div className="d-flex">
      <TabList variant="pills" className="flex-column me-4">
        <TabButton target="v-general" active>General</TabButton>
        <TabButton target="v-security">Security</TabButton>
        <TabButton target="v-notifications">Notifications</TabButton>
        <TabButton target="v-billing">Billing</TabButton>
        <TabButton target="v-advanced">Advanced</TabButton>
      </TabList>
      <TabContent className="flex-grow-1">
        <TabPanel id="v-general" active>
          <h4>General Settings</h4>
          <hr />
          <form>
            <div className="mb-3">
              <label className="form-label">Display Name</label>
              <input type="text" className="form-control" defaultValue="John Doe" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" defaultValue="john@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Language</label>
              <select className="form-select">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">Save Changes</button>
          </form>
        </TabPanel>
        <TabPanel id="v-security">
          <h4>Security Settings</h4>
          <hr />
          <p>Configure your security preferences and two-factor authentication.</p>
        </TabPanel>
        <TabPanel id="v-notifications">
          <h4>Notification Preferences</h4>
          <hr />
          <p>Choose how you want to be notified about updates.</p>
        </TabPanel>
        <TabPanel id="v-billing">
          <h4>Billing Information</h4>
          <hr />
          <p>Manage your subscription and payment methods.</p>
        </TabPanel>
        <TabPanel id="v-advanced">
          <h4>Advanced Settings</h4>
          <hr />
          <p>Advanced configuration options for power users.</p>
        </TabPanel>
      </TabContent>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical pills layout commonly used for settings pages.',
      },
    },
  },
};

export const DynamicTabs: Story = {
  name: 'Dynamic Tabs',
  render: function DynamicTabsStory() {
    const [tabs, setTabs] = useState<TabItem[]>([
      { id: 'tab-1', label: 'Tab 1', content: <div className="p-3">Content for Tab 1</div> },
    ]);
    const [counter, setCounter] = useState(2);

    const addTab = () => {
      const newTab: TabItem = {
        id: `tab-${counter}`,
        label: `Tab ${counter}`,
        content: <div className="p-3">Content for Tab {counter}</div>,
      };
      setTabs((prev) => [...prev, newTab]);
      setCounter((c) => c + 1);
    };

    const removeTab = (id: string) => {
      setTabs((prev) => prev.filter((t) => t.id !== id));
    };

    const tabsWithClose = tabs.map((tab) => ({
      ...tab,
      label: (
        <span className="d-flex align-items-center gap-2">
          {tab.label}
          {tabs.length > 1 && (
            <button
              type="button"
              className="btn-close btn-close-white"
              style={{ fontSize: '0.5rem' }}
              onClick={(e) => {
                e.stopPropagation();
                removeTab(tab.id);
              }}
              aria-label="Close tab"
            />
          )}
        </span>
      ),
    }));

    return (
      <div>
        <div className="mb-3">
          <button className="btn btn-success btn-sm" onClick={addTab}>
            + Add Tab
          </button>
        </div>
        <Tabs items={tabsWithClose} variant="tabs" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Dynamically add and remove tabs at runtime.',
      },
    },
  },
};

export const AllVariantsComparison: Story = {
  name: 'All Variants Comparison',
  render: () => {
    const simpleItems: TabItem[] = [
      { id: 'one', label: 'First', content: <div className="p-3">First tab content</div> },
      { id: 'two', label: 'Second', content: <div className="p-3">Second tab content</div> },
      { id: 'three', label: 'Third', content: <div className="p-3">Third tab content</div> },
    ];

    return (
      <div className="d-flex flex-column gap-4">
        <div>
          <h6 className="text-muted mb-2">Tabs (Default)</h6>
          <Tabs items={simpleItems} variant="tabs" />
        </div>
        <div>
          <h6 className="text-muted mb-2">Pills</h6>
          <Tabs items={simpleItems} variant="pills" defaultActiveId="two" />
        </div>
        <div>
          <h6 className="text-muted mb-2">Underline</h6>
          <Tabs items={simpleItems} variant="underline" defaultActiveId="three" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of all tab variants.',
      },
    },
  },
};
