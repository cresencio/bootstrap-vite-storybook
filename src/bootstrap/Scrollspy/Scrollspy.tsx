import { useEffect, useRef, useCallback } from 'react';

/**
 * Props for the Scrollspy component
 */
export interface ScrollspyProps {
  /** Scrollable content with sections */
  children: React.ReactNode;
  /** Selector for the navigation container */
  target: string;
  /** Pixels to offset from top (for fixed headers) */
  rootMargin?: string;
  /** Intersection threshold for activation */
  threshold?: number | number[];
  /** Enable smooth scrolling */
  smoothScroll?: boolean;
  /** Height of the scrollable container */
  height?: string | number;
  /** Additional CSS classes */
  className?: string;
  /** Callback when active item changes */
  onActivate?: (id: string) => void;
}

/**
 * Scrollspy component for automatically updating navigation based on scroll position.
 * 
 * Works with Bootstrap's nav or list-group components to highlight the current section.
 * 
 * @example
 * ```tsx
 * <nav id="navbar-example">
 *   <a href="#section1">Section 1</a>
 *   <a href="#section2">Section 2</a>
 * </nav>
 * <Scrollspy target="#navbar-example" height="300px">
 *   <div id="section1">Content 1</div>
 *   <div id="section2">Content 2</div>
 * </Scrollspy>
 * ```
 */
export function Scrollspy({
  children,
  target,
  rootMargin = '0px 0px -40%',
  threshold,
  smoothScroll = true,
  height = '300px',
  className = '',
  onActivate,
}: ScrollspyProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollspyRef = useRef<InstanceType<typeof window.bootstrap.ScrollSpy> | null>(null);

  const handleActivate = useCallback((event: Event) => {
    const e = event as CustomEvent & { relatedTarget: HTMLElement };
    const id = e.relatedTarget?.getAttribute('href')?.replace('#', '') || '';
    onActivate?.(id);
  }, [onActivate]);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element || !window.bootstrap?.ScrollSpy) return;

    const options: Record<string, unknown> = {
      target,
      rootMargin,
      smoothScroll,
    };

    if (threshold !== undefined) options.threshold = threshold;

    scrollspyRef.current = new window.bootstrap.ScrollSpy(element, options);

    element.addEventListener('activate.bs.scrollspy', handleActivate);

    return () => {
      element.removeEventListener('activate.bs.scrollspy', handleActivate);
      scrollspyRef.current?.dispose();
      scrollspyRef.current = null;
    };
  }, [target, rootMargin, threshold, smoothScroll, handleActivate]);

  const style: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
    overflowY: 'auto',
    position: 'relative',
  };

  return (
    <div
      ref={scrollRef}
      data-bs-spy="scroll"
      data-bs-target={target}
      data-bs-root-margin={rootMargin}
      data-bs-smooth-scroll={smoothScroll}
      tabIndex={0}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * Props for ScrollspySection component
 */
export interface ScrollspySectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Section ID (matches nav href) */
  id: string;
  /** Section title (optional) */
  title?: string;
  /** Title heading level */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * A section within a Scrollspy container.
 */
export function ScrollspySection({
  children,
  id,
  title,
  titleAs: TitleTag = 'h4',
  className = '',
}: ScrollspySectionProps) {
  return (
    <div id={id} className={className}>
      {title && <TitleTag>{title}</TitleTag>}
      {children}
    </div>
  );
}

/**
 * Props for ScrollspyNav component
 */
export interface ScrollspyNavProps {
  /** Navigation items */
  items: Array<{
    /** Section ID to scroll to */
    id: string;
    /** Link label */
    label: string;
    /** Nested items for dropdown/nested nav */
    children?: Array<{
      id: string;
      label: string;
    }>;
  }>;
  /** Unique ID for the nav element */
  navId: string;
  /** Navigation variant */
  variant?: 'nav' | 'list-group' | 'pills';
  /** Vertical layout (for nav/pills) */
  vertical?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Pre-built navigation component for use with Scrollspy.
 */
export function ScrollspyNav({
  items,
  navId,
  variant = 'nav',
  vertical = false,
  className = '',
}: ScrollspyNavProps) {
  if (variant === 'list-group') {
    return (
      <div id={navId} className={`list-group ${className}`.trim()}>
        {items.map((item) => (
          <div key={item.id}>
            <a 
              className="list-group-item list-group-item-action" 
              href={`#${item.id}`}
            >
              {item.label}
            </a>
            {item.children && item.children.map((child) => (
              <a
                key={child.id}
                className="list-group-item list-group-item-action ps-4"
                href={`#${child.id}`}
              >
                {child.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    );
  }

  const navClasses = [
    variant === 'pills' ? 'nav nav-pills' : 'nav',
    vertical && 'flex-column',
    className,
  ].filter(Boolean).join(' ');

  return (
    <nav id={navId} className={navClasses}>
      {items.map((item) => (
        <div key={item.id}>
          <a className="nav-link" href={`#${item.id}`}>
            {item.label}
          </a>
          {item.children && (
            <nav className="nav flex-column ms-3">
              {item.children.map((child) => (
                <a key={child.id} className="nav-link" href={`#${child.id}`}>
                  {child.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      ))}
    </nav>
  );
}

/**
 * Props for SimpleScrollspy component
 */
export interface SimpleScrollspyProps {
  /** Sections to display */
  sections: Array<{
    /** Section ID */
    id: string;
    /** Section title */
    title: string;
    /** Section content */
    content: React.ReactNode;
  }>;
  /** Unique ID prefix for nav/scrollspy */
  id?: string;
  /** Navigation variant */
  navVariant?: 'nav' | 'list-group' | 'pills';
  /** Height of scrollable area */
  height?: string | number;
  /** Additional CSS classes for container */
  className?: string;
}

/**
 * SimpleScrollspy - All-in-one scrollspy with navigation.
 * 
 * @example
 * ```tsx
 * <SimpleScrollspy
 *   sections={[
 *     { id: 'intro', title: 'Introduction', content: <p>...</p> },
 *     { id: 'features', title: 'Features', content: <p>...</p> },
 *   ]}
 * />
 * ```
 */
export function SimpleScrollspy({
  sections,
  id = 'scrollspy',
  navVariant = 'list-group',
  height = '300px',
  className = '',
}: SimpleScrollspyProps) {
  const navId = `${id}-nav`;

  return (
    <div className={`row ${className}`.trim()}>
      <div className="col-4">
        <ScrollspyNav
          navId={navId}
          variant={navVariant}
          items={sections.map((s) => ({ id: s.id, label: s.title }))}
        />
      </div>
      <div className="col-8">
        <Scrollspy target={`#${navId}`} height={height}>
          {sections.map((section) => (
            <ScrollspySection 
              key={section.id} 
              id={section.id} 
              title={section.title}
            >
              {section.content}
            </ScrollspySection>
          ))}
        </Scrollspy>
      </div>
    </div>
  );
}

// Add Bootstrap type declaration
declare global {
  interface Window {
    bootstrap: {
      ScrollSpy: new (element: HTMLElement, options?: Record<string, unknown>) => {
        refresh: () => void;
        dispose: () => void;
      };
    };
  }
}
