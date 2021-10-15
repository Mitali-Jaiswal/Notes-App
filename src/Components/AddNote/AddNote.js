import './AddNote.css';
import React,{useState} from 'react'

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange =(e)=>{
        if(characterLimit - e.target.value.length >=0)
        {
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = (e)=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }

    }
    return (
        <div className="note addnote">
            <textarea
                rows='8'
                cols='10'
                value={noteText}
               onChange={handleChange}
                placeholder='Type to add a note...'
            ></textarea>
            <div className="note__footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button onClick={handleSaveClick} className="note__save">Save</button>
            </div>
        </div>
    )
}

export default AddNote
