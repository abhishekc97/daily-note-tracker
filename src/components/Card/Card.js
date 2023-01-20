import React from "react";
import "./Card.css";

function Card() {
    return ( 
        <div className="card-container">
            <p className="card-data">Lorem ipsum dolor sit amet consectetur.
                Enim tellus fusce pretium sed a et convallis 
                eget. Etiam aliquet tortor nascetur at erat. 
                Malesuada egestas praesent quam cras. In varius pharetra sit porttitor.
            </p>
            <div className="date-box">
                <p className="date-info">
                    12-08-2022 12:00 PM
                </p>
            </div>
            
        </div>
     );
}



export default Card;