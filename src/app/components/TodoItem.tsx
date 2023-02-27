import {
  MdCalendarToday,
  MdCancel,
  MdDelete,
  MdDone,
  MdEdit,
} from 'react-icons/all';
import type Todo from '@/interfaces/todo';
import { useEffect, useRef, useState } from 'react';

export const TodoItem = ({
  todo,
  onUpdate,
  displayToday,
  isNonEditable,
}: {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  displayToday?: boolean;
  isNonEditable?: boolean;
}) => {
  const [isInEditMode, setIsInEditMode] = useState<boolean>(false);
  const [presentTodoState, setPresentTodoState] = useState<Todo>(todo);
  const [presentTodoContent, setPresentTodoContent] = useState<string>(
    todo.content
  );
  const todoInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isInEditMode) {
      todoInputRef.current?.focus();
    }
  }, [isInEditMode]);

  return (
    <div className="card card-bordered border-2 mt-4">
      <div className="flex items-center w-full p-4">
        {!isNonEditable ? (
          <input
            type="checkbox"
            className="checkbox checkbox-primary rounded-full mr-4"
            onChange={(event) => {
              setPresentTodoState((oldTodo) => {
                oldTodo = { ...oldTodo, completed: event.target.checked };
                setTimeout(() => onUpdate(oldTodo), 500);

                return oldTodo;
              });
            }}
            checked={presentTodoState.completed}
          />
        ) : null}
        <div className="w-full pr-4">
          <input
            ref={todoInputRef}
            type="text"
            autoFocus={true}
            placeholder="Type here"
            className={`input m-0 mr-4 border-none pl-0 rounded-none input-ghost w-full border-base-100 shadow-none outline-none focus:outline-none disabled:bg-transparent ${
              presentTodoState.completed ? 'line-through' : ''
            }`}
            defaultValue={presentTodoState.content}
            disabled={!isInEditMode}
            onChange={(event) => setPresentTodoContent(event.target.value)}
          />
          {displayToday &&
          new Date(presentTodoState.createdAt).getDate() ===
            new Date().getDate() ? (
            <span className="text-sm -mt-2 text-success flex items-center">
              <span className="text-md mr-1">
                <MdCalendarToday />
              </span>
              Today
            </span>
          ) : null}
        </div>
        {!isNonEditable ? (
          <div className="btn-group ml-auto">
            {isInEditMode ? (
              <>
                <button
                  onClick={() => setIsInEditMode(false)}
                  className="btn btn-square btn-sm btn-ghost"
                >
                  <span className="text-lg">
                    <MdCancel />
                  </span>
                </button>
                <button
                  onClick={() => {
                    setPresentTodoState((oldTodo) => {
                      oldTodo = { ...oldTodo, content: presentTodoContent };
                      onUpdate(oldTodo);
                      setIsInEditMode(false);
                      return oldTodo;
                    });
                  }}
                  className="btn btn-square btn-sm btn-success"
                >
                  <span className="text-lg">
                    <MdDone />
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsInEditMode(true)}
                  className="btn btn-square btn-sm"
                >
                  <span className="text-lg">
                    <MdEdit />
                  </span>
                </button>
                <button
                  onClick={() => {
                    setPresentTodoState((oldTodo) => {
                      oldTodo = { ...oldTodo, deleted: true };
                      onUpdate(oldTodo);
                      return oldTodo;
                    });
                  }}
                  className="btn btn-square btn-sm btn-ghost"
                >
                  <span className="text-lg">
                    <MdDelete />
                  </span>
                </button>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
