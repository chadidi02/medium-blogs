import React, { Component } from "react";
import "./App.css";

import Header from "./components/Navbar/Header";
import Search from "./components/Search/Search";

class App extends Component {
	render() {
		return (
			<div className="App px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
				<Header />
				<Search />
			</div>
		);
	}
}

export default App;
