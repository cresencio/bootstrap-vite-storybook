import { useEffect, useRef, useCallback } from 'react';

export interface UseCarouselOptions {
  /** Auto-cycle the carousel */
  ride?: boolean | 'carousel';
  /** Interval between slides (ms) */
  interval?: number | false;
  /** Pause on hover */
  pause?: 'hover' | false;
  /** Enable keyboard navigation */
  keyboard?: boolean;
  /** Enable touch swipe */
  touch?: boolean;
  /** Wrap around at ends */
  wrap?: boolean;
  /** Callback when slide starts */
  onSlide?: (from: number, to: number) => void;
  /** Callback when slide completes */
  onSlid?: (from: number, to: number) => void;
}

/**
 * Hook for programmatic carousel control
 */
export function useCarousel(options: UseCarouselOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<InstanceType<typeof window.bootstrap.Carousel> | null>(null);

  const handleSlide = useCallback((event: Event) => {
    const e = event as CustomEvent & { from: number; to: number };
    options.onSlide?.(e.from, e.to);
  }, [options]);

  const handleSlid = useCallback((event: Event) => {
    const e = event as CustomEvent & { from: number; to: number };
    options.onSlid?.(e.from, e.to);
  }, [options]);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.bootstrap?.Carousel) return;

    const carouselOptions: Record<string, unknown> = {
      interval: options.interval ?? 5000,
      keyboard: options.keyboard ?? true,
      pause: options.pause ?? 'hover',
      ride: options.ride ?? false,
      touch: options.touch ?? true,
      wrap: options.wrap ?? true,
    };

    carouselRef.current = new window.bootstrap.Carousel(element, carouselOptions);

    // Add event listeners
    element.addEventListener('slide.bs.carousel', handleSlide);
    element.addEventListener('slid.bs.carousel', handleSlid);

    return () => {
      element.removeEventListener('slide.bs.carousel', handleSlide);
      element.removeEventListener('slid.bs.carousel', handleSlid);
      carouselRef.current?.dispose();
      carouselRef.current = null;
    };
  }, [options.interval, options.keyboard, options.pause, options.ride, options.touch, options.wrap, handleSlide, handleSlid]);

  return {
    ref,
    next: () => carouselRef.current?.next(),
    prev: () => carouselRef.current?.prev(),
    to: (index: number) => carouselRef.current?.to(index),
    cycle: () => carouselRef.current?.cycle(),
    pause: () => carouselRef.current?.pause(),
  };
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
