import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./NotesWindow.css";
import { useLocation } from "react-router-dom";

function NotesWindow(props) {

    let location = useLocation();

	let cards;
	if(location.pathname === "/") {
		cards = props.notes;
	} else if(location.pathname === "/bookmarks") {
		cards = props.bookmarks;
	}

	useEffect(() => {

	}, [cards]);

	return ( 
		<div className="notes-window">
			{
				cards.map((element, index) => {
					var id = element.id;
					var message = element.message;
					var date = element.date;
					// console.log(index, id, message, date);
					return (<Card key={index} info={element} message={message} date={date} location={location} /> );
					
				})
			}
			
			
		</div>
	);
}

export default NotesWindow;