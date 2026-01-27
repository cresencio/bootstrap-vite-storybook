import React from 'react';

// ============================================================================
// Types
// ============================================================================

export interface BreadcrumbItemData {
  /** The label text for the breadcrumb item */
  label: string;
  /** The URL to navigate to (omit for active/current page) */
  href?: string;
  /** Whether this is the current/active page */
  active?: boolean;
}

// ============================================================================
// Breadcrumb (Container)
// ============================================================================

export interface BreadcrumbProps {
  /** Breadcrumb content (BreadcrumbItem components) */
  children: React.ReactNode;
  /** Accessibility label for the navigation */
  ariaLabel?: string;
  /** Custom divider character or element */
  divider?: string;
  /** Additional CSS classes for the nav element */
  className?: string;
  /** Additional CSS classes for the ol element */
  listClassName?: string;
}

/**
 * Breadcrumb navigation container.
 *
 * Indicates the current page's location within a navigational hierarchy.
 * Separators are automatically added via CSS.
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem active>Current Page</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export function Breadcrumb({
  children,
  ariaLabel = 'breadcrumb',
  divider,
  className = '',
  listClassName = '',
}: BreadcrumbProps) {
  const style = divider
    ? ({ '--bs-breadcrumb-divider': `'${divider}'` } as React.CSSProperties)
    : undefined;

  return (
    <nav aria-label={ariaLabel} className={className || undefined} style={style}>
      <ol className={`breadcrumb ${listClassName}`.trim()}>
        {children}
      </ol>
    </nav>
  );
}

// ============================================================================
// BreadcrumbItem
// ============================================================================

export interface BreadcrumbItemProps {
  /** Item content */
  children: React.ReactNode;
  /** The URL to navigate to */
  href?: string;
  /** Whether this is the current/active page */
  active?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Individual breadcrumb item.
 *
 * @example
 * ```tsx
 * <BreadcrumbItem href="/home">Home</BreadcrumbItem>
 * <BreadcrumbItem active>Current Page</BreadcrumbItem>
 * ```
 */
export function BreadcrumbItem({
  children,
  href,
  active = false,
  className = '',
}: BreadcrumbItemProps) {
  const classes = [
    'breadcrumb-item',
    active ? 'active' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <li
      className={classes}
      {...(active ? { 'aria-current': 'page' as const } : {})}
    >
      {href && !active ? <a href={href}>{children}</a> : children}
    </li>
  );
}

// ============================================================================
// SimpleBreadcrumb (Convenience Component)
// ============================================================================

export interface SimpleBreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItemData[];
  /** Accessibility label for the navigation */
  ariaLabel?: string;
  /** Custom divider character */
  divider?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SimpleBreadcrumb for common use cases with an items array.
 *
 * For more control, use the Breadcrumb and BreadcrumbItem building blocks.
 *
 * @example
 * ```tsx
 * <SimpleBreadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Widget', active: true },
 *   ]}
 * />
 * ```
 */
export function SimpleBreadcrumb({
  items,
  ariaLabel = 'breadcrumb',
  divider,
  className = '',
}: SimpleBreadcrumbProps) {
  return (
    <Breadcrumb ariaLabel={ariaLabel} divider={divider} className={className}>
      {items.map((item, index) => (
        <BreadcrumbItem
          key={index}
          href={item.href}
          active={item.active}
        >
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

export default Breadcrumb;
