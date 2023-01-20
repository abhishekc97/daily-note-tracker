import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import InputBox from "../components/InputBox/InputBox";
import NotesWindow from "../components/NotesWindow/NotesWindow";
import RightWindow from "../components/RightWindow/RightWindow";
import ToggleWindow from "../components/ToggleWindow/ToggleWindow";
import "./AppRouter.css";

function AppRouter() {
	const [currentWindow, setCurrentWindow] = useState('');

	function setWindow() {

	}
		
    return (
        <BrowserRouter>
            <div className="app-container">
                <div className="left-container">
                    <ToggleWindow />
                </div>
                <div className="right-container">
                    <RightWindow location={currentWindow} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
