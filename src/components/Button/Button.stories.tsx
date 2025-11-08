import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Bootstrap/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bootstrap buttons with support for multiple sizes, states, and variants. Includes support for solid, outline, and link styles.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
      description: 'The button variant/color theme',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'md' },
      },
    },
    outline: {
      control: 'boolean',
      description: 'Render as outline style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const OutlineButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary" outline>Primary</Button>
      <Button variant="secondary" outline>Secondary</Button>
      <Button variant="success" outline>Success</Button>
      <Button variant="danger" outline>Danger</Button>
      <Button variant="warning" outline>Warning</Button>
      <Button variant="info" outline>Info</Button>
      <Button variant="light" outline>Light</Button>
      <Button variant="dark" outline>Dark</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons for a more subtle appearance with transparent backgrounds.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" size="md">Default</Button>
      <Button variant="primary" size="sm">Small</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes: small, medium (default), and large.',
      },
    },
  },
};

export const CustomSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button 
        variant="primary"
        style={{
          '--bs-btn-padding-y': '.25rem',
          '--bs-btn-padding-x': '.5rem',
          '--bs-btn-font-size': '.75rem',
        } as React.CSSProperties}
      >
        Custom button
      </Button>
      <Button variant="primary" size="sm">Small button</Button>
      <Button 
        variant="secondary"
        style={{
          '--bs-btn-padding-y': '.75rem',
          '--bs-btn-padding-x': '1.5rem',
          '--bs-btn-font-size': '1.25rem',
        } as React.CSSProperties}
      >
        Extra large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create custom button sizes by setting CSS variables: `--bs-btn-padding-y`, `--bs-btn-padding-x`, and `--bs-btn-font-size`.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Primary button</Button>
      <Button variant="secondary" disabled>Button</Button>
      <Button variant="primary" outline disabled>Primary button</Button>
      <Button variant="secondary" outline disabled>Button</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons have reduced opacity and pointer-events disabled. Works with both solid and outline button styles.',
      },
    },
  },
};

export const DisabledLinkButtons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <a className="btn btn-primary disabled" role="button" aria-disabled="true">Primary link</a>
      <a className="btn btn-secondary disabled" role="button" aria-disabled="true">Link</a>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons using `<a>` elements behave differently: they don\'t support the `disabled` attribute, so you must add the `.disabled` class. Include `aria-disabled="true"` for accessibility and omit the `href` attribute. Pointer events are automatically disabled.',
      },
    },
  },
};

export const DisabledLinkWithHref: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <a href="#" className="btn btn-primary disabled" tabIndex={-1} role="button" aria-disabled="true">Primary link</a>
      <a href="#" className="btn btn-secondary disabled" tabIndex={-1} role="button" aria-disabled="true">Link</a>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '**Link functionality caveat:** If you must keep the `href` attribute on a disabled link, the `.disabled` class uses `pointer-events: none` to disable link functionality. However, keyboard navigation remains unaffected in all browsers. To fully disable these links, add `tabindex="-1"` to prevent keyboard focus and use custom JavaScript to disable their functionality altogether.',
      },
    },
  },
};

export const BlockButton: Story = {
  render: () => (
    <div className="d-grid gap-2">
      <button className="btn btn-primary" type="button">Button</button>
      <button className="btn btn-primary" type="button">Button</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create responsive stacks of full-width "block buttons" using Bootstrap\'s display and gap utilities.',
      },
    },
  },
};

export const ResponsiveBlockButton: Story = {
  render: () => (
    <div className="d-grid gap-2 d-md-block">
      <button className="btn btn-primary" type="button">Button</button>
      <button className="btn btn-primary" type="button">Button</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create a responsive variation with vertically stacked buttons until the `md` breakpoint, where `d-md-block` replaces the `d-grid` class, nullifying the `gap-2` utility. Resize your browser to see them change.',
      },
    },
  },
};

export const BlockButtonWithWidth: Story = {
  render: () => (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-primary" type="button">Button</button>
      <button className="btn btn-primary" type="button">Button</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Adjust the width of block buttons with grid column width classes. For example, `col-6` creates a half-width block button. Use `mx-auto` to center it horizontally.',
      },
    },
  },
};

export const BlockButtonWithAlignment: Story = {
  render: () => (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button className="btn btn-primary me-md-2" type="button">Button</button>
      <button className="btn btn-primary" type="button">Button</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flex utilities to adjust button alignment when horizontal. This example combines responsive display (`d-md-flex`), justification (`justify-content-md-end`), and margin utilities (`me-md-2`) to right-align buttons when they\'re no longer stacked.',
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button variant="primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download me-2" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Download
      </Button>
      <Button variant="success">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle me-2" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
        Success
      </Button>
      <Button variant="danger" outline>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash me-2" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        Delete
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combine buttons with icons for enhanced visual communication.',
      },
    },
  },
};

export const NoTextWrap: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column', maxWidth: '200px' }}>
      <Button variant="primary">
        This button text wraps normally
      </Button>
      <Button variant="primary" className="text-nowrap">
        This button text does not wrap
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `text-nowrap` class to prevent button text from wrapping. You can also set `$btn-white-space: nowrap` in your SCSS to disable text wrapping for all buttons.',
      },
    },
  },
};

export const ButtonTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <a className="btn btn-primary" href="#" role="button">Link</a>
      <button className="btn btn-primary" type="submit">Button</button>
      <input className="btn btn-primary" type="button" value="Input" />
      <input className="btn btn-primary" type="submit" value="Submit" />
      <input className="btn btn-primary" type="reset" value="Reset" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The `.btn` classes are designed to be used with the `<button>` element, but can also be used on `<a>` or `<input>` elements. When using button classes on `<a>` elements that trigger in-page functionality (like collapsing content), add `role="button"` to convey their purpose to assistive technologies.',
      },
    },
  },
};

export const ToggleButtons: Story = {
  render: () => (
    <>
      <p className="d-inline-flex gap-1">
        <button type="button" className="btn" data-bs-toggle="button">Toggle button</button>
        <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
        <button type="button" className="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
      </p>
      <p className="d-inline-flex gap-1">
        <button type="button" className="btn btn-primary" data-bs-toggle="button">Toggle button</button>
        <button type="button" className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
        <button type="button" className="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
      </p>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: '**Button plugin:** Create simple on/off toggle buttons using `data-bs-toggle="button"`. These toggle buttons are visually identical to checkbox toggles but are announced differently by screen readers as "button"/"button pressed" rather than "checked"/"not checked". For pre-toggled buttons, add the `.active` class and `aria-pressed="true"` to ensure proper accessibility.',
      },
    },
  },
};

export const ToggleLinks: Story = {
  render: () => (
    <>
      <p className="d-inline-flex gap-1">
        <a href="#" className="btn" role="button" data-bs-toggle="button">Toggle link</a>
        <a href="#" className="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
        <a className="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
      </p>
      <p className="d-inline-flex gap-1">
        <a href="#" className="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>
        <a href="#" className="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>
        <a className="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>
      </p>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle functionality can also be applied to anchor links. Note that disabled toggle links omit the `href` attribute and include `aria-disabled="true"`.',
      },
    },
  },
};
