import React from 'react';

export type ButtonGroupSize = 'sm' | 'md' | 'lg';

export interface ButtonGroupProps {
  /** The button group contents */
  children: React.ReactNode;
  /** Size of the button group */
  size?: ButtonGroupSize;
  /** Stack buttons vertically */
  vertical?: boolean;
  /** ARIA role for the button group */
  role?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  size,
  vertical = false,
  role = 'group',
  ariaLabel,
  className = '',
}) => {
  const sizeClass = size && size !== 'md' ? `btn-group-${size}` : '';
  const groupClass = vertical ? 'btn-group-vertical' : 'btn-group';
  
  return (
    <div
      className={`${groupClass} ${sizeClass} ${className}`.trim()}
      role={role}
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
