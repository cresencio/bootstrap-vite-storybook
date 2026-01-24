import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Scrollspy, ScrollspySection, ScrollspyNav, SimpleScrollspy } from './Scrollspy';
import { useScrollspy } from './useScrollspy';

const meta: Meta<typeof Scrollspy> = {
  title: 'Bootstrap/Scrollspy',
  component: Scrollspy,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Scrollspy automatically updates navigation or list group components based on scroll position
to indicate which link is currently active in the viewport.

## Features

- **Nav Integration**: Works with Bootstrap nav and nav-pills
- **List Group Integration**: Works with list-group for sidebar navigation
- **Nested Navigation**: Supports nested/hierarchical navigation
- **Smooth Scrolling**: Optional smooth scroll behavior
- **Offset Support**: Configurable offset for fixed headers
- **Events**: Callback when active item changes

## Components

- \`Scrollspy\` - Scrollable container that tracks position
- \`ScrollspySection\` - Section wrapper with ID
- \`ScrollspyNav\` - Pre-built navigation component
- \`SimpleScrollspy\` - All-in-one convenience component
- \`useScrollspy\` - Hook for programmatic control
        `,
      },
    },
  },
  argTypes: {
    target: {
      control: 'text',
      description: 'Selector for the navigation container',
      table: {
        type: { summary: 'string' },
      },
    },
    rootMargin: {
      control: 'text',
      description: 'Offset for calculating scroll position',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0px 0px -40%' },
      },
    },
    smoothScroll: {
      control: 'boolean',
      description: 'Enable smooth scrolling behavior',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    height: {
      control: 'text',
      description: 'Height of the scrollable container',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '300px' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Scrollspy>;

/**
 * Basic scrollspy with list-group navigation.
 */
export const Default: Story = {
  render: () => (
    <div className="row">
      <div className="col-4">
        <div id="list-example" className="list-group">
          <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
          <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
          <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
          <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
        </div>
      </div>
      <div className="col-8">
        <Scrollspy target="#list-example" height="300px">
          <ScrollspySection id="list-item-1" title="Item 1">
            <p>This is some placeholder content for the scrollspy example. This section is about Item 1.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Keep scrolling to see the navigation update.</p>
          </ScrollspySection>
          <ScrollspySection id="list-item-2" title="Item 2">
            <p>This section is about Item 2. Notice how the list group updates as you scroll.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          </ScrollspySection>
          <ScrollspySection id="list-item-3" title="Item 3">
            <p>And this is the third section, Item 3. The active state changes automatically.</p>
            <p>Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </ScrollspySection>
          <ScrollspySection id="list-item-4" title="Item 4">
            <p>Finally, this is Item 4. You've reached the last section!</p>
            <p>Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
};

/**
 * Scrollspy with nav links.
 */
export const WithNavLinks: Story = {
  render: () => (
    <div>
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3 mb-3 rounded">
        <a className="navbar-brand" href="#">Navbar</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">First</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">Second</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
              <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Scrollspy target="#navbar-example2" height="350px" rootMargin="0px 0px -30%">
        <ScrollspySection id="scrollspyHeading1" title="First heading">
          <p>This is some placeholder content for the scrollspy page. Note that as you scroll down,
          the appropriate navigation link is highlighted. This repeats throughout the component.</p>
          <p>Keep scrolling to see the nav pills update.</p>
        </ScrollspySection>
        <ScrollspySection id="scrollspyHeading2" title="Second heading">
          <p>This is some placeholder content for the scrollspy page.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ScrollspySection>
        <ScrollspySection id="scrollspyHeading3" title="Third heading">
          <p>This section is linked from the dropdown menu.</p>
          <p>Notice how the dropdown link becomes active.</p>
        </ScrollspySection>
        <ScrollspySection id="scrollspyHeading4" title="Fourth heading">
          <p>Another dropdown-linked section.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </ScrollspySection>
        <ScrollspySection id="scrollspyHeading5" title="Fifth heading">
          <p>The last section from the dropdown.</p>
          <p>Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </ScrollspySection>
      </Scrollspy>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Scrollspy works with navbar nav pills and dropdown menus.',
      },
    },
  },
};

/**
 * Scrollspy with nested navigation.
 */
export const NestedNavigation: Story = {
  render: () => (
    <div className="row">
      <div className="col-4">
        <nav id="navbar-nested" className="navbar navbar-light bg-light flex-column align-items-stretch p-3 rounded">
          <a className="navbar-brand" href="#">Documentation</a>
          <nav className="nav nav-pills flex-column">
            <a className="nav-link" href="#item-1">Getting Started</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#item-1-1">Installation</a>
              <a className="nav-link ms-3 my-1" href="#item-1-2">Configuration</a>
            </nav>
            <a className="nav-link" href="#item-2">Components</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#item-2-1">Buttons</a>
              <a className="nav-link ms-3 my-1" href="#item-2-2">Cards</a>
            </nav>
            <a className="nav-link" href="#item-3">Advanced</a>
          </nav>
        </nav>
      </div>
      <div className="col-8">
        <Scrollspy target="#navbar-nested" height="400px">
          <ScrollspySection id="item-1" title="Getting Started" titleAs="h4">
            <p>Welcome to our documentation. This section covers the basics of getting started.</p>
          </ScrollspySection>
          <ScrollspySection id="item-1-1" title="Installation" titleAs="h5">
            <p>Run npm install to get started with the package.</p>
            <pre className="bg-light p-2 rounded"><code>npm install my-package</code></pre>
          </ScrollspySection>
          <ScrollspySection id="item-1-2" title="Configuration" titleAs="h5">
            <p>Configure the package by creating a config file in your project root.</p>
            <pre className="bg-light p-2 rounded"><code>{`{ "option": true }`}</code></pre>
          </ScrollspySection>
          <ScrollspySection id="item-2" title="Components" titleAs="h4">
            <p>Learn about the available components in the library.</p>
          </ScrollspySection>
          <ScrollspySection id="item-2-1" title="Buttons" titleAs="h5">
            <p>Buttons come in various styles and sizes.</p>
            <button className="btn btn-primary me-2">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
          </ScrollspySection>
          <ScrollspySection id="item-2-2" title="Cards" titleAs="h5">
            <p>Cards are flexible content containers.</p>
            <div className="card" style={{ maxWidth: '200px' }}>
              <div className="card-body">
                <p className="card-text">Example card</p>
              </div>
            </div>
          </ScrollspySection>
          <ScrollspySection id="item-3" title="Advanced" titleAs="h4">
            <p>Advanced topics and customization options.</p>
            <p>This section covers theming, plugins, and more.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Nested navigation for documentation-style layouts.',
      },
    },
  },
};

/**
 * Using the ScrollspyNav component.
 */
export const WithScrollspyNav: Story = {
  render: () => (
    <div className="row">
      <div className="col-4">
        <ScrollspyNav
          navId="scrollspy-nav"
          variant="list-group"
          items={[
            { id: 'overview', label: 'Overview' },
            { id: 'features', label: 'Features' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'faq', label: 'FAQ' },
          ]}
        />
      </div>
      <div className="col-8">
        <Scrollspy target="#scrollspy-nav" height="300px">
          <ScrollspySection id="overview" title="Overview">
            <p>A brief overview of our product and services.</p>
            <p>We provide cutting-edge solutions for modern businesses.</p>
          </ScrollspySection>
          <ScrollspySection id="features" title="Features">
            <p>Key features that set us apart:</p>
            <ul>
              <li>Easy to use</li>
              <li>Highly customizable</li>
              <li>Great support</li>
            </ul>
          </ScrollspySection>
          <ScrollspySection id="pricing" title="Pricing">
            <p>Flexible pricing plans for every budget.</p>
            <p>Starting at just $9.99/month.</p>
          </ScrollspySection>
          <ScrollspySection id="faq" title="FAQ">
            <p><strong>Q: How do I get started?</strong></p>
            <p>A: Simply sign up and follow our quick start guide.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using ScrollspyNav component for declarative navigation setup.',
      },
    },
  },
};

/**
 * Pills variant navigation.
 */
export const PillsNavigation: Story = {
  render: () => (
    <div className="row">
      <div className="col-3">
        <ScrollspyNav
          navId="pills-nav"
          variant="pills"
          vertical
          items={[
            { id: 'home', label: 'Home' },
            { id: 'profile', label: 'Profile' },
            { id: 'messages', label: 'Messages' },
            { id: 'settings', label: 'Settings' },
          ]}
        />
      </div>
      <div className="col-9">
        <Scrollspy target="#pills-nav" height="300px">
          <ScrollspySection id="home" title="Home">
            <p>Welcome to your dashboard. Here's an overview of your activity.</p>
          </ScrollspySection>
          <ScrollspySection id="profile" title="Profile">
            <p>Manage your profile information and preferences.</p>
          </ScrollspySection>
          <ScrollspySection id="messages" title="Messages">
            <p>View and manage your messages. You have 3 unread messages.</p>
          </ScrollspySection>
          <ScrollspySection id="settings" title="Settings">
            <p>Configure application settings and preferences.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical pills navigation with scrollspy.',
      },
    },
  },
};

/**
 * Using SimpleScrollspy for quick setup.
 */
export const UsingSimpleScrollspy: Story = {
  render: () => (
    <SimpleScrollspy
      id="simple-demo"
      height="350px"
      sections={[
        {
          id: 'intro',
          title: 'Introduction',
          content: (
            <p>This is an introduction to our documentation. It covers the basics
            of getting started with the library.</p>
          ),
        },
        {
          id: 'installation',
          title: 'Installation',
          content: (
            <>
              <p>Install the package using npm:</p>
              <pre className="bg-light p-2 rounded"><code>npm install example-package</code></pre>
            </>
          ),
        },
        {
          id: 'usage',
          title: 'Usage',
          content: (
            <>
              <p>Import and use the components:</p>
              <pre className="bg-light p-2 rounded"><code>{`import { Component } from 'example-package';`}</code></pre>
            </>
          ),
        },
        {
          id: 'api',
          title: 'API Reference',
          content: (
            <p>Detailed API documentation for all available props and methods.</p>
          ),
        },
      ]}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'SimpleScrollspy provides an all-in-one solution with nav and scrollable content.',
      },
    },
  },
};

/**
 * Scrollspy with event callback.
 */
export const WithEventCallback: Story = {
  render: () => (
    <div className="row">
      <div className="col-4">
        <div id="callback-nav" className="list-group">
          <a className="list-group-item list-group-item-action" href="#section-a">Section A</a>
          <a className="list-group-item list-group-item-action" href="#section-b">Section B</a>
          <a className="list-group-item list-group-item-action" href="#section-c">Section C</a>
        </div>
        <p className="mt-3 text-muted small">Check the Actions panel for events.</p>
      </div>
      <div className="col-8">
        <Scrollspy 
          target="#callback-nav" 
          height="250px"
          onActivate={action('onActivate')}
        >
          <ScrollspySection id="section-a" title="Section A">
            <p>Content for section A. Scroll down to trigger the callback.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ScrollspySection>
          <ScrollspySection id="section-b" title="Section B">
            <p>Content for section B. The onActivate callback fires when this section is reached.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </ScrollspySection>
          <ScrollspySection id="section-c" title="Section C">
            <p>Content for section C. Events are logged in the Actions panel.</p>
            <p>Donec sed odio dui. Donec ullamcorper nulla non metus auctor.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `onActivate` callback to respond to section changes.',
      },
    },
  },
};

/**
 * Custom root margin for fixed headers.
 */
export const CustomRootMargin: Story = {
  render: () => (
    <div className="row">
      <div className="col-4">
        <div id="margin-nav" className="list-group sticky-top" style={{ top: '10px' }}>
          <a className="list-group-item list-group-item-action" href="#margin-1">Section 1</a>
          <a className="list-group-item list-group-item-action" href="#margin-2">Section 2</a>
          <a className="list-group-item list-group-item-action" href="#margin-3">Section 3</a>
        </div>
      </div>
      <div className="col-8">
        <Scrollspy 
          target="#margin-nav" 
          height="300px"
          rootMargin="0px 0px -50%"
        >
          <ScrollspySection id="margin-1" title="Section 1">
            <p>With rootMargin set to "-50%", sections become active earlier.</p>
            <p>This is useful when you want the next section to highlight before reaching the top.</p>
          </ScrollspySection>
          <ScrollspySection id="margin-2" title="Section 2">
            <p>Adjust rootMargin based on your layout needs.</p>
            <p>Negative values activate sections earlier, positive values activate them later.</p>
          </ScrollspySection>
          <ScrollspySection id="margin-3" title="Section 3">
            <p>Common values: "-25%", "-33%", "-40%", "-50%".</p>
            <p>The default is "0px 0px -40%".</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize `rootMargin` to control when sections become active.',
      },
    },
  },
};

/**
 * Long content sections.
 */
export const LongContent: Story = {
  render: () => (
    <div className="row">
      <div className="col-3">
        <div id="long-nav" className="list-group sticky-top" style={{ top: '10px' }}>
          <a className="list-group-item list-group-item-action" href="#chapter-1">Chapter 1</a>
          <a className="list-group-item list-group-item-action" href="#chapter-2">Chapter 2</a>
          <a className="list-group-item list-group-item-action" href="#chapter-3">Chapter 3</a>
        </div>
      </div>
      <div className="col-9">
        <Scrollspy target="#long-nav" height="400px">
          <ScrollspySection id="chapter-1" title="Chapter 1: The Beginning">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, 
            nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. 
            Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. 
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus 
            eget urna mollis ornare vel eu leo.</p>
          </ScrollspySection>
          <ScrollspySection id="chapter-2" title="Chapter 2: The Journey">
            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta 
            felis euismod semper.</p>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem 
            nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
            <p>Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel 
            scelerisque nisl consectetur et.</p>
          </ScrollspySection>
          <ScrollspySection id="chapter-3" title="Chapter 3: The Conclusion">
            <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac 
            cursus commodo, tortor mauris condimentum nibh.</p>
            <p>Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue 
            laoreet rutrum faucibus dolor auctor.</p>
            <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac 
            facilisis in, egestas eget quam.</p>
            <p>The end.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Scrollspy handles long content sections effectively.',
      },
    },
  },
};

/**
 * Using the useScrollspy hook for programmatic control.
 */
export const UseScrollspyHook: Story = {
  name: 'useScrollspy Hook',
  render: function UseScrollspyStory() {
    const { ref, refresh } = useScrollspy({
      target: '#hook-nav',
      onActivate: action('onActivate'),
    });

    return (
      <div className="row">
        <div className="col-4">
          <div id="hook-nav" className="list-group">
            <a className="list-group-item list-group-item-action" href="#hook-1">Section 1</a>
            <a className="list-group-item list-group-item-action" href="#hook-2">Section 2</a>
            <a className="list-group-item list-group-item-action" href="#hook-3">Section 3</a>
          </div>
          <button className="btn btn-outline-primary mt-3" onClick={refresh}>
            Refresh Scrollspy
          </button>
        </div>
        <div className="col-8">
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            style={{ height: '250px', overflowY: 'auto', position: 'relative' }}
            tabIndex={0}
          >
            <div id="hook-1">
              <h4>Section 1</h4>
              <p>Content controlled via the useScrollspy hook.</p>
              <p>Use the refresh() method when content changes dynamically.</p>
            </div>
            <div id="hook-2">
              <h4>Section 2</h4>
              <p>The hook provides ref and refresh method.</p>
              <p>Attach ref to your scrollable container.</p>
            </div>
            <div id="hook-3">
              <h4>Section 3</h4>
              <p>Events are logged in the Actions panel.</p>
              <p>Click "Refresh Scrollspy" to manually refresh.</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `useScrollspy` hook for programmatic control and dynamic content.',
      },
    },
  },
};

/**
 * Documentation sidebar pattern.
 */
export const DocumentationSidebar: Story = {
  render: () => (
    <div className="row">
      <div className="col-3">
        <div className="bg-light p-3 rounded sticky-top" style={{ top: '10px' }}>
          <h6 className="text-uppercase fw-bold text-muted mb-3">Contents</h6>
          <nav id="docs-nav" className="nav flex-column">
            <a className="nav-link px-0 py-1" href="#doc-intro">Introduction</a>
            <a className="nav-link px-0 py-1" href="#doc-quick-start">Quick Start</a>
            <a className="nav-link px-0 py-1" href="#doc-installation">Installation</a>
            <a className="nav-link px-0 py-1" href="#doc-configuration">Configuration</a>
            <a className="nav-link px-0 py-1" href="#doc-examples">Examples</a>
            <a className="nav-link px-0 py-1" href="#doc-api">API Reference</a>
          </nav>
        </div>
      </div>
      <div className="col-9">
        <Scrollspy target="#docs-nav" height="500px">
          <article>
            <ScrollspySection id="doc-intro" title="Introduction" titleAs="h2">
              <p className="lead">Welcome to the documentation for our amazing library.</p>
              <p>This guide will help you get started quickly and understand all the features available.</p>
            </ScrollspySection>
            
            <hr className="my-4" />
            
            <ScrollspySection id="doc-quick-start" title="Quick Start" titleAs="h2">
              <p>Get up and running in just a few minutes with these simple steps:</p>
              <ol>
                <li>Install the package</li>
                <li>Import the components</li>
                <li>Start building!</li>
              </ol>
            </ScrollspySection>
            
            <hr className="my-4" />
            
            <ScrollspySection id="doc-installation" title="Installation" titleAs="h2">
              <p>Install using npm or yarn:</p>
              <pre className="bg-dark text-light p-3 rounded">
                <code>npm install my-awesome-library</code>
              </pre>
              <p>Or with yarn:</p>
              <pre className="bg-dark text-light p-3 rounded">
                <code>yarn add my-awesome-library</code>
              </pre>
            </ScrollspySection>
            
            <hr className="my-4" />
            
            <ScrollspySection id="doc-configuration" title="Configuration" titleAs="h2">
              <p>Configure the library by creating a config file:</p>
              <pre className="bg-dark text-light p-3 rounded">
                <code>{`{
  "theme": "dark",
  "plugins": ["analytics"]
}`}</code>
              </pre>
            </ScrollspySection>
            
            <hr className="my-4" />
            
            <ScrollspySection id="doc-examples" title="Examples" titleAs="h2">
              <p>Here are some common usage examples:</p>
              <div className="card mb-3">
                <div className="card-header">Basic Example</div>
                <div className="card-body">
                  <pre className="mb-0"><code>{`<Component prop="value" />`}</code></pre>
                </div>
              </div>
            </ScrollspySection>
            
            <hr className="my-4" />
            
            <ScrollspySection id="doc-api" title="API Reference" titleAs="h2">
              <table className="table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>variant</code></td>
                    <td>string</td>
                    <td>"primary"</td>
                  </tr>
                  <tr>
                    <td><code>size</code></td>
                    <td>string</td>
                    <td>"md"</td>
                  </tr>
                </tbody>
              </table>
            </ScrollspySection>
          </article>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A real-world documentation sidebar pattern with styled navigation.',
      },
    },
  },
};

/**
 * Horizontal scrollspy (rare use case).
 */
export const SmoothScrollDisabled: Story = {
  render: () => (
    <div className="row">
      <div className="col-4">
        <div id="no-smooth-nav" className="list-group">
          <a className="list-group-item list-group-item-action" href="#no-smooth-1">Section 1</a>
          <a className="list-group-item list-group-item-action" href="#no-smooth-2">Section 2</a>
          <a className="list-group-item list-group-item-action" href="#no-smooth-3">Section 3</a>
        </div>
      </div>
      <div className="col-8">
        <Scrollspy target="#no-smooth-nav" height="250px" smoothScroll={false}>
          <ScrollspySection id="no-smooth-1" title="Section 1">
            <p>Smooth scrolling is disabled for this example.</p>
            <p>Clicking nav links will jump instantly to sections.</p>
          </ScrollspySection>
          <ScrollspySection id="no-smooth-2" title="Section 2">
            <p>This is useful when you prefer instant navigation.</p>
            <p>Or for accessibility preferences.</p>
          </ScrollspySection>
          <ScrollspySection id="no-smooth-3" title="Section 3">
            <p>The default behavior includes smooth scrolling.</p>
            <p>Set smoothScroll={false} to disable it.</p>
          </ScrollspySection>
        </Scrollspy>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disable smooth scrolling for instant navigation jumps.',
      },
    },
  },
};
