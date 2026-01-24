import React, { useEffect, useRef, useId } from 'react';

export type ModalSize = 'sm' | 'lg' | 'xl';
export type ModalFullscreen = true | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';

export interface ModalProps {
  /** Modal content */
  children: React.ReactNode;
  /** Unique identifier for the modal */
  id?: string;
  /** Whether the modal is visible */
  show?: boolean;
  /** Modal size variant */
  size?: ModalSize;
  /** Make modal fullscreen (always or below breakpoint) */
  fullscreen?: ModalFullscreen;
  /** Center the modal vertically */
  centered?: boolean;
  /** Enable scrollable modal body */
  scrollable?: boolean;
  /** Static backdrop (modal won't close on outside click) */
  staticBackdrop?: boolean;
  /** Disable keyboard (ESC to close) */
  disableKeyboard?: boolean;
  /** Disable animation */
  noAnimation?: boolean;
  /** Additional CSS classes for the modal */
  className?: string;
  /** Additional CSS classes for the dialog */
  dialogClassName?: string;
  /** Callback when modal starts to show */
  onShow?: (event: Event) => void;
  /** Callback when modal is fully shown */
  onShown?: (event: Event) => void;
  /** Callback when modal starts to hide */
  onHide?: (event: Event) => void;
  /** Callback when modal is fully hidden */
  onHidden?: (event: Event) => void;
  /** Callback when backdrop click is prevented (static backdrop) */
  onHidePrevented?: (event: Event) => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  id,
  show = false,
  size,
  fullscreen,
  centered = false,
  scrollable = false,
  staticBackdrop = false,
  disableKeyboard = false,
  noAnimation = false,
  className = '',
  dialogClassName = '',
  onShow,
  onShown,
  onHide,
  onHidden,
  onHidePrevented,
}) => {
  const generatedId = useId();
  const modalId = id || `modal-${generatedId.replace(/:/g, '')}`;
  const modalRef = useRef<HTMLDivElement>(null);
  const modalInstanceRef = useRef<ReturnType<typeof import('bootstrap').Modal> | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    // Attach event listeners
    const handleShow = (e: Event) => onShow?.(e);
    const handleShown = (e: Event) => onShown?.(e);
    const handleHide = (e: Event) => onHide?.(e);
    const handleHidden = (e: Event) => onHidden?.(e);
    const handleHidePrevented = (e: Event) => onHidePrevented?.(e);

    modalElement.addEventListener('show.bs.modal', handleShow);
    modalElement.addEventListener('shown.bs.modal', handleShown);
    modalElement.addEventListener('hide.bs.modal', handleHide);
    modalElement.addEventListener('hidden.bs.modal', handleHidden);
    modalElement.addEventListener('hidePrevented.bs.modal', handleHidePrevented);

    return () => {
      modalElement.removeEventListener('show.bs.modal', handleShow);
      modalElement.removeEventListener('shown.bs.modal', handleShown);
      modalElement.removeEventListener('hide.bs.modal', handleHide);
      modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      modalElement.removeEventListener('hidePrevented.bs.modal', handleHidePrevented);
    };
  }, [onShow, onShown, onHide, onHidden, onHidePrevented]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    // Dynamically import Bootstrap Modal
    const initModal = async () => {
      const { Modal: BSModal } = await import('bootstrap');
      
      if (!modalInstanceRef.current) {
        modalInstanceRef.current = BSModal.getOrCreateInstance(modalElement);
      }

      if (show) {
        modalInstanceRef.current.show();
      } else {
        modalInstanceRef.current.hide();
      }
    };

    initModal();
  }, [show]);

  // Build dialog classes
  const sizeClass = size ? `modal-${size}` : '';
  const fullscreenClass = fullscreen === true 
    ? 'modal-fullscreen' 
    : fullscreen 
      ? `modal-fullscreen-${fullscreen}` 
      : '';
  const centeredClass = centered ? 'modal-dialog-centered' : '';
  const scrollableClass = scrollable ? 'modal-dialog-scrollable' : '';

  const dialogClasses = [
    'modal-dialog',
    sizeClass,
    fullscreenClass,
    centeredClass,
    scrollableClass,
    dialogClassName,
  ].filter(Boolean).join(' ');

  const modalClasses = [
    'modal',
    noAnimation ? '' : 'fade',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={modalRef}
      className={modalClasses}
      id={modalId}
      tabIndex={-1}
      aria-hidden={!show}
      {...(staticBackdrop ? { 'data-bs-backdrop': 'static' } : {})}
      {...(disableKeyboard ? { 'data-bs-keyboard': 'false' } : {})}
    >
      <div className={dialogClasses}>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface ModalHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Show close button */
  closeButton?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  closeButton = true,
  className = '',
}) => {
  return (
    <div className={`modal-header ${className}`.trim()}>
      {children}
      {closeButton && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      )}
    </div>
  );
};

export interface ModalTitleProps {
  /** Title content */
  children: React.ReactNode;
  /** HTML tag to use */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({
  children,
  as: Tag = 'h1',
  className = '',
}) => {
  return (
    <Tag className={`modal-title fs-5 ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export interface ModalBodyProps {
  /** Body content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`modal-body ${className}`.trim()}>
      {children}
    </div>
  );
};

export interface ModalFooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`modal-footer ${className}`.trim()}>
      {children}
    </div>
  );
};

// Convenience component for triggering a modal
export interface ModalTriggerProps {
  /** Trigger content (usually a button) */
  children: React.ReactNode;
  /** Target modal ID */
  target: string;
  /** Render as this element type */
  as?: 'button' | 'a';
  /** Additional CSS classes */
  className?: string;
}

export const ModalTrigger: React.FC<ModalTriggerProps> = ({
  children,
  target,
  as = 'button',
  className = '',
}) => {
  const targetId = target.startsWith('#') ? target : `#${target}`;
  const Tag = as;

  return (
    <Tag
      type={as === 'button' ? 'button' : undefined}
      className={className}
      data-bs-toggle="modal"
      data-bs-target={targetId}
    >
      {children}
    </Tag>
  );
};

export default Modal;
