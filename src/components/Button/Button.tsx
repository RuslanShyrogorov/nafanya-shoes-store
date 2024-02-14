import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface IButtonProps {
  type?: 'button' | 'submit';
  variant: string;
  onClick: () => void;
  className?: string;
  children: React.ReactElement | React.ReactNode;
}
function Button({
  type = 'button',
  variant,
  onClick,
  className,
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        s.button,
        { [s.buttonIcon]: variant === 'icon' },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
