import React from "react";
import NotesWindow from "../NotesWindow/NotesWindow";
import InputBox from "../InputBox/InputBox";
import { useState } from "react";
import { useEffect } from "react";
import "./RightWindow.css"
function RightWindow(props) {
    // parent component of the noteswindow and input box
    //states to hold data

    // location data
    const location = props.location;

    const [cards, setCards] = useState([]);
    const [card, setCard] = useState([]);

    // data for notes
    const [notes, setNotes] = useState([]);

    // data for bookmarks
    const [bookmarks, setBookmarks] = useState([]);

    function addCard(data) {
        // add the card to appropriate array
        if(location === "notes") {
            // append the new card
            // setNotes({...notes, ...card});
            notes.push(data);
            console.log("New Note added");

        } else if(location === "bookmarks") {
            // append the new card
            setBookmarks({...bookmarks, ...card});
            console.log("new Bookmark added");
        }
        console.log("New input has been added");
    }

    function populateCards() {
        // send the right set of cards to the NotesWindow component
        if(location === "notes") {
            setCards(notes);
        } else if(location === "bookmarks") {
            setCards(bookmarks);
        }
    }

    useEffect(() => {
        populateCards();
    })

    return ( 
        <div className="right-window-container">
            <div className="notes-window-container">
                <NotesWindow location={location} cards={cards} />
            </div>
            <div className="input-box-container">
                <InputBox location={location} addCard={addCard} />
            </div>
            
        </div>
     );
}

export default RightWindow;