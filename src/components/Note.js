import React from 'react';
import '../App.css';

function Note(props) {

    // const deleteNoteBtn = (e) => {
    //     e.preventDefault();
    //     props.deleteNote(props.note.id)

    //}

    return (
        <div className='note' style={{background: props.note.important? 'red' : 'green'}}>
            {props.note.note}
            {/* <button onClick={deleteNoteBtn}>x</button> */}
            <button onClick={()=>props.deleteNote(props.note.id)}>x</button>
        </div>
    )
}

export default Note;