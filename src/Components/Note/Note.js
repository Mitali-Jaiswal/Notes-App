import './Note.css';
import { MdDeleteForever } from 'react-icons/md';
import React from 'react'

function Note({note,handleDeleteNote}) {
    return (
        <div className="note">
            <span>{note.text}</span>
			<div className='note__footer'>
				<small>{note.date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(note.id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
        </div>
    )
}

export default Note
