//a component LIFECYCLE has three phases which are the followings:
/*
 * 1. Mounting phase (when a component renders in the DOM at first time)
 * 2. Updating phase (when a component re-renders due to state or prop change)
 * 3. Unmounting phase (when a component removes from dom)
 * */
//this hook manage lifecycle of a React functional component

//-----STRUCTURE:
/*
      useEffect(() => {

          #in this part the mounting and updating effect will go

          return () => {
            #in this part the unmounting effect will go
          }
      }, [##dependency]);

      ## in the dependency array we can provide the props and states which we want to listen to its changes, and perform certain tasks
      ## if left blank then it listens only to the mounting state of the component
  */

import {useEffect, useState} from 'react';
import Todo from '@/interfaces/todo';
import TodoService from '@/services/todo';
import {Link} from 'react-router-dom';
import useToast from '@/hooks/useToast';

export const Upcoming = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const toast = useToast();

  const loadTodos = async () => {
    try {
      setTodos(await TodoService.getTodos());
    } catch (e) {
      toast.error('Failed to fetch todos 😭');
    }
  };

  useEffect(() => {
    // MOUNTING PHASE:
    loadTodos();

    //UNMOUNTING PHASE:
    return () => {
      toast.error('where are you going you have todos to complete 😡');
    };
  }, []);

  //UPDATING PHASE:
  useEffect(() => {
    toast.warning('todos are being modified 🍊', 1000);
  }, [todos]);

  return (
    <>
      <h2 className="text-3xl">TODOs</h2>
      <ol>
        {todos.map((todo, index) => (
          <li className="flex items-center" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(event) => {
                setTodos((oldTodos) => {
                  oldTodos[index].completed = true;

                  return [...oldTodos];
                });
              }}
            />
            <p>{todo.content}</p>
          </li>
        ))}
      </ol>
      <Link to={'/details'}>move to another page</Link>
    </>
  );
};
