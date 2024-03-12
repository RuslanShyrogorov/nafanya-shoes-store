import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEvent,
  ReactElement,
} from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type TVariantButtons = 'icon' | 'text' | 'outlined' | 'contained';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: 'button' | 'submit';
  variant: TVariantButtons;
  disabled?: boolean;
  onClick: (e: MouseEvent) => void;
  className?: string;
  children: ReactElement | React.ReactNode;
}

export function Button({
  type = 'button',
  variant,
  onClick,
  className,
  children,
  disabled,
  ...props
}: IButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        s.button,
        { [s.buttonIcon]: variant === 'icon' },
        { [s.buttonText]: variant === 'text' },
        { [s.buttonOutlined]: variant === 'outlined' },
        {
          [s.buttonContained]: variant === 'contained',
          [s.buttonContainedDisabled]: disabled,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
