import { useEffect, useRef } from 'react';

/**
 * Hook for programmatic popover control
 */
export function usePopover(options: {
  title?: string;
  content: string;
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'auto';
  trigger?: 'click' | 'hover' | 'focus' | 'manual' | 'hover focus';
  html?: boolean;
  delay?: number | { show: number; hide: number };
  animation?: boolean;
  customClass?: string;
  offset?: [number, number];
}) {
  const ref = useRef<HTMLElement>(null);
  const popoverRef = useRef<InstanceType<typeof window.bootstrap.Popover> | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.bootstrap?.Popover) return;

    const popoverOptions: Record<string, unknown> = {
      title: options.title ?? '',
      content: options.content,
      placement: options.placement ?? 'right',
      trigger: options.trigger ?? 'click',
      html: options.html ?? false,
      animation: options.animation ?? true,
    };

    if (options.delay) popoverOptions.delay = options.delay;
    if (options.customClass) popoverOptions.customClass = options.customClass;
    if (options.offset) popoverOptions.offset = options.offset;

    popoverRef.current = new window.bootstrap.Popover(element, popoverOptions);

    return () => {
      popoverRef.current?.dispose();
      popoverRef.current = null;
    };
  }, [options]);

  return {
    ref,
    show: () => popoverRef.current?.show(),
    hide: () => popoverRef.current?.hide(),
    toggle: () => popoverRef.current?.toggle(),
    enable: () => popoverRef.current?.enable(),
    disable: () => popoverRef.current?.disable(),
    setContent: (content: { '.popover-header'?: string; '.popover-body'?: string }) => 
      popoverRef.current?.setContent(content),
  };
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
