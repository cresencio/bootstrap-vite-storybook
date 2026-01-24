import { useEffect, useRef, useCallback } from 'react';

export interface UseScrollspyOptions {
  /** Selector for the navigation container or list of links */
  target: string;
  /** Pixels to offset from top when calculating scroll position */
  rootMargin?: string;
  /** Intersection threshold for activation */
  threshold?: number | number[];
  /** Enable smooth scrolling behavior */
  smoothScroll?: boolean;
  /** Callback when active item changes */
  onActivate?: (id: string) => void;
}

/**
 * Hook for programmatic scrollspy control
 */
export function useScrollspy(options: UseScrollspyOptions) {
  const ref = useRef<HTMLElement>(null);
  const scrollspyRef = useRef<InstanceType<typeof window.bootstrap.ScrollSpy> | null>(null);

  const handleActivate = useCallback((event: Event) => {
    const e = event as CustomEvent & { relatedTarget: HTMLElement };
    const id = e.relatedTarget?.getAttribute('href')?.replace('#', '') || '';
    options.onActivate?.(id);
  }, [options]);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.bootstrap?.ScrollSpy) return;

    const scrollspyOptions: Record<string, unknown> = {
      target: options.target,
    };

    if (options.rootMargin) scrollspyOptions.rootMargin = options.rootMargin;
    if (options.threshold !== undefined) scrollspyOptions.threshold = options.threshold;
    if (options.smoothScroll !== undefined) scrollspyOptions.smoothScroll = options.smoothScroll;

    scrollspyRef.current = new window.bootstrap.ScrollSpy(element, scrollspyOptions);

    element.addEventListener('activate.bs.scrollspy', handleActivate);

    return () => {
      element.removeEventListener('activate.bs.scrollspy', handleActivate);
      scrollspyRef.current?.dispose();
      scrollspyRef.current = null;
    };
  }, [options.target, options.rootMargin, options.threshold, options.smoothScroll, handleActivate]);

  return {
    ref,
    refresh: () => scrollspyRef.current?.refresh(),
  };
}

// Add Bootstrap type declaration
declare global {
  interface Window {
    bootstrap: {
      ScrollSpy: new (element: HTMLElement, options?: Record<string, unknown>) => {
        refresh: () => void;
        dispose: () => void;
      };
    };
  }
}
