import { useEffect, useMemo, useState } from 'react';
import { Button } from 'components/Button';
import { Task } from 'pages/List';
import { useLocalStorage } from 'hooks/useLocalStorage';
import styles from './RandomTask.module.css';

export const RandomTask = () => {
  const [randomTask, setRandomTask] = useState<Task | null>(null);
  const [list] = useLocalStorage<Task[]>('list', []);
  const randomizer: Worker = useMemo(() => new Worker(new URL('../../utils/webworker.ts', import.meta.url)), []);

  useEffect(() => {
    if (window.Worker) {
      randomizer.onmessage = (e: MessageEvent<Task>) => {
        setRandomTask(e.data);
      };
    }
  }, [randomizer]);

  const onClickRandom = () => {
    if (window.Worker) {
      randomizer.postMessage({ todos: list });
    }
  };

  return (
    <section className={styles.wrapper}>
      <Button onClick={onClickRandom}>Pick random task</Button>
      {randomTask ? (
        <div className={styles.task}>
          <h3>Your random task:</h3>
          {randomTask.text}
        </div>
      ) : null}
    </section>
  );
};
