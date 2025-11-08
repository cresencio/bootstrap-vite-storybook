import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import type { AccordionProps } from './Accordion';

const meta: Meta<AccordionProps> = {
  title: 'Bootstrap/Accordion',
  component: Accordion,
  argTypes: {
    flush: {
      control: 'boolean',
      description: 'Remove borders and border-radius for edge-to-edge rendering',
    },
    defaultOpen: {
      control: 'number',
      description: 'Index of the item that should be open by default (0-based, -1 for none)',
    },
    onHide: { action: 'hide.bs.collapse' },
    onHidden: { action: 'hidden.bs.collapse' },
    onShow: { action: 'show.bs.collapse' },
    onShown: { action: 'shown.bs.collapse' },
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
