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
		this.getRandom = this.getRandom.bind(this);
		this.fetchData = this.fetchData.bind(this);
		this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }
  
  componentDidMount(){

  }

	componentWillMount() {
		let searchesRef = fire.database().ref('searches').orderByKey();
		searchesRef.on('child_added', snapshot => {
			let search = { text: snapshot.val(), id: snapshot.key };
			this.setState({ searches: [search].concat(this.state.searches) });
		});
	}

	addSearch(e) {
		this.getWeather(this.inputEl.value);
		e.preventDefault();
		fire.database().ref('searches').push(this.inputEl.value);
		this.inputEl.value = '';
	}

	getWeather(city) {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=imperial`;
		this.fetchData(URL);
	}

	fetchData(URL) {
		let date = new Date();
		let str = `${date.getFullYear()}-${date.getMonth() +
			1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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

	getCurrentLocation() {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		navigator.geolocation.getCurrentPosition(position => {
      const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${position
      .coords.latitude}&lon=${position.coords
				.longitude}&APPID=${APIKey}&units=imperial`;
        this.fetchData(URL);
      });
	}

	render() {
		return (
			<div className="App">
				<Header getRandom={this.getRandom} getCurrent={this.getCurrentLocation} />
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
