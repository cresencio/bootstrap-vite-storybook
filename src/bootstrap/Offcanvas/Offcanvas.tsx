import React, { useEffect, useRef, useId } from 'react';

export type OffcanvasPlacement = 'start' | 'end' | 'top' | 'bottom';
export type OffcanvasResponsive = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface OffcanvasProps {
  /** Offcanvas content */
  children: React.ReactNode;
  /** Unique identifier for the offcanvas */
  id?: string;
  /** Whether the offcanvas is visible */
  show?: boolean;
  /** Placement of the offcanvas */
  placement?: OffcanvasPlacement;
  /** Responsive breakpoint (offcanvas below, regular content above) */
  responsive?: OffcanvasResponsive;
  /** Allow body scrolling while offcanvas is open */
  scroll?: boolean;
  /** Show backdrop behind offcanvas */
  backdrop?: boolean | 'static';
  /** Close on ESC key press */
  keyboard?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Callback when offcanvas starts to show */
  onShow?: (event: Event) => void;
  /** Callback when offcanvas is fully shown */
  onShown?: (event: Event) => void;
  /** Callback when offcanvas starts to hide */
  onHide?: (event: Event) => void;
  /** Callback when offcanvas is fully hidden */
  onHidden?: (event: Event) => void;
  /** Callback when backdrop click is prevented */
  onHidePrevented?: (event: Event) => void;
}

export const Offcanvas: React.FC<OffcanvasProps> = ({
  children,
  id,
  show = false,
  placement = 'start',
  responsive,
  scroll = false,
  backdrop = true,
  keyboard = true,
  className = '',
  onShow,
  onShown,
  onHide,
  onHidden,
  onHidePrevented,
}) => {
  const generatedId = useId();
  const offcanvasId = id || `offcanvas-${generatedId.replace(/:/g, '')}`;
  const offcanvasRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<ReturnType<typeof import('bootstrap').Offcanvas> | null>(null);

  useEffect(() => {
    const element = offcanvasRef.current;
    if (!element) return;

    const handleShow = (e: Event) => onShow?.(e);
    const handleShown = (e: Event) => onShown?.(e);
    const handleHide = (e: Event) => onHide?.(e);
    const handleHidden = (e: Event) => onHidden?.(e);
    const handleHidePrevented = (e: Event) => onHidePrevented?.(e);

    element.addEventListener('show.bs.offcanvas', handleShow);
    element.addEventListener('shown.bs.offcanvas', handleShown);
    element.addEventListener('hide.bs.offcanvas', handleHide);
    element.addEventListener('hidden.bs.offcanvas', handleHidden);
    element.addEventListener('hidePrevented.bs.offcanvas', handleHidePrevented);

    return () => {
      element.removeEventListener('show.bs.offcanvas', handleShow);
      element.removeEventListener('shown.bs.offcanvas', handleShown);
      element.removeEventListener('hide.bs.offcanvas', handleHide);
      element.removeEventListener('hidden.bs.offcanvas', handleHidden);
      element.removeEventListener('hidePrevented.bs.offcanvas', handleHidePrevented);
    };
  }, [onShow, onShown, onHide, onHidden, onHidePrevented]);

  useEffect(() => {
    const element = offcanvasRef.current;
    if (!element) return;

    const initOffcanvas = async () => {
      const { Offcanvas: BSOffcanvas } = await import('bootstrap');
      
      if (!instanceRef.current) {
        instanceRef.current = BSOffcanvas.getOrCreateInstance(element);
      }

      if (show) {
        instanceRef.current.show();
      } else {
        instanceRef.current.hide();
      }
    };

    initOffcanvas();
  }, [show]);

  // Build base class with responsive variant
  const baseClass = responsive ? `offcanvas-${responsive}` : 'offcanvas';
  const placementClass = `offcanvas-${placement}`;

  const classes = [
    baseClass,
    placementClass,
    className,
  ].filter(Boolean).join(' ');

  // Build data attributes
  const dataAttrs: Record<string, string> = {};
  if (scroll) dataAttrs['data-bs-scroll'] = 'true';
  if (backdrop === false) dataAttrs['data-bs-backdrop'] = 'false';
  if (backdrop === 'static') dataAttrs['data-bs-backdrop'] = 'static';
  if (!keyboard) dataAttrs['data-bs-keyboard'] = 'false';

  return (
    <div
      ref={offcanvasRef}
      className={classes}
      tabIndex={-1}
      id={offcanvasId}
      aria-labelledby={`${offcanvasId}Label`}
      {...dataAttrs}
    >
      {children}
    </div>
  );
};

export interface OffcanvasHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Show close button */
  closeButton?: boolean;
  /** Use white close button (for dark backgrounds) */
  closeWhite?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const OffcanvasHeader: React.FC<OffcanvasHeaderProps> = ({
  children,
  closeButton = true,
  closeWhite = false,
  className = '',
}) => {
  return (
    <div className={`offcanvas-header ${className}`.trim()}>
      {children}
      {closeButton && (
        <button
          type="button"
          className={`btn-close${closeWhite ? ' btn-close-white' : ''}`}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      )}
    </div>
  );
};

export interface OffcanvasTitleProps {
  /** Title content */
  children: React.ReactNode;
  /** HTML tag to use */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** ID for accessibility (should match offcanvas aria-labelledby) */
  id?: string;
  /** Additional CSS classes */
  className?: string;
}

export const OffcanvasTitle: React.FC<OffcanvasTitleProps> = ({
  children,
  as: Tag = 'h5',
  id,
  className = '',
}) => {
  return (
    <Tag className={`offcanvas-title ${className}`.trim()} id={id}>
      {children}
    </Tag>
  );
};

export interface OffcanvasBodyProps {
  /** Body content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const OffcanvasBody: React.FC<OffcanvasBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`offcanvas-body ${className}`.trim()}>
      {children}
    </div>
  );
};

// Convenience component for triggering an offcanvas
export interface OffcanvasTriggerProps {
  /** Trigger content */
  children: React.ReactNode;
  /** Target offcanvas ID */
  target: string;
  /** Render as this element type */
  as?: 'button' | 'a';
  /** Additional CSS classes */
  className?: string;
}

export const OffcanvasTrigger: React.FC<OffcanvasTriggerProps> = ({
  children,
  target,
  as = 'button',
  className = '',
}) => {
  const targetId = target.startsWith('#') ? target : `#${target}`;
  const Tag = as;

  if (Tag === 'a') {
    return (
      <a
        className={className}
        data-bs-toggle="offcanvas"
        href={targetId}
        role="button"
        aria-controls={target.replace('#', '')}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      data-bs-toggle="offcanvas"
      data-bs-target={targetId}
      aria-controls={target.replace('#', '')}
    >
      {children}
    </button>
  );
};

export default Offcanvas;
