import React from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";
import "./NotesWindow.css";

function NotesWindow({ notes, bookmarks }) {
    let location = useLocation();

    let cards;
    if (location.pathname === "/") {
        cards = notes;
    } else if (location.pathname === "/bookmarks") {
        cards = bookmarks;
    }

    useEffect(() => {}, [cards]);

    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [notes, bookmarks]);

    return (
        <div className="notes-window">
            {cards.map((element, index) => {
                var message = element.message;
                var date = element.date;
                return (
                    <Card
                        key={index}
                        info={element}
                        message={message}
                        date={date}
                        location={location}
                    />
                );
            })}
            <div ref={scrollRef} />
        </div>
    );
}

export default NotesWindow;
