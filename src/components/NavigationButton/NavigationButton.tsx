import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationButton.module.css';

interface Props {
  to: string;
  children: ReactNode;
}

export const NavigationButton = ({ to, children }: Props) => <Link className={styles.link} to={to}>{children}</Link>;
