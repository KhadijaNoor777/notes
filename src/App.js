import React, {useState} from 'react';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import './App.css';

function App() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      note: "first note",
      important: true
    },
    {
      id: 2,
      note: "second note",
      important: false
    },
    {
      id: 3,
      note: "third note",
      important: true
    }
  ])

  const deleteNote = (id) => {
    console.log(id);
    setNotes(notes.filter(note => note.id !== id));
    //({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  const addNote = (note) => {
    setNotes([...notes, {id: notes.length + 1, note:note, important:false }])
  }

  return (
    <div className="App">
      <div className='notes'>
        <AddNote addNote={addNote} />
      </div>
      <div className='notes'>
        <Notes notes={notes} deleteNote={deleteNote} />
      </div>
      
    </div>
  );
}

export default App;
