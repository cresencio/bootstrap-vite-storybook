import React, { useId } from 'react';

// ============================================================================
// Types
// ============================================================================

export type ButtonGroupSize = 'sm' | 'md' | 'lg';

// ============================================================================
// ButtonGroup (Main Component)
// ============================================================================

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

/**
 * Group a series of buttons together on a single line or vertical stack.
 *
 * @example
 * ```tsx
 * <ButtonGroup ariaLabel="Actions">
 *   <Button>Left</Button>
 *   <Button>Middle</Button>
 *   <Button>Right</Button>
 * </ButtonGroup>
 * ```
 */
export function ButtonGroup({
  children,
  size,
  vertical = false,
  role = 'group',
  ariaLabel,
  className = '',
}: ButtonGroupProps) {
  const sizeClass = size && size !== 'md' ? `btn-group-${size}` : '';
  const groupClass = vertical ? 'btn-group-vertical' : 'btn-group';

  const classes = [groupClass, sizeClass, className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

// ============================================================================
// ButtonToolbar
// ============================================================================

export interface ButtonToolbarProps {
  /** Button groups and other content */
  children: React.ReactNode;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Combine sets of button groups into toolbars.
 *
 * @example
 * ```tsx
 * <ButtonToolbar ariaLabel="Editor toolbar">
 *   <ButtonGroup ariaLabel="Formatting" className="me-2">
 *     <Button>Bold</Button>
 *     <Button>Italic</Button>
 *   </ButtonGroup>
 *   <ButtonGroup ariaLabel="Alignment">
 *     <Button>Left</Button>
 *     <Button>Center</Button>
 *     <Button>Right</Button>
 *   </ButtonGroup>
 * </ButtonToolbar>
 * ```
 */
export function ButtonToolbar({
  children,
  ariaLabel,
  className = '',
}: ButtonToolbarProps) {
  const classes = ['btn-toolbar', className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="toolbar" aria-label={ariaLabel}>
      {children}
    </div>
  );
}

// ============================================================================
// ToggleButtonGroup (Checkbox/Radio groups)
// ============================================================================

export type ToggleButtonType = 'checkbox' | 'radio';

export interface ToggleButtonOption {
  /** Unique value for the option */
  value: string;
  /** Display label */
  label: React.ReactNode;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface ToggleButtonGroupProps {
  /** Array of toggle options */
  options: ToggleButtonOption[];
  /** Toggle type: checkbox (multi-select) or radio (single-select) */
  type?: ToggleButtonType;
  /** Name attribute for the input group (auto-generated if not provided) */
  name?: string;
  /** Currently selected value(s) */
  value?: string | string[];
  /** Default selected value(s) for uncontrolled mode */
  defaultValue?: string | string[];
  /** Callback when selection changes */
  onChange?: (value: string | string[]) => void;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  /** Render as outline buttons */
  outline?: boolean;
  /** Button group size */
  size?: ButtonGroupSize;
  /** Stack vertically */
  vertical?: boolean;
  /** ARIA label for the group */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Toggle button group with checkbox or radio behavior.
 *
 * @example
 * ```tsx
 * // Radio (single select)
 * <ToggleButtonGroup
 *   type="radio"
 *   name="alignment"
 *   options={[
 *     { value: 'left', label: 'Left' },
 *     { value: 'center', label: 'Center' },
 *     { value: 'right', label: 'Right' },
 *   ]}
 *   defaultValue="left"
 * />
 *
 * // Checkbox (multi-select)
 * <ToggleButtonGroup
 *   type="checkbox"
 *   options={[
 *     { value: 'bold', label: 'B' },
 *     { value: 'italic', label: 'I' },
 *     { value: 'underline', label: 'U' },
 *   ]}
 * />
 * ```
 */
export function ToggleButtonGroup({
  options,
  type = 'radio',
  name,
  value,
  defaultValue,
  onChange,
  variant = 'primary',
  outline = true,
  size,
  vertical = false,
  ariaLabel,
  className = '',
}: ToggleButtonGroupProps) {
  const generatedId = useId();
  const groupName = name ?? `toggle-${generatedId}`;
  const buttonClass = outline ? `btn-outline-${variant}` : `btn-${variant}`;

  const isChecked = (optionValue: string): boolean => {
    if (value !== undefined) {
      return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue.includes(optionValue) : defaultValue === optionValue;
    }
    return false;
  };

  const handleChange = (optionValue: string, checked: boolean) => {
    if (!onChange) return;

    if (type === 'radio') {
      onChange(optionValue);
    } else {
      const currentValues = Array.isArray(value) ? value : [];
      if (checked) {
        onChange([...currentValues, optionValue]);
      } else {
        onChange(currentValues.filter((v) => v !== optionValue));
      }
    }
  };

  return (
    <ButtonGroup
      size={size}
      vertical={vertical}
      ariaLabel={ariaLabel}
      className={className}
    >
      {options.map((option, index) => {
        const inputId = `${groupName}-${option.value}-${index}`;
        return (
          <React.Fragment key={option.value}>
            <input
              type={type}
              className="btn-check"
              name={groupName}
              id={inputId}
              value={option.value}
              autoComplete="off"
              disabled={option.disabled}
              defaultChecked={value === undefined ? isChecked(option.value) : undefined}
              checked={value !== undefined ? isChecked(option.value) : undefined}
              onChange={(e) => handleChange(option.value, e.target.checked)}
            />
            <label className={`btn ${buttonClass}`} htmlFor={inputId}>
              {option.label}
            </label>
          </React.Fragment>
        );
      })}
    </ButtonGroup>
  );
}

export default ButtonGroup;
