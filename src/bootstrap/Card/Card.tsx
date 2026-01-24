import React from 'react';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card body text content */
  text?: string;
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image position: top, bottom */
  imagePosition?: 'top' | 'bottom';
  /** Card header content */
  header?: React.ReactNode;
  /** Card footer content */
  footer?: React.ReactNode;
  /** Custom children content */
  children?: React.ReactNode;
  /** Background variant */
  bg?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  /** Text color variant */
  textColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'muted';
  /** Border variant */
  border?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Bootstrap Card component - a flexible and extensible content container
 */
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  text,
  imageSrc,
  imageAlt = '',
  imagePosition = 'top',
  header,
  footer,
  children,
  bg,
  textColor,
  border,
  className = '',
  style,
}) => {
  const cardClasses = [
    'card',
    bg && `bg-${bg}`,
    textColor && `text-${textColor}`,
    border && `border-${border}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} style={style}>
      {header && <div className="card-header">{header}</div>}
      
      {imageSrc && imagePosition === 'top' && (
        <img src={imageSrc} className="card-img-top" alt={imageAlt} />
      )}
      
      {(title || subtitle || text || children) && (
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {subtitle && <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>}
          {text && <p className="card-text">{text}</p>}
          {children}
        </div>
      )}
      
      {imageSrc && imagePosition === 'bottom' && (
        <img src={imageSrc} className="card-img-bottom" alt={imageAlt} />
      )}
      
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
