import React from "react";
import "./ToggleWindow.css";
import { Link, useLocation } from "react-router-dom";


function ToggleWindow() {
    return (
        <div className="toggle-window">
            <div className="sidebar-heading">
                DAILY NOTE TRACKER
            </div>
            <div className="option-box">
                Daily Notes
            </div>
            <div className="option-box">
                Bookmarks
            </div>
        </div> );
}

export default ToggleWindow;