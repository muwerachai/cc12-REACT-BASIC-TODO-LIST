import TodoItem from "./TodoItem";

function Todolist() {
  return (
    <ul className="list-group my-2">
      <TodoItem completed title="Shopping" />
      <TodoItem title="Dinner" />
      <TodoItem title="Swimming" />
    </ul>
  );
}
export default Todolist;
