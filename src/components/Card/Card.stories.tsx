import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import type { CardProps } from './Card';

const meta: Meta<CardProps> = {
  title: 'Bootstrap/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Bootstrap's cards provide a flexible and extensible content container with multiple variants and options.",
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
      table: {
        type: { summary: 'string' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Card subtitle',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      control: 'text',
      description: 'Card body text content',
      table: {
        type: { summary: 'string' },
      },
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL',
      table: {
        type: { summary: 'string' },
      },
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text',
      table: {
        type: { summary: 'string' },
      },
    },
    imagePosition: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Image position',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    bg: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Background variant',
      table: {
        type: { summary: 'string' },
      },
    },
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted'],
      description: 'Text color variant',
      table: {
        type: { summary: 'string' },
      },
    },
    border: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Border variant',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

/**
 * Basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.
 */
export const Example: Story = {
  args: {
    title: 'Card title',
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imageSrc: '/src/assets/placeholders/card-placeholder.svg',
    imageAlt: 'Card image cap',
  },
  render: (args) => (
    <Card {...args} style={{ width: '18rem' }}>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A basic card with an image, title, text, and a button. Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization.',
      },
    },
  },
};

/**
 * The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.
 */
export const Body: Story = {
  render: () => (
    <div className="card">
      <div className="card-body">
        This is some text within a card body.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The building block of a card is the `.card-body`. Use it whenever you need a padded section within a card.',
      },
    },
  },
};

/**
 * Card titles are used by adding `.card-title` to a `<h*>` tag. Links are added by using `.card-link` on `<a>` tags. Subtitles use `.card-subtitle` on a `<h*>` tag.
 */
export const TitlesTextAndLinks: Story = {
  render: () => (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card titles are used by adding `.card-title` to a `<h*>` tag. In the same way, links are added and placed next to each other by adding `.card-link` to an `<a>` tag. Subtitles are used by adding a `.card-subtitle` to a `<h*>` tag.',
      },
    },
  },
};

/**
 * `.card-img-top` places an image to the top of the card. With `.card-text`, text can be added to the card.
 */
export const Images: Story = {
  render: () => (
    <div className="card" style={{ width: '18rem' }}>
      <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '`.card-img-top` and `.card-img-bottom` respectively set the top and bottom corners rounded to match the card\'s borders. With `.card-text`, text can be added to the card.',
      },
    },
  },
};

/**
 * Create lists of content in a card with a flush list group.
 */
export const ListGroups: Story = {
  render: () => (
    <>
      <div className="card mb-3" style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>

      <div className="card mb-3" style={{ width: '18rem' }}>
        <div className="card-header">
          Featured
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-footer">
          Card footer
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Create lists of content in a card with a flush list group. List groups can be used alone, with headers, or with footers.',
      },
    },
  },
};

/**
 * Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.
 */
export const KitchenSink: Story = {
  render: () => (
    <div className="card" style={{ width: '18rem' }}>
      <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mix and match multiple content types to create the card you need, or throw everything in there. This example includes an image, title, text, list group, and links.',
      },
    },
  },
};

/**
 * Add an optional header and/or footer within a card.
 */
export const HeaderAndFooter: Story = {
  render: () => (
    <>
      <div className="card mb-3">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card mb-3">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          Quote
        </div>
        <div className="card-body">
          <figure>
            <blockquote className="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="card text-center">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add an optional header and/or footer within a card. Card headers can be styled by adding `.card-header` to `<h*>` elements. Footers can include timestamps or other supplementary information.',
      },
    },
  },
};

/**
 * Using the grid, wrap cards in columns and rows as needed.
 */
export const UsingGridMarkup: Story = {
  render: () => (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the grid, wrap cards in columns and rows as needed. Cards assume no specific width to start, so they\'ll be 100% wide unless otherwise stated.',
      },
    },
  },
};

/**
 * Use our handful of available sizing utilities to quickly set a card's width.
 */
export const UsingUtilities: Story = {
  render: () => (
    <>
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Button</a>
        </div>
      </div>

      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Button</a>
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use our handful of available sizing utilities to quickly set a card\'s width. Classes like `.w-75` and `.w-50` control the percentage width.',
      },
    },
  },
};

/**
 * Use custom CSS in your stylesheets or as inline styles to set a width.
 */
export const UsingCustomCSS: Story = {
  render: () => (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use custom CSS in your stylesheets or as inline styles to set a width.',
      },
    },
  },
};

/**
 * You can quickly change the text alignment of any card—in its entirety or specific parts—with our text align classes.
 */
export const TextAlignment: Story = {
  render: () => (
    <>
      <div className="card mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card text-center mb-3" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card text-end" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can quickly change the text alignment of any card—in its entirety or specific parts—with text align classes: default (left), `.text-center`, and `.text-end`.',
      },
    },
  },
};

/**
 * Add some navigation to a card's header (or block) with Bootstrap's nav components.
 */
export const Navigation: Story = {
  render: () => (
    <>
      <div className="card text-center mb-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add some navigation to a card\'s header with Bootstrap\'s nav components. Use `.card-header-tabs` for tabs or `.card-header-pills` for pills.',
      },
    },
  },
};

/**
 * Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.
 */
export const ImageCaps: Story = {
  render: () => (
    <>
      <div className="card mb-3">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-bottom" alt="..." />
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card using `.card-img-top` and `.card-img-bottom`.',
      },
    },
  },
};

/**
 * Turn an image into a card background and overlay your card's text. Depending on the image, you may or may not need additional styles or utilities.
 */
export const ImageOverlays: Story = {
  render: () => (
    <div className="card text-bg-dark">
      <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small>Last updated 3 mins ago</small></p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Turn an image into a card background and overlay your card\'s text using `.card-img` and `.card-img-overlay`. Note that content should not be larger than the height of the image.',
      },
    },
  },
};

/**
 * Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.
 */
export const Horizontal: Story = {
  render: () => (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. We remove the grid gutters with `.g-0` and use `.col-md-*` classes to make the card horizontal at the md breakpoint.',
      },
    },
  },
};

/**
 * Set a background-color with contrasting foreground color with our `.text-bg-{color}` helpers.
 */
export const BackgroundAndColor: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <div className="card text-bg-primary" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-secondary" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Secondary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-success" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-danger" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Danger card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-warning" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Warning card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-info" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-light" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Light card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card text-bg-dark" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set a background-color with contrasting foreground color with `.text-bg-{color}` helpers. This utility was added in Bootstrap v5.2.0 and automatically pairs background and text colors.\n\n**Accessibility tip:** Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text with a sufficient color contrast) or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.',
      },
    },
  },
};

/**
 * Use border utilities to change just the border-color of a card. Note that you can put `.text-{color}` classes on the parent `.card` or a subset of the card's contents.
 */
export const Border: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <div className="card border-primary" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body text-primary">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-secondary" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">Secondary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-success" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-danger" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body text-danger">
          <h5 className="card-title">Danger card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-warning" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Warning card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-info" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-light" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Light card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div className="card border-dark" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use border utilities to change just the border-color of a card using `.border-{color}` classes. You can optionally add `.text-{color}` classes to the card body or entire card for matching text colors.',
      },
    },
  },
};

/**
 * You can also change the borders on the card header and footer as needed, and even remove their background-color with `.bg-transparent`.
 */
export const MixinsUtilities: Story = {
  render: () => (
    <div className="card border-success" style={{ maxWidth: '18rem' }}>
      <div className="card-header bg-transparent border-success">Header</div>
      <div className="card-body text-success">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-footer bg-transparent border-success">Footer</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'You can also change the borders on the card header and footer as needed, and even remove their background-color with `.bg-transparent`.',
      },
    },
  },
};

/**
 * Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use `display: flex;` to become attached with uniform dimensions starting at the sm breakpoint.
 */
export const CardGroups: Story = {
  render: () => (
    <div className="card-group">
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use flexbox to create uniform dimensions and attached appearance.',
      },
    },
  },
};

/**
 * When using card groups with footers, their content will automatically line up.
 */
export const CardGroupsWithFooter: Story = {
  render: () => (
    <div className="card-group">
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When using card groups with footers, their content will automatically line up due to the flexbox layout.',
      },
    },
  },
};

/**
 * Use the Bootstrap grid system and its `.row-cols` classes to control how many grid columns (wrapped around your cards) you show per row. For example, here's `.row-cols-1` laying out the cards on one column, and `.row-cols-md-2` splitting four cards to equal width across multiple rows, from the medium breakpoint up.
 */
export const GridCards: Story = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the Bootstrap grid system with `.row-cols` classes to control how many columns you show per row. The `.g-4` class adds gutter spacing between cards.',
      },
    },
  },
};

/**
 * Change it to `.row-cols-3` and you'll see the fourth card wrap.
 */
export const GridCardsThreeColumns: Story = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using `.row-cols-md-3` creates three columns per row from the medium breakpoint up, causing the fourth card to wrap to a new row.',
      },
    },
  },
};

/**
 * When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.
 */
export const GridCardsEqualHeight: Story = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a short card.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add `.h-100` to cards to make them equal height within grid columns, regardless of content length.',
      },
    },
  },
};

/**
 * Just like with card groups, card footers will automatically line up.
 */
export const GridCardsWithFooter: Story = {
  render: () => (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'When using `.h-100` with grid cards, footers will automatically line up at the bottom regardless of content length.',
      },
    },
  },
};

/**
 * You can also use CSS Grid to create flexible card layouts. This example uses `grid-template-columns` with `auto-fill` to create a responsive grid that adapts to the container width.
 */
export const CSSGridLayout: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1rem'
    }}>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a short card.</p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show a variety of card heights.</p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Medium length card content.</p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Short.</p>
        </div>
      </div>
      <div className="card">
        <img src="/src/assets/placeholders/card-placeholder.svg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has a reasonable amount of content to demonstrate how the CSS Grid layout handles different card heights and widths automatically.</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'CSS Grid provides a flexible alternative to Bootstrap\'s row/column system. The `auto-fill` keyword automatically creates as many columns as will fit in the container.',
      },
    },
  },
};














