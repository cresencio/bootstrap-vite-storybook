import type { Meta, StoryObj } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import type { ButtonGroupProps } from './ButtonGroup';
import { Button } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

const meta: Meta<ButtonGroupProps> = {
  title: 'Bootstrap/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Group a series of buttons together on a single line or stack them in a vertical column.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button group',
      table: {
        type: { summary: 'ButtonGroupSize' },
        defaultValue: { summary: 'md' },
      },
    },
    vertical: {
      control: 'boolean',
      description: 'Stack buttons vertically',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    role: {
      control: 'text',
      description: 'ARIA role for the button group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"group"' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonGroupProps>;

export const BasicExample: Story = {
  render: () => (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">Left</button>
      <button type="button" className="btn btn-primary">Middle</button>
      <button type="button" className="btn btn-primary">Right</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Group a series of buttons together on a single line with the `.btn-group` wrapper.',
      },
    },
  },
};

export const UsingComponent: Story = {
  args: {
    ariaLabel: 'Basic example',
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Same example using the ButtonGroup component with Button components. Button groups require an appropriate `role` attribute and explicit label to ensure assistive technologies identify buttons as grouped. Use `role="group"` for button groups or `role="toolbar"` for button toolbars, then use `aria-label` or `aria-labelledby` to label them.',
      },
    },
  },
};

export const LinkButtons: Story = {
  render: () => (
    <div className="btn-group">
      <a href="#" className="btn btn-primary active" aria-current="page">Active link</a>
      <a href="#" className="btn btn-primary">Link</a>
      <a href="#" className="btn btn-primary">Link</a>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button group classes can also be added to groups of links, as an alternative to the `.nav` navigation components.',
      },
    },
  },
};

export const MixedStyles: Story = {
  render: () => (
    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" className="btn btn-danger">Left</button>
      <button type="button" className="btn btn-warning">Middle</button>
      <button type="button" className="btn btn-success">Right</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mix different button variants within a button group.',
      },
    },
  },
};

export const OutlineButtons: Story = {
  render: () => (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" className="btn btn-outline-primary">Left</button>
      <button type="button" className="btn btn-outline-primary">Middle</button>
      <button type="button" className="btn btn-outline-primary">Right</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use outline button styles within button groups.',
      },
    },
  },
};

export const CheckboxToggle: Story = {
  render: () => (
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
      <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

      <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

      <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combine button-like checkbox toggle buttons into a seamless looking button group.',
      },
    },
  },
};

export const RadioToggle: Story = {
  render: () => (
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
      <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combine button-like radio toggle buttons into a seamless looking button group. Radio buttons in the same group share a `name` attribute.',
      },
    },
  },
};

export const ButtonToolbar: Story = {
  render: () => (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary">1</button>
        <button type="button" className="btn btn-primary">2</button>
        <button type="button" className="btn btn-primary">3</button>
        <button type="button" className="btn btn-primary">4</button>
      </div>
      <div className="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" className="btn btn-secondary">5</button>
        <button type="button" className="btn btn-secondary">6</button>
        <button type="button" className="btn btn-secondary">7</button>
      </div>
      <div className="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn btn-info">8</button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more. Use `role="toolbar"` for button toolbars.',
      },
    },
  },
};

export const ToolbarWithInput: Story = {
  render: () => (
    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">1</button>
        <button type="button" className="btn btn-outline-secondary">2</button>
        <button type="button" className="btn btn-outline-secondary">3</button>
        <button type="button" className="btn btn-outline-secondary">4</button>
      </div>
      <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon">@</div>
        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mix input groups with button groups in toolbars. Use utility classes like `me-2` to space elements properly.',
      },
    },
  },
};

export const ToolbarJustified: Story = {
  render: () => (
    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">1</button>
        <button type="button" className="btn btn-outline-secondary">2</button>
        <button type="button" className="btn btn-outline-secondary">3</button>
        <button type="button" className="btn btn-outline-secondary">4</button>
      </div>
      <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon2">@</div>
        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flexbox utilities like `justify-content-between` to space toolbar elements apart.',
      },
    },
  },
};

export const Sizing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
        <button type="button" className="btn btn-outline-primary">Left</button>
        <button type="button" className="btn btn-outline-primary">Middle</button>
        <button type="button" className="btn btn-outline-primary">Right</button>
      </div>
      
      <div className="btn-group" role="group" aria-label="Default button group">
        <button type="button" className="btn btn-outline-primary">Left</button>
        <button type="button" className="btn btn-outline-primary">Middle</button>
        <button type="button" className="btn btn-outline-primary">Right</button>
      </div>
      
      <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
        <button type="button" className="btn btn-outline-primary">Left</button>
        <button type="button" className="btn btn-outline-primary">Middle</button>
        <button type="button" className="btn btn-outline-primary">Right</button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Instead of applying button sizing classes to every button in a group, just add `.btn-group-lg` or `.btn-group-sm` to the `.btn-group`.',
      },
    },
  },
};

export const Nesting: Story = {
  render: () => (
    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
      <button type="button" className="btn btn-primary">1</button>
      <button type="button" className="btn btn-primary">2</button>

      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        items={[
          { label: 'Dropdown link', href: '#' },
          { label: 'Dropdown link', href: '#' },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Place a `.btn-group` within another `.btn-group` when you want dropdown menus mixed with a series of buttons.',
      },
    },
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
      <button type="button" className="btn btn-primary">Button</button>
      <button type="button" className="btn btn-primary">Button</button>
      <button type="button" className="btn btn-primary">Button</button>
      <button type="button" className="btn btn-primary">Button</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Make a set of buttons appear vertically stacked rather than horizontally using `.btn-group-vertical`.',
      },
    },
  },
};

export const VerticalWithDropdowns: Story = {
  render: () => (
    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        items={[
          { label: 'Dropdown link', href: '#' },
          { label: 'Dropdown link', href: '#' },
        ]}
      />
      <button type="button" className="btn btn-primary">Button</button>
      <button type="button" className="btn btn-primary">Button</button>
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        direction="start"
        items={[
          { label: 'Dropdown link', href: '#' },
          { label: 'Dropdown link', href: '#' },
        ]}
      />
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        direction="end"
        items={[
          { label: 'Dropdown link', href: '#' },
          { label: 'Dropdown link', href: '#' },
        ]}
      />
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        direction="up"
        items={[
          { label: 'Dropdown link', href: '#' },
          { label: 'Dropdown link', href: '#' },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical button groups can include nested dropdown menus with different directions (dropstart, dropend, dropup).',
      },
    },
  },
};

export const VerticalRadio: Story = {
  render: () => (
    <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" defaultChecked />
      <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" />
      <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" />
      <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical button groups also work with radio toggle buttons.',
      },
    },
  },
};
