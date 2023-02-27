import { useParams } from 'react-router-dom';

export const TodoDetails = () => {
  const { todoId } = useParams();
  return <h2>The id is: {todoId}</h2>;
};
