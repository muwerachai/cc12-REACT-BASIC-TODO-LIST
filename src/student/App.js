import { v4 as uuidv4 } from "uuid";

import EditBar from "./components/Editbar";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import SearchStatus from "./components/SearchStatus";
import ShowAmount from "./components/ShowAmount";
import ShowItem from "./components/ShowItem";
import Todolist from "./components/TodoList";
import { useState } from "react";

const initialTodos = [
  { id: uuidv4, title: "Shoppimg", completed: true },
  { id: uuidv4, title: "Dinner", completed: false },
  { id: uuidv4, title: "Swimming", completed: false }
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const createTodo = (newTitle) => {
    const newTodo = { id: uuidv4(), title: newTitle, completed: false };
    const cloneTodos = [...todos];
    cloneTodos.push(newTodo);
    setTodos(cloneTodos);
  };
  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar createTodo={createTodo} />
      <div className="d-flex gap-3 my-4">
        <SearchBox />
        <SearchStatus />
      </div>
      <ShowItem />
      <Todolist todos={todos} />
      <div className="d-flex justify-content-between align-items-center">
        <ShowAmount />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
