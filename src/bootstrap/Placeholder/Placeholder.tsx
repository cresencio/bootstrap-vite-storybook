/**
 * Placeholder animation type
 */
export type PlaceholderAnimation = 'glow' | 'wave';

/**
 * Placeholder size options
 */
export type PlaceholderSize = 'xs' | 'sm' | 'lg';

/**
 * Bootstrap color variants
 */
export type PlaceholderVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

/**
 * Column width values (1-12)
 */
export type PlaceholderCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Props for the Placeholder component
 */
export interface PlaceholderProps {
  /** Column width (1-12) */
  col?: PlaceholderCol;
  /** Placeholder size */
  size?: PlaceholderSize;
  /** Color variant */
  variant?: PlaceholderVariant;
  /** Additional CSS classes */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

/**
 * Placeholder span element for creating loading skeletons.
 * 
 * @example
 * ```tsx
 * <Placeholder col={6} />
 * <Placeholder col={4} size="sm" variant="primary" />
 * ```
 */
export function Placeholder({
  col,
  size,
  variant,
  className = '',
  style,
}: PlaceholderProps) {
  const classes = [
    'placeholder',
    col && `col-${col}`,
    size && `placeholder-${size}`,
    variant && `bg-${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return <span className={classes} style={style} />;
}

/**
 * Props for PlaceholderWrapper component
 */
export interface PlaceholderWrapperProps {
  /** Placeholder elements */
  children: React.ReactNode;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Wrapper that applies animation to child placeholders.
 * 
 * @example
 * ```tsx
 * <PlaceholderWrapper animation="glow">
 *   <Placeholder col={6} />
 * </PlaceholderWrapper>
 * ```
 */
export function PlaceholderWrapper({
  children,
  animation,
  className = '',
}: PlaceholderWrapperProps) {
  const classes = [
    animation && `placeholder-${animation}`,
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes || undefined}>{children}</div>;
}

/**
 * Props for PlaceholderButton component
 */
export interface PlaceholderButtonProps {
  /** Column width (1-12) */
  col?: PlaceholderCol;
  /** Button variant */
  variant?: PlaceholderVariant;
  /** Button size */
  size?: 'sm' | 'lg';
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * Placeholder button element.
 * 
 * @example
 * ```tsx
 * <PlaceholderButton col={4} variant="primary" />
 * ```
 */
export function PlaceholderButton({
  col,
  variant = 'primary',
  size,
  animation,
  className = '',
  ariaLabel = 'Loading',
}: PlaceholderButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size && `btn-${size}`,
    'disabled',
    'placeholder',
    col && `col-${col}`,
    className,
  ].filter(Boolean).join(' ');

  const wrapperClass = animation ? `placeholder-${animation}` : undefined;

  const button = (
    <button className={classes} type="button" disabled aria-label={ariaLabel} />
  );

  if (wrapperClass) {
    return <div className={wrapperClass}>{button}</div>;
  }

  return button;
}

/**
 * Props for PlaceholderCard component
 */
export interface PlaceholderCardProps {
  /** Show image placeholder */
  showImage?: boolean;
  /** Image height */
  imageHeight?: string | number;
  /** Number of text lines */
  lines?: number;
  /** Show button placeholder */
  showButton?: boolean;
  /** Button variant */
  buttonVariant?: PlaceholderVariant;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Card width */
  width?: string | number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Pre-built placeholder card skeleton.
 * 
 * @example
 * ```tsx
 * <PlaceholderCard showImage lines={3} showButton animation="wave" />
 * ```
 */
export function PlaceholderCard({
  showImage = true,
  imageHeight = 180,
  lines = 3,
  showButton = true,
  buttonVariant = 'primary',
  animation = 'glow',
  width,
  className = '',
}: PlaceholderCardProps) {
  const wrapperClass = animation ? `placeholder-${animation}` : '';
  
  const imageStyle: React.CSSProperties = {
    height: typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight,
  };

  const cardStyle: React.CSSProperties = width 
    ? { width: typeof width === 'number' ? `${width}px` : width }
    : {};

  // Generate varied line widths for more realistic appearance
  const lineWidths: PlaceholderCol[] = [7, 4, 6, 8, 5, 9, 3, 10];

  return (
    <div className={`card ${className}`.trim()} style={cardStyle}>
      {showImage && (
        <div className="card-img-top bg-secondary" style={imageStyle} />
      )}
      <div className={`card-body ${wrapperClass}`.trim()}>
        {/* Title */}
        <h5 className="card-title">
          <Placeholder col={6} />
        </h5>
        
        {/* Text lines */}
        <p className="card-text">
          {Array.from({ length: lines }).map((_, index) => (
            <span key={index}>
              <Placeholder col={lineWidths[index % lineWidths.length]} />
              {index < lines - 1 && ' '}
            </span>
          ))}
        </p>
        
        {/* Button */}
        {showButton && (
          <PlaceholderButton col={6} variant={buttonVariant} />
        )}
      </div>
    </div>
  );
}

/**
 * Props for PlaceholderText component
 */
export interface PlaceholderTextProps {
  /** Number of lines */
  lines?: number;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Size variant */
  size?: PlaceholderSize;
  /** Color variant */
  variant?: PlaceholderVariant;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Multi-line placeholder text block.
 * 
 * @example
 * ```tsx
 * <PlaceholderText lines={4} animation="wave" />
 * ```
 */
export function PlaceholderText({
  lines = 3,
  animation,
  size,
  variant,
  className = '',
}: PlaceholderTextProps) {
  const wrapperClass = [
    animation && `placeholder-${animation}`,
    className,
  ].filter(Boolean).join(' ');

  // Varied widths for realistic text appearance
  const widths: PlaceholderCol[] = [12, 10, 8, 11, 6, 9, 7, 12, 5, 10];

  return (
    <div className={wrapperClass || undefined}>
      {Array.from({ length: lines }).map((_, index) => (
        <p key={index} className="mb-1">
          <Placeholder 
            col={widths[index % widths.length]} 
            size={size} 
            variant={variant} 
          />
        </p>
      ))}
    </div>
  );
}

/**
 * Props for PlaceholderImage component
 */
export interface PlaceholderImageProps {
  /** Image width */
  width?: string | number;
  /** Image height */
  height?: string | number;
  /** Make image rounded */
  rounded?: boolean | 'circle' | 'pill';
  /** Color variant */
  variant?: PlaceholderVariant;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Placeholder for images.
 * 
 * @example
 * ```tsx
 * <PlaceholderImage width={200} height={150} rounded />
 * ```
 */
export function PlaceholderImage({
  width = '100%',
  height = 200,
  rounded = false,
  variant = 'secondary',
  animation,
  className = '',
}: PlaceholderImageProps) {
  const classes = [
    `bg-${variant}`,
    rounded === true && 'rounded',
    rounded === 'circle' && 'rounded-circle',
    rounded === 'pill' && 'rounded-pill',
    animation && `placeholder-${animation}`,
    className,
  ].filter(Boolean).join(' ');

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    display: 'block',
  };

  return <div className={classes} style={style} />;
}

/**
 * Props for PlaceholderAvatar component
 */
export interface PlaceholderAvatarProps {
  /** Avatar size in pixels */
  size?: number;
  /** Color variant */
  variant?: PlaceholderVariant;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Circular placeholder for avatars.
 * 
 * @example
 * ```tsx
 * <PlaceholderAvatar size={48} />
 * ```
 */
export function PlaceholderAvatar({
  size = 40,
  variant = 'secondary',
  animation,
  className = '',
}: PlaceholderAvatarProps) {
  return (
    <PlaceholderImage
      width={size}
      height={size}
      rounded="circle"
      variant={variant}
      animation={animation}
      className={className}
    />
  );
}

/**
 * Props for PlaceholderListItem component
 */
export interface PlaceholderListItemProps {
  /** Show avatar */
  showAvatar?: boolean;
  /** Avatar size */
  avatarSize?: number;
  /** Number of text lines */
  lines?: number;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Placeholder list item with optional avatar.
 * 
 * @example
 * ```tsx
 * <PlaceholderListItem showAvatar lines={2} />
 * ```
 */
export function PlaceholderListItem({
  showAvatar = true,
  avatarSize = 40,
  lines = 2,
  animation = 'glow',
  className = '',
}: PlaceholderListItemProps) {
  const wrapperClass = animation ? `placeholder-${animation}` : '';

  return (
    <div className={`d-flex align-items-center gap-3 ${wrapperClass} ${className}`.trim()}>
      {showAvatar && <PlaceholderAvatar size={avatarSize} />}
      <div className="flex-grow-1">
        {Array.from({ length: lines }).map((_, index) => (
          <Placeholder 
            key={index} 
            col={index === 0 ? 8 : 5} 
            size={index === 0 ? undefined : 'sm'}
            className={index < lines - 1 ? 'd-block mb-1' : 'd-block'}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Props for PlaceholderTable component
 */
export interface PlaceholderTableProps {
  /** Number of rows */
  rows?: number;
  /** Number of columns */
  cols?: number;
  /** Show table header */
  showHeader?: boolean;
  /** Animation type */
  animation?: PlaceholderAnimation;
  /** Striped rows */
  striped?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Placeholder table skeleton.
 * 
 * @example
 * ```tsx
 * <PlaceholderTable rows={5} cols={4} showHeader />
 * ```
 */
export function PlaceholderTable({
  rows = 5,
  cols = 4,
  showHeader = true,
  animation = 'glow',
  striped = false,
  className = '',
}: PlaceholderTableProps) {
  const wrapperClass = animation ? `placeholder-${animation}` : '';
  const tableClass = [
    'table',
    striped && 'table-striped',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass || undefined}>
      <table className={tableClass}>
        {showHeader && (
          <thead>
            <tr>
              {Array.from({ length: cols }).map((_, index) => (
                <th key={index}>
                  <Placeholder col={8} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <td key={colIndex}>
                  <Placeholder col={(6 + (rowIndex + colIndex) % 4) as PlaceholderCol} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
