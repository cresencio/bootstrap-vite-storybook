import type { Meta, StoryObj } from '@storybook/react-vite';
import { 
  Placeholder, 
  PlaceholderWrapper, 
  PlaceholderButton, 
  PlaceholderCard,
  PlaceholderText,
  PlaceholderImage,
  PlaceholderAvatar,
  PlaceholderListItem,
  PlaceholderTable,
} from './Placeholder';

const meta: Meta<typeof Placeholder> = {
  title: 'Bootstrap/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Placeholders are loading indicators that mimic the appearance of content that will eventually load.
They provide a better user experience by showing the shape of content before it's available.

## Features

- **Animations**: Glow and wave animation effects
- **Sizing**: Extra small, small, and large sizes
- **Colors**: All Bootstrap color variants
- **Column Widths**: 1-12 column grid sizing
- **Pre-built Components**: Cards, text blocks, images, avatars, lists, tables

## Components

- \`Placeholder\` - Basic placeholder span element
- \`PlaceholderWrapper\` - Wrapper for animation effects
- \`PlaceholderButton\` - Disabled button placeholder
- \`PlaceholderCard\` - Complete card skeleton
- \`PlaceholderText\` - Multi-line text placeholder
- \`PlaceholderImage\` - Image placeholder block
- \`PlaceholderAvatar\` - Circular avatar placeholder
- \`PlaceholderListItem\` - List item with avatar and text
- \`PlaceholderTable\` - Table skeleton
        `,
      },
    },
  },
  argTypes: {
    col: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      description: 'Column width (1-12)',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12' },
      },
    },
    size: {
      control: 'select',
      options: [undefined, 'xs', 'sm', 'lg'],
      description: 'Placeholder size',
      table: {
        type: { summary: '"xs" | "sm" | "lg"' },
      },
    },
    variant: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Color variant',
      table: {
        type: { summary: 'PlaceholderVariant' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

/**
 * Basic placeholder elements with different column widths.
 */
export const Default: Story = {
  render: () => (
    <div>
      <p>
        <Placeholder col={6} />
      </p>
      <p>
        <Placeholder col={8} className="w-75" />
      </p>
      <p>
        <Placeholder col={4} /> <Placeholder col={6} /> <Placeholder col={2} />
      </p>
    </div>
  ),
};

/**
 * Placeholder with glow animation effect.
 */
export const GlowAnimation: Story = {
  render: () => (
    <PlaceholderWrapper animation="glow">
      <p>
        <Placeholder col={12} />
      </p>
      <p>
        <Placeholder col={10} />
      </p>
      <p>
        <Placeholder col={8} />
      </p>
    </PlaceholderWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The glow animation creates a subtle pulsing effect on placeholders.',
      },
    },
  },
};

/**
 * Placeholder with wave animation effect.
 */
export const WaveAnimation: Story = {
  render: () => (
    <PlaceholderWrapper animation="wave">
      <p>
        <Placeholder col={12} />
      </p>
      <p>
        <Placeholder col={10} />
      </p>
      <p>
        <Placeholder col={8} />
      </p>
    </PlaceholderWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The wave animation creates a sweeping shimmer effect across placeholders.',
      },
    },
  },
};

/**
 * Different placeholder sizes.
 */
export const Sizes: Story = {
  render: () => (
    <PlaceholderWrapper animation="glow">
      <p>
        <Placeholder col={12} size="lg" />
      </p>
      <p>
        <Placeholder col={12} />
      </p>
      <p>
        <Placeholder col={12} size="sm" />
      </p>
      <p>
        <Placeholder col={12} size="xs" />
      </p>
    </PlaceholderWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Placeholders come in different sizes: lg (large), default, sm (small), and xs (extra small).',
      },
    },
  },
};

/**
 * Placeholders with different color variants.
 */
export const ColorVariants: Story = {
  render: () => (
    <PlaceholderWrapper animation="glow">
      <Placeholder col={12} className="mb-2" />
      <Placeholder col={12} variant="primary" className="mb-2" />
      <Placeholder col={12} variant="secondary" className="mb-2" />
      <Placeholder col={12} variant="success" className="mb-2" />
      <Placeholder col={12} variant="danger" className="mb-2" />
      <Placeholder col={12} variant="warning" className="mb-2" />
      <Placeholder col={12} variant="info" className="mb-2" />
      <Placeholder col={12} variant="light" className="mb-2" />
      <Placeholder col={12} variant="dark" />
    </PlaceholderWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Apply Bootstrap color variants to placeholders.',
      },
    },
  },
};

/**
 * Placeholder buttons.
 */
export const Buttons: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2">
      <PlaceholderButton col={4} variant="primary" animation="glow" />
      <PlaceholderButton col={4} variant="secondary" animation="glow" />
      <PlaceholderButton col={4} variant="success" animation="wave" />
      <PlaceholderButton col={4} variant="danger" animation="wave" />
      <PlaceholderButton col={3} variant="primary" size="sm" animation="glow" />
      <PlaceholderButton col={5} variant="primary" size="lg" animation="glow" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Placeholder buttons in various sizes and colors.',
      },
    },
  },
};

/**
 * Complete card skeleton.
 */
export const CardSkeleton: Story = {
  render: () => (
    <div className="row g-4">
      <div className="col-md-4">
        <PlaceholderCard animation="glow" />
      </div>
      <div className="col-md-4">
        <PlaceholderCard animation="wave" lines={4} />
      </div>
      <div className="col-md-4">
        <PlaceholderCard 
          animation="glow" 
          showImage={false} 
          lines={2} 
          buttonVariant="success" 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pre-built card skeletons with configurable image, lines, and button.',
      },
    },
  },
};

/**
 * Side-by-side comparison of actual content and placeholder.
 */
export const ContentComparison: Story = {
  render: () => (
    <div className="row g-4">
      <div className="col-md-6">
        <h6 className="text-muted mb-3">Actual Content</h6>
        <div className="card">
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='180'%3E%3Crect fill='%236c757d' width='300' height='180'/%3E%3Ctext fill='white' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage%3C/text%3E%3C/svg%3E" 
            className="card-img-top" 
            alt="Card image"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h6 className="text-muted mb-3">Placeholder</h6>
        <PlaceholderCard animation="glow" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compare actual content with its placeholder representation.',
      },
    },
  },
};

/**
 * Multi-line text placeholder.
 */
export const TextBlock: Story = {
  render: () => (
    <div className="row g-4">
      <div className="col-md-6">
        <h6 className="text-muted mb-3">Glow Animation</h6>
        <PlaceholderText lines={5} animation="glow" />
      </div>
      <div className="col-md-6">
        <h6 className="text-muted mb-3">Wave Animation</h6>
        <PlaceholderText lines={5} animation="wave" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'PlaceholderText generates multiple lines with varied widths.',
      },
    },
  },
};

/**
 * Image placeholders.
 */
export const Images: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3 align-items-start">
      <PlaceholderImage width={200} height={150} animation="glow" />
      <PlaceholderImage width={150} height={150} rounded animation="wave" />
      <PlaceholderImage width={100} height={100} rounded="circle" animation="glow" />
      <PlaceholderImage width={200} height={50} rounded="pill" animation="wave" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Image placeholders with different shapes: square, rounded, circle, and pill.',
      },
    },
  },
};

/**
 * Avatar placeholders.
 */
export const Avatars: Story = {
  render: () => (
    <div className="d-flex gap-3 align-items-center">
      <PlaceholderAvatar size={32} animation="glow" />
      <PlaceholderAvatar size={40} animation="glow" />
      <PlaceholderAvatar size={48} animation="wave" />
      <PlaceholderAvatar size={64} animation="wave" />
      <PlaceholderAvatar size={80} animation="glow" />
      <PlaceholderAvatar size={100} animation="glow" variant="primary" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Circular avatar placeholders in various sizes.',
      },
    },
  },
};

/**
 * List item placeholders.
 */
export const ListItems: Story = {
  render: () => (
    <div className="list-group">
      <div className="list-group-item">
        <PlaceholderListItem animation="glow" />
      </div>
      <div className="list-group-item">
        <PlaceholderListItem animation="glow" />
      </div>
      <div className="list-group-item">
        <PlaceholderListItem animation="glow" />
      </div>
      <div className="list-group-item">
        <PlaceholderListItem animation="glow" showAvatar={false} lines={1} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List item placeholders with optional avatar and configurable text lines.',
      },
    },
  },
};

/**
 * Table skeleton.
 */
export const Table: Story = {
  render: () => (
    <PlaceholderTable rows={5} cols={4} animation="glow" />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Table skeleton with configurable rows, columns, and optional header.',
      },
    },
  },
};

/**
 * Striped table skeleton.
 */
export const StripedTable: Story = {
  render: () => (
    <PlaceholderTable rows={6} cols={5} animation="wave" striped />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Table skeleton with striped rows.',
      },
    },
  },
};

/**
 * Social media post placeholder.
 */
export const SocialMediaPost: Story = {
  render: () => (
    <div className="card" style={{ maxWidth: '500px' }}>
      <div className="card-body">
        <PlaceholderWrapper animation="glow">
          {/* Header with avatar */}
          <div className="d-flex align-items-center mb-3">
            <PlaceholderAvatar size={48} />
            <div className="ms-3 flex-grow-1">
              <Placeholder col={6} className="d-block mb-1" />
              <Placeholder col={4} size="sm" className="d-block" />
            </div>
          </div>
          
          {/* Post content */}
          <div className="mb-3">
            <Placeholder col={12} className="d-block mb-1" />
            <Placeholder col={10} className="d-block mb-1" />
            <Placeholder col={8} className="d-block" />
          </div>
          
          {/* Image */}
          <PlaceholderImage width="100%" height={200} className="mb-3 rounded" />
          
          {/* Actions */}
          <div className="d-flex gap-4">
            <Placeholder col={2} size="sm" />
            <Placeholder col={2} size="sm" />
            <Placeholder col={2} size="sm" />
          </div>
        </PlaceholderWrapper>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A social media post skeleton combining multiple placeholder types.',
      },
    },
  },
};

/**
 * Article preview placeholder.
 */
export const ArticlePreview: Story = {
  render: () => (
    <div className="row g-4">
      {[1, 2, 3].map((n) => (
        <div key={n} className="col-md-4">
          <PlaceholderWrapper animation="wave">
            <PlaceholderImage width="100%" height={160} className="mb-3 rounded" />
            <Placeholder col={4} size="xs" variant="primary" className="mb-2" />
            <h5><Placeholder col={10} /></h5>
            <p>
              <Placeholder col={12} className="mb-1" />
              <Placeholder col={8} />
            </p>
            <div className="d-flex align-items-center">
              <PlaceholderAvatar size={32} className="me-2" />
              <Placeholder col={4} size="sm" />
            </div>
          </PlaceholderWrapper>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Article preview grid with image, title, excerpt, and author.',
      },
    },
  },
};

/**
 * Profile page placeholder.
 */
export const ProfilePage: Story = {
  render: () => (
    <PlaceholderWrapper animation="glow">
      <div className="text-center mb-4">
        <PlaceholderAvatar size={120} className="mb-3 mx-auto" />
        <h4><Placeholder col={4} /></h4>
        <p><Placeholder col={3} size="sm" /></p>
      </div>
      
      <div className="row mb-4">
        <div className="col-4 text-center">
          <h5><Placeholder col={6} /></h5>
          <small><Placeholder col={8} size="xs" /></small>
        </div>
        <div className="col-4 text-center">
          <h5><Placeholder col={6} /></h5>
          <small><Placeholder col={8} size="xs" /></small>
        </div>
        <div className="col-4 text-center">
          <h5><Placeholder col={6} /></h5>
          <small><Placeholder col={8} size="xs" /></small>
        </div>
      </div>
      
      <div className="d-flex justify-content-center gap-2 mb-4">
        <PlaceholderButton col={3} variant="primary" />
        <PlaceholderButton col={3} variant="secondary" />
      </div>
      
      <hr />
      
      <PlaceholderText lines={4} />
    </PlaceholderWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete profile page skeleton with avatar, stats, actions, and bio.',
      },
    },
  },
};

/**
 * E-commerce product card placeholder.
 */
export const ProductCard: Story = {
  render: () => (
    <div className="row g-4">
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="col-md-3">
          <div className="card h-100">
            <PlaceholderWrapper animation="wave">
              <PlaceholderImage width="100%" height={200} />
              <div className="card-body">
                <Placeholder col={4} size="xs" variant="warning" className="mb-2" />
                <h6><Placeholder col={10} /></h6>
                <p className="text-muted mb-2">
                  <Placeholder col={8} size="sm" />
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span><Placeholder col={4} /></span>
                  <PlaceholderButton col={4} variant="primary" size="sm" />
                </div>
              </div>
            </PlaceholderWrapper>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'E-commerce product grid with image, category, title, price, and add-to-cart button.',
      },
    },
  },
};

/**
 * Dashboard stats placeholder.
 */
export const DashboardStats: Story = {
  render: () => (
    <div className="row g-4">
      {['primary', 'success', 'warning', 'info'].map((variant) => (
        <div key={variant} className="col-md-3">
          <div className={`card border-${variant}`}>
            <div className="card-body">
              <PlaceholderWrapper animation="glow">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Placeholder col={8} size="xs" className="d-block mb-2" />
                    <h3 className="mb-0"><Placeholder col={6} /></h3>
                  </div>
                  <PlaceholderImage 
                    width={48} 
                    height={48} 
                    rounded="circle" 
                    variant={variant as 'primary' | 'success' | 'warning' | 'info'} 
                  />
                </div>
              </PlaceholderWrapper>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard stat cards with icon, label, and value placeholders.',
      },
    },
  },
};

/**
 * Comment section placeholder.
 */
export const CommentSection: Story = {
  render: () => (
    <div>
      {[1, 2, 3].map((n) => (
        <div key={n} className="d-flex mb-4">
          <PlaceholderAvatar size={48} animation="glow" className="flex-shrink-0" />
          <div className="ms-3 flex-grow-1">
            <PlaceholderWrapper animation="glow">
              <div className="d-flex align-items-center mb-2">
                <Placeholder col={3} className="me-2" />
                <Placeholder col={2} size="xs" />
              </div>
              <p className="mb-2">
                <Placeholder col={12} className="mb-1" />
                <Placeholder col={10} className="mb-1" />
                <Placeholder col={6} />
              </p>
              <div className="d-flex gap-3">
                <Placeholder col={1} size="xs" />
                <Placeholder col={1} size="xs" />
              </div>
            </PlaceholderWrapper>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comment section with avatars, usernames, timestamps, and actions.',
      },
    },
  },
};
