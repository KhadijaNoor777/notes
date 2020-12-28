import React, {useState} from 'react';
import '../App.css';

function AddNote({addNote}) {

    const [newNote, setNewNote] = useState('');

    const addNewNote = (e) => {
        e.preventDefault();
        if(!newNote)
            return;
        addNote(newNote);
        setNewNote('');
    }

    return (
        <form>
            <input type="text" placeholder="Enter note..." value={newNote}
             onChange={e => setNewNote(e.target.value)} />
            <button style={{marginLeft:'10px'}} onClick={addNewNote}>Add</button> 
        </form>
    )
}

export default AddNote;
