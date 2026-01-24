/**
 * Bootstrap theme color variants for spinners
 */
export type SpinnerVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

/**
 * Spinner animation type
 */
export type SpinnerType = 'border' | 'grow';

/**
 * Spinner size options
 */
export type SpinnerSize = 'sm' | undefined;

/**
 * Props for the Spinner component
 */
export interface SpinnerProps {
  /** Animation type: border (spinning) or grow (pulsing) */
  type?: SpinnerType;
  /** Color variant */
  variant?: SpinnerVariant;
  /** Size: 'sm' for small, undefined for default */
  size?: SpinnerSize;
  /** Custom size using inline styles */
  customSize?: string | number;
  /** Accessible label for screen readers */
  label?: string;
  /** Hide the visually hidden label */
  hideLabel?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Spinner component for indicating loading states.
 * 
 * Provides two animation types: border (spinning circle) and grow (pulsing dot).
 * Supports all Bootstrap theme colors and responsive sizing.
 * 
 * @example
 * ```tsx
 * // Basic spinner
 * <Spinner />
 * 
 * // Colored grow spinner
 * <Spinner type="grow" variant="success" />
 * 
 * // Small spinner with custom label
 * <Spinner size="sm" label="Saving..." />
 * ```
 */
export function Spinner({
  type = 'border',
  variant,
  size,
  customSize,
  label = 'Loading...',
  hideLabel = false,
  className = '',
  style,
}: SpinnerProps) {
  const baseClass = type === 'grow' ? 'spinner-grow' : 'spinner-border';
  const sizeClass = size === 'sm' ? `${baseClass}-sm` : '';
  const variantClass = variant ? `text-${variant}` : '';

  const classes = [
    baseClass,
    sizeClass,
    variantClass,
    className,
  ].filter(Boolean).join(' ');

  const inlineStyle: React.CSSProperties = { ...style };
  if (customSize !== undefined) {
    const sizeValue = typeof customSize === 'number' ? `${customSize}px` : customSize;
    inlineStyle.width = sizeValue;
    inlineStyle.height = sizeValue;
  }

  return (
    <div
      className={classes}
      role="status"
      style={Object.keys(inlineStyle).length > 0 ? inlineStyle : undefined}
    >
      {!hideLabel && <span className="visually-hidden">{label}</span>}
    </div>
  );
}

/**
 * Props for SpinnerButton component
 */
export interface SpinnerButtonProps {
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Button content when not loading */
  children: React.ReactNode;
  /** Loading text (shown next to spinner) */
  loadingText?: string;
  /** Spinner type */
  spinnerType?: SpinnerType;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  /** Button size */
  size?: 'sm' | 'lg';
  /** Outline style */
  outline?: boolean;
  /** Disabled state (also true when loading) */
  disabled?: boolean;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SpinnerButton - A button with integrated loading spinner.
 * 
 * @example
 * ```tsx
 * <SpinnerButton loading={isLoading} onClick={handleSubmit}>
 *   Submit
 * </SpinnerButton>
 * ```
 */
export function SpinnerButton({
  loading = false,
  children,
  loadingText,
  spinnerType = 'border',
  variant = 'primary',
  size,
  outline = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
}: SpinnerButtonProps) {
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const sizeClass = size ? `btn-${size}` : '';

  const classes = [
    'btn',
    variantClass,
    sizeClass,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Spinner
            type={spinnerType}
            size="sm"
            hideLabel
            className={loadingText ? 'me-2' : ''}
          />
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </button>
  );
}

/**
 * Props for LoadingOverlay component
 */
export interface LoadingOverlayProps {
  /** Whether the overlay is visible */
  show: boolean;
  /** Spinner variant */
  variant?: SpinnerVariant;
  /** Spinner type */
  spinnerType?: SpinnerType;
  /** Custom spinner size */
  spinnerSize?: string | number;
  /** Loading message */
  message?: string;
  /** Overlay background style */
  backdrop?: 'light' | 'dark' | 'transparent';
  /** Content to overlay */
  children?: React.ReactNode;
  /** Additional CSS classes for the container */
  className?: string;
}

/**
 * LoadingOverlay - Displays a spinner overlay on content.
 * 
 * @example
 * ```tsx
 * <LoadingOverlay show={isLoading} message="Loading data...">
 *   <div>Content to overlay</div>
 * </LoadingOverlay>
 * ```
 */
export function LoadingOverlay({
  show,
  variant = 'primary',
  spinnerType = 'border',
  spinnerSize = 48,
  message,
  backdrop = 'light',
  children,
  className = '',
}: LoadingOverlayProps) {
  const backdropStyles: Record<string, React.CSSProperties> = {
    light: { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
    dark: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    transparent: { backgroundColor: 'transparent' },
  };

  return (
    <div className={`position-relative ${className}`.trim()}>
      {children}
      {show && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          style={{ zIndex: 1000, ...backdropStyles[backdrop] }}
        >
          <Spinner
            type={spinnerType}
            variant={backdrop === 'dark' ? 'light' : variant}
            customSize={spinnerSize}
            label={message || 'Loading...'}
            hideLabel={!!message}
          />
          {message && (
            <div className={`mt-3 ${backdrop === 'dark' ? 'text-light' : 'text-body'}`}>
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Spinner;
