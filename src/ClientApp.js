import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import fire from './firebase';
import { Link } from 'react-router-dom';
import Header from './Header';
import Searches from './Searches';

class ClientApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
      searches: [],
      input: '',
      city: ''
		};
		this.addSearch = this.addSearch.bind(this);
		this.getWeather = this.getWeather.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
    this.setState({
      city: this.state.input
    })
		e.preventDefault(); // <- prevent form submit from reloading the page
		/* Send the message to Firebase */
		fire.database().ref('searches').push(this.inputEl.value);
    this.getWeather()
		this.inputEl.value = ''; // <- clear the input
	}

	getWeather(city) {
    const name = this.state.city
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${APIKey}`;
		axios.get(URL).then(response => console.log(response));
  }
  
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

	render() {
		return (
			<div className="App">
				<Header />
				<form onSubmit={this.addSearch}>
					<input
						type="text"
            onChange={this.handleChange}
						placeholder="Search a city for the current weather"
						ref={el => (this.inputEl = el)}
					/>
					<input type="submit" />
				</form>
				<Link to="/history">See History</Link>
			</div>
		);
	}
}

export default ClientApp;
