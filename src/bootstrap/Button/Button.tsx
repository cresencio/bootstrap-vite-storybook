import React from 'react';

// ============================================================================
// Types
// ============================================================================

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Button (Main Component)
// ============================================================================

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** The button variant/color theme */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Render as outline style */
  outline?: boolean;
  /** Active/pressed state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state - shows spinner and disables button */
  loading?: boolean;
  /** Loading text to show (defaults to children) */
  loadingText?: React.ReactNode;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Toggle button behavior */
  toggle?: boolean;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Button component with multiple variants, sizes, and states.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>Click me</Button>
 * <Button variant="danger" outline size="lg">Large Outline</Button>
 * <Button loading loadingText="Saving...">Save</Button>
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'md',
  outline = false,
  active = false,
  disabled = false,
  loading = false,
  loadingText,
  type = 'button',
  toggle = false,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';

  const classes = [
    'btn',
    variantClass,
    sizeClass,
    active ? 'active' : '',
    className,
  ].filter(Boolean).join(' ');

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-pressed={toggle && active ? 'true' : undefined}
      data-bs-toggle={toggle ? 'button' : undefined}
      {...rest}
    >
      {loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </button>
  );
}

// ============================================================================
// LinkButton (Anchor styled as button)
// ============================================================================

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The button variant/color theme */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Render as outline style */
  outline?: boolean;
  /** Active/pressed state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Link href */
  href?: string;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Anchor element styled as a button.
 *
 * Use when navigation is the primary action.
 * Add `role="button"` when the link triggers in-page functionality.
 *
 * @example
 * ```tsx
 * <LinkButton href="/dashboard" variant="primary">Go to Dashboard</LinkButton>
 * ```
 */
export function LinkButton({
  variant = 'primary',
  size = 'md',
  outline = false,
  active = false,
  disabled = false,
  href,
  children,
  className = '',
  role,
  ...rest
}: LinkButtonProps) {
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;
  const sizeClass = size !== 'md' ? `btn-${size}` : '';

  const classes = [
    'btn',
    variantClass,
    sizeClass,
    active ? 'active' : '',
    disabled ? 'disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <a
      href={disabled ? undefined : href}
      className={classes}
      role={role ?? 'button'}
      aria-disabled={disabled ? 'true' : undefined}
      tabIndex={disabled ? -1 : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

// ============================================================================
// IconButton (Button with icon and optional text)
// ============================================================================

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  /** Icon element */
  icon: React.ReactNode;
  /** Button label text (can be visually hidden) */
  label: string;
  /** Position of the icon relative to label */
  iconPosition?: 'start' | 'end';
  /** Hide the label visually (still accessible to screen readers) */
  iconOnly?: boolean;
}

/**
 * Button with an icon and accessible label.
 *
 * Use `iconOnly` for icon-only buttons with visually hidden text.
 *
 * @example
 * ```tsx
 * <IconButton icon={<DownloadIcon />} label="Download" />
 * <IconButton icon={<TrashIcon />} label="Delete" iconOnly variant="danger" />
 * ```
 */
export function IconButton({
  icon,
  label,
  iconPosition = 'start',
  iconOnly = false,
  className = '',
  ...rest
}: IconButtonProps) {
  return (
    <Button className={className} {...rest}>
      {iconPosition === 'start' && (
        <span className={iconOnly ? '' : 'me-2'}>{icon}</span>
      )}
      {iconOnly ? (
        <span className="visually-hidden">{label}</span>
      ) : (
        <span>{label}</span>
      )}
      {iconPosition === 'end' && (
        <span className={iconOnly ? '' : 'ms-2'}>{icon}</span>
      )}
    </Button>
  );
}

// ============================================================================
// CloseButton (Bootstrap close button)
// ============================================================================

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Use white variant for dark backgrounds */
  white?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Accessible label */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Bootstrap close button for dismissing content.
 *
 * @example
 * ```tsx
 * <CloseButton onClick={handleClose} />
 * <CloseButton white /> // For dark backgrounds
 * ```
 */
export function CloseButton({
  white = false,
  disabled = false,
  ariaLabel = 'Close',
  className = '',
  ...rest
}: CloseButtonProps) {
  const classes = [
    'btn-close',
    white ? 'btn-close-white' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    />
  );
}

export default Button;
