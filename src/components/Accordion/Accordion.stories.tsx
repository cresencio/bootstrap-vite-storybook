import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import type { AccordionProps } from './Accordion';

const meta: Meta<AccordionProps> = {
  title: 'Bootstrap/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap accordions allow you to vertically collapse and expand content sections. The accordion uses the Bootstrap collapse JavaScript plugin to show and hide content. Perfect for FAQs, navigation menus, and more.',
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of accordion items with title and content',
      table: {
        type: { summary: 'AccordionItem[]' },
      },
    },
    id: {
      control: 'text',
      description: 'Root id for the accordion, used for aria and data-bs-parent',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'accordionExample' },
      },
    },
    flush: {
      control: 'boolean',
      description: 'Remove borders and border-radius for edge-to-edge rendering',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    defaultOpen: {
      control: 'number',
      description: 'Index of the item that should be open by default (0-based, -1 for none)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    onHide: { 
      action: 'hide.bs.collapse',
      description: 'Callback fired immediately when the hide method has been called',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onHidden: { 
      action: 'hidden.bs.collapse',
      description: 'Callback fired when a collapse element has been hidden from the user',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onShow: { 
      action: 'show.bs.collapse',
      description: 'Callback fired immediately when the show instance method is called',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
    onShown: { 
      action: 'shown.bs.collapse',
      description: 'Callback fired when a collapse element has been made visible to the user',
      table: {
        type: { summary: '(event: Event) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

const sampleItems = [
  {
    title: 'Accordion Item #1',
    content: (
      <>
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to
        style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables.
      </>
    ),
  },
  {
    title: 'Accordion Item #2',
    content: (
      <>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use
        to style each element.
      </>
    ),
  },
  {
    title: 'Accordion Item #3',
    content: (
      <>
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we
        use to style each element.
      </>
    ),
  },
];

export const Default: Story = {
  args: {
    id: 'accordionExample',
    items: sampleItems,
    defaultOpen: 0,
  },
};

export const Flush: Story = {
  args: {
    id: 'accordionFlush',
    items: sampleItems,
    flush: true,
    defaultOpen: -1,
  },
};
