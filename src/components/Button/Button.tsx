import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export const Button = ({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);
