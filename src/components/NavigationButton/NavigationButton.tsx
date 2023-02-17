import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children: ReactElement;
}

export const NavigationButton = ({ to, children }: Props) => <Link to={to}>{children}</Link>;
