import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
                    <Routes>
                        <Route path="/" element={<RightWindow />} />
                        <Route path="/bookmarks" element={<RightWindow />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
