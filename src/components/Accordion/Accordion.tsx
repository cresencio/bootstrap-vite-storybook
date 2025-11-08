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
}

export const Accordion: React.FC<AccordionProps> = ({
  id = 'accordionExample',
  items,
  flush = false,
  defaultOpen = 0,
}) => {
  return (
    <div className={`accordion ${flush ? 'accordion-flush' : ''}`} id={id}>
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
