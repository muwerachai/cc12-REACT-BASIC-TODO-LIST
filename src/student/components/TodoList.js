import TodoItem from "./TodoItem";

function Todolist(props) {
  return (
    <ul className="list-group my-2">
      {props.todos.map((item) => (
        <TodoItem key={item.id} title={item.title} completed={item.completed} />
      ))}
    </ul>
  );
}
export default Todolist;
