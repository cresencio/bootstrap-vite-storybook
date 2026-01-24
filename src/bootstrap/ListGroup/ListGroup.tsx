/**
 * Bootstrap theme color variants for list group items
 */
export type ListGroupVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

/**
 * Props for the ListGroup container component
 */
export interface ListGroupProps {
  /** List group content (ListGroupItem components) */
  children: React.ReactNode;
  /** Render as ordered list */
  numbered?: boolean;
  /** Remove borders and rounded corners */
  flush?: boolean;
  /** Horizontal layout */
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Additional CSS classes */
  className?: string;
}

/**
 * ListGroup container component.
 * 
 * Displays a series of content in a list format with optional styling.
 * 
 * @example
 * ```tsx
 * <ListGroup>
 *   <ListGroupItem>First item</ListGroupItem>
 *   <ListGroupItem>Second item</ListGroupItem>
 * </ListGroup>
 * ```
 */
export function ListGroup({
  children,
  numbered = false,
  flush = false,
  horizontal = false,
  className = '',
}: ListGroupProps) {
  const horizontalClass = horizontal === true
    ? 'list-group-horizontal'
    : horizontal
      ? `list-group-horizontal-${horizontal}`
      : '';

  const classes = [
    'list-group',
    numbered ? 'list-group-numbered' : '',
    flush ? 'list-group-flush' : '',
    horizontalClass,
    className,
  ].filter(Boolean).join(' ');

  const Tag = numbered ? 'ol' : 'ul';

  return <Tag className={classes}>{children}</Tag>;
}

/**
 * Props for the ListGroupItem component
 */
export interface ListGroupItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Color variant */
  variant?: ListGroupVariant;
  /** Render as actionable (button/link styling) */
  action?: boolean;
  /** Render as a link with href */
  href?: string;
  /** Click handler (renders as button) */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ListGroupItem component for individual list items.
 * 
 * Can render as a static item, button, or link depending on props.
 * 
 * @example
 * ```tsx
 * // Static item
 * <ListGroupItem>Content</ListGroupItem>
 * 
 * // Actionable button
 * <ListGroupItem action onClick={() => {}}>Click me</ListGroupItem>
 * 
 * // Link
 * <ListGroupItem href="/page">Go to page</ListGroupItem>
 * ```
 */
export function ListGroupItem({
  children,
  active = false,
  disabled = false,
  variant,
  action = false,
  href,
  onClick,
  className = '',
}: ListGroupItemProps) {
  const isActionable = action || href || onClick;
  
  const classes = [
    'list-group-item',
    isActionable ? 'list-group-item-action' : '',
    active ? 'active' : '',
    disabled ? 'disabled' : '',
    variant ? `list-group-item-${variant}` : '',
    className,
  ].filter(Boolean).join(' ');

  // Determine the element type
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-current={active ? 'true' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  if (onClick || action) {
    return (
      <button
        type="button"
        className={classes}
        onClick={onClick}
        disabled={disabled}
        aria-current={active ? 'true' : undefined}
      >
        {children}
      </button>
    );
  }

  return (
    <li
      className={classes}
      aria-current={active ? 'true' : undefined}
      aria-disabled={disabled ? 'true' : undefined}
    >
      {children}
    </li>
  );
}

/**
 * Props for SimpleListGroup component
 */
export interface SimpleListGroupProps {
  /** Array of items to render */
  items: Array<{
    /** Item content */
    content: React.ReactNode;
    /** Unique key */
    key?: string | number;
    /** Active state */
    active?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Color variant */
    variant?: ListGroupVariant;
    /** Click handler */
    onClick?: () => void;
    /** Link href */
    href?: string;
  }>;
  /** Remove borders and rounded corners */
  flush?: boolean;
  /** Horizontal layout */
  horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Render as numbered list */
  numbered?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SimpleListGroup - A convenience component for rendering list groups from data.
 * 
 * @example
 * ```tsx
 * <SimpleListGroup
 *   items={[
 *     { content: 'First', key: 1 },
 *     { content: 'Second', key: 2, active: true },
 *     { content: 'Third', key: 3, variant: 'success' },
 *   ]}
 * />
 * ```
 */
export function SimpleListGroup({
  items,
  flush = false,
  horizontal = false,
  numbered = false,
  className = '',
}: SimpleListGroupProps) {
  return (
    <ListGroup flush={flush} horizontal={horizontal} numbered={numbered} className={className}>
      {items.map((item, index) => (
        <ListGroupItem
          key={item.key ?? index}
          active={item.active}
          disabled={item.disabled}
          variant={item.variant}
          onClick={item.onClick}
          href={item.href}
        >
          {item.content}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

/**
 * Props for ListGroupItemContent component
 */
export interface ListGroupItemContentProps {
  /** Heading/title */
  heading?: React.ReactNode;
  /** Main content/description */
  children: React.ReactNode;
  /** Small text (typically timestamp or metadata) */
  meta?: React.ReactNode;
  /** Badge content */
  badge?: React.ReactNode;
  /** Badge variant */
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

/**
 * ListGroupItemContent - Structured content layout for list items.
 * 
 * @example
 * ```tsx
 * <ListGroupItem action>
 *   <ListGroupItemContent
 *     heading="List Group Item Heading"
 *     meta="3 days ago"
 *   >
 *     Some placeholder content.
 *   </ListGroupItemContent>
 * </ListGroupItem>
 * ```
 */
export function ListGroupItemContent({
  heading,
  children,
  meta,
  badge,
  badgeVariant = 'primary',
}: ListGroupItemContentProps) {
  return (
    <div className="d-flex w-100 justify-content-between align-items-start">
      <div className="flex-grow-1">
        {heading && (
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{heading}</h5>
            {meta && <small className="text-body-secondary">{meta}</small>}
          </div>
        )}
        <div className={heading ? 'mb-1' : ''}>{children}</div>
      </div>
      {badge && (
        <span className={`badge bg-${badgeVariant} rounded-pill ms-2`}>
          {badge}
        </span>
      )}
    </div>
  );
}

export default ListGroup;
