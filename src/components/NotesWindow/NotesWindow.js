import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./NotesWindow.css";
import { useNavigate, useLocation } from "react-router-dom";

function NotesWindow(props) {

	const navigate = useNavigate();
    let location = useLocation();

	let cards;
	if(location.pathname === "/") {
		cards = props.notes;
	} else if(location.pathname === "/bookmarks") {
		cards = props.bookmarks;
	}

	// const cards = props.cards;
	console.log(cards);

	cards.forEach(element => {
		console.log(element);
		console.log(element.id);
		console.log(element.message);
		console.log((element.date));
	});

	cards.map((element, index) => {
		console.log(element);
		console.log(index);
	})

	useEffect(() => {

	}, [cards]);

	return ( 
		<div className="notes-window">
			{
				cards.map((element, index) => {
					var id= element.id;
					var message = element.message;
					var date = element.date;
					console.log(index, id, message, date);
					return (<Card key={index} info={element} message={message} date={date} location={location} /> );
					
				})
			}
			
			
		</div>
	);
}

export default NotesWindow;