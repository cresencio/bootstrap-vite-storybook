import React, { useEffect, useRef, useId } from 'react';

export interface CollapseProps {
  /** The content to show/hide */
  children: React.ReactNode;
  /** Whether the collapse is shown */
  show?: boolean;
  /** Use horizontal collapse (width instead of height) */
  horizontal?: boolean;
  /** Additional CSS classes for the collapse container */
  className?: string;
  /** Custom ID for the collapse element */
  id?: string;
  /** Callback fired immediately when hide is called */
  onHide?: (event: Event) => void;
  /** Callback fired when collapse has been hidden */
  onHidden?: (event: Event) => void;
  /** Callback fired immediately when show is called */
  onShow?: (event: Event) => void;
  /** Callback fired when collapse has been shown */
  onShown?: (event: Event) => void;
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  show = false,
  horizontal = false,
  className = '',
  id,
  onHide,
  onHidden,
  onShow,
  onShown,
}) => {
  const collapseRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const collapseId = id || `collapse-${generatedId}`;

  useEffect(() => {
    const element = collapseRef.current;
    if (!element) return;

    const handleHide = (event: Event) => onHide?.(event);
    const handleHidden = (event: Event) => onHidden?.(event);
    const handleShow = (event: Event) => onShow?.(event);
    const handleShown = (event: Event) => onShown?.(event);

    element.addEventListener('hide.bs.collapse', handleHide);
    element.addEventListener('hidden.bs.collapse', handleHidden);
    element.addEventListener('show.bs.collapse', handleShow);
    element.addEventListener('shown.bs.collapse', handleShown);

    return () => {
      element.removeEventListener('hide.bs.collapse', handleHide);
      element.removeEventListener('hidden.bs.collapse', handleHidden);
      element.removeEventListener('show.bs.collapse', handleShow);
      element.removeEventListener('shown.bs.collapse', handleShown);
    };
  }, [onHide, onHidden, onShow, onShown]);

  const classes = [
    'collapse',
    horizontal ? 'collapse-horizontal' : '',
    show ? 'show' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={collapseRef} className={classes} id={collapseId}>
      {children}
    </div>
  );
};

export interface CollapseToggleProps {
  /** The content of the toggle button */
  children: React.ReactNode;
  /** The ID of the collapse element to toggle */
  target: string;
  /** Whether the collapse is initially expanded */
  expanded?: boolean;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark';
  /** Additional CSS classes */
  className?: string;
  /** Render as link instead of button */
  asLink?: boolean;
}

export const CollapseToggle: React.FC<CollapseToggleProps> = ({
  children,
  target,
  expanded = false,
  variant = 'primary',
  className = '',
  asLink = false,
}) => {
  const classes = [`btn btn-${variant}`, className].filter(Boolean).join(' ');
  
  // Ensure target starts with # for proper selector
  const targetSelector = target.startsWith('#') ? target : `#${target}`;

  if (asLink) {
    return (
      <a
        className={classes}
        data-bs-toggle="collapse"
        href={targetSelector}
        role="button"
        aria-expanded={expanded}
        aria-controls={target.replace('#', '')}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={targetSelector}
      aria-expanded={expanded}
      aria-controls={target.replace('#', '')}
    >
      {children}
    </button>
  );
};

export default Collapse;
