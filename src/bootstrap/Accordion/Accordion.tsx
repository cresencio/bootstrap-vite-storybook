import React from 'react';

export interface AccordionItem {
  id?: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  /** root id for the accordion, used for aria and data-bs-parent */
  id?: string;
  /** accordion items */
  items: AccordionItem[];
  /** render as flush accordion */
  flush?: boolean;
  /** index of the item that should be open by default (first is 0). Set to -1 for none */
  defaultOpen?: number;
  /** Callback fired immediately when the hide method has been called */
  onHide?: (event: Event) => void;
  /** Callback fired when a collapse element has been hidden from the user */
  onHidden?: (event: Event) => void;
  /** Callback fired immediately when the show instance method is called */
  onShow?: (event: Event) => void;
  /** Callback fired when a collapse element has been made visible to the user */
  onShown?: (event: Event) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  id = 'accordionExample',
  items,
  flush = false,
  defaultOpen = 0,
  onHide,
  onHidden,
  onShow,
  onShown,
}) => {
  const accordionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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

  return (
    <div className={`accordion ${flush ? 'accordion-flush' : ''}`} id={id} ref={accordionRef}>
      {items.map((item, index) => {
        const itemId = item.id ?? `${id}-item-${index}`;
        const headerId = `${itemId}-header`;
        const collapseId = `${itemId}-collapse`;
        const isOpen = defaultOpen === index;

        return (
          <div className="accordion-item" key={itemId}>
            <h2 className="accordion-header" id={headerId}>
              <button
                className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded={isOpen}
                aria-controls={collapseId}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={collapseId}
              className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
              data-bs-parent={`#${id}`}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
