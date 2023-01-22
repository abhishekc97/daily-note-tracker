import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import InputBox from "../components/InputBox/InputBox";
import NotesWindow from "../components/NotesWindow/NotesWindow";
import RightWindow from "../components/RightWindow/RightWindow";
import ToggleWindow from "../components/ToggleWindow/ToggleWindow";
import "./AppRouter.css";

function AppRouter(props) {
		
    return (
        <BrowserRouter>
            <div className="app-container">
                <div className="left-container">
                    <ToggleWindow />
                </div>
                <div className="right-container">
                    <RightWindow />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
