export const TodoItems = (props) => {
  return (
    <>
      {props.todos.map((todo, index) => (
        <h2 key={`${todo}-${index}`}>{todo}</h2>
      ))}
    </>
  );
};
