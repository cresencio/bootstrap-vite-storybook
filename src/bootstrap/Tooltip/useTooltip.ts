import { useEffect, useRef } from 'react';

/**
 * Hook for programmatic tooltip control
 */
export function useTooltip(options: {
  title: string;
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'auto';
  trigger?: 'hover' | 'focus' | 'click' | 'manual' | 'hover focus';
  html?: boolean;
  animation?: boolean;
  delay?: number | { show: number; hide: number };
  customClass?: string;
  offset?: [number, number];
}) {
  const ref = useRef<HTMLElement>(null);
  const tooltipRef = useRef<InstanceType<typeof window.bootstrap.Tooltip> | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.bootstrap?.Tooltip) return;

    const tooltipOptions: Record<string, unknown> = {
      title: options.title,
      placement: options.placement ?? 'top',
      trigger: options.trigger ?? 'hover focus',
      html: options.html ?? false,
      animation: options.animation ?? true,
    };

    if (options.delay) tooltipOptions.delay = options.delay;
    if (options.customClass) tooltipOptions.customClass = options.customClass;
    if (options.offset) tooltipOptions.offset = options.offset;

    tooltipRef.current = new window.bootstrap.Tooltip(element, tooltipOptions);

    return () => {
      tooltipRef.current?.dispose();
      tooltipRef.current = null;
    };
  }, [options]);

  return {
    ref,
    show: () => tooltipRef.current?.show(),
    hide: () => tooltipRef.current?.hide(),
    toggle: () => tooltipRef.current?.toggle(),
    enable: () => tooltipRef.current?.enable(),
    disable: () => tooltipRef.current?.disable(),
    setContent: (content: { '.tooltip-inner'?: string }) => tooltipRef.current?.setContent(content),
  };
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
