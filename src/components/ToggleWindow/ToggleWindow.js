import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ToggleWindow.css";

function ToggleWindow() {
    
    const navigate = useNavigate();
    let location = useLocation();

    // console.log("location", location);

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
