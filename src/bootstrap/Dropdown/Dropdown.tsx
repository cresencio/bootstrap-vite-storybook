import React from 'react';

export interface DropdownItem {
  /** Item label text */
  label: string;
  /** URL to navigate to */
  href?: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is active */
  active?: boolean;
  /** Divider after this item */
  divider?: boolean;
  /** Header text (non-clickable) */
  header?: boolean;
}

export interface DropdownProps {
  /** Button text */
  buttonText: string;
  /** Array of dropdown items */
  items: DropdownItem[];
  /** Button variant */
  variant?: string;
  /** Dropdown direction */
  direction?: 'down' | 'up' | 'start' | 'end';
  /** Dark dropdown style */
  dark?: boolean;
  /** Additional CSS classes for dropdown wrapper */
  className?: string;
  /** Additional CSS classes for button */
  buttonClassName?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  buttonText,
  items,
  variant = 'secondary',
  direction = 'down',
  dark = false,
  className = '',
  buttonClassName = '',
}) => {
  const dropdownClass = direction === 'down' ? 'dropdown' : `drop${direction}`;
  const menuClass = dark ? 'dropdown-menu dropdown-menu-dark' : 'dropdown-menu';

  return (
    <div className={`${dropdownClass} ${className}`.trim()}>
      <button
        className={`btn btn-${variant} dropdown-toggle ${buttonClassName}`.trim()}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {buttonText}
      </button>
      <ul className={menuClass}>
        {items.map((item, index) => {
          if (item.header) {
            return (
              <li key={index}>
                <h6 className="dropdown-header">{item.label}</h6>
              </li>
            );
          }

          return (
            <React.Fragment key={index}>
              <li>
                <a
                  className={`dropdown-item${item.active ? ' active' : ''}${item.disabled ? ' disabled' : ''}`}
                  href={item.href || '#'}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                      return;
                    }
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  {...(item.active ? { 'aria-current': 'true' } : {})}
                  {...(item.disabled ? { 'aria-disabled': 'true' } : {})}
                >
                  {item.label}
                </a>
              </li>
              {item.divider && <li><hr className="dropdown-divider" /></li>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
