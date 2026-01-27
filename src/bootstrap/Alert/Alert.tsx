import React, { useEffect, useRef, useState, useId } from 'react';

// ============================================================================
// Types
// ============================================================================

export type AlertVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

// ============================================================================
// Alert (Main Component)
// ============================================================================

export interface AlertProps {
  /** Alert content */
  children: React.ReactNode;
  /** The alert variant/color theme */
  variant?: AlertVariant;
  /** Show dismiss button */
  dismissible?: boolean;
  /** Whether the alert is visible (controlled mode) */
  show?: boolean;
  /** Enable fade animation when dismissing */
  fade?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Callback fired immediately when close is called */
  onClose?: (event: Event) => void;
  /** Callback fired when alert has been closed and transitions complete */
  onClosed?: (event: Event) => void;
}

/**
 * Alert component for contextual feedback messages.
 *
 * Alerts provide contextual feedback for typical user actions.
 * They support eight variants and can be made dismissible.
 *
 * @example
 * ```tsx
 * <Alert variant="success" dismissible>
 *   <AlertHeading>Success!</AlertHeading>
 *   <p>Your changes have been saved.</p>
 * </Alert>
 * ```
 */
export function Alert({
  children,
  variant = 'primary',
  dismissible = false,
  show = true,
  fade = true,
  className = '',
  onClose,
  onClosed,
}: AlertProps) {
  const alertRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(show);

  // Sync with controlled show prop
  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  // Attach Bootstrap event listeners
  useEffect(() => {
    const element = alertRef.current;
    if (!element) return;

    const handleClose = (e: Event) => onClose?.(e);
    const handleClosed = (e: Event) => {
      setIsVisible(false);
      onClosed?.(e);
    };

    element.addEventListener('close.bs.alert', handleClose);
    element.addEventListener('closed.bs.alert', handleClosed);

    return () => {
      element.removeEventListener('close.bs.alert', handleClose);
      element.removeEventListener('closed.bs.alert', handleClosed);
    };
  }, [onClose, onClosed]);

  if (!isVisible) return null;

  const classes = [
    'alert',
    `alert-${variant}`,
    dismissible ? 'alert-dismissible' : '',
    fade ? 'fade' : '',
    fade && isVisible ? 'show' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={alertRef} className={classes} role="alert">
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      )}
    </div>
  );
}

// ============================================================================
// AlertHeading
// ============================================================================

export interface AlertHeadingProps {
  /** Heading content */
  children: React.ReactNode;
  /** Heading element tag */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * AlertHeading component for alert titles.
 * Uses h4 by default with Bootstrap's .alert-heading class.
 */
export function AlertHeading({
  children,
  as: Component = 'h4',
  className = '',
}: AlertHeadingProps) {
  const classes = ['alert-heading', className].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
}

// ============================================================================
// AlertLink
// ============================================================================

export interface AlertLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * AlertLink component for styled links within alerts.
 * Automatically applies .alert-link class for proper color matching.
 */
export function AlertLink({
  children,
  className = '',
  ...props
}: AlertLinkProps) {
  const classes = ['alert-link', className].filter(Boolean).join(' ');

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}

// ============================================================================
// SimpleAlert (Convenience Wrapper)
// ============================================================================

export interface SimpleAlertProps {
  /** Alert message content */
  children: React.ReactNode;
  /** The alert variant/color theme */
  variant?: AlertVariant;
  /** Optional heading text */
  heading?: React.ReactNode;
  /** Show dismiss button */
  dismissible?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Callback when alert is closed */
  onClosed?: () => void;
}

/**
 * SimpleAlert - a convenience wrapper for common alert patterns.
 *
 * @example
 * ```tsx
 * <SimpleAlert
 *   variant="success"
 *   heading="Well done!"
 *   dismissible
 * >
 *   Your changes have been saved.
 * </SimpleAlert>
 * ```
 */
export function SimpleAlert({
  children,
  variant = 'primary',
  heading,
  dismissible = false,
  className = '',
  onClosed,
}: SimpleAlertProps) {
  return (
    <Alert
      variant={variant}
      dismissible={dismissible}
      className={className}
      onClosed={onClosed ? () => onClosed() : undefined}
    >
      {heading && <AlertHeading>{heading}</AlertHeading>}
      {children}
    </Alert>
  );
}

export default Alert;
