import {nanoid} from 'nanoid';
import './App.css';
import { useState,useEffect } from 'react';
import NotesList from './Components/NoteList/NotesList';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
function App() {
  const [notes, setNotes] = useState([
    {
      id:1,
      text:'This is my first note',
      date:'10/09/2021'
    },
    {
      id:2,
      text:'JavaScript important concepts',
      date:'15/10/2021'
    }
  ]);

  const [searchText, setSearchText] =useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect (()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);

  useEffect (()=>{
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  },[notes]);

  const addNote = (text)=>{
    const date =new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id)=>{
    const newNotes = notes.filter((note)=>note.id!== id)
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="app">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}  
      />
    </div>
    </div>
  );
}

export default App;
