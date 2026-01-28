import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionButton,
  AccordionCollapse,
  AccordionBody,
  SimpleAccordion,
} from './Accordion';
import type { AccordionItemConfig } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Bootstrap/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Accordions allow you to vertically collapse and expand content sections.
Built on Bootstrap's collapse JavaScript plugin for smooth animations and accessibility.

## Features
- **Flush variant**: Edge-to-edge rendering without borders
- **Always open**: Allow multiple sections to remain open simultaneously
- **Multiple defaults**: Open multiple sections by default
- **Building blocks**: Use sub-components for custom layouts

## Components
- \`Accordion\` - Main component with items array
- \`SimpleAccordion\` - Convenience wrapper with sensible defaults
- \`AccordionItem\` / \`AccordionHeader\` / \`AccordionButton\` / \`AccordionCollapse\` / \`AccordionBody\` - Building blocks for custom layouts
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of accordion items with header and body content',
      control: { type: 'object' },
      table: {
        type: { summary: 'AccordionItemConfig[]' },
      },
    },
    id: {
      control: 'text',
      description: 'Root ID for the accordion, used for aria and data-bs-parent',
      table: {
        type: { summary: 'string' },
      },
    },
    flush: {
      control: 'boolean',
      description: 'Remove borders and rounded corners for edge-to-edge rendering',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    alwaysOpen: {
      control: 'boolean',
      description: 'Allow multiple items to be open at once',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultOpen: {
      control: 'object',
      description: 'Index or array of indices of items open by default (-1 or [] for none)',
      table: {
        type: { summary: 'number | number[]' },
        defaultValue: { summary: '0' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the accordion container',
      table: {
        type: { summary: 'string' },
      },
    },
    onHide: {
      action: 'hide',
      description: 'Callback fired immediately when an item starts to hide',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onHidden: {
      action: 'hidden',
      description: 'Callback fired when an item has been hidden',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onShow: {
      action: 'show',
      description: 'Callback fired immediately when an item starts to show',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onShown: {
      action: 'shown',
      description: 'Callback fired when an item has been shown',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample items for stories
const sampleItems: AccordionItemConfig[] = [
  {
    header: 'Accordion Item #1',
    body: (
      <>
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or
        overriding our default variables.
      </>
    ),
  },
  {
    header: 'Accordion Item #2',
    body: (
      <>
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions.
      </>
    ),
  },
  {
    header: 'Accordion Item #3',
    body: (
      <>
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element.
      </>
    ),
  },
];

// ============================================================================
// Basic Stories
// ============================================================================

export const Default: Story = {
  args: {
    items: sampleItems,
    defaultOpen: 0,
  },
  render: (args) => (
    // Key forces remount when alwaysOpen changes so Bootstrap JS reinitializes
    <Accordion key={`accordion-${args.alwaysOpen}`} {...args} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic accordion with first item open by default.',
      },
    },
  },
};

export const Flush: Story = {
  args: {
    items: sampleItems,
    flush: true,
    defaultOpen: 0,
  },
  render: (args) => (
    <Accordion key={`accordion-${args.alwaysOpen}-${args.flush}`} {...args} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Flush accordion removes borders and rounded corners for edge-to-edge rendering within a parent container.',
      },
    },
  },
};

export const AlwaysOpen: Story = {
  args: {
    items: sampleItems,
    alwaysOpen: true,
    defaultOpen: [0, 1],
  },
  render: (args) => (
    <Accordion key={`accordion-${args.alwaysOpen}`} {...args} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Always open mode allows multiple accordion items to remain open at the same time. This omits the `data-bs-parent` attribute.',
      },
    },
  },
};

export const NoneOpen: Story = {
  name: 'None Open by Default',
  args: {
    items: sampleItems,
    defaultOpen: -1,
  },
  render: (args) => (
    <Accordion key={`accordion-${args.alwaysOpen}`} {...args} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set `defaultOpen` to -1 or an empty array to start with all items collapsed.',
      },
    },
  },
};

export const MultipleDefaultOpen: Story = {
  name: 'Multiple Items Open',
  args: {
    items: sampleItems,
    alwaysOpen: true,
    defaultOpen: [0, 2],
  },
  render: (args) => (
    <Accordion key={`accordion-${args.alwaysOpen}`} {...args} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'With `alwaysOpen`, you can set multiple items to be open by default using an array of indices.',
      },
    },
  },
};

// ============================================================================
// Event Handling
// ============================================================================

export const WithEvents: Story = {
  name: 'With Event Callbacks',
  args: {
    items: sampleItems,
    defaultOpen: 0,
    onHide: action('hide'),
    onHidden: action('hidden'),
    onShow: action('show'),
    onShown: action('shown'),
  },
  render: (args) => (
    <Accordion key={`accordion-${args.alwaysOpen}`} {...args} />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accordion with event callbacks for show/hide transitions. Check the Actions panel to see events fired.',
      },
    },
  },
};

// ============================================================================
// Custom Content
// ============================================================================

const richContentItems: AccordionItemConfig[] = [
  {
    header: (
      <span className="d-flex align-items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
        </svg>
        Home Settings
      </span>
    ),
    body: (
      <div className="row">
        <div className="col-md-6">
          <h6>General</h6>
          <ul className="list-unstyled">
            <li>Homepage layout</li>
            <li>Widget placement</li>
            <li>Theme selection</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h6>Personalization</h6>
          <ul className="list-unstyled">
            <li>Color scheme</li>
            <li>Font size</li>
            <li>Language</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    header: (
      <span className="d-flex align-items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
          <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415"/>
        </svg>
        Security & Privacy
      </span>
    ),
    body: (
      <div>
        <div className="alert alert-warning mb-3">
          <strong>Two-factor authentication is disabled.</strong> Enable it for added security.
        </div>
        <button className="btn btn-primary btn-sm me-2">Enable 2FA</button>
        <button className="btn btn-outline-secondary btn-sm">Privacy Settings</button>
      </div>
    ),
  },
  {
    header: (
      <span className="d-flex align-items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
        </svg>
        Notifications
      </span>
    ),
    body: (
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="emailNotifications" defaultChecked />
        <label className="form-check-label" htmlFor="emailNotifications">Email notifications</label>
      </div>
    ),
  },
];

export const WithIcons: Story = {
  name: 'With Icons in Headers',
  args: {
    items: richContentItems,
    defaultOpen: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion items can have custom header content including icons and complex body content.',
      },
    },
  },
};

// ============================================================================
// FAQ Example
// ============================================================================

const faqItems: AccordionItemConfig[] = [
  {
    header: 'What is Bootstrap?',
    body: 'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. It includes HTML, CSS, and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
  },
  {
    header: 'Is Bootstrap free to use?',
    body: 'Yes! Bootstrap is completely free and open-source. It is released under the MIT license, which means you can use it for personal and commercial projects without any restrictions.',
  },
  {
    header: 'Does Bootstrap support dark mode?',
    body: 'Yes, Bootstrap 5.3 introduced native dark mode support using CSS custom properties. You can enable dark mode by adding the data-bs-theme="dark" attribute to your HTML element.',
  },
  {
    header: 'Can I customize Bootstrap?',
    body: 'Absolutely! Bootstrap is built with Sass and can be extensively customized. You can override default variables, use only the components you need, or extend the framework with your own styles.',
  },
];

export const FAQ: Story = {
  name: 'FAQ Pattern',
  args: {
    items: faqItems,
    alwaysOpen: true,
    defaultOpen: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Common FAQ pattern using always-open accordion with all items collapsed by default.',
      },
    },
  },
};

// ============================================================================
// Building Blocks Pattern
// ============================================================================

export const BuildingBlocks: Story = {
  name: 'Building Blocks Pattern',
  render: () => (
    <div className="accordion" id="customAccordion">
      <AccordionItem>
        <AccordionHeader id="customHeading1">
          <AccordionButton target="customCollapse1" expanded>
            Custom Item One
          </AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="customCollapse1" labelledBy="customHeading1" show>
          <AccordionBody>
            <p>This accordion is built using individual building block components.</p>
            <p>This pattern gives you full control over the accordion structure.</p>
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader id="customHeading2">
          <AccordionButton target="customCollapse2">
            Custom Item Two
          </AccordionButton>
        </AccordionHeader>
        <AccordionCollapse id="customCollapse2" labelledBy="customHeading2">
          <AccordionBody className="bg-light">
            <p className="mb-0">
              You can apply custom classes to AccordionBody for different styling.
            </p>
          </AccordionBody>
        </AccordionCollapse>
      </AccordionItem>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the building block components (\`AccordionItem\`, \`AccordionHeader\`, \`AccordionButton\`, \`AccordionCollapse\`, \`AccordionBody\`) for complete control over accordion structure.

Note: When using building blocks outside of the \`Accordion\` component, you need to manually add the outer \`.accordion\` div and handle the \`data-bs-parent\` attribute on \`AccordionCollapse\` if you want exclusive open behavior.
        `,
      },
    },
  },
};

// ============================================================================
// SimpleAccordion
// ============================================================================

export const Simple: Story = {
  name: 'SimpleAccordion',
  render: () => (
    <SimpleAccordion
      items={sampleItems}
      flush
      alwaysOpen
      defaultOpen={0}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'SimpleAccordion is a convenience wrapper with sensible defaults for common use cases.',
      },
    },
  },
};
