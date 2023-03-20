import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ToggleWindow.css";

function ToggleWindow() {
    const navigate = useNavigate();
    let location = useLocation();

    return (
        <div className="toggle-window">
            <div className="sidebar-heading-box">
                <div className="sidebar-heading-icon"></div>
                <div className="heading-title">DAILY NOTE TRACKER</div>
            </div>
            <div
                className={
                    location.pathname === "/"
                        ? "option-box-selected"
                        : "option-box"
                }
                onClick={() => navigate("/")}
            >
                <div className="option-icon-1"></div>
                <div className="option-name-1">Daily Notes</div>
            </div>
            <div
                className={
                    location.pathname === "/bookmarks"
                        ? "option-box-selected"
                        : "option-box"
                }
                onClick={() => navigate("/bookmarks")}
            >
                <div className="option-icon-2"></div>
                <div className="option-name-2">Bookmarks</div>
            </div>
        </div>
    );
}

export default ToggleWindow;
