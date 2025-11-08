import React from 'react';

export type BadgeVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface BadgeProps {
  /** The badge variant/color theme */
  variant?: BadgeVariant;
  /** Badge content */
  children: React.ReactNode;
  /** Use background color with contrasting text */
  bg?: boolean;
  /** Render as a pill shape with rounded corners */
  pill?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  children,
  bg = true,
  pill = false,
  className = '',
}) => {
  const bgClass = bg ? `text-bg-${variant}` : `badge-${variant}`;
  const pillClass = pill ? 'rounded-pill' : '';
  
  return (
    <span className={`badge ${bgClass} ${pillClass} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;
