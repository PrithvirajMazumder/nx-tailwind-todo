import { useRef } from 'react';

export const Navbar = ({
  title,
  onAdd,
}: {
  title?: string;
  onAdd?: (content: string) => void;
}) => {
  const addTodoRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className="navbar bg-opacity-90 backdrop-blur z-40 sticky top-0 w-full bg-base-100 pt-4">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl">
          {title ?? 'Navbar'}
        </button>
      </div>
      {onAdd ? (
        <div className="flex-none gap-2">
          <form
            ref={addTodoRef}
            onSubmit={(event) => {
              onAdd(event.target.addTodo ? event.target.addTodo.value : '');
              addTodoRef.current?.reset();
              addTodoRef.current?.focus();
              event.preventDefault();
            }}
            className="form-control"
          >
            <label className="input-group input-group-md">
              <input
                name="addTodo"
                type="text"
                placeholder="Todo"
                className="input input-bordered input-md"
              />
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </label>
          </form>
        </div>
      ) : null}
    </div>
  );
};
