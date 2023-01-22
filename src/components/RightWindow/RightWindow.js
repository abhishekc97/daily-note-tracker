import React from "react";
import NotesWindow from "../NotesWindow/NotesWindow";
import InputBox from "../InputBox/InputBox";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./RightWindow.css"

// parent component of the noteswindow and input box
function RightWindow(props) {

    const navigate = useNavigate();
    let location = useLocation();

    const [card, setCard] = useState("");
    const [cards, setCards] = useState([]);
    
    // state for notes and bookmarks
    const [notes, setNotes] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);


    function refreshMemory() {
        const storedNotes = [];
        if(localStorage.NOTES_LOCAL_STORAGE_KEY) storedNotes.push(...JSON.parse(localStorage.NOTES_LOCAL_STORAGE_KEY));
        setNotes(storedNotes);

        const storedBookmarks = [];
        if(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY) storedBookmarks.push(...JSON.parse(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY));
        setBookmarks(storedBookmarks);
    }

    useEffect(() => {
        
    }, []);

    function addCard(data) {
        const message = data;
        let date = new Date();
        const newCard =  { id: uuidv4(), message: message, date: date.getDate()+"-"+ date.getMonth()+1+"-"+ date.getFullYear()+" "+date.getHours()+":"+date.getMinutes() };
        setCard(newCard);


        let newCards = [];

        if(location.pathname === "/") {
            localStorage.NOTES_LOCAL_STORAGE_KEY && newCards.push(...JSON.parse(localStorage.NOTES_LOCAL_STORAGE_KEY));
            newCards.push(newCard);
            localStorage.NOTES_LOCAL_STORAGE_KEY = JSON.stringify(newCards);
            navigate("/");

        } else if(location.pathname === "/bookmarks") {
            localStorage.BOOKMARKS_LOCAL_STORAGE_KEY && newCards.push(...JSON.parse(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY));
            newCards.push(newCard);
            localStorage.BOOKMARKS_LOCAL_STORAGE_KEY = JSON.stringify(newCards);
            navigate("/bookmarks");
        }
        refreshMemory();
    }

    function populateCards() {
        if(location.pathname === "/") {
            setCards(notes);
        }
        else if(location.pathname === "/bookmarks") {
            setCards(bookmarks);
        }
        // console.log(cards);
    }

    useEffect(() => {
        populateCards();
    });
    

    return ( 
        <div className="right-window-container">
            <div className="notes-window-container">
                <NotesWindow cards={cards} notes={notes} bookmarks={bookmarks} />
            </div>
            <div className="input-box-container">
                <InputBox addCard={addCard} />
            </div>
            
        </div>
     );
}

export default RightWindow;