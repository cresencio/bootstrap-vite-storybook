import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Spinner, SpinnerButton, LoadingOverlay } from './Spinner';
import type { SpinnerVariant } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Bootstrap/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Spinners indicate loading states for components or pages.

## Features
- **Types**: Border (spinning) or Grow (pulsing)
- **Variants**: All Bootstrap theme colors
- **Sizes**: Default, small, or custom
- **Accessibility**: Screen reader support with labels

## Components
- \`Spinner\` - Basic spinner element
- \`SpinnerButton\` - Button with integrated loading state
- \`LoadingOverlay\` - Spinner overlay for content areas
        `,
      },
    },
  },
  argTypes: {
    type: {
      description: 'Animation type',
      control: { type: 'select' },
      options: ['border', 'grow'],
      table: { defaultValue: { summary: 'border' } },
    },
    variant: {
      description: 'Color variant',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    size: {
      description: 'Size preset',
      control: { type: 'select' },
      options: [undefined, 'sm'],
      table: { defaultValue: { summary: 'undefined' } },
    },
    customSize: {
      description: 'Custom size (px or CSS value)',
      control: { type: 'text' },
    },
    label: {
      description: 'Screen reader label',
      control: { type: 'text' },
      table: { defaultValue: { summary: 'Loading...' } },
    },
    hideLabel: {
      description: 'Hide the visually hidden label',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    type: 'border',
  },
};

export const BorderSpinner: Story = {
  name: 'Border Spinner',
  args: {
    type: 'border',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default spinning border animation.',
      },
    },
  },
};

export const GrowSpinner: Story = {
  name: 'Grow Spinner',
  args: {
    type: 'grow',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'A pulsing/growing animation style.',
      },
    },
  },
};

export const BorderVariants: Story = {
  name: 'Border Variants',
  render: () => {
    const variants: SpinnerVariant[] = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];

    return (
      <div className="d-flex gap-3 flex-wrap p-3 bg-body-secondary rounded">
        {variants.map((variant) => (
          <Spinner key={variant} type="border" variant={variant} />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Border spinners in all Bootstrap theme colors.',
      },
    },
  },
};

export const GrowVariants: Story = {
  name: 'Grow Variants',
  render: () => {
    const variants: SpinnerVariant[] = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ];

    return (
      <div className="d-flex gap-3 flex-wrap p-3 bg-body-secondary rounded">
        {variants.map((variant) => (
          <Spinner key={variant} type="grow" variant={variant} />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Grow spinners in all Bootstrap theme colors.',
      },
    },
  },
};

export const SmallSize: Story = {
  name: 'Small Size',
  render: () => (
    <div className="d-flex gap-4 align-items-center">
      <div className="text-center">
        <Spinner type="border" size="sm" />
        <div className="small text-muted mt-1">Border SM</div>
      </div>
      <div className="text-center">
        <Spinner type="grow" size="sm" />
        <div className="small text-muted mt-1">Grow SM</div>
      </div>
      <div className="text-center">
        <Spinner type="border" />
        <div className="small text-muted mt-1">Border Default</div>
      </div>
      <div className="text-center">
        <Spinner type="grow" />
        <div className="small text-muted mt-1">Grow Default</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small spinners compared to default size.',
      },
    },
  },
};

export const CustomSizes: Story = {
  name: 'Custom Sizes',
  render: () => (
    <div className="d-flex gap-4 align-items-end">
      <div className="text-center">
        <Spinner type="border" customSize={16} variant="primary" />
        <div className="small text-muted mt-1">16px</div>
      </div>
      <div className="text-center">
        <Spinner type="border" customSize={24} variant="primary" />
        <div className="small text-muted mt-1">24px</div>
      </div>
      <div className="text-center">
        <Spinner type="border" customSize={32} variant="primary" />
        <div className="small text-muted mt-1">32px</div>
      </div>
      <div className="text-center">
        <Spinner type="border" customSize={48} variant="primary" />
        <div className="small text-muted mt-1">48px</div>
      </div>
      <div className="text-center">
        <Spinner type="border" customSize={64} variant="primary" />
        <div className="small text-muted mt-1">64px</div>
      </div>
      <div className="text-center">
        <Spinner type="border" customSize="5rem" variant="primary" />
        <div className="small text-muted mt-1">5rem</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom spinner sizes using pixels or CSS units.',
      },
    },
  },
};

export const InlineWithText: Story = {
  name: 'Inline with Text',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <p className="mb-0">
        <Spinner type="border" size="sm" className="me-2" hideLabel />
        Loading your content...
      </p>
      <p className="mb-0">
        <Spinner type="grow" size="sm" variant="success" className="me-2" hideLabel />
        Processing payment...
      </p>
      <p className="mb-0 text-primary">
        <Spinner type="border" size="sm" variant="primary" className="me-2" hideLabel />
        Saving changes...
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Small spinners used inline with text.',
      },
    },
  },
};

export const Buttons: Story = {
  name: 'Spinner Buttons',
  render: function ButtonsStory() {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);

    const handleClick = (setter: (v: boolean) => void) => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    };

    return (
      <div className="d-flex gap-3 flex-wrap">
        <SpinnerButton
          loading={loading1}
          onClick={() => handleClick(setLoading1)}
        >
          Submit
        </SpinnerButton>

        <SpinnerButton
          loading={loading2}
          loadingText="Saving..."
          variant="success"
          onClick={() => handleClick(setLoading2)}
        >
          Save Changes
        </SpinnerButton>

        <SpinnerButton
          loading={loading3}
          loadingText="Processing..."
          variant="danger"
          spinnerType="grow"
          onClick={() => handleClick(setLoading3)}
        >
          Delete
        </SpinnerButton>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons with integrated loading spinners. Click to see the loading state.',
      },
    },
  },
};

export const ButtonVariants: Story = {
  name: 'Button Variants',
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <SpinnerButton loading variant="primary">Primary</SpinnerButton>
      <SpinnerButton loading variant="secondary">Secondary</SpinnerButton>
      <SpinnerButton loading variant="success">Success</SpinnerButton>
      <SpinnerButton loading variant="danger">Danger</SpinnerButton>
      <SpinnerButton loading variant="warning">Warning</SpinnerButton>
      <SpinnerButton loading variant="info">Info</SpinnerButton>
      <SpinnerButton loading variant="dark">Dark</SpinnerButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SpinnerButton in all variant colors.',
      },
    },
  },
};

export const ButtonSizes: Story = {
  name: 'Button Sizes',
  render: () => (
    <div className="d-flex gap-3 align-items-center">
      <SpinnerButton loading size="sm">Small</SpinnerButton>
      <SpinnerButton loading>Default</SpinnerButton>
      <SpinnerButton loading size="lg">Large</SpinnerButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SpinnerButton in different sizes.',
      },
    },
  },
};

export const OutlineButtons: Story = {
  name: 'Outline Buttons',
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <SpinnerButton loading variant="primary" outline>Primary</SpinnerButton>
      <SpinnerButton loading variant="secondary" outline>Secondary</SpinnerButton>
      <SpinnerButton loading variant="success" outline>Success</SpinnerButton>
      <SpinnerButton loading variant="danger" outline>Danger</SpinnerButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline style spinner buttons.',
      },
    },
  },
};

export const LoadingOverlayExample: Story = {
  name: 'Loading Overlay',
  render: function OverlayStory() {
    const [loading, setLoading] = useState(false);

    const handleLoad = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };

    return (
      <div>
        <button className="btn btn-primary mb-3" onClick={handleLoad}>
          Load Data
        </button>
        <LoadingOverlay show={loading} message="Loading data...">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Data Table</h5>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Bob Wilson</td>
                    <td>bob@example.com</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </LoadingOverlay>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'LoadingOverlay component for covering content during loading.',
      },
    },
  },
};

export const OverlayBackdrops: Story = {
  name: 'Overlay Backdrops',
  render: () => (
    <div className="row g-4">
      <div className="col-md-4">
        <h6 className="text-muted mb-2">Light Backdrop</h6>
        <LoadingOverlay show backdrop="light" message="Loading...">
          <div className="card">
            <div className="card-body">
              <p className="mb-0">Content with light overlay</p>
            </div>
          </div>
        </LoadingOverlay>
      </div>
      <div className="col-md-4">
        <h6 className="text-muted mb-2">Dark Backdrop</h6>
        <LoadingOverlay show backdrop="dark" message="Loading...">
          <div className="card">
            <div className="card-body">
              <p className="mb-0">Content with dark overlay</p>
            </div>
          </div>
        </LoadingOverlay>
      </div>
      <div className="col-md-4">
        <h6 className="text-muted mb-2">Transparent Backdrop</h6>
        <LoadingOverlay show backdrop="transparent">
          <div className="card">
            <div className="card-body">
              <p className="mb-0">Content with no backdrop</p>
            </div>
          </div>
        </LoadingOverlay>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different backdrop styles for LoadingOverlay.',
      },
    },
  },
};

export const CenteredFullPage: Story = {
  name: 'Centered Full Page',
  render: () => (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ height: '300px' }}
    >
      <div className="text-center">
        <Spinner type="border" variant="primary" customSize={48} />
        <div className="mt-3 text-muted">Loading application...</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Centered spinner for full-page loading states.',
      },
    },
  },
};

export const FlexPlacement: Story = {
  name: 'Flex Placement',
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center border p-3 rounded">
        <Spinner size="sm" className="me-2" hideLabel />
        <span>Left aligned with flex</span>
      </div>
      <div className="d-flex justify-content-center border p-3 rounded">
        <Spinner hideLabel />
      </div>
      <div className="d-flex justify-content-end align-items-center border p-3 rounded">
        <span className="me-2">Right aligned</span>
        <Spinner size="sm" hideLabel />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using flexbox utilities to position spinners.',
      },
    },
  },
};

export const MultipleSpinners: Story = {
  name: 'Multiple Spinners',
  render: () => (
    <div className="text-center">
      <div className="d-flex justify-content-center gap-2 mb-3">
        <Spinner type="grow" variant="primary" size="sm" hideLabel />
        <Spinner type="grow" variant="primary" size="sm" hideLabel />
        <Spinner type="grow" variant="primary" size="sm" hideLabel />
      </div>
      <div className="text-muted">Processing your request...</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple small spinners creating a loading animation.',
      },
    },
  },
};

export const FormSubmission: Story = {
  name: 'Form Submission Example',
  render: function FormStory() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 2000);
    };

    if (submitted) {
      return (
        <div className="alert alert-success">
          <strong>Success!</strong> Form submitted successfully.
          <button
            className="btn btn-sm btn-link"
            onClick={() => setSubmitted(false)}
          >
            Reset
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            disabled={loading}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            disabled={loading}
          />
        </div>
        <SpinnerButton
          type="submit"
          loading={loading}
          loadingText="Signing in..."
        >
          Sign In
        </SpinnerButton>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete form submission example with loading state.',
      },
    },
  },
};

export const CardLoading: Story = {
  name: 'Card Loading State',
  render: () => (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body text-center py-5">
            <Spinner variant="primary" customSize={40} />
            <p className="text-muted mt-3 mb-0">Loading content...</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">Dashboard</div>
          <div className="card-body">
            <h5 className="card-title">Welcome back!</h5>
            <p className="card-text">Your dashboard content here.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spinner inside a card as a loading placeholder.',
      },
    },
  },
};
