import { useEffect, useRef } from 'react';

/**
 * Tooltip placement options
 */
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left' | 'auto';

/**
 * Tooltip trigger options
 */
export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'manual' | 'hover focus';

/**
 * Props for the Tooltip component
 */
export interface TooltipProps {
  /** The element that triggers the tooltip */
  children: React.ReactElement;
  /** Tooltip content (text or HTML) */
  title: string;
  /** Tooltip placement relative to trigger */
  placement?: TooltipPlacement;
  /** How tooltip is triggered */
  trigger?: TooltipTrigger;
  /** Enable HTML content in tooltip */
  html?: boolean;
  /** Delay showing/hiding (ms or { show, hide }) */
  delay?: number | { show: number; hide: number };
  /** Animation transition */
  animation?: boolean;
  /** Container element for tooltip */
  container?: string | HTMLElement;
  /** Custom CSS class for tooltip */
  customClass?: string;
  /** Offset from trigger element [x, y] */
  offset?: [number, number];
  /** Fallback placements */
  fallbackPlacements?: TooltipPlacement[];
  /** Boundary for flip behavior */
  boundary?: string | HTMLElement;
  /** Allow tooltip on disabled elements */
  allowOnDisabled?: boolean;
}

/**
 * Tooltip component for displaying contextual information on hover/focus.
 * 
 * Wraps a single child element and initializes Bootstrap's tooltip functionality.
 * 
 * @example
 * ```tsx
 * <Tooltip title="This is a tooltip">
 *   <button className="btn btn-primary">Hover me</button>
 * </Tooltip>
 * ```
 */
export function Tooltip({
  children,
  title,
  placement = 'top',
  trigger = 'hover focus',
  html = false,
  delay = 0,
  animation = true,
  container,
  customClass,
  offset,
  fallbackPlacements,
  boundary,
  allowOnDisabled = false,
}: TooltipProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipInstanceRef = useRef<InstanceType<typeof window.bootstrap.Tooltip> | null>(null);

  useEffect(() => {
    const element = triggerRef.current;
    if (!element || !window.bootstrap?.Tooltip) return;

    // Build options
    const options: Record<string, unknown> = {
      title,
      placement,
      trigger,
      html,
      delay,
      animation,
    };

    if (container) options.container = container;
    if (customClass) options.customClass = customClass;
    if (offset) options.offset = offset;
    if (fallbackPlacements) options.fallbackPlacements = fallbackPlacements;
    if (boundary) options.boundary = boundary;

    // Initialize tooltip
    tooltipInstanceRef.current = new window.bootstrap.Tooltip(element, options);

    return () => {
      tooltipInstanceRef.current?.dispose();
      tooltipInstanceRef.current = null;
    };
  }, [
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
  ]);

  // Wrap child in a span to attach the tooltip
  // This avoids ref forwarding issues with cloneElement
  if (allowOnDisabled) {
    return (
      <span ref={triggerRef} className="d-inline-block" tabIndex={0}>
        <span style={{ pointerEvents: 'none' }}>{children}</span>
      </span>
    );
  }

  return (
    <span ref={triggerRef} className="d-inline-block">
      {children}
    </span>
  );
}

/**
 * Props for TooltipTrigger component (alternative pattern)
 */
export interface TooltipTriggerProps {
  /** Tooltip content */
  title: string;
  /** Element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Tooltip placement */
  placement?: TooltipPlacement;
  /** How tooltip is triggered */
  trigger?: TooltipTrigger;
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
 * TooltipTrigger - Alternative component that renders its own element.
 * 
 * @example
 * ```tsx
 * <TooltipTrigger title="Click me" as="button" className="btn btn-primary">
 *   Button with Tooltip
 * </TooltipTrigger>
 * ```
 */
export function TooltipTrigger({
  title,
  as: Component = 'span',
  placement = 'top',
  trigger = 'hover focus',
  children,
  className,
  onClick,
  disabled,
}: TooltipTriggerProps) {
  const ref = useRef<HTMLElement>(null);
  const tooltipRef = useRef<InstanceType<typeof window.bootstrap.Tooltip> | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.bootstrap?.Tooltip) return;

    tooltipRef.current = new window.bootstrap.Tooltip(element, {
      title,
      placement,
      trigger,
    });

    return () => {
      tooltipRef.current?.dispose();
      tooltipRef.current = null;
    };
  }, [title, placement, trigger]);

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
      Tooltip: new (element: HTMLElement, options?: Record<string, unknown>) => {
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
export default Tooltip;
