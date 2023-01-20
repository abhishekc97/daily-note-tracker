import React from "react";
import "./ToggleWindow.css";
import { Link, useLocation } from "react-router-dom";

function ToggleWindow() {
    return (
        <div className="toggle-window">
            <div className="sidebar-heading-box">
                <div className="sidebar-heading-icon"></div>
                <div>
                    <span className="heading-title">DAILY NOTE TRACKER</span>
                </div>
            </div>
            <div className="option-box">
                <div className="option-icon-1"></div>
                <div className="option-name-1">Daily Notes</div>
            </div>
            <div className="option-box">
                <div className="option-icon-2"></div>
                <div className="option-name-2">Bookmarks</div>
            </div>
        </div>
    );
}

export default ToggleWindow;
