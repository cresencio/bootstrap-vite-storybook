import React from 'react';

export type AlertVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface AlertProps {
  /** The alert variant/color theme */
  variant?: AlertVariant;
  /** Alert content */
  children: React.ReactNode;
  /** Show dismiss button */
  dismissible?: boolean;
  /** Callback when alert is dismissed */
  onDismiss?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'primary',
  children,
  dismissible = false,
  onDismiss,
  className = '',
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`alert alert-${variant} ${dismissible ? 'alert-dismissible fade show' : ''} ${className}`.trim()}
      role="alert"
    >
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={handleDismiss}
        />
      )}
    </div>
  );
};

export default Alert;
