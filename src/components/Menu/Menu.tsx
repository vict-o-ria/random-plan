import { NavigationButton } from 'components/NavigationButton';
import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavigationButton to="/">Random Task</NavigationButton>
      <NavigationButton to="/list">Task List</NavigationButton>
    </div>
  );
};
