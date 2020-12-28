import React from 'react';
import Note from './Note';
import '../App.css';

function Notes({notes, deleteNote}) {
    return notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote}/>
    ))
}

export default Notes;