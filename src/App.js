import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<div className="App">
			<div className="app-body">
				<AppRouter />
			</div>
		</div>
	);
}

export default App;
