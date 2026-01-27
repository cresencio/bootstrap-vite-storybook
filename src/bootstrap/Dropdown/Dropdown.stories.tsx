import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown';

const meta: Meta<DropdownProps> = {
  title: 'Bootstrap/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.',
      },
    },
  },
  argTypes: {
    buttonText: {
      control: 'text',
      description: 'Button text',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: 'object',
      description: 'Array of dropdown items',
      table: {
        type: { summary: 'DropdownItem[]' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Button variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'secondary' },
      },
    },
    direction: {
      control: 'select',
      options: ['down', 'up', 'start', 'end'],
      description: 'Dropdown direction',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'down' },
      },
    },
    dark: {
      control: 'boolean',
      description: 'Dark dropdown style',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    btnGroup: {
      control: 'boolean',
      description: 'Use btn-group wrapper for nesting in ButtonGroup (enables flush alignment)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<DropdownProps>;

export const Basic: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic dropdown with a button toggle and menu items.',
      },
    },
  },
};

export const UsingComponent: Story = {
  args: {
    buttonText: 'Dropdown button',
    items: [
      { label: 'Action', href: '#' },
      { label: 'Another action', href: '#' },
      { label: 'Something else here', href: '#' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Same dropdown using the Dropdown component.',
      },
    },
  },
};

export const DropdownLink: Story = {
  render: () => (
    <div className="dropdown">
      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
      </a>

      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdowns can also be triggered by anchor links instead of buttons.',
      },
    },
  },
};

export const DangerButton: Story = {
  render: () => (
    <div className="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Danger
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dropdowns work with any button variant and can include dividers to separate groups of menu items.',
      },
    },
  },
};

export const SplitButton: Story = {
  render: () => (
    <div className="btn-group">
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class. This extra class reduces the horizontal padding on either side of the caret by 25% and provides a more appropriately sized hit area next to the main button.',
      },
    },
  },
};

export const Sizing: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {/* Large button groups */}
      <div className="btn-group">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Large button
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div className="btn-group">
        <button className="btn btn-secondary btn-lg" type="button">
          Large split button
        </button>
        <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      {/* Small button groups */}
      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Small button
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div className="btn-group">
        <button className="btn btn-secondary btn-sm" type="button">
          Small split button
        </button>
        <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button dropdowns work with buttons of all sizes, including default and split dropdown buttons. Use `.btn-lg` or `.btn-sm` classes on the buttons.',
      },
    },
  },
};

export const Centered: Story = {
  render: () => (
    <div className="dropdown-center">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Centered dropdown
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Action two</a></li>
        <li><a className="dropdown-item" href="#">Action three</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Make the dropdown menu centered below the toggle with `.dropdown-center` on the parent element.',
      },
    },
  },
};

export const Dropup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {/* Default dropup button */}
      <div className="btn-group dropup">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropup
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      {/* Split dropup button */}
      <div className="btn-group dropup">
        <button type="button" className="btn btn-secondary">
          Split dropup
        </button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Trigger dropdown menus above elements by adding `.dropup` to the parent element.',
      },
    },
  },
};

export const DropupCentered: Story = {
  render: () => (
    <div className="dropup-center dropup">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Centered dropup
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Action two</a></li>
        <li><a className="dropdown-item" href="#">Action three</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Make the dropup menu centered above the toggle with `.dropup-center` on the parent element.',
      },
    },
  },
};

export const Dropend: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {/* Default dropend button */}
      <div className="btn-group dropend">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropend
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      {/* Split dropend button */}
      <div className="btn-group dropend">
        <button type="button" className="btn btn-secondary">
          Split dropend
        </button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropend</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Trigger dropdown menus at the right of the elements by adding `.dropend` to the parent element.',
      },
    },
  },
};

export const Dropstart: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {/* Default dropstart button */}
      <div className="btn-group dropstart">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropstart
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>

      {/* Split dropstart button */}
      <div className="btn-group dropstart">
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropstart</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button type="button" className="btn btn-secondary">
          Split dropstart
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Trigger dropdown menus at the left of the elements by adding `.dropstart` to the parent element. Note that for split dropstart buttons, the toggle button comes before the menu in the markup.',
      },
    },
  },
};

/**
 * You can use `<button>` elements as dropdown items instead of `<a>` elements.
 */
export const ButtonItems: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" type="button">Action</button></li>
        <li><button className="dropdown-item" type="button">Another action</button></li>
        <li><button className="dropdown-item" type="button">Something else here</button></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can use `<button>` elements as dropdown items instead of `<a>` elements.',
      },
    },
  },
};

/**
 * Create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.
 */
export const DropdownItemText: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li><span className="dropdown-item-text">Dropdown item text</span></li>
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create non-interactive dropdown items with `.dropdown-item-text`. Feel free to style further with custom CSS or text utilities.',
      },
    },
  },
};

/**
 * Add `.active` to items in the dropdown to style them as active. To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for the current page, or `true` for the current item in a set.
 */
export const ActiveItems: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Regular link</a></li>
        <li><a className="dropdown-item active" href="#" aria-current="true">Active link</a></li>
        <li><a className="dropdown-item" href="#">Another link</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add `.active` to items in the dropdown to style them as active. To convey the active state to assistive technologies, use the `aria-current` attribute — using the `page` value for the current page, or `true` for the current item in a set.',
      },
    },
  },
};

/**
 * Add `.disabled` to items in the dropdown to style them as disabled.
 */
export const DisabledItems: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Regular link</a></li>
        <li><a className="dropdown-item disabled" aria-disabled="true">Disabled link</a></li>
        <li><a className="dropdown-item" href="#">Another link</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add `.disabled` to items in the dropdown to style them as disabled.',
      },
    },
  },
};

/**
 * Add `.dropdown-menu-end` to a `.dropdown-menu` to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning `.dropdown-menu-end` will appear on the left side.
 */
export const RightAligned: Story = {
  render: () => (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu example
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li><button className="dropdown-item" type="button">Action</button></li>
        <li><button className="dropdown-item" type="button">Another action</button></li>
        <li><button className="dropdown-item" type="button">Something else here</button></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add `.dropdown-menu-end` to a `.dropdown-menu` to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning `.dropdown-menu-end` will appear on the left side.',
      },
    },
  },
};

/**
 * Use responsive variation classes like `.dropdown-menu-{-sm|-md|-lg|-xl|-xxl}-end` to align right at the given breakpoint or larger. Add `data-bs-display="static"` to disable dynamic positioning.
 */
export const ResponsiveAlignment: Story = {
  render: () => (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Left-aligned but right aligned when large screen
      </button>
      <ul className="dropdown-menu dropdown-menu-lg-end">
        <li><button className="dropdown-item" type="button">Action</button></li>
        <li><button className="dropdown-item" type="button">Another action</button></li>
        <li><button className="dropdown-item" type="button">Something else here</button></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use responsive variation classes like `.dropdown-menu-{-sm|-md|-lg|-xl|-xxl}-end` to align right at the given breakpoint or larger. Add `data-bs-display="static"` to disable dynamic positioning.',
      },
    },
  },
};

/**
 * To align left at a given breakpoint or larger, combine `.dropdown-menu-end` with `.dropdown-menu-{-sm|-md|-lg|-xl|-xxl}-start`. Note that `data-bs-display="static"` is not needed for dropdown buttons in navbars.
 */
export const ResponsiveAlignmentReverse: Story = {
  render: () => (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        Right-aligned but left aligned when large screen
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li><button className="dropdown-item" type="button">Action</button></li>
        <li><button className="dropdown-item" type="button">Another action</button></li>
        <li><button className="dropdown-item" type="button">Something else here</button></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'To align left at a given breakpoint or larger, combine `.dropdown-menu-end` with `.dropdown-menu-{-sm|-md|-lg|-xl|-xxl}-start`. Note that `data-bs-display="static"` is not needed for dropdown buttons in navbars.',
      },
    },
  },
};

/**
 * A kitchen sink demo of various dropdown alignment options in one place.
 */
export const AlignmentOptions: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Right-aligned menu
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Left-aligned, right-aligned lg
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-end">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Right-aligned, left-aligned lg
        </button>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group dropstart">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropstart
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group dropend">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropend
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group dropup">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropup
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A kitchen sink demo of various dropdown alignment options in one place.',
      },
    },
  },
};

/**
 * Add a header to label sections of actions in any dropdown menu using `.dropdown-header`.
 */
export const Headers: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li><h6 className="dropdown-header">Dropdown header</h6></li>
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add a header to label sections of actions in any dropdown menu using `.dropdown-header`.',
      },
    },
  },
};

/**
 * Separate groups of related menu items with a divider using `.dropdown-divider`.
 */
export const Dividers: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Separate groups of related menu items with a divider using `.dropdown-divider`.',
      },
    },
  },
};

/**
 * Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you'll likely need additional sizing styles to constrain the menu width.
 */
export const TextContent: Story = {
  render: () => (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <div className="dropdown-menu p-4 text-body-secondary" style={{ maxWidth: '200px' }}>
        <p>
          Some example text that's free-flowing within the dropdown menu.
        </p>
        <p className="mb-0">
          And this is more example text.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you\'ll likely need additional sizing styles to constrain the menu width.',
      },
    },
  },
};

/**
 * Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require.
 */
export const Forms: Story = {
  render: () => (
    <>
      <div className="dropdown mb-3">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown with form
        </button>
        <div className="dropdown-menu">
          <form className="px-4 py-3">
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">New around here? Sign up</a>
          <a className="dropdown-item" href="#">Forgot password?</a>
        </div>
      </div>

      <div className="dropdown">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
          Dropdown form
        </button>
        <form className="dropdown-menu p-4">
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
              <label className="form-check-label" htmlFor="dropdownCheck2">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require. Use `data-bs-auto-close="outside"` to prevent the dropdown from closing when clicking inside the form.',
      },
    },
  },
};

/**
 * Use `data-bs-offset` or `data-bs-reference` to change the location of the dropdown.
 */
export const DropdownOptions: Story = {
  render: () => (
    <div className="d-flex">
      <div className="dropdown me-1">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
          Offset
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary">Reference</button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `data-bs-offset` or `data-bs-reference` to change the location of the dropdown. The offset option changes the dropdown position with skidding and distance values. The reference option allows you to change the reference element of the dropdown (e.g., "parent" for button groups).',
      },
    },
  },
};

/**
 * Use the `data-bs-auto-close` attribute to change the auto close behavior of the dropdown. Options: `true` (default - closes on inside/outside click), `inside` (closes only on outside click), `outside` (closes only on inside click), `false` (manual close only).
 */
export const AutoCloseBehavior: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          Default dropdown
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
          Clickable inside
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
          Clickable outside
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>

      <div className="btn-group">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
          Manual close
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
          <li><a className="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `data-bs-auto-close` attribute to change the auto close behavior of the dropdown. Options: `true` (default - closes on inside/outside click), `inside` (closes only on outside click), `outside` (closes only on inside click), `false` (manual close only).',
      },
    },
  },
};







