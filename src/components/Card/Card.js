import React from "react";
import "./Card.css";

function Card(props) {
    const message = props.message;
    const date = props.date;

    return ( 
        <div className="card-container">
            <p className="card-data">
                { message }
            </p>
            <div className="date-box">
                <p className="date-info">
                    { date }
                </p>
            </div>
            
            
        </div>
     );
}



export default Card;