import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardGroup,
  SimpleCard,
} from './Card';
import type { CardProps } from './Card';
import { Nav } from '../Nav/Nav';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Bootstrap/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.

## Building Block Components

- **Card** - Main container component
- **CardHeader** - Optional header section
- **CardBody** - Primary content container
- **CardTitle** - Card title element
- **CardSubtitle** - Card subtitle element
- **CardText** - Text paragraph
- **CardFooter** - Optional footer section
- **CardImg** - Image component with position support
- **CardImgOverlay** - Content overlay on images
- **CardLink** - Styled link for cards
- **CardGroup** - Group multiple cards
- **SimpleCard** - Convenience wrapper for common patterns`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Card content - use building block components',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    bg: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Background variant - uses text-bg-{color} helper',
      table: {
        type: { summary: 'CardVariant' },
      },
    },
    textColor: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted', 'body', 'body-secondary'],
      description: 'Text color variant',
      table: {
        type: { summary: 'CardTextColor' },
      },
    },
    border: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Border variant',
      table: {
        type: { summary: 'CardVariant' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

// ============================================================================
// Basic Examples
// ============================================================================

/**
 * Basic card with building block components. Cards have no fixed width by default,
 * so they naturally fill the full width of their parent element.
 */
export const Example: Story = {
  render: (args) => (
    <Card {...args} style={{ width: '18rem' }}>
      <CardImg src="/src/assets/placeholders/card-placeholder.svg" alt="Card image cap" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </CardBody>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic card with an image, title, text, and a button using building block components. Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization.',
      },
    },
  },
};

/**
 * The CardBody component is the primary content container within a card.
 */
export const Body: Story = {
  render: () => (
    <Card>
      <CardBody>This is some text within a card body.</CardBody>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The CardBody component is the building block of a card. Use it whenever you need a padded section within a card.',
      },
    },
  },
};

/**
 * Card titles, subtitles, text, and links using building block components.
 */
export const TitlesTextAndLinks: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <CardLink href="#">Card link</CardLink>
        <CardLink href="#">Another link</CardLink>
      </CardBody>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use CardTitle, CardSubtitle, CardText, and CardLink building blocks to structure your card content with proper styling.',
      },
    },
  },
};

/**
 * CardImg places an image in the card. Use the position prop to control placement.
 */
export const Images: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardImg src="/src/assets/placeholders/card-placeholder.svg" position="top" />
      <CardBody>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use CardImg with position="top" or position="bottom" to place images at the top or bottom of the card.',
      },
    },
  },
};

// ============================================================================
// Header and Footer
// ============================================================================

/**
 * Add optional header and footer sections to a card.
 */
export const HeaderAndFooter: Story = {
  render: () => (
    <>
      <Card className="mb-3">
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CardHeader as="h5">Featured</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
      </Card>

      <Card className="text-center">
        <CardHeader>Featured</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
        <CardFooter className="text-body-secondary">2 days ago</CardFooter>
      </Card>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use CardHeader and CardFooter to add optional header and footer sections. CardHeader supports an "as" prop to render as different heading elements.',
      },
    },
  },
};

// ============================================================================
// Image Overlays
// ============================================================================

/**
 * Turn an image into a card background and overlay your card's text.
 */
export const ImageOverlays: Story = {
  render: () => (
    <Card bg="dark">
      <CardImg src="/src/assets/placeholders/card-placeholder.svg" position="overlay" />
      <CardImgOverlay>
        <CardTitle>Card title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </CardText>
        <CardText><small>Last updated 3 mins ago</small></CardText>
      </CardImgOverlay>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use CardImg with position="overlay" and CardImgOverlay to create cards with text overlaid on images. Note that content should not be larger than the height of the image.',
      },
    },
  },
};

// ============================================================================
// Horizontal Card
// ============================================================================

/**
 * Using grid utilities, cards can be made horizontal in a mobile-friendly way.
 */
export const Horizontal: Story = {
  render: () => (
    <Card style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="/src/assets/placeholders/card-placeholder.svg"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </CardText>
            <CardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using a combination of grid and utility classes, cards can be made horizontal. We remove the grid gutters with `.g-0` and use `.col-md-*` classes to make the card horizontal at the md breakpoint.',
      },
    },
  },
};

// ============================================================================
// Background and Border Variants
// ============================================================================

/**
 * Set a background-color with contrasting foreground color using the bg prop.
 */
export const BackgroundVariants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      {(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as const).map((variant) => (
        <Card key={variant} bg={variant} style={{ maxWidth: '18rem' }}>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle>{variant.charAt(0).toUpperCase() + variant.slice(1)} card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `bg` prop to set a background variant. This uses Bootstrap\'s text-bg-{color} helper which automatically pairs background and text colors for proper contrast.',
      },
    },
  },
};

/**
 * Use border prop to change just the border-color of a card.
 */
export const BorderVariants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      {(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] as const).map((variant) => (
        <Card key={variant} border={variant} style={{ maxWidth: '18rem' }}>
          <CardHeader>Header</CardHeader>
          <CardBody className={variant !== 'light' ? `text-${variant}` : ''}>
            <CardTitle>{variant.charAt(0).toUpperCase() + variant.slice(1)} card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `border` prop to change just the border color. You can optionally add text color classes to match.',
      },
    },
  },
};

// ============================================================================
// Card Groups
// ============================================================================

/**
 * Use CardGroup to render cards as a single attached element with equal dimensions.
 */
export const CardGroups: Story = {
  render: () => (
    <CardGroup>
      <Card>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </CardText>
          <CardText><small className="text-body-secondary">Last updated 3 mins ago</small></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CardText>
          <CardText><small className="text-body-secondary">Last updated 3 mins ago</small></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
          </CardText>
          <CardText><small className="text-body-secondary">Last updated 3 mins ago</small></CardText>
        </CardBody>
      </Card>
    </CardGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use CardGroup to render cards as a single, attached element with equal width and height columns. Card groups use flexbox to create uniform dimensions.',
      },
    },
  },
};

/**
 * Card groups with footers automatically align the footer content.
 */
export const CardGroupsWithFooter: Story = {
  render: () => (
    <CardGroup>
      <Card>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CardFooter>
      </Card>
      <Card>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
        <CardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CardFooter>
      </Card>
      <Card>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
        <CardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CardFooter>
      </Card>
    </CardGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When using CardGroup with CardFooter, the footers will automatically line up due to the flexbox layout.',
      },
    },
  },
};

// ============================================================================
// List Groups in Cards
// ============================================================================

/**
 * Create lists of content in a card with a flush list group.
 */
export const ListGroups: Story = {
  render: () => (
    <>
      <Card className="mb-3" style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </Card>

      <Card className="mb-3" style={{ width: '18rem' }}>
        <CardHeader>Featured</CardHeader>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </Card>

      <Card style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <CardFooter>Card footer</CardFooter>
      </Card>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create lists of content in a card with a flush list group. Works great with CardHeader and CardFooter.',
      },
    },
  },
};

// ============================================================================
// Kitchen Sink
// ============================================================================

/**
 * Mix and match multiple content types to create the card you need.
 */
export const KitchenSink: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <CardBody>
        <CardLink href="#">Card link</CardLink>
        <CardLink href="#">Another link</CardLink>
      </CardBody>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mix and match multiple content types to create the card you need. This example includes an image, title, text, list group, and links.',
      },
    },
  },
};

// ============================================================================
// Navigation in Cards
// ============================================================================

/**
 * Add navigation to a card's header with Bootstrap's nav components.
 */
export const Navigation: Story = {
  render: () => {
    const navItems = [
      { id: 'active', label: 'Active', href: '#', active: true },
      { id: 'link', label: 'Link', href: '#' },
      { id: 'disabled', label: 'Disabled', disabled: true },
    ];

    return (
      <>
        <Card className="text-center mb-3">
          <CardHeader>
            <Nav
              items={navItems}
              variant="tabs"
              className="card-header-tabs"
            />
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Nav
              items={navItems}
              variant="pills"
              className="card-header-pills"
            />
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Add navigation to a card\'s header using the Nav component. Use `variant="tabs"` with `className="card-header-tabs"` for tabs, or `variant="pills"` with `className="card-header-pills"` for pills.',
      },
    },
  },
};

// ============================================================================
// Grid Layouts
// ============================================================================

/**
 * Use the Bootstrap grid system to control card layouts.
 */
export const GridLayout: Story = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="col">
          <Card className="h-100">
            <CardImg src="/src/assets/placeholders/card-placeholder.svg" />
            <CardBody>
              <CardTitle>Card title {i}</CardTitle>
              <CardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </CardText>
            </CardBody>
            <CardFooter>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the Bootstrap grid system with `.row-cols` classes to control how many columns you show per row. Add `.h-100` to cards for equal height.',
      },
    },
  },
};

// ============================================================================
// Text Alignment
// ============================================================================

/**
 * Change the text alignment of any card with text align classes.
 */
export const TextAlignment: Story = {
  render: () => (
    <>
      <Card className="mb-3" style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Left aligned (default)</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
      </Card>

      <Card className="text-center mb-3" style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Center aligned</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
      </Card>

      <Card className="text-end" style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle>Right aligned</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </CardBody>
      </Card>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can quickly change the text alignment of any card with text align classes: default (left), `.text-center`, and `.text-end`.',
      },
    },
  },
};

// ============================================================================
// Image Caps
// ============================================================================

/**
 * Cards can include top and bottom image caps.
 */
export const ImageCaps: Story = {
  render: () => (
    <>
      <Card className="mb-3">
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" position="top" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </CardText>
          <CardText><small className="text-body-secondary">Last updated 3 mins ago</small></CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </CardText>
          <CardText><small className="text-body-secondary">Last updated 3 mins ago</small></CardText>
        </CardBody>
        <CardImg src="/src/assets/placeholders/card-placeholder.svg" position="bottom" />
      </Card>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use CardImg with position="top" or position="bottom" to place image caps at the top or bottom of the card.',
      },
    },
  },
};

// ============================================================================
// SimpleCard Convenience Component
// ============================================================================

/**
 * SimpleCard provides a convenient wrapper for common card patterns.
 */
export const SimpleCardExample: Story = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <SimpleCard
          title="Card Title"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          imageSrc="/src/assets/placeholders/card-placeholder.svg"
          style={{ width: '100%' }}
        />
      </div>
      <div className="col">
        <SimpleCard
          title="With Header & Footer"
          text="Supporting text below as a natural lead-in to additional content."
          header="Featured"
          footer="2 days ago"
          style={{ width: '100%' }}
        />
      </div>
      <div className="col">
        <SimpleCard
          title="With Subtitle"
          subtitle="Card subtitle"
          text="Some quick example text to build on the card title and make up the bulk of the card's content."
          imageSrc="/src/assets/placeholders/card-placeholder.svg"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SimpleCard is a convenience component for common card patterns. For full control, use the building block components instead.',
      },
    },
  },
};

/**
 * SimpleCard with different background variants.
 */
export const SimpleCardVariants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <SimpleCard
        title="Primary Card"
        text="This is a primary card."
        bg="primary"
        header="Header"
        style={{ width: '18rem' }}
      />
      <SimpleCard
        title="Success Card"
        text="This is a success card."
        bg="success"
        header="Header"
        style={{ width: '18rem' }}
      />
      <SimpleCard
        title="Danger Card"
        text="This is a danger card."
        bg="danger"
        header="Header"
        style={{ width: '18rem' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SimpleCard supports the same bg, textColor, and border props as the Card component.',
      },
    },
  },
};

// ============================================================================
// Title Heading Levels
// ============================================================================

/**
 * CardTitle and CardSubtitle support custom heading levels via the "as" prop.
 */
export const TitleHeadingLevels: Story = {
  render: () => (
    <Card style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle as="h2">H2 Title</CardTitle>
        <CardSubtitle as="h3">H3 Subtitle</CardSubtitle>
        <CardText>
          Use the "as" prop on CardTitle and CardSubtitle to render different heading levels
          for proper document outline and accessibility.
        </CardText>
      </CardBody>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CardTitle defaults to h5 and CardSubtitle defaults to h6, but you can use the "as" prop to render any heading level for proper document structure.',
      },
    },
  },
};

// ============================================================================
// Mixin Utilities
// ============================================================================

/**
 * Combine border and transparent backgrounds for custom styling.
 */
export const MixinUtilities: Story = {
  render: () => (
    <Card border="success" style={{ maxWidth: '18rem' }}>
      <CardHeader className="bg-transparent border-success">Header</CardHeader>
      <CardBody className="text-success">
        <CardTitle>Success card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
      </CardBody>
      <CardFooter className="bg-transparent border-success">Footer</CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can change borders on the card header and footer as needed, and remove their background-color with `.bg-transparent`.',
      },
    },
  },
};














