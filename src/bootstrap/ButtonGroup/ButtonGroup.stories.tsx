import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';
import { ButtonGroup, ButtonToolbar, ToggleButtonGroup } from './ButtonGroup';
import { Button, LinkButton } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Bootstrap/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Group a series of buttons together on a single line or stack them vertically.

## Components

- **ButtonGroup** - Container for grouping buttons
- **ButtonToolbar** - Container for grouping multiple button groups
- **ToggleButtonGroup** - Checkbox/radio toggle button group with controlled state

## Features

- Horizontal and vertical layouts
- 3 sizes (sm, md, lg)
- Nested dropdowns
- Checkbox and radio toggle buttons
- ARIA accessibility support`,
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
        defaultValue: { summary: 'false' },
      },
    },
    role: {
      control: 'text',
      description: 'ARIA role for the button group',
      table: {
        defaultValue: { summary: 'group' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

// ============================================================================
// Basic Examples
// ============================================================================

export const Default: Story = {
  render: () => (
    <ButtonGroup ariaLabel="Basic example">
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const MixedStyles: Story = {
  render: () => (
    <ButtonGroup ariaLabel="Mixed styles">
      <Button variant="danger">Left</Button>
      <Button variant="warning">Middle</Button>
      <Button variant="success">Right</Button>
    </ButtonGroup>
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
    <ButtonGroup ariaLabel="Outlined buttons">
      <Button variant="primary" outline>Left</Button>
      <Button variant="primary" outline>Middle</Button>
      <Button variant="primary" outline>Right</Button>
    </ButtonGroup>
  ),
};

export const LinkButtons: Story = {
  render: () => (
    <ButtonGroup ariaLabel="Link buttons">
      <LinkButton href="#" variant="primary" active>Active link</LinkButton>
      <LinkButton href="#" variant="primary">Link</LinkButton>
      <LinkButton href="#" variant="primary">Link</LinkButton>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button group classes work with link buttons as well.',
      },
    },
  },
};

// ============================================================================
// Sizes
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <ButtonGroup size="lg" ariaLabel="Large button group">
        <Button variant="primary" outline>Left</Button>
        <Button variant="primary" outline>Middle</Button>
        <Button variant="primary" outline>Right</Button>
      </ButtonGroup>

      <ButtonGroup ariaLabel="Default button group">
        <Button variant="primary" outline>Left</Button>
        <Button variant="primary" outline>Middle</Button>
        <Button variant="primary" outline>Right</Button>
      </ButtonGroup>

      <ButtonGroup size="sm" ariaLabel="Small button group">
        <Button variant="primary" outline>Left</Button>
        <Button variant="primary" outline>Middle</Button>
        <Button variant="primary" outline>Right</Button>
      </ButtonGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Apply `size` prop to the group instead of individual buttons.',
      },
    },
  },
};

// ============================================================================
// Vertical
// ============================================================================

export const Vertical: Story = {
  render: () => (
    <ButtonGroup vertical ariaLabel="Vertical button group">
      <Button variant="primary">Button</Button>
      <Button variant="primary">Button</Button>
      <Button variant="primary">Button</Button>
      <Button variant="primary">Button</Button>
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `vertical` prop to stack buttons vertically.',
      },
    },
  },
};

export const VerticalWithDropdowns: Story = {
  render: () => (
    <ButtonGroup vertical ariaLabel="Vertical with dropdowns">
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        items={[
          { label: 'Action', href: '#' },
          { label: 'Another action', href: '#' },
        ]}
      />
      <Button variant="primary">Button</Button>
      <Button variant="primary">Button</Button>
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        direction="up"
        items={[
          { label: 'Action', href: '#' },
          { label: 'Another action', href: '#' },
        ]}
      />
    </ButtonGroup>
  ),
};

// ============================================================================
// Button Toolbar
// ============================================================================

export const Toolbar: Story = {
  render: () => (
    <ButtonToolbar ariaLabel="Toolbar with button groups">
      <ButtonGroup ariaLabel="First group" className="me-2">
        <Button variant="primary">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="primary">3</Button>
        <Button variant="primary">4</Button>
      </ButtonGroup>
      <ButtonGroup ariaLabel="Second group" className="me-2">
        <Button variant="secondary">5</Button>
        <Button variant="secondary">6</Button>
        <Button variant="secondary">7</Button>
      </ButtonGroup>
      <ButtonGroup ariaLabel="Third group">
        <Button variant="info">8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `ButtonToolbar` to combine multiple button groups.',
      },
    },
  },
};

export const ToolbarWithInput: Story = {
  render: () => (
    <ButtonToolbar ariaLabel="Toolbar with input">
      <ButtonGroup ariaLabel="First group" className="me-2">
        <Button variant="secondary" outline>1</Button>
        <Button variant="secondary" outline>2</Button>
        <Button variant="secondary" outline>3</Button>
        <Button variant="secondary" outline>4</Button>
      </ButtonGroup>
      <div className="input-group">
        <div className="input-group-text">@</div>
        <input
          type="text"
          className="form-control"
          placeholder="Input group example"
          aria-label="Input group example"
        />
      </div>
    </ButtonToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mix input groups with button groups in toolbars.',
      },
    },
  },
};

export const ToolbarJustified: Story = {
  render: () => (
    <ButtonToolbar ariaLabel="Toolbar justified" className="justify-content-between">
      <ButtonGroup ariaLabel="First group">
        <Button variant="secondary" outline>1</Button>
        <Button variant="secondary" outline>2</Button>
        <Button variant="secondary" outline>3</Button>
        <Button variant="secondary" outline>4</Button>
      </ButtonGroup>
      <div className="input-group" style={{ maxWidth: '200px' }}>
        <div className="input-group-text">@</div>
        <input type="text" className="form-control" placeholder="Username" />
      </div>
    </ButtonToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flexbox utilities like `justify-content-between` on the toolbar.',
      },
    },
  },
};

// ============================================================================
// Nesting (Dropdowns)
// ============================================================================

export const WithDropdown: Story = {
  render: () => (
    <ButtonGroup ariaLabel="Button group with dropdown">
      <Button variant="primary">1</Button>
      <Button variant="primary">2</Button>
      <Dropdown
        buttonText="Dropdown"
        variant="primary"
        items={[
          { label: 'Dropdown link', href: '#' },
          { label: 'Dropdown link', href: '#' },
        ]}
      />
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Nest dropdown menus within button groups.',
      },
    },
  },
};

// ============================================================================
// Toggle Button Groups
// ============================================================================

export const RadioToggle: Story = {
  render: () => (
    <ToggleButtonGroup
      type="radio"
      name="alignment"
      options={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
      ]}
      defaultValue="left"
      ariaLabel="Text alignment"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `ToggleButtonGroup` with `type="radio"` for single selection.',
      },
    },
  },
};

export const CheckboxToggle: Story = {
  render: () => (
    <ToggleButtonGroup
      type="checkbox"
      options={[
        { value: 'bold', label: 'Bold' },
        { value: 'italic', label: 'Italic' },
        { value: 'underline', label: 'Underline' },
      ]}
      defaultValue={['bold']}
      ariaLabel="Text formatting"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `type="checkbox"` for multi-selection toggle buttons.',
      },
    },
  },
};

export const ToggleVariants: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <ToggleButtonGroup
        type="radio"
        name="variant-primary"
        variant="primary"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        defaultValue="1"
        ariaLabel="Primary variant"
      />

      <ToggleButtonGroup
        type="radio"
        name="variant-danger"
        variant="danger"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        defaultValue="1"
        ariaLabel="Danger variant"
      />

      <ToggleButtonGroup
        type="radio"
        name="variant-success"
        variant="success"
        outline={false}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        defaultValue="1"
        ariaLabel="Success solid variant"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle button groups support all button variants. Use `outline={false}` for solid buttons.',
      },
    },
  },
};

export const VerticalToggle: Story = {
  render: () => (
    <ToggleButtonGroup
      type="radio"
      name="vertical-radio"
      vertical
      variant="danger"
      options={[
        { value: '1', label: 'Radio 1' },
        { value: '2', label: 'Radio 2' },
        { value: '3', label: 'Radio 3' },
      ]}
      defaultValue="1"
      ariaLabel="Vertical radio toggle"
    />
  ),
};

export const ControlledToggle: Story = {
  render: () => {
    const [value, setValue] = React.useState('center');
    return (
      <div className="d-flex flex-column gap-3">
        <ToggleButtonGroup
          type="radio"
          name="controlled"
          value={value}
          onChange={(v) => {
            setValue(v as string);
            action('onChange')(v);
          }}
          options={[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' },
          ]}
          ariaLabel="Controlled toggle"
        />
        <p className="text-muted mb-0">Selected: {value}</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use `value` and `onChange` props for controlled mode.',
      },
    },
  },
};

export const DisabledOptions: Story = {
  render: () => (
    <ToggleButtonGroup
      type="radio"
      name="disabled-options"
      options={[
        { value: '1', label: 'Available' },
        { value: '2', label: 'Disabled', disabled: true },
        { value: '3', label: 'Available' },
      ]}
      defaultValue="1"
      ariaLabel="With disabled option"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual options can be disabled.',
      },
    },
  },
};

// Need React for controlled example
import React from 'react';
