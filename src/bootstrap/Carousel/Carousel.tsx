import { useEffect, useRef, useCallback } from 'react';

/**
 * Props for the Carousel component
 */
export interface CarouselProps {
  /** Carousel items */
  children: React.ReactNode;
  /** Unique ID for the carousel */
  id?: string;
  /** Auto-cycle the carousel */
  ride?: boolean | 'carousel';
  /** Interval between slides (ms), false to disable */
  interval?: number | false;
  /** Pause on hover */
  pause?: 'hover' | false;
  /** Enable keyboard navigation */
  keyboard?: boolean;
  /** Enable touch swipe */
  touch?: boolean;
  /** Wrap around at ends */
  wrap?: boolean;
  /** Use crossfade instead of slide */
  fade?: boolean;
  /** Use dark variant for controls/indicators */
  dark?: boolean;
  /** Show indicators */
  indicators?: boolean;
  /** Show prev/next controls */
  controls?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Callback when slide starts */
  onSlide?: (from: number, to: number) => void;
  /** Callback when slide completes */
  onSlid?: (from: number, to: number) => void;
}

/**
 * Carousel component for cycling through images or content.
 * 
 * @example
 * ```tsx
 * <Carousel indicators controls>
 *   <CarouselItem active>
 *     <img src="slide1.jpg" className="d-block w-100" />
 *   </CarouselItem>
 *   <CarouselItem>
 *     <img src="slide2.jpg" className="d-block w-100" />
 *   </CarouselItem>
 * </Carousel>
 * ```
 */
export function Carousel({
  children,
  id = 'carousel',
  ride = false,
  interval = 5000,
  pause = 'hover',
  keyboard = true,
  touch = true,
  wrap = true,
  fade = false,
  dark = false,
  indicators = false,
  controls = false,
  className = '',
  onSlide,
  onSlid,
}: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<InstanceType<typeof window.bootstrap.Carousel> | null>(null);

  const handleSlide = useCallback((event: Event) => {
    const e = event as CustomEvent & { from: number; to: number };
    onSlide?.(e.from, e.to);
  }, [onSlide]);

  const handleSlid = useCallback((event: Event) => {
    const e = event as CustomEvent & { from: number; to: number };
    onSlid?.(e.from, e.to);
  }, [onSlid]);

  useEffect(() => {
    const element = carouselRef.current;
    if (!element || !window.bootstrap?.Carousel) return;

    const options: Record<string, unknown> = {
      interval: interval === false ? false : interval,
      keyboard,
      pause,
      ride,
      touch,
      wrap,
    };

    instanceRef.current = new window.bootstrap.Carousel(element, options);

    element.addEventListener('slide.bs.carousel', handleSlide);
    element.addEventListener('slid.bs.carousel', handleSlid);

    return () => {
      element.removeEventListener('slide.bs.carousel', handleSlide);
      element.removeEventListener('slid.bs.carousel', handleSlid);
      instanceRef.current?.dispose();
      instanceRef.current = null;
    };
  }, [interval, keyboard, pause, ride, touch, wrap, handleSlide, handleSlid]);

  // Count children for indicators
  const childArray = Array.isArray(children) ? children : [children];
  const itemCount = childArray.filter(
    (child) => child && typeof child === 'object' && 'type' in child
  ).length;

  const classes = [
    'carousel',
    'slide',
    fade && 'carousel-fade',
    dark && 'carousel-dark',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={carouselRef}
      id={id}
      className={classes}
      data-bs-ride={ride === true ? 'carousel' : ride || undefined}
    >
      {indicators && (
        <div className="carousel-indicators">
          {Array.from({ length: itemCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#${id}`}
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : undefined}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="carousel-inner">
        {children}
      </div>

      {controls && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

/**
 * Props for CarouselItem component
 */
export interface CarouselItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Whether this is the active slide */
  active?: boolean;
  /** Custom interval for this slide (ms) */
  interval?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Individual carousel slide item.
 */
export function CarouselItem({
  children,
  active = false,
  interval,
  className = '',
}: CarouselItemProps) {
  const classes = [
    'carousel-item',
    active && 'active',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      data-bs-interval={interval}
    >
      {children}
    </div>
  );
}

/**
 * Props for CarouselCaption component
 */
export interface CarouselCaptionProps {
  /** Caption content */
  children: React.ReactNode;
  /** Caption title */
  title?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Caption overlay for carousel items.
 */
export function CarouselCaption({
  children,
  title,
  className = '',
}: CarouselCaptionProps) {
  return (
    <div className={`carousel-caption d-none d-md-block ${className}`.trim()}>
      {title && <h5>{title}</h5>}
      {children}
    </div>
  );
}

/**
 * Props for SimpleCarousel component
 */
export interface SimpleCarouselProps {
  /** Array of slide data */
  slides: Array<{
    /** Image source URL */
    src: string;
    /** Image alt text */
    alt?: string;
    /** Caption title */
    title?: string;
    /** Caption text */
    caption?: string;
  }>;
  /** Unique ID for the carousel */
  id?: string;
  /** Auto-cycle the carousel */
  ride?: boolean | 'carousel';
  /** Interval between slides (ms) */
  interval?: number | false;
  /** Use crossfade instead of slide */
  fade?: boolean;
  /** Use dark variant */
  dark?: boolean;
  /** Show indicators */
  indicators?: boolean;
  /** Show controls */
  controls?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SimpleCarousel - Convenience component for common image carousel pattern.
 * 
 * @example
 * ```tsx
 * <SimpleCarousel
 *   slides={[
 *     { src: 'slide1.jpg', title: 'First slide', caption: 'Description' },
 *     { src: 'slide2.jpg', title: 'Second slide', caption: 'Description' },
 *   ]}
 *   indicators
 *   controls
 * />
 * ```
 */
export function SimpleCarousel({
  slides,
  id = 'simpleCarousel',
  ride = false,
  interval = 5000,
  fade = false,
  dark = false,
  indicators = true,
  controls = true,
  className = '',
}: SimpleCarouselProps) {
  return (
    <Carousel
      id={id}
      ride={ride}
      interval={interval}
      fade={fade}
      dark={dark}
      indicators={indicators}
      controls={controls}
      className={className}
    >
      {slides.map((slide, index) => (
        <CarouselItem key={index} active={index === 0}>
          <img
            src={slide.src}
            className="d-block w-100"
            alt={slide.alt || slide.title || `Slide ${index + 1}`}
          />
          {(slide.title || slide.caption) && (
            <CarouselCaption title={slide.title}>
              {slide.caption && <p>{slide.caption}</p>}
            </CarouselCaption>
          )}
        </CarouselItem>
      ))}
    </Carousel>
  );
}

// Add Bootstrap type declaration
declare global {
  interface Window {
    bootstrap: {
      Carousel: new (element: HTMLElement, options?: Record<string, unknown>) => {
        next: () => void;
        prev: () => void;
        to: (index: number) => void;
        cycle: () => void;
        pause: () => void;
        dispose: () => void;
      };
    };
  }
}
