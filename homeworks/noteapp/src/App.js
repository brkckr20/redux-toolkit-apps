import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div>
      <SearchForm />
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;
