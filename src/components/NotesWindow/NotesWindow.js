import React from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./NotesWindow.css";

function NotesWindow(props) {

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

	}, cards)

	return ( 
		<div className="notes-window">
			{
				cards.forEach(element => {
					var id= element.id;
					var message = element.message;
					var date = element.date;
					console.log(id, message, date);
					return <Card key={id} message={message} date={date} />
				})
			}
			
			
		</div>
	);
}

export default NotesWindow;