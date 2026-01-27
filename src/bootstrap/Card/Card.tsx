import React from 'react';

// ============================================================================
// Types
// ============================================================================

export type CardVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export type CardTextColor = CardVariant | 'white' | 'muted' | 'body' | 'body-secondary';

// ============================================================================
// Card (Main Container)
// ============================================================================

export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Background variant */
  bg?: CardVariant;
  /** Text color variant */
  textColor?: CardTextColor;
  /** Border variant */
  border?: CardVariant;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * Card container component.
 *
 * Use with CardHeader, CardBody, CardFooter, and other building blocks.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>Featured</CardHeader>
 *   <CardBody>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardText>Some content here.</CardText>
 *   </CardBody>
 *   <CardFooter>2 days ago</CardFooter>
 * </Card>
 * ```
 */
export function Card({
  children,
  bg,
  textColor,
  border,
  className = '',
  style,
}: CardProps) {
  const classes = [
    'card',
    bg ? `text-bg-${bg}` : '',
    textColor && !bg ? `text-${textColor}` : '',
    border ? `border-${border}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}

// ============================================================================
// CardHeader
// ============================================================================

export interface CardHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Render as different element */
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card header section.
 */
export function CardHeader({
  children,
  as: Component = 'div',
  className = '',
}: CardHeaderProps) {
  return (
    <Component className={`card-header ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ============================================================================
// CardBody
// ============================================================================

export interface CardBodyProps {
  /** Body content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card body section - the main padded content area.
 */
export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`card-body ${className}`.trim()}>
      {children}
    </div>
  );
}

// ============================================================================
// CardTitle
// ============================================================================

export interface CardTitleProps {
  /** Title content */
  children: React.ReactNode;
  /** Heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card title element.
 */
export function CardTitle({
  children,
  as: Component = 'h5',
  className = '',
}: CardTitleProps) {
  return (
    <Component className={`card-title ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ============================================================================
// CardSubtitle
// ============================================================================

export interface CardSubtitleProps {
  /** Subtitle content */
  children: React.ReactNode;
  /** Heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card subtitle element.
 */
export function CardSubtitle({
  children,
  as: Component = 'h6',
  className = '',
}: CardSubtitleProps) {
  return (
    <Component className={`card-subtitle mb-2 text-body-secondary ${className}`.trim()}>
      {children}
    </Component>
  );
}

// ============================================================================
// CardText
// ============================================================================

export interface CardTextProps {
  /** Text content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card text paragraph.
 */
export function CardText({ children, className = '' }: CardTextProps) {
  return (
    <p className={`card-text ${className}`.trim()}>
      {children}
    </p>
  );
}

// ============================================================================
// CardFooter
// ============================================================================

export interface CardFooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card footer section.
 */
export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`card-footer ${className}`.trim()}>
      {children}
    </div>
  );
}

// ============================================================================
// CardImg
// ============================================================================

export interface CardImgProps {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt?: string;
  /** Image position */
  position?: 'top' | 'bottom' | 'overlay';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card image component.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardImg src="/image.jpg" position="top" />
 *   <CardBody>...</CardBody>
 * </Card>
 * ```
 */
export function CardImg({
  src,
  alt = '',
  position = 'top',
  className = '',
}: CardImgProps) {
  const positionClass = position === 'overlay' ? 'card-img' : `card-img-${position}`;
  return (
    <img src={src} alt={alt} className={`${positionClass} ${className}`.trim()} />
  );
}

// ============================================================================
// CardImgOverlay
// ============================================================================

export interface CardImgOverlayProps {
  /** Overlay content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Card image overlay for content on top of an image.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardImg src="/image.jpg" position="overlay" />
 *   <CardImgOverlay>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardImgOverlay>
 * </Card>
 * ```
 */
export function CardImgOverlay({ children, className = '' }: CardImgOverlayProps) {
  return (
    <div className={`card-img-overlay ${className}`.trim()}>
      {children}
    </div>
  );
}

// ============================================================================
// CardLink
// ============================================================================

export interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link content */
  children: React.ReactNode;
  /** Link href */
  href?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Styled link for use within cards.
 */
export function CardLink({
  children,
  href = '#',
  className = '',
  ...rest
}: CardLinkProps) {
  return (
    <a href={href} className={`card-link ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}

// ============================================================================
// CardGroup
// ============================================================================

export interface CardGroupProps {
  /** Card components */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Group multiple cards into a single attached element with equal width and height.
 */
export function CardGroup({ children, className = '' }: CardGroupProps) {
  return (
    <div className={`card-group ${className}`.trim()}>
      {children}
    </div>
  );
}

// ============================================================================
// SimpleCard (Convenience Component)
// ============================================================================

export interface SimpleCardProps {
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card body text */
  text?: string;
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image position */
  imagePosition?: 'top' | 'bottom';
  /** Header content */
  header?: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Additional body content */
  children?: React.ReactNode;
  /** Background variant */
  bg?: CardVariant;
  /** Text color */
  textColor?: CardTextColor;
  /** Border variant */
  border?: CardVariant;
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

/**
 * SimpleCard for common card patterns.
 *
 * For full control, use the building block components.
 *
 * @example
 * ```tsx
 * <SimpleCard
 *   title="Card Title"
 *   text="Some content here."
 *   imageSrc="/image.jpg"
 *   footer="2 days ago"
 * />
 * ```
 */
export function SimpleCard({
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
}: SimpleCardProps) {
  return (
    <Card bg={bg} textColor={textColor} border={border} className={className} style={style}>
      {header && <CardHeader>{header}</CardHeader>}
      {imageSrc && imagePosition === 'top' && <CardImg src={imageSrc} alt={imageAlt} position="top" />}
      {(title || subtitle || text || children) && (
        <CardBody>
          {title && <CardTitle>{title}</CardTitle>}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {text && <CardText>{text}</CardText>}
          {children}
        </CardBody>
      )}
      {imageSrc && imagePosition === 'bottom' && <CardImg src={imageSrc} alt={imageAlt} position="bottom" />}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}

export default Card;
