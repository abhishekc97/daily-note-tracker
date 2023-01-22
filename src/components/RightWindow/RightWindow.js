import React from "react";
import NotesWindow from "../NotesWindow/NotesWindow";
import InputBox from "../InputBox/InputBox";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./RightWindow.css"

const NOTES_LOCAL_STORAGE_KEY = 'dailyNotes.RightWindow.notes';
const BOOKMARKS_LOCAL_STORAGE_KEY = 'dailyNotes.RightWindow.bookmarks';

// parent component of the noteswindow and input box
function RightWindow(props) {
    // location data
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
        // console.log(storedNotes);
        setNotes(storedNotes);

        const storedBookmarks = [];
        if(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY) storedBookmarks.push(...JSON.parse(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY));
        setBookmarks(storedBookmarks);
    }
    // retrieve stored cards
    useEffect(() => {
        
    }, []);

    // save cards into local storage
    // useEffect(() => {
    //     localStorage.setItem(CARDS_LOCAL_STORAGE_KEY, JSON.stringify(cards))        
    // }, [cards]);

    function addCard(data) {
        const message = data;

        const newCard =  { id: uuidv4(), message: message, date: new Date().getDate()+"-"+ new Date().getMonth()+1+"-"+ new Date().getFullYear()+" "+new Date().getHours()+":"+new Date().getMinutes() };
        setCard(newCard);
        // setCard({ id: uuidv4(), message: message, date: new Date()});


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
        // console.log("message", message);
        // console.log("card", card);
        // console.log(notes);
        // console.log(bookmarks);

        // cards.push(prevCards => [...prevCards, { id: uuidv4(), message: message, date: new Date()} ])
        // console.log("cards", cards);

    }

    function populateCards() {
        if(location.pathname === "/") {
            setCards(notes);
        }
        else if(location.pathname === "/bookmarks") {
            setCards(bookmarks);
        }
        console.log(cards);
    }
    // refreshMemory();
    useEffect(() => {
        
        populateCards();
        // console.log("card", card);
        // console.log(notes);
        // console.log(bookmarks);
        
    }, [card, notes, bookmarks]);
    

    return ( 
        <div className="right-window-container">
            <div className="notes-window-container">
                <NotesWindow cards={cards} />
            </div>
            <div className="input-box-container">
                <InputBox addCard={addCard} />
            </div>
            
        </div>
     );
}

export default RightWindow;