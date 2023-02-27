import { useState } from 'react';
import { TodoItems } from '@/components/TodoItems';

export const Completed = () => {
  let todosWithoutUseState: string[] = ['important work 💪'];

  return (
    <>
      <h2>Today</h2>
      <button
        className="btn"
        onClick={() => {
          todosWithoutUseState = [
            ...todosWithoutUseState,
            `important work 💪 ${todosWithoutUseState.length + 1}`,
          ];
          console.log('todosWithoutUseState: ', todosWithoutUseState);
        }}
      >
        Add todo
      </button>
      <h3>From parent:</h3>
      <ul>
        {todosWithoutUseState.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
      <h3>From child:</h3>
      <TodoItems todos={todosWithoutUseState} />
    </>
  );
};
