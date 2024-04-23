import EditBar from "./components/Editbar";
import SearchBox from "./components/SearchBox";
import SearchStatus from "./components/SearchStatus";

function App() {
  return (
    <div className="container mt-5 mb-3 max-w-xs">
      <EditBar />
      <div className="d-flex gap-3 my-4">
        <SearchBox />
        <SearchStatus />
      </div>
    </div>
  );
}

export default App;
