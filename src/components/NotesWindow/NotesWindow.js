import React from "react";
import Card from "../Card/Card";
import "./NotesWindow.css";

function NotesWindow() {
    return ( 
        <div className="notes-window">
            <Card />
            <Card />
        </div>
     );
}

export default NotesWindow;