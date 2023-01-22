import React from "react";
import { useLocation } from "react-router-dom";

import "./Card.css";

function Card(props) {

    const message = props.message;
    const date = props.date;
    let location = useLocation();

    return (
        <div className="card-container">
            <p className="card-data">
                { location.pathname === "/" ? message: <a href={`https://${message}`} target="_blank" rel="nonreferrer" > {message}</a> }
            </p>
            <div className="date-box">
                <p className="date-info">{date}</p>
            </div>
        </div>
    );
}

export default Card;
