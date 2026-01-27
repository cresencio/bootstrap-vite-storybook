import React, { useEffect, useRef, useId, createContext, useContext } from 'react';

// ============================================================================
// Context
// ============================================================================

interface AccordionContextValue {
  parentId: string | null;
  alwaysOpen: boolean;
}

const AccordionContext = createContext<AccordionContextValue>({
  parentId: null,
  alwaysOpen: false,
});

// ============================================================================
// Accordion Item Configuration (for items array)
// ============================================================================

/**
 * Configuration for a single accordion item
 */
export interface AccordionItemConfig {
  /** Unique identifier for the item */
  id?: string;
  /** Header/title content displayed in the accordion button */
  header: React.ReactNode;
  /** Body content shown when expanded */
  body: React.ReactNode;
}

// ============================================================================
// Accordion (Main Component)
// ============================================================================

export interface AccordionProps {
  /** Accordion items configuration array */
  items: AccordionItemConfig[];
  /** Root ID for the accordion (used for aria and data-bs-parent) */
  id?: string;
  /** Render as flush accordion (removes borders and rounded corners) */
  flush?: boolean;
  /** Allow multiple items to be open at once */
  alwaysOpen?: boolean;
  /** Index or array of indices of items that should be open by default (-1 or [] for none) */
  defaultOpen?: number | number[];
  /** Additional CSS classes for the accordion container */
  className?: string;
  /** Callback fired immediately when an item starts to hide */
  onHide?: (event: Event) => void;
  /** Callback fired when an item has been hidden */
  onHidden?: (event: Event) => void;
  /** Callback fired immediately when an item starts to show */
  onShow?: (event: Event) => void;
  /** Callback fired when an item has been shown */
  onShown?: (event: Event) => void;
}

/**
 * Accordion component for vertically collapsing content sections.
 *
 * Built on Bootstrap's collapse JavaScript plugin for smooth animations
 * and accessibility. Supports flush styling and always-open mode.
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     { header: 'Section 1', body: <p>Content 1</p> },
 *     { header: 'Section 2', body: <p>Content 2</p> },
 *   ]}
 *   flush
 *   alwaysOpen
 * />
 * ```
 */
export function Accordion({
  items,
  id,
  flush = false,
  alwaysOpen = false,
  defaultOpen = 0,
  className = '',
  onHide,
  onHidden,
  onShow,
  onShown,
}: AccordionProps) {
  const generatedId = useId();
  const accordionId = id || `accordion-${generatedId.replace(/:/g, '')}`;
  const accordionRef = useRef<HTMLDivElement>(null);

  // Normalize defaultOpen to array
  const openIndices = Array.isArray(defaultOpen)
    ? defaultOpen
    : defaultOpen >= 0
      ? [defaultOpen]
      : [];

  // Attach event listeners
  useEffect(() => {
    const element = accordionRef.current;
    if (!element) return;

    const handleHide = (e: Event) => onHide?.(e);
    const handleHidden = (e: Event) => onHidden?.(e);
    const handleShow = (e: Event) => onShow?.(e);
    const handleShown = (e: Event) => onShown?.(e);

    if (onHide) element.addEventListener('hide.bs.collapse', handleHide);
    if (onHidden) element.addEventListener('hidden.bs.collapse', handleHidden);
    if (onShow) element.addEventListener('show.bs.collapse', handleShow);
    if (onShown) element.addEventListener('shown.bs.collapse', handleShown);

    return () => {
      if (onHide) element.removeEventListener('hide.bs.collapse', handleHide);
      if (onHidden) element.removeEventListener('hidden.bs.collapse', handleHidden);
      if (onShow) element.removeEventListener('show.bs.collapse', handleShow);
      if (onShown) element.removeEventListener('shown.bs.collapse', handleShown);
    };
  }, [onHide, onHidden, onShow, onShown]);

  const classes = [
    'accordion',
    flush ? 'accordion-flush' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <AccordionContext.Provider value={{ parentId: accordionId, alwaysOpen }}>
      <div className={classes} id={accordionId} ref={accordionRef}>
        {items.map((item, index) => {
          const itemId = item.id || `${accordionId}-item-${index}`;
          const isOpen = openIndices.includes(index);

          return (
            <AccordionItem key={itemId} id={itemId}>
              <AccordionHeader id={`${itemId}-header`}>
                <AccordionButton
                  target={`${itemId}-collapse`}
                  expanded={isOpen}
                >
                  {item.header}
                </AccordionButton>
              </AccordionHeader>
              <AccordionCollapse
                id={`${itemId}-collapse`}
                labelledBy={`${itemId}-header`}
                show={isOpen}
              >
                <AccordionBody>{item.body}</AccordionBody>
              </AccordionCollapse>
            </AccordionItem>
          );
        })}
      </div>
    </AccordionContext.Provider>
  );
}

// ============================================================================
// AccordionItem
// ============================================================================

export interface AccordionItemProps {
  /** Accordion item content (header and collapse) */
  children: React.ReactNode;
  /** Unique identifier for the item */
  id?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionItem wrapper component.
 * Use for building custom accordion structures with AccordionHeader, AccordionButton, etc.
 */
export function AccordionItem({
  children,
  id,
  className = '',
}: AccordionItemProps) {
  const classes = ['accordion-item', className].filter(Boolean).join(' ');

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
}

// ============================================================================
// AccordionHeader
// ============================================================================

export interface AccordionHeaderProps {
  /** Header content (typically AccordionButton) */
  children: React.ReactNode;
  /** Header ID for accessibility */
  id?: string;
  /** Header element tag */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionHeader component wrapping the toggle button.
 * Uses h2 by default per Bootstrap's accordion structure.
 */
export function AccordionHeader({
  children,
  id,
  as: Component = 'h2',
  className = '',
}: AccordionHeaderProps) {
  const classes = ['accordion-header', className].filter(Boolean).join(' ');

  return (
    <Component className={classes} id={id}>
      {children}
    </Component>
  );
}

// ============================================================================
// AccordionButton
// ============================================================================

export interface AccordionButtonProps {
  /** Button content (header text) */
  children: React.ReactNode;
  /** Target collapse ID (without #) */
  target: string;
  /** Whether the collapse is initially expanded */
  expanded?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionButton component for toggling accordion collapse.
 * Automatically handles Bootstrap data attributes and aria.
 */
export function AccordionButton({
  children,
  target,
  expanded = false,
  className = '',
}: AccordionButtonProps) {
  const classes = [
    'accordion-button',
    !expanded ? 'collapsed' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${target}`}
      aria-expanded={expanded}
      aria-controls={target}
    >
      {children}
    </button>
  );
}

// ============================================================================
// AccordionCollapse
// ============================================================================

export interface AccordionCollapseProps {
  /** Collapse content (typically AccordionBody) */
  children: React.ReactNode;
  /** Collapse element ID */
  id: string;
  /** ID of the header element for accessibility */
  labelledBy?: string;
  /** Whether the collapse is shown */
  show?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionCollapse component for the collapsible content wrapper.
 * Automatically applies data-bs-parent for accordion behavior unless alwaysOpen is true.
 */
export function AccordionCollapse({
  children,
  id,
  labelledBy,
  show = false,
  className = '',
}: AccordionCollapseProps) {
  const { parentId, alwaysOpen } = useContext(AccordionContext);

  const classes = [
    'accordion-collapse',
    'collapse',
    show ? 'show' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      id={id}
      className={classes}
      aria-labelledby={labelledBy}
      data-bs-parent={!alwaysOpen && parentId ? `#${parentId}` : undefined}
    >
      {children}
    </div>
  );
}

// ============================================================================
// AccordionBody
// ============================================================================

export interface AccordionBodyProps {
  /** Body content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * AccordionBody component for accordion item content.
 */
export function AccordionBody({
  children,
  className = '',
}: AccordionBodyProps) {
  const classes = ['accordion-body', className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}

// ============================================================================
// SimpleAccordion (Convenience Wrapper)
// ============================================================================

export interface SimpleAccordionProps {
  /** Accordion items configuration array */
  items: AccordionItemConfig[];
  /** Render as flush accordion */
  flush?: boolean;
  /** Allow multiple items to be open at once */
  alwaysOpen?: boolean;
  /** Index or array of indices of items that should be open by default */
  defaultOpen?: number | number[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * SimpleAccordion - a convenience wrapper with sensible defaults.
 *
 * @example
 * ```tsx
 * <SimpleAccordion
 *   items={[
 *     { header: 'Question 1', body: 'Answer 1' },
 *     { header: 'Question 2', body: 'Answer 2' },
 *   ]}
 * />
 * ```
 */
export function SimpleAccordion({
  items,
  flush = false,
  alwaysOpen = false,
  defaultOpen = 0,
  className = '',
}: SimpleAccordionProps) {
  return (
    <Accordion
      items={items}
      flush={flush}
      alwaysOpen={alwaysOpen}
      defaultOpen={defaultOpen}
      className={className}
    />
  );
}

export default Accordion;
