import {  useState } from "react";
import { useLocation } from "react-router-dom";

import "./InputBox.css";

function InputBox(props) {

    let location = useLocation();
    const [newCard, setNewCard] = useState("");

    function handleSubmit() {
        const data = newCard;
        props.addCard(data);
        setNewCard("");
    }
    
    return (
        <div className="input-flex-box" >

            <input
                value={newCard}
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
