import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Carousel, CarouselItem, CarouselCaption, SimpleCarousel } from './Carousel';
import { useCarousel } from './useCarousel';

// SVG placeholder for when external images aren't available
const createPlaceholder = (text: string, bg: string) => 
  `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
      <rect fill="${bg}" width="800" height="400"/>
      <text fill="rgba(255,255,255,.75)" font-family="sans-serif" font-size="32" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>
  `)}`;

const svgPlaceholders = [
  createPlaceholder('First Slide', '#6c757d'),
  createPlaceholder('Second Slide', '#495057'),
  createPlaceholder('Third Slide', '#343a40'),
];

const meta: Meta<typeof Carousel> = {
  title: 'Bootstrap/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A slideshow component for cycling through elements—images or slides of text—like a carousel.

## Features

- **Slide Animation**: Smooth slide or fade transitions
- **Controls**: Previous/next buttons for manual navigation
- **Indicators**: Clickable dots showing current slide position
- **Captions**: Optional title and description overlays
- **Auto-cycling**: Automatic slide advancement with configurable interval
- **Touch Support**: Swipe gestures on touch devices
- **Keyboard Navigation**: Arrow keys for accessibility
- **Programmatic Control**: useCarousel hook for manual control

## Components

- \`Carousel\` - Container component with controls/indicators
- \`CarouselItem\` - Individual slide wrapper
- \`CarouselCaption\` - Caption overlay for slides
- \`SimpleCarousel\` - Convenience component for image carousels
- \`useCarousel\` - Hook for programmatic control
        `,
      },
    },
  },
  argTypes: {
    ride: {
      control: 'select',
      options: [false, true, 'carousel'],
      description: 'Auto-cycle behavior',
      table: {
        type: { summary: 'boolean | "carousel"' },
        defaultValue: { summary: 'false' },
      },
    },
    interval: {
      control: 'number',
      description: 'Interval between slides (ms)',
      table: {
        type: { summary: 'number | false' },
        defaultValue: { summary: '5000' },
      },
    },
    pause: {
      control: 'select',
      options: ['hover', false],
      description: 'Pause on hover behavior',
      table: {
        type: { summary: '"hover" | false' },
        defaultValue: { summary: 'hover' },
      },
    },
    keyboard: {
      control: 'boolean',
      description: 'Enable keyboard navigation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    touch: {
      control: 'boolean',
      description: 'Enable touch swipe gestures',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    wrap: {
      control: 'boolean',
      description: 'Wrap around at ends',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    fade: {
      control: 'boolean',
      description: 'Use crossfade instead of slide',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dark: {
      control: 'boolean',
      description: 'Use dark variant for controls/indicators',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indicators: {
      control: 'boolean',
      description: 'Show slide indicators',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    controls: {
      control: 'boolean',
      description: 'Show prev/next controls',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

/**
 * Basic carousel with slides only.
 */
export const Default: Story = {
  args: {
    id: 'defaultCarousel',
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
      </CarouselItem>
    </Carousel>
  ),
};

/**
 * Carousel with navigation controls.
 */
export const WithControls: Story = {
  args: {
    id: 'controlsCarousel',
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add prev/next controls with the `controls` prop.',
      },
    },
  },
};

/**
 * Carousel with slide indicators.
 */
export const WithIndicators: Story = {
  args: {
    id: 'indicatorsCarousel',
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add clickable indicators with the `indicators` prop.',
      },
    },
  },
};

/**
 * Carousel with captions on each slide.
 */
export const WithCaptions: Story = {
  args: {
    id: 'captionsCarousel',
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
        <CarouselCaption title="First slide label">
          <p>Some representative placeholder content for the first slide.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
        <CarouselCaption title="Second slide label">
          <p>Some representative placeholder content for the second slide.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
        <CarouselCaption title="Third slide label">
          <p>Some representative placeholder content for the third slide.</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add captions using the `CarouselCaption` component inside each slide.',
      },
    },
  },
};

/**
 * Carousel with crossfade animation instead of slide.
 */
export const Crossfade: Story = {
  args: {
    id: 'fadeCarousel',
    fade: true,
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `fade` prop for crossfade animation instead of sliding.',
      },
    },
  },
};

/**
 * Auto-cycling carousel.
 */
export const AutoCycle: Story = {
  args: {
    id: 'autoCycleCarousel',
    ride: 'carousel',
    interval: 3000,
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
        <CarouselCaption title="Auto-cycling">
          <p>This carousel automatically advances every 3 seconds.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
        <CarouselCaption title="Pause on Hover">
          <p>Hover over the carousel to pause auto-cycling.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
        <CarouselCaption title="Continuous">
          <p>The carousel wraps around at the end.</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set `ride="carousel"` to auto-cycle. Use `interval` to control speed.',
      },
    },
  },
};

/**
 * Carousel without wrapping.
 */
export const NoWrap: Story = {
  args: {
    id: 'noWrapCarousel',
    wrap: false,
    controls: true,
    indicators: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
        <CarouselCaption title="First Slide">
          <p>Cannot go to previous from here.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
        <CarouselCaption title="Middle Slide">
          <p>Can navigate both directions.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
        <CarouselCaption title="Last Slide">
          <p>Cannot go to next from here.</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set `wrap={false}` to prevent wrapping around at the ends.',
      },
    },
  },
};

/**
 * Dark variant for lighter backgrounds.
 */
export const DarkVariant: Story = {
  args: {
    id: 'darkCarousel',
    dark: true,
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <div 
          className="d-flex align-items-center justify-content-center bg-light" 
          style={{ height: '300px' }}
        >
          <div className="text-center">
            <h3>Light Background Slide 1</h3>
            <p className="text-muted">Dark controls work better here</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div 
          className="d-flex align-items-center justify-content-center bg-light" 
          style={{ height: '300px' }}
        >
          <div className="text-center">
            <h3>Light Background Slide 2</h3>
            <p className="text-muted">Notice the dark arrows and indicators</p>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div 
          className="d-flex align-items-center justify-content-center bg-light" 
          style={{ height: '300px' }}
        >
          <div className="text-center">
            <h3>Light Background Slide 3</h3>
            <p className="text-muted">Better visibility on light content</p>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `dark` prop for darker controls/indicators on light backgrounds.',
      },
    },
  },
};

/**
 * Individual slide intervals.
 */
export const IndividualIntervals: Story = {
  args: {
    id: 'intervalsCarousel',
    ride: 'carousel',
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active interval={2000}>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
        <CarouselCaption title="2 Second Interval">
          <p>This slide advances after 2 seconds.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem interval={4000}>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
        <CarouselCaption title="4 Second Interval">
          <p>This slide advances after 4 seconds.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem interval={6000}>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
        <CarouselCaption title="6 Second Interval">
          <p>This slide advances after 6 seconds.</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set custom intervals per slide with the `interval` prop on `CarouselItem`.',
      },
    },
  },
};

/**
 * Touch swipe disabled.
 */
export const TouchDisabled: Story = {
  args: {
    id: 'noTouchCarousel',
    touch: false,
    controls: true,
    indicators: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
        <CarouselCaption title="No Touch Swipe">
          <p>Swipe gestures are disabled on this carousel.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
      </CarouselItem>
      <CarouselItem>
        <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Set `touch={false}` to disable swipe gestures on touch devices.',
      },
    },
  },
};

/**
 * Content-only carousel (no images).
 */
export const ContentOnly: Story = {
  args: {
    id: 'contentCarousel',
    controls: true,
    indicators: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <div className="bg-primary text-white p-5" style={{ minHeight: '300px' }}>
          <div className="container">
            <h2>Welcome to Our Platform</h2>
            <p className="lead">Discover amazing features and possibilities.</p>
            <button className="btn btn-light btn-lg">Get Started</button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="bg-success text-white p-5" style={{ minHeight: '300px' }}>
          <div className="container">
            <h2>Powerful Analytics</h2>
            <p className="lead">Track your performance with detailed insights.</p>
            <button className="btn btn-light btn-lg">Learn More</button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="bg-info text-white p-5" style={{ minHeight: '300px' }}>
          <div className="container">
            <h2>24/7 Support</h2>
            <p className="lead">We're here to help you succeed.</p>
            <button className="btn btn-light btn-lg">Contact Us</button>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Carousels can contain any content, not just images.',
      },
    },
  },
};

/**
 * Testimonials carousel pattern.
 */
export const Testimonials: Story = {
  args: {
    id: 'testimonialCarousel',
    fade: true,
    ride: 'carousel',
    interval: 5000,
    indicators: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <div className="text-center py-5 px-3">
          <div className="mb-3">
            <span style={{ fontSize: '4rem' }}>⭐⭐⭐⭐⭐</span>
          </div>
          <blockquote className="blockquote">
            <p className="fs-4">"This product has completely transformed how we work. Highly recommended!"</p>
          </blockquote>
          <figcaption className="blockquote-footer mt-3">
            Jane Doe, <cite title="Company">Tech Corp</cite>
          </figcaption>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="text-center py-5 px-3">
          <div className="mb-3">
            <span style={{ fontSize: '4rem' }}>⭐⭐⭐⭐⭐</span>
          </div>
          <blockquote className="blockquote">
            <p className="fs-4">"Outstanding support and an incredible team. Best decision we made."</p>
          </blockquote>
          <figcaption className="blockquote-footer mt-3">
            John Smith, <cite title="Company">Startup Inc</cite>
          </figcaption>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="text-center py-5 px-3">
          <div className="mb-3">
            <span style={{ fontSize: '4rem' }}>⭐⭐⭐⭐⭐</span>
          </div>
          <blockquote className="blockquote">
            <p className="fs-4">"Easy to use, powerful features, and great value. What more could you ask for?"</p>
          </blockquote>
          <figcaption className="blockquote-footer mt-3">
            Alice Johnson, <cite title="Company">Enterprise Ltd</cite>
          </figcaption>
        </div>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A common pattern for rotating customer testimonials.',
      },
    },
  },
};

/**
 * Card carousel pattern.
 */
export const CardCarousel: Story = {
  args: {
    id: 'cardCarousel',
    controls: true,
    indicators: true,
  },
  render: (args) => (
    <Carousel {...args}>
      <CarouselItem active>
        <div className="d-flex justify-content-center gap-4 p-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Card {n}</h5>
                <p className="card-text">Some quick example text for card {n}.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))}
        </div>
      </CarouselItem>
      <CarouselItem>
        <div className="d-flex justify-content-center gap-4 p-4">
          {[4, 5, 6].map((n) => (
            <div key={n} className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Card {n}</h5>
                <p className="card-text">Some quick example text for card {n}.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))}
        </div>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Display multiple cards per slide for product showcases.',
      },
    },
  },
};

/**
 * Using SimpleCarousel for common image patterns.
 */
export const UsingSimpleCarousel: Story = {
  render: () => (
    <SimpleCarousel
      id="simpleDemo"
      slides={[
        {
          src: svgPlaceholders[0],
          title: 'First Slide',
          caption: 'Description for the first slide.',
        },
        {
          src: svgPlaceholders[1],
          title: 'Second Slide',
          caption: 'Description for the second slide.',
        },
        {
          src: svgPlaceholders[2],
          title: 'Third Slide',
          caption: 'Description for the third slide.',
        },
      ]}
      indicators
      controls
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `SimpleCarousel` for quick image carousel setup with an array of slides.',
      },
    },
  },
};

/**
 * SimpleCarousel with fade effect.
 */
export const SimpleCarouselFade: Story = {
  render: () => (
    <SimpleCarousel
      id="simpleFadeDemo"
      slides={[
        { src: svgPlaceholders[0], title: 'Crossfade Effect' },
        { src: svgPlaceholders[1], title: 'Smooth Transitions' },
        { src: svgPlaceholders[2], title: 'Professional Look' },
      ]}
      fade
      indicators
      controls
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'SimpleCarousel with crossfade animation.',
      },
    },
  },
};

/**
 * Using the useCarousel hook for programmatic control.
 */
export const UseCarouselHook: Story = {
  name: 'useCarousel Hook',
  render: function UseCarouselStory() {
    const { ref, next, prev, to, cycle, pause } = useCarousel({
      interval: 3000,
      onSlide: action('onSlide'),
      onSlid: action('onSlid'),
    });

    return (
      <div>
        <div 
          ref={ref} 
          id="hookCarousel" 
          className="carousel slide"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <button className="btn btn-outline-secondary" onClick={prev}>Previous</button>
          <button className="btn btn-outline-secondary" onClick={next}>Next</button>
          <button className="btn btn-outline-primary" onClick={() => to(0)}>Go to 1</button>
          <button className="btn btn-outline-primary" onClick={() => to(1)}>Go to 2</button>
          <button className="btn btn-outline-primary" onClick={() => to(2)}>Go to 3</button>
          <button className="btn btn-success" onClick={cycle}>Start Cycle</button>
          <button className="btn btn-danger" onClick={pause}>Pause</button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `useCarousel` hook for programmatic control over the carousel.',
      },
    },
  },
};

/**
 * Carousel with event callbacks.
 */
export const WithEvents: Story = {
  args: {
    id: 'eventsCarousel',
    controls: true,
    indicators: true,
    onSlide: action('onSlide'),
    onSlid: action('onSlid'),
  },
  render: (args) => (
    <div>
      <Carousel {...args}>
        <CarouselItem active>
          <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
        </CarouselItem>
        <CarouselItem>
          <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
        </CarouselItem>
        <CarouselItem>
          <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
        </CarouselItem>
      </Carousel>
      <p className="text-muted mt-2 text-center">
        <small>Check the Actions panel to see slide events.</small>
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `onSlide` and `onSlid` callbacks to respond to carousel transitions.',
      },
    },
  },
};

/**
 * Full-width hero carousel.
 */
export const HeroCarousel: Story = {
  args: {
    id: 'heroCarousel',
    ride: 'carousel',
    interval: 5000,
    fade: true,
    indicators: true,
    controls: true,
  },
  render: (args) => (
    <Carousel {...args} className="bg-dark">
      <CarouselItem active>
        <div 
          className="d-flex align-items-center justify-content-center text-white"
          style={{ 
            minHeight: '500px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div className="text-center">
            <h1 className="display-3 fw-bold">Welcome</h1>
            <p className="lead fs-4">Discover what's possible</p>
            <button className="btn btn-light btn-lg mt-3">Explore Now</button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div 
          className="d-flex align-items-center justify-content-center text-white"
          style={{ 
            minHeight: '500px',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          }}
        >
          <div className="text-center">
            <h1 className="display-3 fw-bold">Innovate</h1>
            <p className="lead fs-4">Build the future today</p>
            <button className="btn btn-light btn-lg mt-3">Get Started</button>
          </div>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div 
          className="d-flex align-items-center justify-content-center text-white"
          style={{ 
            minHeight: '500px',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          }}
        >
          <div className="text-center">
            <h1 className="display-3 fw-bold">Transform</h1>
            <p className="lead fs-4">Elevate your experience</p>
            <button className="btn btn-light btn-lg mt-3">Learn More</button>
          </div>
        </div>
      </CarouselItem>
    </Carousel>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Full-width hero carousel with gradient backgrounds.',
      },
    },
  },
};

/**
 * Thumbnail navigation carousel.
 */
export const ThumbnailNavigation: Story = {
  render: function ThumbnailCarousel() {
    const { ref, to } = useCarousel({});

    return (
      <div>
        <div 
          ref={ref} 
          id="thumbCarousel" 
          className="carousel slide mb-3"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={svgPlaceholders[0]} className="d-block w-100" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={svgPlaceholders[1]} className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={svgPlaceholders[2]} className="d-block w-100" alt="Third slide" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center gap-2">
          {svgPlaceholders.map((src, index) => (
            <button
              key={index}
              className="btn p-0 border"
              onClick={() => to(index)}
              style={{ width: '80px', overflow: 'hidden' }}
            >
              <img src={src} className="w-100" alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom thumbnail navigation using the `useCarousel` hook.',
      },
    },
  },
};
