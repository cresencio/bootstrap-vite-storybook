import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
  OffcanvasTrigger,
} from './Offcanvas';

const meta: Meta<typeof Offcanvas> = {
  title: 'Bootstrap/Offcanvas',
  component: Offcanvas,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A sidebar component that slides in from the edge of the viewport.

## Features
- **Placement** - Slide from start (left), end (right), top, or bottom
- **Responsive** - Show as offcanvas below breakpoint, regular content above
- **Body scrolling** - Optional body scroll while open
- **Backdrop** - Show backdrop, static backdrop, or no backdrop
- **Events** - Callbacks for show/hide lifecycle

## Subcomponents
- \`OffcanvasHeader\` - Header with optional close button
- \`OffcanvasTitle\` - Accessible title element
- \`OffcanvasBody\` - Content area with padding
- \`OffcanvasTrigger\` - Button/link to open offcanvas
        `,
      },
    },
  },
  argTypes: {
    show: {
      description: 'Whether the offcanvas is visible',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    placement: {
      description: 'Placement of the offcanvas',
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
      table: {
        type: { summary: 'OffcanvasPlacement' },
        defaultValue: { summary: 'start' },
      },
    },
    responsive: {
      description: 'Responsive breakpoint',
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg', 'xl', 'xxl'],
      table: {
        type: { summary: 'OffcanvasResponsive' },
        defaultValue: { summary: 'undefined' },
      },
    },
    scroll: {
      description: 'Allow body scrolling while open',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    backdrop: {
      description: 'Show backdrop (true, false, or "static")',
      control: 'select',
      options: [true, false, 'static'],
      table: {
        type: { summary: 'boolean | "static"' },
        defaultValue: { summary: 'true' },
      },
    },
    keyboard: {
      description: 'Close on ESC key',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
    onShow: {
      description: 'Callback when offcanvas starts to show',
      action: 'onShow',
    },
    onShown: {
      description: 'Callback when offcanvas is fully shown',
      action: 'onShown',
    },
    onHide: {
      description: 'Callback when offcanvas starts to hide',
      action: 'onHide',
    },
    onHidden: {
      description: 'Callback when offcanvas is fully hidden',
      action: 'onHidden',
    },
    children: {
      description: 'Offcanvas content',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Offcanvas>;

export const Default: Story = {
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasDefault" className="btn btn-primary">
        Open offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasDefault">
        <OffcanvasHeader>
          <OffcanvasTitle id="offcanvasDefaultLabel">Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.</p>
          <div className="dropdown mt-3">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const PlacementStart: Story = {
  name: 'Placement: Start (Left)',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasStart" className="btn btn-primary">
        Open left offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasStart" placement="start">
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas Start</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>This offcanvas slides in from the left (start).</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const PlacementEnd: Story = {
  name: 'Placement: End (Right)',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasEnd" className="btn btn-primary">
        Open right offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasEnd" placement="end">
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas End</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>This offcanvas slides in from the right (end).</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const PlacementTop: Story = {
  name: 'Placement: Top',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasTop" className="btn btn-primary">
        Open top offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasTop" placement="top">
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas Top</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>This offcanvas slides in from the top.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const PlacementBottom: Story = {
  name: 'Placement: Bottom',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasBottom" className="btn btn-primary">
        Open bottom offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasBottom" placement="bottom">
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas Bottom</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>This offcanvas slides in from the bottom.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const AllPlacements: Story = {
  name: 'All Placements',
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <OffcanvasTrigger target="offcanvasAllStart" className="btn btn-primary">
        Start (Left)
      </OffcanvasTrigger>
      <OffcanvasTrigger target="offcanvasAllEnd" className="btn btn-primary">
        End (Right)
      </OffcanvasTrigger>
      <OffcanvasTrigger target="offcanvasAllTop" className="btn btn-primary">
        Top
      </OffcanvasTrigger>
      <OffcanvasTrigger target="offcanvasAllBottom" className="btn btn-primary">
        Bottom
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasAllStart" placement="start">
        <OffcanvasHeader>
          <OffcanvasTitle>Start</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>Slides from left</OffcanvasBody>
      </Offcanvas>
      
      <Offcanvas id="offcanvasAllEnd" placement="end">
        <OffcanvasHeader>
          <OffcanvasTitle>End</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>Slides from right</OffcanvasBody>
      </Offcanvas>
      
      <Offcanvas id="offcanvasAllTop" placement="top">
        <OffcanvasHeader>
          <OffcanvasTitle>Top</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>Slides from top</OffcanvasBody>
      </Offcanvas>
      
      <Offcanvas id="offcanvasAllBottom" placement="bottom">
        <OffcanvasHeader>
          <OffcanvasTitle>Bottom</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>Slides from bottom</OffcanvasBody>
      </Offcanvas>
    </div>
  ),
};

export const BodyScrolling: Story = {
  name: 'Body Scrolling',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasScroll" className="btn btn-primary">
        Enable body scrolling
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasScroll" scroll backdrop={false}>
        <OffcanvasHeader>
          <OffcanvasTitle>Body Scrolling</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Try scrolling the rest of the page to see this option in action.</p>
          <p>Body scrolling is enabled and there is no backdrop.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const BodyScrollingWithBackdrop: Story = {
  name: 'Body Scrolling + Backdrop',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasScrollBackdrop" className="btn btn-primary">
        Enable both scrolling & backdrop
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasScrollBackdrop" scroll backdrop>
        <OffcanvasHeader>
          <OffcanvasTitle>Backdrop with Scrolling</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Try scrolling the rest of the page.</p>
          <p>Both body scrolling and backdrop are enabled.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const StaticBackdrop: Story = {
  name: 'Static Backdrop',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasStatic" className="btn btn-primary">
        Toggle static offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasStatic" backdrop="static">
        <OffcanvasHeader>
          <OffcanvasTitle>Static Backdrop</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>I will not close if you click outside of me.</p>
          <p>Use the close button to dismiss.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const NoBackdrop: Story = {
  name: 'No Backdrop',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasNoBackdrop" className="btn btn-primary">
        Open without backdrop
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasNoBackdrop" backdrop={false}>
        <OffcanvasHeader>
          <OffcanvasTitle>No Backdrop</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>This offcanvas has no backdrop overlay.</p>
          <p>You can still interact with the page behind it.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const DarkTheme: Story = {
  name: 'Dark Theme',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasDark" className="btn btn-dark">
        Open dark offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasDark" className="text-bg-dark">
        <OffcanvasHeader closeWhite>
          <OffcanvasTitle>Dark Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>This offcanvas uses dark theme styling with text-bg-dark class.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const Responsive: Story = {
  render: () => (
    <>
      <div className="alert alert-info d-none d-lg-block">
        Resize your browser below the lg breakpoint to see the offcanvas toggle button.
      </div>
      
      <OffcanvasTrigger target="offcanvasResponsive" className="btn btn-primary d-lg-none">
        Toggle offcanvas
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasResponsive" responsive="lg" placement="end">
        <OffcanvasHeader>
          <OffcanvasTitle>Responsive Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
          <p>Below the lg breakpoint, this appears as an offcanvas. Above lg, it shows inline.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const ControlledOffcanvas: Story = {
  name: 'Controlled (via props)',
  render: function ControlledStory() {
    const [show, setShow] = useState(false);
    
    return (
      <>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => setShow(true)}
        >
          Open controlled offcanvas
        </button>
        
        <Offcanvas 
          id="offcanvasControlled" 
          show={show}
          onHidden={() => setShow(false)}
        >
          <OffcanvasHeader>
            <OffcanvasTitle>Controlled Offcanvas</OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <p>This offcanvas is controlled via React state.</p>
            <p>show = {String(show)}</p>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Close via state
            </button>
          </OffcanvasBody>
        </Offcanvas>
      </>
    );
  },
};

export const WithNavigation: Story = {
  name: 'With Navigation',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasNav" className="btn btn-primary">
        Open navigation
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasNav">
        <OffcanvasHeader>
          <OffcanvasTitle>Menu</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Contact</a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else</a></li>
            </ul>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};

export const LinkTrigger: Story = {
  name: 'Link Trigger',
  render: () => (
    <>
      <OffcanvasTrigger target="offcanvasLink" as="a" className="btn btn-primary">
        Link with href
      </OffcanvasTrigger>
      {' '}
      <OffcanvasTrigger target="offcanvasLink" className="btn btn-secondary">
        Button with data-bs-target
      </OffcanvasTrigger>
      
      <Offcanvas id="offcanvasLink">
        <OffcanvasHeader>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <p>Both triggers open the same offcanvas.</p>
          <p>The link uses href, the button uses data-bs-target.</p>
        </OffcanvasBody>
      </Offcanvas>
    </>
  ),
};
