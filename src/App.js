import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToggleWindow from "./components/ToggleWindow/ToggleWindow";
import RightWindow from "./components/RightWindow/RightWindow";
import "./App.css";

function App() {
    // state for notes and bookmarks
    const [notes, setNotes] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    function refreshMemory() {
        const storedNotes = [];
        if (localStorage.NOTES_LOCAL_STORAGE_KEY)
            storedNotes.push(
                ...JSON.parse(localStorage.NOTES_LOCAL_STORAGE_KEY)
            );
        setNotes(storedNotes);

        const storedBookmarks = [];
        if (localStorage.BOOKMARKS_LOCAL_STORAGE_KEY)
            storedBookmarks.push(
                ...JSON.parse(localStorage.BOOKMARKS_LOCAL_STORAGE_KEY)
            );
        setBookmarks(storedBookmarks);
    }

    function handleUpdate() {
        refreshMemory();
    }

    useEffect(() => {
        refreshMemory();
    }, []);

    return (
        <div className="App">
            <div className="app-body">
                <BrowserRouter>
                    <div className="app-container">
                        <div className="left-container">
                            <ToggleWindow />
                        </div>

                        <div className="right-container">
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <RightWindow
                                            handleUpdate={handleUpdate}
                                            notes={notes}
                                        />
                                    }
                                />
                                <Route
                                    path="/bookmarks"
                                    element={
                                        <RightWindow
                                            handleUpdate={handleUpdate}
                                            bookmarks={bookmarks}
                                        />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
