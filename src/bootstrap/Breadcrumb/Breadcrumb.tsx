import React from 'react';

export interface BreadcrumbItem {
  /** The label text for the breadcrumb item */
  label: string;
  /** The URL to navigate to (omit for active/current page) */
  href?: string;
  /** Whether this is the current/active page */
  active?: boolean;
}

export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Accessibility label for the navigation */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  ariaLabel = 'breadcrumb',
  className = '',
}) => {
  return (
    <nav aria-label={ariaLabel} className={className}>
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item${item.active ? ' active' : ''}`}
            {...(item.active ? { 'aria-current': 'page' } : {})}
          >
            {item.href && !item.active ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              item.label
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
