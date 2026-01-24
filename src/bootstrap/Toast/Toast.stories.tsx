import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Toast,
  ToastHeader,
  ToastBody,
  ToastContainer,
  SimpleToast,
} from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Bootstrap/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Lightweight notification messages designed to mimic push notifications.

## Features
- **Autohide** - Automatically dismiss after a delay
- **Stacking** - Multiple toasts stack vertically
- **Placement** - Position anywhere in the viewport
- **Color schemes** - Use Bootstrap color utilities
- **Animation** - Optional fade transitions

## Subcomponents
- \`ToastHeader\` - Header with icon, title, time, and close button
- \`ToastBody\` - Content area
- \`ToastContainer\` - Wrapper for positioning and stacking toasts
- \`SimpleToast\` - Quick colored notification without header
        `,
      },
    },
  },
  argTypes: {
    show: {
      description: 'Whether the toast is visible',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    animation: {
      description: 'Enable fade animation',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    autohide: {
      description: 'Automatically hide the toast',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    delay: {
      description: 'Delay before hiding (ms)',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
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
      description: 'Callback when toast starts to show',
      action: 'onShow',
    },
    onShown: {
      description: 'Callback when toast is fully shown',
      action: 'onShown',
    },
    onHide: {
      description: 'Callback when toast starts to hide',
      action: 'onHide',
    },
    onHidden: {
      description: 'Callback when toast is fully hidden',
      action: 'onHidden',
    },
    children: {
      description: 'Toast content',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Static example (always visible for docs)
export const Default: Story = {
  render: () => (
    <Toast className="show" autohide={false}>
      <ToastHeader>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </ToastHeader>
      <ToastBody>
        Hello, world! This is a toast message.
      </ToastBody>
    </Toast>
  ),
};

export const LiveExample: Story = {
  name: 'Live Example',
  render: function LiveToastStory() {
    const [show, setShow] = useState(false);
    
    return (
      <>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => setShow(true)}
        >
          Show live toast
        </button>
        
        <ToastContainer placement="bottom-end">
          <Toast 
            show={show} 
            autohide 
            delay={5000}
            onHidden={() => setShow(false)}
          >
            <ToastHeader>
              <strong className="me-auto">Bootstrap</strong>
              <small>Just now</small>
            </ToastHeader>
            <ToastBody>
              Hello, world! This is a toast message.
            </ToastBody>
          </Toast>
        </ToastContainer>
      </>
    );
  },
};

export const NoAutohide: Story = {
  name: 'No Autohide',
  render: () => (
    <Toast className="show" autohide={false}>
      <ToastHeader>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </ToastHeader>
      <ToastBody>
        This toast will not auto-hide. Click the close button to dismiss.
      </ToastBody>
    </Toast>
  ),
};

export const Stacking: Story = {
  render: () => (
    <ToastContainer position="static" className="d-block">
      <Toast className="show" autohide={false}>
        <ToastHeader>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-body-secondary">just now</small>
        </ToastHeader>
        <ToastBody>
          See? Just like this.
        </ToastBody>
      </Toast>
      
      <Toast className="show" autohide={false}>
        <ToastHeader>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-body-secondary">2 seconds ago</small>
        </ToastHeader>
        <ToastBody>
          Heads up, toasts will stack automatically
        </ToastBody>
      </Toast>
    </ToastContainer>
  ),
};

export const CustomContent: Story = {
  name: 'Custom Content (Simple)',
  render: () => (
    <Toast className="show align-items-center" autohide={false}>
      <div className="d-flex">
        <ToastBody>
          Hello, world! This is a toast message.
        </ToastBody>
        <button 
          type="button" 
          className="btn-close me-2 m-auto" 
          data-bs-dismiss="toast" 
          aria-label="Close"
        />
      </div>
    </Toast>
  ),
};

export const WithActions: Story = {
  name: 'With Actions',
  render: () => (
    <Toast className="show" autohide={false}>
      <ToastBody>
        Hello, world! This is a toast message.
        <div className="mt-2 pt-2 border-top">
          <button type="button" className="btn btn-primary btn-sm">Take action</button>
          {' '}
          <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
        </div>
      </ToastBody>
    </Toast>
  ),
};

export const ColorSchemes: Story = {
  name: 'Color Schemes',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Toast className="show align-items-center text-bg-primary border-0" autohide={false}>
        <div className="d-flex">
          <ToastBody>Primary toast message.</ToastBody>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
        </div>
      </Toast>
      
      <Toast className="show align-items-center text-bg-success border-0" autohide={false}>
        <div className="d-flex">
          <ToastBody>Success toast message.</ToastBody>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
        </div>
      </Toast>
      
      <Toast className="show align-items-center text-bg-danger border-0" autohide={false}>
        <div className="d-flex">
          <ToastBody>Danger toast message.</ToastBody>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
        </div>
      </Toast>
      
      <Toast className="show align-items-center text-bg-warning border-0" autohide={false}>
        <div className="d-flex">
          <ToastBody>Warning toast message.</ToastBody>
          <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
        </div>
      </Toast>
      
      <Toast className="show align-items-center text-bg-info border-0" autohide={false}>
        <div className="d-flex">
          <ToastBody>Info toast message.</ToastBody>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
        </div>
      </Toast>
      
      <Toast className="show align-items-center text-bg-dark border-0" autohide={false}>
        <div className="d-flex">
          <ToastBody>Dark toast message.</ToastBody>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
        </div>
      </Toast>
    </div>
  ),
};

export const Placements: Story = {
  render: function PlacementsStory() {
    const [placement, setPlacement] = useState<string>('top-end');
    const [show, setShow] = useState(false);
    
    return (
      <div style={{ minHeight: '300px', position: 'relative' }}>
        <div className="d-flex gap-2 flex-wrap mb-3">
          <select 
            className="form-select" 
            style={{ width: 'auto' }}
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
          >
            <option value="top-start">Top left</option>
            <option value="top-center">Top center</option>
            <option value="top-end">Top right</option>
            <option value="middle-start">Middle left</option>
            <option value="middle-center">Middle center</option>
            <option value="middle-end">Middle right</option>
            <option value="bottom-start">Bottom left</option>
            <option value="bottom-center">Bottom center</option>
            <option value="bottom-end">Bottom right</option>
          </select>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => setShow(true)}
          >
            Show toast
          </button>
        </div>
        
        <ToastContainer placement={placement as ToastPlacement}>
          <Toast 
            show={show} 
            autohide 
            delay={3000}
            onHidden={() => setShow(false)}
          >
            <ToastHeader>
              <strong className="me-auto">Bootstrap</strong>
              <small>Just now</small>
            </ToastHeader>
            <ToastBody>
              Toast at {placement}
            </ToastBody>
          </Toast>
        </ToastContainer>
      </div>
    );
  },
};

export const SimpleToasts: Story = {
  name: 'Simple Toast Variants',
  render: function SimpleToastsStory() {
    const [showPrimary, setShowPrimary] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showDanger, setShowDanger] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    
    return (
      <>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-primary" onClick={() => setShowPrimary(true)}>
            Primary
          </button>
          <button className="btn btn-success" onClick={() => setShowSuccess(true)}>
            Success
          </button>
          <button className="btn btn-danger" onClick={() => setShowDanger(true)}>
            Danger
          </button>
          <button className="btn btn-warning" onClick={() => setShowWarning(true)}>
            Warning
          </button>
        </div>
        
        <ToastContainer placement="bottom-end">
          <SimpleToast
            message="This is a primary notification"
            variant="primary"
            show={showPrimary}
            onHidden={() => setShowPrimary(false)}
          />
          <SimpleToast
            message="Operation completed successfully!"
            variant="success"
            show={showSuccess}
            onHidden={() => setShowSuccess(false)}
          />
          <SimpleToast
            message="An error occurred. Please try again."
            variant="danger"
            show={showDanger}
            onHidden={() => setShowDanger(false)}
          />
          <SimpleToast
            message="Warning: This action cannot be undone."
            variant="warning"
            show={showWarning}
            onHidden={() => setShowWarning(false)}
          />
        </ToastContainer>
      </>
    );
  },
};

export const MultipleToasts: Story = {
  name: 'Multiple Toasts',
  render: function MultipleToastsStory() {
    const [toasts, setToasts] = useState<{ id: number; message: string }[]>([]);
    
    const addToast = () => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message: `Toast #${prev.length + 1}` }]);
    };
    
    const removeToast = (id: number) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    };
    
    return (
      <>
        <button className="btn btn-primary" onClick={addToast}>
          Add toast
        </button>
        
        <ToastContainer placement="top-end">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              show
              autohide
              delay={5000}
              onHidden={() => removeToast(toast.id)}
            >
              <ToastHeader>
                <strong className="me-auto">Notification</strong>
                <small>Just now</small>
              </ToastHeader>
              <ToastBody>{toast.message}</ToastBody>
            </Toast>
          ))}
        </ToastContainer>
      </>
    );
  },
};

export const WithIcon: Story = {
  name: 'With Icon',
  render: () => (
    <ToastContainer position="static" className="d-block">
      <Toast className="show" autohide={false}>
        <ToastHeader>
          <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#007aff"></rect>
          </svg>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </ToastHeader>
        <ToastBody>
          Hello, world! This is a toast message.
        </ToastBody>
      </Toast>
      
      <Toast className="show" autohide={false}>
        <ToastHeader>
          <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#28a745"></rect>
          </svg>
          <strong className="me-auto">Success</strong>
          <small>Just now</small>
        </ToastHeader>
        <ToastBody>
          Your changes have been saved successfully.
        </ToastBody>
      </Toast>
    </ToastContainer>
  ),
};

export const CustomDelay: Story = {
  name: 'Custom Delay',
  render: function CustomDelayStory() {
    const [show, setShow] = useState(false);
    
    return (
      <>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => setShow(true)}
        >
          Show toast (10 second delay)
        </button>
        
        <ToastContainer placement="bottom-end">
          <Toast 
            show={show} 
            autohide 
            delay={10000}
            onHidden={() => setShow(false)}
          >
            <ToastHeader>
              <strong className="me-auto">Long Toast</strong>
              <small>Just now</small>
            </ToastHeader>
            <ToastBody>
              This toast will stay visible for 10 seconds.
            </ToastBody>
          </Toast>
        </ToastContainer>
      </>
    );
  },
};
