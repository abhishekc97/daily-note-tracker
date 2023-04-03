import React from "react";
import NotesWindow from "../NotesWindow/NotesWindow";
import InputBox from "../InputBox/InputBox";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./RightWindow.css";

// parent component of the noteswindow and input box
function RightWindow({ notes, bookmarks, handleUpdate }) {
    const navigate = useNavigate();
    let location = useLocation();
    const [cards, setCards] = useState([]);

    useEffect(() => {}, []);

    function handleNewCard(data) {
        const message = data;
        let date = new Date();
        const newCard = {
            id: uuidv4(),
            message: message,
            date:
                date.getDate() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getFullYear() +
                " " +
                date.getHours() +
                ":" +
                date.getMinutes(),
        };
        console.log(newCard);
        let newCards = [];

        if (location.pathname === "/") {
            localStorage.NOTES_LOCAL_STORAGE_KEY &&
                newCards.push(
                    ...JSON.parse(localStorage.NOTES_LOCAL_STORAGE_KEY)
                );
            newCards.push(newCard);
            localStorage.NOTES_LOCAL_STORAGE_KEY = JSON.stringify(newCards);
            navigate("/");
        } else if (location.pathname === "/bookmarks") {
            localStorage.BOOKMARKS_LOCAL_STORAGE_KEY &&
                newCards.push(
                    ...JSON.parse(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY)
                );
            newCards.push(newCard);
            localStorage.BOOKMARKS_LOCAL_STORAGE_KEY = JSON.stringify(newCards);
            navigate("/bookmarks");
        }
        handleUpdate();
    }

    return (
        <div className="right-window-container">
            <div className="notes-window-container">
                <NotesWindow
                    cards={cards}
                    notes={notes}
                    bookmarks={bookmarks}
                />
            </div>
            <div className="input-box-container">
                <InputBox handleNewCard={handleNewCard} />
            </div>
        </div>
    );
}

export default RightWindow;
