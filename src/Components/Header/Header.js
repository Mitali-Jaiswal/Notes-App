import React from 'react';
import './Header.css';


function Header({handleToggleDarkMode}) {
    return (
        <div className="header">
        <h1>Notes</h1>
        <button onClick={()=>handleToggleDarkMode((prevDarkMode)=>!prevDarkMode)} className="note__save">Toggle Mode</button>
        </div>
    )
}

export default Header
