import { useEffect, useRef } from 'react';

/**
 * Popover placement options
 */
export type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left' | 'auto';

/**
 * Popover trigger options
 */
export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual' | 'hover focus';

/**
 * Props for the Popover component
 */
export interface PopoverProps {
  /** The element that triggers the popover */
  children: React.ReactElement;
  /** Popover body content */
  content: string;
  /** Popover header title (optional) */
  title?: string;
  /** Popover placement relative to trigger */
  placement?: PopoverPlacement;
  /** How popover is triggered */
  trigger?: PopoverTrigger;
  /** Enable HTML content in popover */
  html?: boolean;
  /** Delay showing/hiding (ms or { show, hide }) */
  delay?: number | { show: number; hide: number };
  /** Animation transition */
  animation?: boolean;
  /** Container element for popover */
  container?: string | HTMLElement;
  /** Custom CSS class for popover */
  customClass?: string;
  /** Offset from trigger element [x, y] */
  offset?: [number, number];
  /** Fallback placements */
  fallbackPlacements?: PopoverPlacement[];
  /** Boundary for flip behavior */
  boundary?: string | HTMLElement;
  /** Sanitize HTML content */
  sanitize?: boolean;
}

/**
 * Popover component for displaying rich contextual content.
 * 
 * Wraps a single child element and initializes Bootstrap's popover functionality.
 * Unlike tooltips, popovers can have both a title and body content.
 * 
 * @example
 * ```tsx
 * <Popover title="Popover Title" content="This is the popover content.">
 *   <button className="btn btn-primary">Click me</button>
 * </Popover>
 * ```
 */
export function Popover({
  children,
  content,
  title,
  placement = 'right',
  trigger = 'click',
  html = false,
  delay = 0,
  animation = true,
  container,
  customClass,
  offset,
  fallbackPlacements,
  boundary,
  sanitize = true,
}: PopoverProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const popoverInstanceRef = useRef<InstanceType<typeof window.bootstrap.Popover> | null>(null);

  useEffect(() => {
    const element = triggerRef.current;
    if (!element || !window.bootstrap?.Popover) return;

    // Build options
    const options: Record<string, unknown> = {
      content,
      placement,
      trigger,
      html,
      delay,
      animation,
      sanitize,
    };

    if (title) options.title = title;
    if (container) options.container = container;
    if (customClass) options.customClass = customClass;
    if (offset) options.offset = offset;
    if (fallbackPlacements) options.fallbackPlacements = fallbackPlacements;
    if (boundary) options.boundary = boundary;

    // Initialize popover
    popoverInstanceRef.current = new window.bootstrap.Popover(element, options);

    return () => {
      popoverInstanceRef.current?.dispose();
      popoverInstanceRef.current = null;
    };
  }, [
    content,
    title,
    placement,
    trigger,
    html,
    delay,
    animation,
    container,
    customClass,
    offset,
    fallbackPlacements,
    boundary,
    sanitize,
  ]);

  // Wrap child in a span to attach the popover
  return (
    <span ref={triggerRef} className="d-inline-block">
      {children}
    </span>
  );
}

/**
 * Props for PopoverTrigger component (alternative pattern)
 */
export interface PopoverTriggerProps {
  /** Popover body content */
  content: string;
  /** Popover header title */
  title?: string;
  /** Element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Popover placement */
  placement?: PopoverPlacement;
  /** How popover is triggered */
  trigger?: PopoverTrigger;
  /** Children content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * PopoverTrigger - Alternative component that renders its own element.
 * 
 * @example
 * ```tsx
 * <PopoverTrigger 
 *   title="Popover Title" 
 *   content="Content here" 
 *   as="button" 
 *   className="btn btn-primary"
 * >
 *   Click for Popover
 * </PopoverTrigger>
 * ```
 */
export function PopoverTrigger({
  content,
  title,
  as: Component = 'span',
  placement = 'right',
  trigger = 'click',
  children,
  className,
  onClick,
  disabled,
}: PopoverTriggerProps) {
  const ref = useRef<HTMLElement>(null);
  const popoverRef = useRef<InstanceType<typeof window.bootstrap.Popover> | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.bootstrap?.Popover) return;

    const options: Record<string, unknown> = {
      content,
      placement,
      trigger,
    };

    if (title) options.title = title;

    popoverRef.current = new window.bootstrap.Popover(element, options);

    return () => {
      popoverRef.current?.dispose();
      popoverRef.current = null;
    };
  }, [content, title, placement, trigger]);

  if (Component === 'button') {
    return (
      // @ts-expect-error - Dynamic component type
      <Component ref={ref} className={className} onClick={onClick} disabled={disabled} type="button">
        {children}
      </Component>
    );
  }

  // @ts-expect-error - Dynamic component type
  return <Component ref={ref} className={className} onClick={onClick}>{children}</Component>;
}

// Add Bootstrap type declaration
declare global {
  interface Window {
    bootstrap: {
      Popover: new (element: HTMLElement, options?: Record<string, unknown>) => {
        show: () => void;
        hide: () => void;
        toggle: () => void;
        enable: () => void;
        disable: () => void;
        dispose: () => void;
        setContent: (content: Record<string, string | undefined>) => void;
      };
    };
  }
}
