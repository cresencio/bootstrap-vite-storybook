import React, { useId } from 'react';

export type NavbarExpand = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | true | false;
export type NavbarPlacement = 'default' | 'fixed-top' | 'fixed-bottom' | 'sticky-top' | 'sticky-bottom';
export type NavbarColorScheme = 'light' | 'dark';
export type NavbarContainer = 'fluid' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | false;

export interface NavbarProps {
  /** Navbar content */
  children: React.ReactNode;
  /** Breakpoint at which navbar expands from collapsed to horizontal */
  expand?: NavbarExpand;
  /** Color scheme for the navbar */
  colorScheme?: NavbarColorScheme;
  /** Background color utility class (e.g., 'primary', 'dark', 'body-tertiary') */
  bg?: string;
  /** Placement of the navbar */
  placement?: NavbarPlacement;
  /** Container type for navbar content */
  container?: NavbarContainer;
  /** Additional CSS classes */
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  expand = 'lg',
  colorScheme,
  bg = 'body-tertiary',
  placement = 'default',
  container = 'fluid',
  className = '',
}) => {
  let expandClass = '';
  if (expand === true) {
    expandClass = 'navbar-expand';
  } else if (expand !== false) {
    expandClass = `navbar-expand-${expand}`;
  }

  const placementClass = placement !== 'default' ? placement : '';
  const bgClass = bg ? `bg-${bg}` : '';

  const classes = [
    'navbar',
    expandClass,
    placementClass,
    bgClass,
    className,
  ].filter(Boolean).join(' ');

  const containerClass = container === 'fluid' 
    ? 'container-fluid' 
    : container 
      ? `container-${container}` 
      : '';

  return (
    <nav 
      className={classes}
      {...(colorScheme === 'dark' ? { 'data-bs-theme': 'dark' } : {})}
    >
      {container !== false ? (
        <div className={containerClass}>
          {children}
        </div>
      ) : (
        children
      )}
    </nav>
  );
};

export interface NavbarBrandProps {
  /** Brand content (text or image) */
  children: React.ReactNode;
  /** Link URL */
  href?: string;
  /** Render as heading instead of link */
  asHeading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const NavbarBrand: React.FC<NavbarBrandProps> = ({
  children,
  href = '#',
  asHeading = false,
  className = '',
}) => {
  const classes = ['navbar-brand', asHeading ? 'mb-0 h1' : '', className].filter(Boolean).join(' ');

  if (asHeading) {
    return <span className={classes}>{children}</span>;
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
};

export interface NavbarTogglerProps {
  /** Target collapse element ID */
  target: string;
  /** Accessible label */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export const NavbarToggler: React.FC<NavbarTogglerProps> = ({
  target,
  ariaLabel = 'Toggle navigation',
  className = '',
}) => {
  const targetId = target.startsWith('#') ? target : `#${target}`;
  const controlsId = target.replace('#', '');

  return (
    <button
      className={`navbar-toggler ${className}`.trim()}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={targetId}
      aria-controls={controlsId}
      aria-expanded="false"
      aria-label={ariaLabel}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export interface NavbarCollapseProps {
  /** Collapse content */
  children: React.ReactNode;
  /** Unique ID for the collapse element */
  id: string;
  /** Additional CSS classes */
  className?: string;
}

export const NavbarCollapse: React.FC<NavbarCollapseProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <div className={`collapse navbar-collapse ${className}`.trim()} id={id}>
      {children}
    </div>
  );
};

export interface NavbarNavItem {
  /** Unique identifier */
  id: string;
  /** Link label */
  label: string;
  /** Link URL */
  href?: string;
  /** Whether this item is active */
  active?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Dropdown items */
  dropdown?: NavbarNavDropdownItem[];
}

export interface NavbarNavDropdownItem {
  /** Item label */
  label: string;
  /** Link URL */
  href?: string;
  /** Whether this is a divider */
  divider?: boolean;
}

export interface NavbarNavProps {
  /** Array of navigation items */
  items: NavbarNavItem[];
  /** Additional CSS classes */
  className?: string;
  /** Enable scrolling with max-height */
  scroll?: boolean;
  /** Custom scroll height */
  scrollHeight?: string;
}

export const NavbarNav: React.FC<NavbarNavProps> = ({
  items,
  className = '',
  scroll = false,
  scrollHeight,
}) => {
  const scrollClass = scroll ? 'navbar-nav-scroll' : '';
  const classes = ['navbar-nav', scrollClass, className].filter(Boolean).join(' ');
  const style = scroll && scrollHeight ? { '--bs-scroll-height': scrollHeight } as React.CSSProperties : undefined;

  return (
    <ul className={classes} style={style}>
      {items.map((item) => {
        if (item.dropdown) {
          return (
            <li key={item.id} className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${item.active ? ' active' : ''}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
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
                      <a className="dropdown-item" href={dropdownItem.href || '#'}>
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
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export interface NavbarTextProps {
  /** Text content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const NavbarText: React.FC<NavbarTextProps> = ({
  children,
  className = '',
}) => {
  return (
    <span className={`navbar-text ${className}`.trim()}>
      {children}
    </span>
  );
};

export interface NavbarFormProps {
  /** Form content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Form role */
  role?: string;
  /** Submit handler */
  onSubmit?: (e: React.FormEvent) => void;
}

export const NavbarForm: React.FC<NavbarFormProps> = ({
  children,
  className = '',
  role = 'search',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form className={`d-flex ${className}`.trim()} role={role} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

// Convenience component that combines common navbar patterns
export interface SimpleNavbarProps {
  /** Brand text or element */
  brand: React.ReactNode;
  /** Brand link URL */
  brandHref?: string;
  /** Navigation items */
  items?: NavbarNavItem[];
  /** Show search form */
  showSearch?: boolean;
  /** Search placeholder text */
  searchPlaceholder?: string;
  /** Search submit handler */
  onSearch?: (query: string) => void;
  /** Expand breakpoint */
  expand?: NavbarExpand;
  /** Color scheme */
  colorScheme?: NavbarColorScheme;
  /** Background color */
  bg?: string;
  /** Placement */
  placement?: NavbarPlacement;
  /** Additional CSS classes */
  className?: string;
}

export const SimpleNavbar: React.FC<SimpleNavbarProps> = ({
  brand,
  brandHref = '#',
  items = [],
  showSearch = false,
  searchPlaceholder = 'Search',
  onSearch,
  expand = 'lg',
  colorScheme,
  bg = 'body-tertiary',
  placement = 'default',
  className = '',
}) => {
  const generatedId = useId();
  const collapseId = `navbarCollapse-${generatedId.replace(/:/g, '')}`;
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <Navbar expand={expand} colorScheme={colorScheme} bg={bg} placement={placement} className={className}>
      <NavbarBrand href={brandHref}>{brand}</NavbarBrand>
      <NavbarToggler target={collapseId} />
      <NavbarCollapse id={collapseId}>
        {items.length > 0 && (
          <NavbarNav items={items} className="me-auto mb-2 mb-lg-0" />
        )}
        {showSearch && (
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        )}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Navbar;
