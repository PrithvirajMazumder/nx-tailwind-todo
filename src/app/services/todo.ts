import axios from 'axios';
import { getBaseUrl } from '@/utils/url';
import Todo from '@/interfaces/todo';

export default class TodoService {
  private static endpoint = 'todos';

  public static getTodos = async (): Promise<Todo[]> => {
    const { data } = await axios.get(getBaseUrl(this.endpoint));
    return data.todos;
  };

  public static createTodos = async (content: string) => {
    const { data } = await axios.post(getBaseUrl(this.endpoint), { content });
    return data;
  };

  public static updateTodo = async (todo: Todo) => {
    await axios.put(`${getBaseUrl(this.endpoint)}/${todo.id}`, todo);
  };
}
