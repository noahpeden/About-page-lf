import React, { Component } from 'react';
import fire from './firebase';
import Header from './Header';
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
		const Wrapper = styled.div`
			::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				color: white;
			}
			h1 {
				color: white;
				font-size: 40px;
				position: absolute;
				text-align: center;
				top: 30%;
			}
			text-align: center;
			input {
				width: 315px;
				margin: 10px;
				font-size: 20px;
				outline: none;
				border: 0px solid white;
				border-bottom-width: 1px;
				background-color: transparent;
			}
			button {
				background: none;
				border: none;
				border-radius: 4%;
				outline: none;
				color: white;
				font-size: 20px;
			}
			button:hover {
				background: white;
				color: black;
				cursor: pointer;
			}
			input:focus::-webkit-input-placeholder {
				color: transparent;
			}
			input:focus:-moz-placeholder {
				color: transparent;
			}
		`;
		return (
			<Wrapper>
				<h1>DAGON WEATHER APP</h1>
				<div className="App">
					<Header
						getRandom={this.getRandom}
						getCurrent={this.getCurrentLocation}
					/>
					<input
						type="text"
						onChange={this.handleChange}
						placeholder="Search a city for the current weather"
						ref={el => (this.inputEl = el)}
					/>
					<button onClick={this.addSearch}>SEARCH</button>
					<Weather
						currently={this.state.currently}
						description={this.state.description}
						cityName={this.state.cityName}
						timeStamp={this.state.timeStamp}
					/>
				</div>
			</Wrapper>
		);
	}
}

export default ClientApp;
