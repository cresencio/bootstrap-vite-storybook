import React from 'react';

export interface NavItem {
  /** Unique identifier for the nav item */
  id: string;
  /** The label text for the nav item */
  label: string;
  /** The URL to navigate to (for link-based navs) */
  href?: string;
  /** Whether this item is currently active */
  active?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Dropdown items (renders as dropdown if provided) */
  dropdown?: NavDropdownItem[];
}

export interface NavDropdownItem {
  /** The label text for the dropdown item */
  label: string;
  /** The URL to navigate to */
  href?: string;
  /** Whether this is a divider (label is ignored) */
  divider?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
}

export type NavVariant = 'default' | 'tabs' | 'pills' | 'underline';
export type NavAlignment = 'start' | 'center' | 'end';
export type NavLayout = 'horizontal' | 'vertical';
export type NavFill = 'none' | 'fill' | 'justified';

export interface NavProps {
  /** Array of navigation items */
  items: NavItem[];
  /** Visual style variant */
  variant?: NavVariant;
  /** Horizontal alignment of nav items */
  alignment?: NavAlignment;
  /** Layout direction */
  layout?: NavLayout;
  /** Fill behavior for nav items */
  fill?: NavFill;
  /** Additional CSS classes */
  className?: string;
  /** Callback when a nav item is clicked */
  onSelect?: (itemId: string) => void;
}

export const Nav: React.FC<NavProps> = ({
  items,
  variant = 'default',
  alignment = 'start',
  layout = 'horizontal',
  fill = 'none',
  className = '',
  onSelect,
}) => {
  const variantClass = variant !== 'default' ? `nav-${variant}` : '';
  
  const alignmentClass = alignment !== 'start' ? `justify-content-${alignment}` : '';
  
  const layoutClass = layout === 'vertical' ? 'flex-column' : '';
  
  let fillClass = '';
  if (fill === 'fill') fillClass = 'nav-fill';
  if (fill === 'justified') fillClass = 'nav-justified';

  const classes = [
    'nav',
    variantClass,
    alignmentClass,
    layoutClass,
    fillClass,
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.disabled) {
      e.preventDefault();
      return;
    }
    if (onSelect && !item.dropdown) {
      onSelect(item.id);
    }
  };

  return (
    <ul className={classes}>
      {items.map((item) => {
        if (item.dropdown) {
          return (
            <li key={item.id} className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${item.active ? ' active' : ''}${item.disabled ? ' disabled' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                {...(item.disabled ? { 'aria-disabled': 'true' } : {})}
              >
                {item.label}
              </a>
              <ul className="dropdown-menu">
                {item.dropdown.map((dropdownItem, index) =>
                  dropdownItem.divider ? (
                    <li key={`divider-${index}`}>
                      <hr className="dropdown-divider" />
                    </li>
                  ) : (
                    <li key={`${item.id}-${index}`}>
                      <a
                        className={`dropdown-item${dropdownItem.disabled ? ' disabled' : ''}`}
                        href={dropdownItem.href || '#'}
                        {...(dropdownItem.disabled ? { 'aria-disabled': 'true' } : {})}
                      >
                        {dropdownItem.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </li>
          );
        }

        return (
          <li key={item.id} className="nav-item">
            <a
              className={`nav-link${item.active ? ' active' : ''}${item.disabled ? ' disabled' : ''}`}
              href={item.href || '#'}
              {...(item.active ? { 'aria-current': 'page' } : {})}
              {...(item.disabled ? { 'aria-disabled': 'true' } : {})}
              onClick={(e) => handleClick(e, item)}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
