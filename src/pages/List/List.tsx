import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import styles from './List.module.css';
import { Task } from './types';

export const List = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [list, setList] = useLocalStorage<Task[]>('list', []);

  useEffect(() => {
    // throw new Error('I crashed!');
  }, []);

  const addTask = () => {
    setList([...list, { id: list.length, text: taskText }]);
    setTaskText('');
  };

  return (
    <section className={styles.wrapper}>
      <div>
        <Input value={taskText} handleChange={setTaskText} />
        <Button disabled={!taskText} onClick={addTask}>
          + Add New
        </Button>
      </div>
      <p className={styles.text}>Your list:</p>
      <div className={styles['list-wrapper']}>
        {list?.length > 0 ? (
          <ul className={styles.list}>
            {list.map(todo => (
              <li key={todo.id}>
                <Checkbox /> <p className={styles.todo}>{todo.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Tasks</p>
        )}
      </div>
    </section>
  );
};
