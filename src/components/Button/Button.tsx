import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  warn?: boolean;
}

export const Button = ({ children, warn, className, ...props }: ButtonProps) => (
  <button {...props} className={cn(styles.button, { [styles.warn]: warn }, className)}>
    {children}
  </button>
);
