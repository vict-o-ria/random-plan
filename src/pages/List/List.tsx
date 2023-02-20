import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import styles from './List.module.css';
import { Task } from './types';

export const List = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useLocalStorage<Task[]>('list', []);

  useEffect(() => {
    // throw new Error('I crashed!');
  }, []);

  const addTask = () => {
    setList([...list, { id: list.length, text: taskText }]);
    setTaskText('');
  };

  const deleteAllTasks = () => {
    setList([]);
    setIsOpen(false);
  };

  return (
    <section className={styles.wrapper}>
      <div>
        <Input value={taskText} handleChange={setTaskText} />
        <Button disabled={!taskText} onClick={addTask}>
          + Add New
        </Button>
        <Button warn onClick={() => setIsOpen(true)}>
          Clear list
        </Button>
      </div>
      <div className={styles['list-wrapper']}>
        <p className={styles.text}>Your list:</p>
        <div>
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
      </div>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <h2>Are you sure you want to delete all tasks?</h2>
        <div className={styles['buttons-group']}>
          <Button warn onClick={deleteAllTasks}>
            Yes
          </Button>
          <Button onClick={() => setIsOpen(false)}>No</Button>
        </div>
      </Modal>
    </section>
  );
};
