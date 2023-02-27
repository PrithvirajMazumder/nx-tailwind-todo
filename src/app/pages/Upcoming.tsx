import Todo from '@/interfaces/todo';
import TodoService from '@/services/todo';
import useToast from '@/hooks/useToast';
import { TodoItem } from '@/components/TodoItem';
import { Navbar } from '@/components/Navbar';
import useFetch from '@/hooks/useFetch';
import { Loader } from '@/components/Loader';
import { EmptyMessage } from '@/components/EmptyMessage';

export const Upcoming = () => {
  const toast = useToast();
  const [todos, isTodosLoading, _, refresh] = useFetch<Todo[]>(
    TodoService.getUpcomingTodos
  );

  const onUpdate = async (todo: Todo) => {
    await TodoService.updateTodo(todo);
    await refresh();
  };

  return (
    <>
      <Navbar
        title="Upcoming"
        onAdd={async (content) => {
          try {
            await TodoService.createTodos(content);
            await refresh();
          } catch (e) {
            toast.error('failed to create todo 🥲');
          }
        }}
      />
      <Loader isLoading={isTodosLoading} />
      {!todos?.length && !isTodosLoading ? (
        <div className="mt-10">
          <EmptyMessage />
        </div>
      ) : null}
      {todos?.map((todo, index) => (
        <TodoItem
          onUpdate={onUpdate}
          displayToday={true}
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
};
