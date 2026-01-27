import React from 'react';

// ============================================================================
// Types
// ============================================================================

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

// ============================================================================
// Badge (Main Component)
// ============================================================================

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  /** The badge variant/color theme */
  variant?: BadgeVariant;
  /** Render as a pill shape with more rounded corners */
  pill?: boolean;
  /** HTML element to render as */
  as?: 'span' | 'a' | 'button';
  /** Link href (when as="a") */
  href?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Badge component for small count and labeling.
 *
 * Badges scale to match the size of the immediate parent element
 * by using relative font sizing and em units.
 *
 * @example
 * ```tsx
 * <h1>Example heading <Badge variant="secondary">New</Badge></h1>
 * ```
 */
export function Badge({
  children,
  variant = 'primary',
  pill = false,
  as: Component = 'span',
  href,
  className = '',
}: BadgeProps) {
  const classes = [
    'badge',
    `text-bg-${variant}`,
    pill ? 'rounded-pill' : '',
    className,
  ].filter(Boolean).join(' ');

  if (Component === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <Component className={classes}>{children}</Component>;
}

// ============================================================================
// PositionedBadge (for notification counters)
// ============================================================================

export type BadgePosition = 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start';

export interface PositionedBadgeProps {
  /** Badge content (count or text) */
  children: React.ReactNode;
  /** The badge variant/color theme */
  variant?: BadgeVariant;
  /** Position of the badge relative to parent */
  position?: BadgePosition;
  /** Render as a pill shape */
  pill?: boolean;
  /** Visually hidden text for accessibility */
  visuallyHiddenText?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * PositionedBadge for notification counters on buttons/links.
 *
 * Must be placed inside a parent with `position-relative` class.
 *
 * @example
 * ```tsx
 * <Button className="position-relative">
 *   Inbox
 *   <PositionedBadge variant="danger" pill>99+</PositionedBadge>
 * </Button>
 * ```
 */
export function PositionedBadge({
  children,
  variant = 'danger',
  position = 'top-end',
  pill = true,
  visuallyHiddenText,
  className = '',
}: PositionedBadgeProps) {
  const positionClasses = {
    'top-end': 'top-0 start-100',
    'top-start': 'top-0 start-0',
    'bottom-end': 'top-100 start-100',
    'bottom-start': 'top-100 start-0',
  };

  const classes = [
    'position-absolute',
    'translate-middle',
    'badge',
    pill ? 'rounded-pill' : '',
    `bg-${variant}`,
    positionClasses[position],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {children}
      {visuallyHiddenText && (
        <span className="visually-hidden">{visuallyHiddenText}</span>
      )}
    </span>
  );
}

// ============================================================================
// NotificationDot (indicator without count)
// ============================================================================

export interface NotificationDotProps {
  /** The dot variant/color theme */
  variant?: BadgeVariant;
  /** Position of the dot relative to parent */
  position?: BadgePosition;
  /** Visually hidden text for accessibility (required for a11y) */
  visuallyHiddenText: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * NotificationDot for generic status indicators.
 *
 * A small dot indicator without text content.
 * Must be placed inside a parent with `position-relative` class.
 *
 * @example
 * ```tsx
 * <Button className="position-relative">
 *   Profile
 *   <NotificationDot variant="danger" visuallyHiddenText="New alerts" />
 * </Button>
 * ```
 */
export function NotificationDot({
  variant = 'danger',
  position = 'top-end',
  visuallyHiddenText,
  className = '',
}: NotificationDotProps) {
  const positionClasses = {
    'top-end': 'top-0 start-100',
    'top-start': 'top-0 start-0',
    'bottom-end': 'top-100 start-100',
    'bottom-start': 'top-100 start-0',
  };

  const classes = [
    'position-absolute',
    'translate-middle',
    'p-2',
    `bg-${variant}`,
    'border',
    'border-light',
    'rounded-circle',
    positionClasses[position],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      <span className="visually-hidden">{visuallyHiddenText}</span>
    </span>
  );
}

export default Badge;
