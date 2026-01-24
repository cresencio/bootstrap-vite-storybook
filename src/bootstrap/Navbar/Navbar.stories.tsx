import type { Meta, StoryObj } from '@storybook/react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavbarCollapse,
  NavbarNav,
  NavbarText,
  SimpleNavbar,
  type NavbarNavItem,
} from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Bootstrap/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A responsive navigation header that includes support for branding, navigation, forms, and more.

## Features
- **Responsive** - Collapses at specified breakpoint with toggler
- **Color schemes** - Light and dark themes via \`data-bs-theme\`
- **Background colors** - Use Bootstrap color utilities
- **Placement** - Fixed or sticky positioning
- **Nav integration** - Built-in dropdown support

## Subcomponents
- \`NavbarBrand\` - Logo/brand area
- \`NavbarToggler\` - Mobile menu toggle button
- \`NavbarCollapse\` - Collapsible content wrapper
- \`NavbarNav\` - Navigation links with dropdown support
- \`NavbarText\` - Inline text
- \`NavbarForm\` - Search forms
- \`SimpleNavbar\` - Pre-built navbar with common patterns
        `,
      },
    },
  },
  argTypes: {
    expand: {
      description: 'Breakpoint at which navbar expands from collapsed to horizontal',
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl', true, false],
      table: {
        type: { summary: 'NavbarExpand' },
        defaultValue: { summary: 'lg' },
      },
    },
    colorScheme: {
      description: 'Color scheme for the navbar (uses data-bs-theme attribute)',
      control: 'select',
      options: ['light', 'dark'],
      table: {
        type: { summary: 'NavbarColorScheme' },
        defaultValue: { summary: 'undefined' },
      },
    },
    bg: {
      description: 'Background color utility class',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'body-tertiary' },
      },
    },
    placement: {
      description: 'Placement of the navbar',
      control: 'select',
      options: ['default', 'fixed-top', 'fixed-bottom', 'sticky-top', 'sticky-bottom'],
      table: {
        type: { summary: 'NavbarPlacement' },
        defaultValue: { summary: 'default' },
      },
    },
    container: {
      description: 'Container type for navbar content',
      control: 'select',
      options: ['fluid', 'sm', 'md', 'lg', 'xl', 'xxl', false],
      table: {
        type: { summary: 'NavbarContainer' },
        defaultValue: { summary: 'fluid' },
      },
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      description: 'Navbar content',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const sampleItems: NavbarNavItem[] = [
  { id: 'home', label: 'Home', href: '#', active: true },
  { id: 'features', label: 'Features', href: '#' },
  { id: 'pricing', label: 'Pricing', href: '#' },
  { id: 'disabled', label: 'Disabled', href: '#', disabled: true },
];

const itemsWithDropdown: NavbarNavItem[] = [
  { id: 'home', label: 'Home', href: '#', active: true },
  { id: 'link', label: 'Link', href: '#' },
  {
    id: 'dropdown',
    label: 'Dropdown',
    dropdown: [
      { label: 'Action', href: '#' },
      { label: 'Another action', href: '#' },
      { divider: true, label: '' },
      { label: 'Something else here', href: '#' },
    ],
  },
  { id: 'disabled', label: 'Disabled', href: '#', disabled: true },
];

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler target="navbarDefault" />
      <NavbarCollapse id="navbarDefault">
        <NavbarNav items={sampleItems} className="me-auto mb-2 mb-lg-0" />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </NavbarCollapse>
    </Navbar>
  ),
  args: {
    expand: 'lg',
    bg: 'body-tertiary',
  },
};

export const WithDropdown: Story = {
  name: 'With Dropdown',
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler target="navbarDropdown" />
      <NavbarCollapse id="navbarDropdown">
        <NavbarNav items={itemsWithDropdown} className="me-auto mb-2 mb-lg-0" />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </NavbarCollapse>
    </Navbar>
  ),
  args: {
    expand: 'lg',
    bg: 'body-tertiary',
  },
};

export const BrandWithImage: Story = {
  name: 'Brand with Image',
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand href="#">
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="Bootstrap"
          width="30"
          height="24"
          className="d-inline-block align-text-top me-2"
        />
        Bootstrap
      </NavbarBrand>
      <NavbarToggler target="navbarBrandImage" />
      <NavbarCollapse id="navbarBrandImage">
        <NavbarNav items={sampleItems} className="me-auto" />
      </NavbarCollapse>
    </Navbar>
  ),
  args: {
    expand: 'lg',
    bg: 'body-tertiary',
  },
};

export const DarkTheme: Story = {
  name: 'Dark Theme',
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler target="navbarDark" />
      <NavbarCollapse id="navbarDark">
        <NavbarNav items={itemsWithDropdown} className="me-auto mb-2 mb-lg-0" />
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </NavbarCollapse>
    </Navbar>
  ),
  args: {
    expand: 'lg',
    colorScheme: 'dark',
    bg: 'dark',
  },
};

export const PrimaryBackground: Story = {
  name: 'Primary Background',
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler target="navbarPrimary" />
      <NavbarCollapse id="navbarPrimary">
        <NavbarNav items={sampleItems} className="me-auto mb-2 mb-lg-0" />
      </NavbarCollapse>
    </Navbar>
  ),
  args: {
    expand: 'lg',
    colorScheme: 'dark',
    bg: 'primary',
  },
};

export const WithText: Story = {
  name: 'With Text',
  render: (args) => (
    <Navbar {...args}>
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <NavbarToggler target="navbarText" />
      <NavbarCollapse id="navbarText">
        <NavbarNav items={sampleItems.slice(0, 3)} className="me-auto mb-2 mb-lg-0" />
        <NavbarText>
          Signed in as <a href="#">Mark Otto</a>
        </NavbarText>
      </NavbarCollapse>
    </Navbar>
  ),
  args: {
    expand: 'lg',
    bg: 'body-tertiary',
  },
};

export const ContainerSizes: Story = {
  name: 'Container Sizes',
  render: () => (
    <div className="d-flex flex-column gap-4">
      <div>
        <p className="text-muted mb-2">Container fluid (default):</p>
        <Navbar bg="body-tertiary" container="fluid">
          <NavbarBrand href="#">Fluid Container</NavbarBrand>
        </Navbar>
      </div>
      <div>
        <p className="text-muted mb-2">Container lg:</p>
        <Navbar bg="body-tertiary" container="lg">
          <NavbarBrand href="#">Large Container</NavbarBrand>
        </Navbar>
      </div>
      <div>
        <p className="text-muted mb-2">Container md:</p>
        <Navbar bg="body-tertiary" container="md">
          <NavbarBrand href="#">Medium Container</NavbarBrand>
        </Navbar>
      </div>
      <div>
        <p className="text-muted mb-2">No container:</p>
        <Navbar bg="body-tertiary" container={false}>
          <NavbarBrand href="#">No Container</NavbarBrand>
        </Navbar>
      </div>
    </div>
  ),
};

export const ExpandBreakpoints: Story = {
  name: 'Expand Breakpoints',
  render: () => (
    <div className="d-flex flex-column gap-4">
      <Navbar bg="body-tertiary" expand="sm">
        <NavbarBrand href="#">expand=sm</NavbarBrand>
        <NavbarToggler target="navbarSm" />
        <NavbarCollapse id="navbarSm">
          <NavbarNav items={sampleItems.slice(0, 3)} />
        </NavbarCollapse>
      </Navbar>

      <Navbar bg="body-tertiary" expand="md">
        <NavbarBrand href="#">expand=md</NavbarBrand>
        <NavbarToggler target="navbarMd" />
        <NavbarCollapse id="navbarMd">
          <NavbarNav items={sampleItems.slice(0, 3)} />
        </NavbarCollapse>
      </Navbar>

      <Navbar bg="body-tertiary" expand="lg">
        <NavbarBrand href="#">expand=lg</NavbarBrand>
        <NavbarToggler target="navbarLg" />
        <NavbarCollapse id="navbarLg">
          <NavbarNav items={sampleItems.slice(0, 3)} />
        </NavbarCollapse>
      </Navbar>

      <Navbar bg="body-tertiary" expand="xl">
        <NavbarBrand href="#">expand=xl</NavbarBrand>
        <NavbarToggler target="navbarXl" />
        <NavbarCollapse id="navbarXl">
          <NavbarNav items={sampleItems.slice(0, 3)} />
        </NavbarCollapse>
      </Navbar>

      <Navbar bg="body-tertiary" expand={false}>
        <NavbarBrand href="#">expand=false (always collapsed)</NavbarBrand>
        <NavbarToggler target="navbarNever" />
        <NavbarCollapse id="navbarNever">
          <NavbarNav items={sampleItems.slice(0, 3)} />
        </NavbarCollapse>
      </Navbar>
    </div>
  ),
};

export const ScrollableNav: Story = {
  name: 'Scrollable Nav',
  render: (args) => {
    const manyItems: NavbarNavItem[] = [
      { id: 'home', label: 'Home', href: '#', active: true },
      { id: 'link1', label: 'Link 1', href: '#' },
      { id: 'link2', label: 'Link 2', href: '#' },
      { id: 'link3', label: 'Link 3', href: '#' },
      { id: 'link4', label: 'Link 4', href: '#' },
      { id: 'link5', label: 'Link 5', href: '#' },
      { id: 'link6', label: 'Link 6', href: '#' },
      { id: 'link7', label: 'Link 7', href: '#' },
      { id: 'link8', label: 'Link 8', href: '#' },
      { id: 'link9', label: 'Link 9', href: '#' },
      { id: 'link10', label: 'Link 10', href: '#' },
    ];

    return (
      <Navbar {...args}>
        <NavbarBrand href="#">Scrollable</NavbarBrand>
        <NavbarToggler target="navbarScroll" />
        <NavbarCollapse id="navbarScroll">
          <NavbarNav items={manyItems} className="me-auto my-2 my-lg-0" scroll scrollHeight="100px" />
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </NavbarCollapse>
      </Navbar>
    );
  },
  args: {
    expand: 'lg',
    bg: 'body-tertiary',
  },
};

export const ColorSchemes: Story = {
  name: 'Color Schemes',
  render: () => (
    <div className="d-flex flex-column gap-4">
      <Navbar bg="dark" colorScheme="dark">
        <NavbarBrand href="#">Dark (bg-dark)</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>

      <Navbar bg="primary" colorScheme="dark">
        <NavbarBrand href="#">Primary</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>

      <Navbar bg="success" colorScheme="dark">
        <NavbarBrand href="#">Success</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>

      <Navbar bg="info" colorScheme="dark">
        <NavbarBrand href="#">Info</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>

      <Navbar bg="warning" colorScheme="dark">
        <NavbarBrand href="#">Warning</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>

      <Navbar bg="danger" colorScheme="dark">
        <NavbarBrand href="#">Danger</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>

      <Navbar bg="body-tertiary">
        <NavbarBrand href="#">Light (default)</NavbarBrand>
        <NavbarNav items={sampleItems.slice(0, 3)} />
      </Navbar>
    </div>
  ),
};

// SimpleNavbar Stories
// Note: These stories are part of the main Navbar storybook entry

export const Simple: StoryObj<typeof SimpleNavbar> = {
  render: (args) => <SimpleNavbar {...args} />,
  args: {
    brand: 'MyApp',
    items: itemsWithDropdown,
    showSearch: true,
    expand: 'lg',
    bg: 'body-tertiary',
  },
  argTypes: {
    brand: {
      description: 'Brand text or element',
      control: 'text',
    },
    items: {
      description: 'Navigation items array',
      control: 'object',
    },
    showSearch: {
      description: 'Show search form',
      control: 'boolean',
    },
    onSearch: {
      description: 'Search submit handler',
      action: 'onSearch',
    },
  },
};

export const SimpleDark: StoryObj<typeof SimpleNavbar> = {
  name: 'Simple Dark',
  render: (args) => <SimpleNavbar {...args} />,
  args: {
    brand: 'DarkApp',
    items: itemsWithDropdown,
    showSearch: true,
    expand: 'lg',
    colorScheme: 'dark',
    bg: 'dark',
  },
};

export const SimpleWithImageBrand: StoryObj<typeof SimpleNavbar> = {
  name: 'Simple with Image Brand',
  render: (args) => <SimpleNavbar {...args} />,
  args: {
    brand: (
      <>
        <img
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt="Bootstrap"
          width="30"
          height="24"
          className="d-inline-block align-text-top me-2"
        />
        Bootstrap
      </>
    ),
    items: sampleItems,
    showSearch: false,
    expand: 'lg',
    bg: 'body-tertiary',
  },
};

export const SimpleMinimal: StoryObj<typeof SimpleNavbar> = {
  name: 'Simple Minimal',
  render: (args) => <SimpleNavbar {...args} />,
  args: {
    brand: 'Logo',
    items: [
      { id: 'about', label: 'About', href: '#' },
      { id: 'contact', label: 'Contact', href: '#' },
    ],
    showSearch: false,
    expand: 'md',
    bg: 'body-tertiary',
  },
};
