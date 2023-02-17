import styles from './Checkbox.module.css';

interface CheckboxProps {
  value?: boolean;
  handleChange?: (value: boolean) => void;
}

export const Checkbox = ({ value, handleChange }: CheckboxProps) => {
  return <input type='checkbox' className={styles.checkbox} checked={value} onChange={e => handleChange && handleChange(e.target.checked)} />;
};
