import './NoteList.css';
import React from 'react'
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

function NotesList({notes,handleAddNote,handleDeleteNote}) {
    return (
        <div className="noteList">
            {notes.map((note)=>(
                <Note note={note} handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList
