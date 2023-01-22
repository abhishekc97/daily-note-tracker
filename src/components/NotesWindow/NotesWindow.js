import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./NotesWindow.css";
import { useNavigate, useLocation } from "react-router-dom";

function NotesWindow(props) {

	const navigate = useNavigate();
    let location = useLocation();

	// let cards = [];
	// if(location === "/") {
	// 	cards.push(...JSON.parse(localStorage.NOTES_LOCAL_STORAGE_KEY));
	// } else if(location === "/bookmarks") {
	// 	cards.push(...JSON.parse(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY));
	// }

	const cards = props.cards;
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
	
	// var cardsArray = JSON.parse(cards);
	// cardsArray.map((ele, ind) => {
	// 	return console.log("ele", ele);
	// })

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
					return (<Card key={index} info={element} message={message} date={date} /> );
					
				})
			}
			
			
		</div>
	);
}

export default NotesWindow;