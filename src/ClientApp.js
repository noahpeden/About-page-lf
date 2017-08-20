import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import fire from './firebase';
import { Link } from 'react-router-dom';
import Header from './Header';
import Searches from './Searches';
import Weather from './Weather'

class ClientApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searches: [],
			name: '',
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
		searchesRef.on('child_added', snapshot => {
			let search = { text: snapshot.val(), id: snapshot.key };
			this.setState({ searches: [search].concat(this.state.searches) });
		});
	}

	addSearch(e) {
		console.log(this.state.name);
		console.log(this.state.city);
		this.getWeather(this.state.name);
		e.preventDefault(); // <- prevent form submit from reloading the page
		/* Send the message to Firebase */
		fire.database().ref('searches').push(this.inputEl.value);
		this.inputEl.value = ''; // <- clear the input
  }
  
//   current conditions
// brief description of weather
// city name
// time of the search

	getWeather(city) {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=imperial`;
    axios.get(URL).then(response => {
      this.setState({
        currently: response.data.main.temp,
        description: response.data.weather[0].description,
        cityName: response.data.name,
      })
    });
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
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
        <Weather currently={this.state.currently} description={this.state.description} cityName={this.state.cityName}/>
			</div>
		);
	}
}

export default ClientApp;
