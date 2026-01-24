import { useEffect, useRef, useState, useId } from 'react';

/**
 * Tab item configuration
 */
export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Label displayed in the tab button */
  label: React.ReactNode;
  /** Content displayed when tab is active */
  content: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Optional icon to display before label */
  icon?: React.ReactNode;
}

/**
 * Props for the Tabs component
 */
export interface TabsProps {
  /** Array of tab items */
  items: TabItem[];
  /** ID of the initially active tab */
  defaultActiveId?: string;
  /** Controlled active tab ID */
  activeId?: string;
  /** Callback when active tab changes */
  onTabChange?: (id: string) => void;
  /** Tab style variant */
  variant?: 'tabs' | 'pills' | 'underline';
  /** Whether tabs should fill available width */
  fill?: boolean;
  /** Whether tabs should be justified (equal width) */
  justified?: boolean;
  /** Vertical tab layout */
  vertical?: boolean;
  /** Enable fade animation on tab panes */
  fade?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the nav */
  navClassName?: string;
  /** Additional CSS classes for the content area */
  contentClassName?: string;
}

/**
 * Tabs component for organizing content into tabbed sections.
 * 
 * Uses Bootstrap's tab JavaScript for accessibility and keyboard navigation.
 * Supports tabs, pills, and underline variants with optional fade animations.
 * 
 * @example
 * ```tsx
 * <Tabs
 *   items={[
 *     { id: 'home', label: 'Home', content: <p>Home content</p> },
 *     { id: 'profile', label: 'Profile', content: <p>Profile content</p> },
 *   ]}
 *   variant="tabs"
 *   fade
 * />
 * ```
 */
export function Tabs({
  items,
  defaultActiveId,
  activeId: controlledActiveId,
  onTabChange,
  variant = 'tabs',
  fill = false,
  justified = false,
  vertical = false,
  fade = true,
  className = '',
  navClassName = '',
  contentClassName = '',
}: TabsProps) {
  const uniqueId = useId();
  const isControlled = controlledActiveId !== undefined;
  const initialActiveId = controlledActiveId ?? defaultActiveId ?? items[0]?.id;
  const [internalActiveId, setInternalActiveId] = useState(initialActiveId);
  const activeId = isControlled ? controlledActiveId : internalActiveId;
  
  const navRef = useRef<HTMLUListElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle Bootstrap tab events
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleShown = (event: Event) => {
      const target = event.target as HTMLElement;
      const tabId = target.getAttribute('data-tab-id');
      if (tabId) {
        if (!isControlled) {
          setInternalActiveId(tabId);
        }
        onTabChange?.(tabId);
      }
    };

    nav.addEventListener('shown.bs.tab', handleShown);
    return () => nav.removeEventListener('shown.bs.tab', handleShown);
  }, [isControlled, onTabChange]);

  // Sync controlled state with Bootstrap
  useEffect(() => {
    if (!isControlled || !navRef.current) return;
    
    const activeButton = navRef.current.querySelector(
      `[data-tab-id="${controlledActiveId}"]`
    ) as HTMLElement;
    
    if (activeButton && window.bootstrap?.Tab) {
      const tab = window.bootstrap.Tab.getOrCreateInstance(activeButton);
      tab.show();
    }
  }, [controlledActiveId, isControlled]);

  const getNavClasses = () => {
    const classes = ['nav'];
    
    if (variant === 'tabs') classes.push('nav-tabs');
    else if (variant === 'pills') classes.push('nav-pills');
    else if (variant === 'underline') classes.push('nav-underline');
    
    if (fill) classes.push('nav-fill');
    if (justified) classes.push('nav-justified');
    if (vertical) classes.push('flex-column');
    
    if (navClassName) classes.push(navClassName);
    
    return classes.join(' ');
  };

  const containerClasses = vertical
    ? `d-flex ${className}`.trim()
    : className;

  const contentClasses = [
    'tab-content',
    vertical ? 'flex-grow-1' : '',
    contentClassName,
  ].filter(Boolean).join(' ');

  const getTabId = (itemId: string) => `${uniqueId}-tab-${itemId}`;
  const getPaneId = (itemId: string) => `${uniqueId}-pane-${itemId}`;

  return (
    <div className={containerClasses || undefined}>
      <ul className={getNavClasses()} role="tablist" ref={navRef}>
        {items.map((item) => (
          <li className="nav-item" role="presentation" key={item.id}>
            <button
              className={`nav-link ${activeId === item.id ? 'active' : ''} ${item.disabled ? 'disabled' : ''}`}
              id={getTabId(item.id)}
              data-bs-toggle="tab"
              data-bs-target={`#${getPaneId(item.id)}`}
              data-tab-id={item.id}
              type="button"
              role="tab"
              aria-controls={getPaneId(item.id)}
              aria-selected={activeId === item.id}
              disabled={item.disabled}
            >
              {item.icon && <span className="me-2">{item.icon}</span>}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      
      <div className={contentClasses} ref={contentRef}>
        {items.map((item) => (
          <div
            className={`tab-pane ${fade ? 'fade' : ''} ${activeId === item.id ? 'show active' : ''}`}
            id={getPaneId(item.id)}
            role="tabpanel"
            aria-labelledby={getTabId(item.id)}
            tabIndex={0}
            key={item.id}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Props for TabList component
 */
export interface TabListProps {
  /** Tab list content (Tab components) */
  children: React.ReactNode;
  /** Tab style variant */
  variant?: 'tabs' | 'pills' | 'underline';
  /** Whether tabs should fill available width */
  fill?: boolean;
  /** Whether tabs should be justified (equal width) */
  justified?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TabList component for rendering tab navigation.
 * Use with TabButton and TabPanel for full control over tab structure.
 */
export function TabList({
  children,
  variant = 'tabs',
  fill = false,
  justified = false,
  className = '',
}: TabListProps) {
  const classes = [
    'nav',
    variant === 'tabs' ? 'nav-tabs' : '',
    variant === 'pills' ? 'nav-pills' : '',
    variant === 'underline' ? 'nav-underline' : '',
    fill ? 'nav-fill' : '',
    justified ? 'nav-justified' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <ul className={classes} role="tablist">
      {children}
    </ul>
  );
}

/**
 * Props for TabButton component
 */
export interface TabButtonProps {
  /** Target panel ID (without #) */
  target: string;
  /** Whether this tab is active */
  active?: boolean;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Tab button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

/**
 * TabButton component for individual tab buttons.
 * Use within TabList for custom tab layouts.
 */
export function TabButton({
  target,
  active = false,
  disabled = false,
  children,
  className = '',
  onClick,
}: TabButtonProps) {
  const classes = [
    'nav-link',
    active ? 'active' : '',
    disabled ? 'disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <li className="nav-item" role="presentation">
      <button
        className={classes}
        id={`${target}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#${target}`}
        type="button"
        role="tab"
        aria-controls={target}
        aria-selected={active}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

/**
 * Props for TabContent component
 */
export interface TabContentProps {
  /** Tab panel content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TabContent wrapper for tab panels.
 */
export function TabContent({ children, className = '' }: TabContentProps) {
  const classes = ['tab-content', className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}

/**
 * Props for TabPanel component
 */
export interface TabPanelProps {
  /** Panel ID (matches TabButton target) */
  id: string;
  /** Whether this panel is active */
  active?: boolean;
  /** Enable fade animation */
  fade?: boolean;
  /** Panel content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TabPanel component for tab content panes.
 * Use within TabContent for custom tab layouts.
 */
export function TabPanel({
  id,
  active = false,
  fade = true,
  children,
  className = '',
}: TabPanelProps) {
  const classes = [
    'tab-pane',
    fade ? 'fade' : '',
    active ? 'show active' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

// Add Bootstrap type declaration
declare global {
  interface Window {
    bootstrap?: {
      Tab: {
        getOrCreateInstance: (element: HTMLElement) => { show: () => void };
      };
    };
  }
}

export default Tabs;
