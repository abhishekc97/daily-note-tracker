import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';

import "./InputBox.css";

// const NOTES_LOCAL_STORAGE_KEY = 'dailyNotes.RightWindow.notes';
// const BOOKMARKS_LOCAL_STORAGE_KEY = 'dailyNotes.RightWindow.bookmarks';


function InputBox(props) {
    // const navigate = useNavigate();
    let location = useLocation();

    const [newCard, setNewCard] = useState("");

    // const inputRef = useRef();

    // function handleChange(event) {
    //     setNewCard(event.target.value);
    // }

    function handleSubmit() {
        // const data = inputRef.current.value;
        
        const data = newCard;
        props.addCard(data);
        setNewCard("");
        // inputRef.current.value = null;
    }
    
    return (
        // <form method="post" onSubmit={handleSubmit} className="input-flex-box">
        <div className="input-flex-box" >

            <input
                value={newCard}
                // ref={inputRef}
                type="text"
                placeholder={`enter a ${location.pathname === "/" ? "note": "bookmark"} here`}
                className="text-box"
                onChange={(e) => setNewCard(e.target.value)}
            />
            <button className="send-icon" onClick={() => {handleSubmit()}} ></button>

        </div>
    );
}

export default InputBox;
