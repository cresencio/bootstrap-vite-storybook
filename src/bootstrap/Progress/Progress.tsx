/**
 * Bootstrap theme color variants for progress bars
 */
export type ProgressVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark';

/**
 * Props for a single progress bar segment
 */
export interface ProgressBarProps {
  /** Current value (0-100 or within min/max range) */
  value: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Color variant */
  variant?: ProgressVariant;
  /** Show striped pattern */
  striped?: boolean;
  /** Animate the stripes */
  animated?: boolean;
  /** Show value label inside the bar */
  showLabel?: boolean;
  /** Custom label (overrides default percentage) */
  label?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProgressBar component for individual bar segments.
 * Use within Progress for stacked progress bars.
 */
export function ProgressBar({
  value,
  min = 0,
  max = 100,
  variant,
  striped = false,
  animated = false,
  showLabel = false,
  label,
  className = '',
}: ProgressBarProps) {
  const percentage = ((value - min) / (max - min)) * 100;
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  const classes = [
    'progress-bar',
    variant ? `bg-${variant}` : '',
    striped || animated ? 'progress-bar-striped' : '',
    animated ? 'progress-bar-animated' : '',
    className,
  ].filter(Boolean).join(' ');

  const displayLabel = label ?? (showLabel ? `${Math.round(clampedPercentage)}%` : null);

  return (
    <div
      className={classes}
      role="progressbar"
      style={{ width: `${clampedPercentage}%` }}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label={!displayLabel ? `${Math.round(clampedPercentage)}%` : undefined}
    >
      {displayLabel}
    </div>
  );
}

/**
 * Props for the Progress container component
 */
export interface ProgressProps {
  /** Progress bar content (ProgressBar components or value for simple usage) */
  children?: React.ReactNode;
  /** Simple usage: current value (0-100) */
  value?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Color variant (simple usage) */
  variant?: ProgressVariant;
  /** Show striped pattern (simple usage) */
  striped?: boolean;
  /** Animate the stripes (simple usage) */
  animated?: boolean;
  /** Show value label (simple usage) */
  showLabel?: boolean;
  /** Custom label (simple usage) */
  label?: React.ReactNode;
  /** Height of the progress bar */
  height?: string | number;
  /** Additional CSS classes for the container */
  className?: string;
  /** Additional CSS classes for the bar (simple usage) */
  barClassName?: string;
}

/**
 * Progress component for displaying progress bars.
 * 
 * Supports simple single-bar usage with the `value` prop, or stacked
 * multi-bar usage with ProgressBar children.
 * 
 * @example
 * ```tsx
 * // Simple usage
 * <Progress value={75} variant="success" showLabel />
 * 
 * // Stacked bars
 * <Progress>
 *   <ProgressBar value={30} variant="success" />
 *   <ProgressBar value={20} variant="warning" />
 *   <ProgressBar value={10} variant="danger" />
 * </Progress>
 * ```
 */
export function Progress({
  children,
  value,
  min = 0,
  max = 100,
  variant,
  striped = false,
  animated = false,
  showLabel = false,
  label,
  height,
  className = '',
  barClassName = '',
}: ProgressProps) {
  const containerClasses = ['progress', className].filter(Boolean).join(' ');
  
  const style: React.CSSProperties = {};
  if (height !== undefined) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  // If value is provided, render simple progress bar
  if (value !== undefined && !children) {
    return (
      <div className={containerClasses} role="progressbar" style={style}>
        <ProgressBar
          value={value}
          min={min}
          max={max}
          variant={variant}
          striped={striped}
          animated={animated}
          showLabel={showLabel}
          label={label}
          className={barClassName}
        />
      </div>
    );
  }

  // Stacked progress bars with children
  return (
    <div 
      className={containerClasses} 
      role="progressbar"
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * Props for SimpleProgress component
 */
export interface SimpleProgressProps {
  /** Current value (0-100) */
  value: number;
  /** Color variant */
  variant?: ProgressVariant;
  /** Show striped pattern */
  striped?: boolean;
  /** Animate the stripes */
  animated?: boolean;
  /** Show percentage label */
  showLabel?: boolean;
  /** Custom height */
  height?: string | number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SimpleProgress - A simplified progress bar component.
 * 
 * @example
 * ```tsx
 * <SimpleProgress value={50} variant="primary" showLabel />
 * ```
 */
export function SimpleProgress({
  value,
  variant = 'primary',
  striped = false,
  animated = false,
  showLabel = false,
  height,
  className = '',
}: SimpleProgressProps) {
  return (
    <Progress
      value={value}
      variant={variant}
      striped={striped}
      animated={animated}
      showLabel={showLabel}
      height={height}
      className={className}
    />
  );
}

export default Progress;
