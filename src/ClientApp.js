import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './firebase';
import {Link} from 'react-router-dom'
import Header from './Header';
import Searches from './Searches'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searches: []
		};
		this.addSearch = this.addSearch.bind(this);
	}

	componentWillMount() {
		let searchesRef = fire
			.database()
			.ref('searches')
			.orderByKey()
			.limitToLast(100);
		searchesRef.on('child_added', snapshot => {
			let search = { text: snapshot.val(), id: snapshot.key };
			this.setState({ searches: [search].concat(this.state.searches) });
		});
	}

	addSearch(e) {
		e.preventDefault(); // <- prevent form submit from reloading the page
		/* Send the message to Firebase */
		fire.database().ref('searches').push(this.inputEl.value);
		this.inputEl.value = ''; // <- clear the input
	}

	render() {
		return (
			<div className="App">
				<Header />
				<form onSubmit={this.addSearch}>
					<input type="text" placeholder="Search a city for the current weather" ref={el => (this.inputEl = el)} />
					<input type="submit" />
				</form>
					<Link to="/History"><button>See History</button>
          </Link>
			</div>
		);
	}
}

export default App;
