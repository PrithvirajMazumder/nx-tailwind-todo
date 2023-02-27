import { useState } from 'react';
import { TodoItems } from '@/components/TodoItems';

export const Today = () => {
  const [todos, setTodos] = useState<string[]>(['important work 💪']);

  return (
    <>
      <h2>Today</h2>
      <button
        className="btn"
        onClick={() => {
          setTodos((oldTodos) => {
            oldTodos = [...oldTodos, `important work 💪 ${todos.length + 1}`];
            console.log('oldTodos: ', oldTodos);

            return oldTodos;
          });
        }}
      >
        Add todo
      </button>
      <h3>From parent:</h3>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <h3>From child:</h3>
      <TodoItems todos={todos} />
    </>
  );
};
