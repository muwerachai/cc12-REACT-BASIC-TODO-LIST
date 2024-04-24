import EditBar from "./components/Editbar";
import Pagination from "./components/Pagination";
import SearchBox from "./components/SearchBox";
import SearchStatus from "./components/SearchStatus";
import ShowAmount from "./components/ShowAmount";
import ShowItem from "./components/ShowItem";
import Todolist from "./components/TodoList";

function App() {
  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar />
      <div className="d-flex gap-3 my-4">
        <SearchBox />
        <SearchStatus />
      </div>
      <ShowItem />
      <Todolist />
      <div className="d-flex justify-content-between align-items-center">
        <ShowAmount />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
