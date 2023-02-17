import styles from './Input.module.css';

interface InputProps {
  value: string;
  handleChange: (value: string) => void;
}

export const Input = ({ value, handleChange }: InputProps) => {
  return <input className={styles.input} value={value} onChange={e => handleChange(e.target.value)} />;
};
