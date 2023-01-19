import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputBox from "../components/InputBox/InputBox";
import NotesWindow from "../components/NotesWindow/NotesWindow";
import ToggleWindow from "../components/ToggleWindow/ToggleWindow";
import "./AppRouter.css";

function AppRouter() {
	return (
		<div className="app-container">
			<div className="left-container">
				<ToggleWindow />
			</div>
			<div className="right-container">
				Right side
				<NotesWindow />
				<InputBox />
			</div>
		</div>
	);
}

export default AppRouter;
