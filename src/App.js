import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "blah blah",
    date: "07/02/2023"
  },
  {
    id: nanoid(),
    text: "blah blah2",
    date: "55/02/2023"
  },
  {
    id: nanoid(),
    text: "blah blah3",
    date: "45/02/2023"
  },
  {
    id: nanoid(),
    text: "blah blah4",
    date: "24/02/2023"
  }]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false)

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  function deleteNote(id) {

    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}/>
      </div>
      </div>
  );
}

export default App;
