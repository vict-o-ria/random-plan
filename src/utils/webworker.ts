import { Task } from 'pages/List';

const defaultTask = {
  id: 0,
  text: 'Go to bed',
};

/* eslint-disable no-restricted-globals */
self.onmessage = (e: MessageEvent<{ todos: Task[] }>) => {
  const { todos } = e.data;
  const randomTodo = todos[Math.floor(Math.random() * todos.length)];

  self.postMessage(randomTodo || defaultTask);
};

export {};
