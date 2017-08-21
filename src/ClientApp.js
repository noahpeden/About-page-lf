import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './firebase';
import { Link } from 'react-router-dom';
import Header from './Header';
import Searches from './Searches';
import Weather from './Weather';
import randomCities from './randomCities';
import styled from 'styled-components';

class ClientApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searches: [],
			name: '',
			city: '',
			timeStamp: ''
		};
		this.addSearch = this.addSearch.bind(this);
		this.getWeather = this.getWeather.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getRandom = this.getRandom.bind(this);
	}

	componentWillMount() {
		let searchesRef = fire.database().ref('searches').orderByKey();
		searchesRef.on('child_added', snapshot => {
			let search = { text: snapshot.val(), id: snapshot.key };
			this.setState({ searches: [search].concat(this.state.searches) });
		});
	}

	addSearch(e) {
		this.getWeather(this.state.name);
		e.preventDefault();
		fire.database().ref('searches').push(this.inputEl.value);
		this.inputEl.value = '';
	}

	getWeather(city) {
		let date = new Date();
		let str = `${date.getFullYear()}-${date.getMonth() +
			1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=imperial`;
		fetch(URL)
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({
					currently: response.main.temp,
					description: response.weather[0].description,
					cityName: response.name,
					timeStamp: str
				});
			});
	}

	getRandom() {
		let city = randomCities[Math.floor(Math.random() * randomCities.length)];
		this.getWeather(city);
	}

	handleChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	render() {
		return (
			<div className="App">
				<Header getRandom={this.getRandom} />
				<form onSubmit={this.addSearch}>
					<input
						type="text"
						onChange={this.handleChange}
						placeholder="Search a city for the current weather"
						ref={el => (this.inputEl = el)}
					/>
					<input type="submit" />
				</form>
				<Weather
					currently={this.state.currently}
					description={this.state.description}
					cityName={this.state.cityName}
					timeStamp={this.state.timeStamp}
				/>
			</div>
		);
	}
}

export default ClientApp;
