import React, { useEffect, useRef, useId } from 'react';

export type ToastPlacement = 
  | 'top-start' | 'top-center' | 'top-end'
  | 'middle-start' | 'middle-center' | 'middle-end'
  | 'bottom-start' | 'bottom-center' | 'bottom-end';

export interface ToastProps {
  /** Toast content */
  children: React.ReactNode;
  /** Unique identifier */
  id?: string;
  /** Whether the toast is visible */
  show?: boolean;
  /** Enable fade animation */
  animation?: boolean;
  /** Automatically hide the toast */
  autohide?: boolean;
  /** Delay before hiding (in milliseconds) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
  /** Callback when toast starts to show */
  onShow?: (event: Event) => void;
  /** Callback when toast is fully shown */
  onShown?: (event: Event) => void;
  /** Callback when toast starts to hide */
  onHide?: (event: Event) => void;
  /** Callback when toast is fully hidden */
  onHidden?: (event: Event) => void;
}

export const Toast: React.FC<ToastProps> = ({
  children,
  id,
  show = false,
  animation = true,
  autohide = true,
  delay = 5000,
  className = '',
  onShow,
  onShown,
  onHide,
  onHidden,
}) => {
  const generatedId = useId();
  const toastId = id || `toast-${generatedId.replace(/:/g, '')}`;
  const toastRef = useRef<HTMLDivElement>(null);
  const instanceRef = useRef<ReturnType<typeof import('bootstrap').Toast> | null>(null);

  useEffect(() => {
    const element = toastRef.current;
    if (!element) return;

    const handleShow = (e: Event) => onShow?.(e);
    const handleShown = (e: Event) => onShown?.(e);
    const handleHide = (e: Event) => onHide?.(e);
    const handleHidden = (e: Event) => onHidden?.(e);

    element.addEventListener('show.bs.toast', handleShow);
    element.addEventListener('shown.bs.toast', handleShown);
    element.addEventListener('hide.bs.toast', handleHide);
    element.addEventListener('hidden.bs.toast', handleHidden);

    return () => {
      element.removeEventListener('show.bs.toast', handleShow);
      element.removeEventListener('shown.bs.toast', handleShown);
      element.removeEventListener('hide.bs.toast', handleHide);
      element.removeEventListener('hidden.bs.toast', handleHidden);
    };
  }, [onShow, onShown, onHide, onHidden]);

  useEffect(() => {
    const element = toastRef.current;
    if (!element) return;

    const initToast = async () => {
      const { Toast: BSToast } = await import('bootstrap');
      
      if (!instanceRef.current) {
        instanceRef.current = BSToast.getOrCreateInstance(element);
      }

      if (show) {
        instanceRef.current.show();
      } else {
        instanceRef.current.hide();
      }
    };

    initToast();
  }, [show]);

  const classes = ['toast', className].filter(Boolean).join(' ');

  return (
    <div
      ref={toastRef}
      className={classes}
      id={toastId}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-animation={animation ? 'true' : 'false'}
      data-bs-autohide={autohide ? 'true' : 'false'}
      data-bs-delay={delay}
    >
      {children}
    </div>
  );
};

export interface ToastHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Show close button */
  closeButton?: boolean;
  /** Use white close button (for dark backgrounds) */
  closeWhite?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const ToastHeader: React.FC<ToastHeaderProps> = ({
  children,
  closeButton = true,
  closeWhite = false,
  className = '',
}) => {
  return (
    <div className={`toast-header ${className}`.trim()}>
      {children}
      {closeButton && (
        <button
          type="button"
          className={`btn-close${closeWhite ? ' btn-close-white' : ''}`}
          data-bs-dismiss="toast"
          aria-label="Close"
        />
      )}
    </div>
  );
};

export interface ToastBodyProps {
  /** Body content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ToastBody: React.FC<ToastBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`toast-body ${className}`.trim()}>
      {children}
    </div>
  );
};

// Helper function to get placement classes
const getPlacementClasses = (placement: ToastPlacement): string => {
  const placementMap: Record<ToastPlacement, string> = {
    'top-start': 'top-0 start-0',
    'top-center': 'top-0 start-50 translate-middle-x',
    'top-end': 'top-0 end-0',
    'middle-start': 'top-50 start-0 translate-middle-y',
    'middle-center': 'top-50 start-50 translate-middle',
    'middle-end': 'top-50 end-0 translate-middle-y',
    'bottom-start': 'bottom-0 start-0',
    'bottom-center': 'bottom-0 start-50 translate-middle-x',
    'bottom-end': 'bottom-0 end-0',
  };
  return placementMap[placement];
};

export interface ToastContainerProps {
  /** Toast elements */
  children: React.ReactNode;
  /** Placement of the container */
  placement?: ToastPlacement;
  /** Position type (fixed for viewport, absolute for parent) */
  position?: 'fixed' | 'absolute' | 'static';
  /** Additional CSS classes */
  className?: string;
  /** Container style */
  style?: React.CSSProperties;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  children,
  placement = 'top-end',
  position = 'fixed',
  className = '',
  style,
}) => {
  const positionClass = position === 'static' ? 'position-static' : `position-${position}`;
  const placementClasses = position !== 'static' ? getPlacementClasses(placement) : '';

  const classes = [
    'toast-container',
    positionClass,
    placementClasses,
    'p-3',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} aria-live="polite" aria-atomic="true">
      {children}
    </div>
  );
};

// Simple toast variant for quick notifications
export type SimpleToastVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface SimpleToastProps {
  /** Toast message */
  message: string;
  /** Color variant */
  variant?: SimpleToastVariant;
  /** Whether the toast is visible */
  show?: boolean;
  /** Automatically hide the toast */
  autohide?: boolean;
  /** Delay before hiding (in milliseconds) */
  delay?: number;
  /** Show close button */
  closeButton?: boolean;
  /** Callback when toast is hidden */
  onHidden?: () => void;
}

export const SimpleToast: React.FC<SimpleToastProps> = ({
  message,
  variant = 'primary',
  show = false,
  autohide = true,
  delay = 5000,
  closeButton = true,
  onHidden,
}) => {
  const isLight = variant === 'light' || variant === 'warning';
  
  return (
    <Toast
      show={show}
      autohide={autohide}
      delay={delay}
      className={`align-items-center text-bg-${variant} border-0`}
      onHidden={onHidden ? () => onHidden() : undefined}
    >
      <div className="d-flex">
        <ToastBody>{message}</ToastBody>
        {closeButton && (
          <button
            type="button"
            className={`btn-close${!isLight ? ' btn-close-white' : ''} me-2 m-auto`}
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        )}
      </div>
    </Toast>
  );
};

export default Toast;
