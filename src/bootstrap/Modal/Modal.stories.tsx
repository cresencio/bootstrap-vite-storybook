import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalTrigger,
} from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Bootstrap/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A dialog component for lightboxes, user notifications, or custom content.

## Features
- **Sizes** - Small, default, large, and extra large variants
- **Fullscreen** - Always or responsive fullscreen modes
- **Centered** - Vertically centered in the viewport
- **Scrollable** - Scrollable body for long content
- **Static backdrop** - Prevent closing on outside click
- **Events** - Callbacks for show/hide lifecycle

## Subcomponents
- \`ModalHeader\` - Header with optional close button
- \`ModalTitle\` - Accessible title element
- \`ModalBody\` - Content area with padding
- \`ModalFooter\` - Footer for actions
- \`ModalTrigger\` - Button/link to open modal
        `,
      },
    },
  },
  argTypes: {
    show: {
      description: 'Whether the modal is visible',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      description: 'Modal size variant',
      control: 'select',
      options: [undefined, 'sm', 'lg', 'xl'],
      table: {
        type: { summary: 'ModalSize' },
        defaultValue: { summary: 'undefined' },
      },
    },
    fullscreen: {
      description: 'Make modal fullscreen',
      control: 'select',
      options: [undefined, true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'],
      table: {
        type: { summary: 'ModalFullscreen' },
        defaultValue: { summary: 'undefined' },
      },
    },
    centered: {
      description: 'Center the modal vertically',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrollable: {
      description: 'Enable scrollable modal body',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    staticBackdrop: {
      description: "Static backdrop (modal won't close on outside click)",
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disableKeyboard: {
      description: 'Disable ESC key to close',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noAnimation: {
      description: 'Disable fade animation',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      description: 'Additional CSS classes for the modal',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    dialogClassName: {
      description: 'Additional CSS classes for the dialog',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    onShow: {
      description: 'Callback when modal starts to show',
      action: 'onShow',
    },
    onShown: {
      description: 'Callback when modal is fully shown',
      action: 'onShown',
    },
    onHide: {
      description: 'Callback when modal starts to hide',
      action: 'onHide',
    },
    onHidden: {
      description: 'Callback when modal is fully hidden',
      action: 'onHidden',
    },
    onHidePrevented: {
      description: 'Callback when backdrop click is prevented',
      action: 'onHidePrevented',
    },
    children: {
      description: 'Modal content',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Interactive demo using data attributes
export const Default: Story = {
  render: () => (
    <>
      <ModalTrigger target="defaultModal" className="btn btn-primary">
        Launch demo modal
      </ModalTrigger>
      
      <Modal id="defaultModal">
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Modal body text goes here.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const StaticBackdrop: Story = {
  name: 'Static Backdrop',
  render: () => (
    <>
      <ModalTrigger target="staticModal" className="btn btn-primary">
        Launch static backdrop modal
      </ModalTrigger>
      
      <Modal id="staticModal" staticBackdrop disableKeyboard>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>I will not close if you click outside me. Try clicking outside or pressing ESC.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Understood
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <>
      <ModalTrigger target="scrollableModal" className="btn btn-primary">
        Launch scrollable modal
      </ModalTrigger>
      
      <Modal id="scrollableModal" scrollable>
        <ModalHeader>
          <ModalTitle>Scrollable Modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal body has a lot of content to demonstrate scrolling.</p>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, 
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac 
              consectetur ac, vestibulum at eros.
            </p>
          ))}
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const VerticallyCentered: Story = {
  name: 'Vertically Centered',
  render: () => (
    <>
      <ModalTrigger target="centeredModal" className="btn btn-primary">
        Launch centered modal
      </ModalTrigger>
      
      <Modal id="centeredModal" centered>
        <ModalHeader>
          <ModalTitle>Centered Modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal is vertically centered in the viewport.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const CenteredScrollable: Story = {
  name: 'Centered + Scrollable',
  render: () => (
    <>
      <ModalTrigger target="centeredScrollableModal" className="btn btn-primary">
        Launch centered scrollable modal
      </ModalTrigger>
      
      <Modal id="centeredScrollableModal" centered scrollable>
        <ModalHeader>
          <ModalTitle>Centered Scrollable Modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {Array.from({ length: 15 }, (_, i) => (
            <p key={i}>
              This is paragraph {i + 1}. Cras mattis consectetur purus sit amet fermentum.
            </p>
          ))}
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <ModalTrigger target="smModal" className="btn btn-primary">
        Small modal
      </ModalTrigger>
      <ModalTrigger target="defaultSizeModal" className="btn btn-primary">
        Default modal
      </ModalTrigger>
      <ModalTrigger target="lgModal" className="btn btn-primary">
        Large modal
      </ModalTrigger>
      <ModalTrigger target="xlModal" className="btn btn-primary">
        Extra large modal
      </ModalTrigger>
      
      <Modal id="smModal" size="sm">
        <ModalHeader>
          <ModalTitle>Small Modal (300px)</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This is a small modal.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
      
      <Modal id="defaultSizeModal">
        <ModalHeader>
          <ModalTitle>Default Modal (500px)</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This is the default modal size.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
      
      <Modal id="lgModal" size="lg">
        <ModalHeader>
          <ModalTitle>Large Modal (800px)</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This is a large modal.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
      
      <Modal id="xlModal" size="xl">
        <ModalHeader>
          <ModalTitle>Extra Large Modal (1140px)</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This is an extra large modal.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
    </div>
  ),
};

export const Fullscreen: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <ModalTrigger target="fullModal" className="btn btn-primary">
        Full screen
      </ModalTrigger>
      <ModalTrigger target="fullSmModal" className="btn btn-primary">
        Full screen below sm
      </ModalTrigger>
      <ModalTrigger target="fullMdModal" className="btn btn-primary">
        Full screen below md
      </ModalTrigger>
      <ModalTrigger target="fullLgModal" className="btn btn-primary">
        Full screen below lg
      </ModalTrigger>
      
      <Modal id="fullModal" fullscreen>
        <ModalHeader>
          <ModalTitle>Fullscreen Modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal is always fullscreen.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
      
      <Modal id="fullSmModal" fullscreen="sm-down">
        <ModalHeader>
          <ModalTitle>Fullscreen below sm</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal is fullscreen below the sm breakpoint (576px).</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
      
      <Modal id="fullMdModal" fullscreen="md-down">
        <ModalHeader>
          <ModalTitle>Fullscreen below md</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal is fullscreen below the md breakpoint (768px).</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
      
      <Modal id="fullLgModal" fullscreen="lg-down">
        <ModalHeader>
          <ModalTitle>Fullscreen below lg</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal is fullscreen below the lg breakpoint (992px).</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </ModalFooter>
      </Modal>
    </div>
  ),
};

export const NoAnimation: Story = {
  name: 'No Animation',
  render: () => (
    <>
      <ModalTrigger target="noAnimModal" className="btn btn-primary">
        Launch modal without animation
      </ModalTrigger>
      
      <Modal id="noAnimModal" noAnimation>
        <ModalHeader>
          <ModalTitle>No Animation</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>This modal appears immediately without fade animation.</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const WithForm: Story = {
  name: 'With Form',
  render: () => (
    <>
      <ModalTrigger target="formModal" className="btn btn-primary">
        Open form modal
      </ModalTrigger>
      
      <Modal id="formModal">
        <ModalHeader>
          <ModalTitle>Contact Form</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
              <input type="text" className="form-control" id="recipient-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">Message:</label>
              <textarea className="form-control" id="message-text"></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Send message
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const ControlledModal: Story = {
  name: 'Controlled (via props)',
  render: function ControlledModalStory() {
    const [show, setShow] = useState(false);
    
    return (
      <>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => setShow(true)}
        >
          Open controlled modal
        </button>
        
        <Modal 
          id="controlledModal" 
          show={show}
          onHidden={() => setShow(false)}
        >
          <ModalHeader closeButton>
            <ModalTitle>Controlled Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>This modal is controlled via React state.</p>
            <p>show = {String(show)}</p>
          </ModalBody>
          <ModalFooter>
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => setShow(false)}
            >
              Close via state
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

export const WithGrid: Story = {
  name: 'With Grid',
  render: () => (
    <>
      <ModalTrigger target="gridModal" className="btn btn-primary">
        Launch modal with grid
      </ModalTrigger>
      
      <Modal id="gridModal" size="lg">
        <ModalHeader>
          <ModalTitle>Modal with Grid</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 bg-light p-3">.col-md-4</div>
              <div className="col-md-4 ms-auto bg-light p-3">.col-md-4 .ms-auto</div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 ms-auto bg-light p-3">.col-md-3 .ms-auto</div>
              <div className="col-md-2 ms-auto bg-light p-3">.col-md-2 .ms-auto</div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 ms-auto bg-light p-3">.col-md-6 .ms-auto</div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const ToggleBetweenModals: Story = {
  name: 'Toggle Between Modals',
  render: () => (
    <>
      <ModalTrigger target="modal1" className="btn btn-primary">
        Open first modal
      </ModalTrigger>
      
      <Modal id="modal1" centered>
        <ModalHeader>
          <ModalTitle>Modal 1</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Show a second modal and hide this one with the button below.</p>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-primary" 
            data-bs-target="#modal2" 
            data-bs-toggle="modal"
          >
            Open second modal
          </button>
        </ModalFooter>
      </Modal>
      
      <Modal id="modal2" centered>
        <ModalHeader>
          <ModalTitle>Modal 2</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Hide this modal and show the first with the button below.</p>
        </ModalBody>
        <ModalFooter>
          <button 
            className="btn btn-primary" 
            data-bs-target="#modal1" 
            data-bs-toggle="modal"
          >
            Back to first
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};

export const CustomStyling: Story = {
  name: 'Custom Styling',
  render: () => (
    <>
      <ModalTrigger target="styledModal" className="btn btn-success">
        Open styled modal
      </ModalTrigger>
      
      <Modal id="styledModal" centered>
        <ModalHeader className="bg-success text-white">
          <ModalTitle>Success Modal</ModalTitle>
        </ModalHeader>
        <ModalBody className="text-center py-5">
          <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
          <h4 className="mt-3">Operation Successful!</h4>
          <p className="text-muted">Your changes have been saved.</p>
        </ModalBody>
        <ModalFooter className="justify-content-center">
          <button type="button" className="btn btn-success" data-bs-dismiss="modal">
            Great!
          </button>
        </ModalFooter>
      </Modal>
    </>
  ),
};
