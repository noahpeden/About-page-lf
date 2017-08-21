import React, { Component } from 'react';
import fire from '../firebase';
import Header from './Header';
import Weather from './Weather';
import randomCities from '../assets/randomCities';
import styled from 'styled-components';

class ClientApp extends Component {
	state = {
		searches: [],
		name: '',
		city: '',
		currently: '',
		description: '',
		timeStamp: ''
	};

	addSearch = e => {
		if (e.key === 'Enter') {
			this.getWeather(this.inputEl.value);
			this.inputEl.value = '';
		}
	};

	getWeather = city => {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKey}&units=imperial`;
		this.fetchData(URL);
	};

	fetchData = URL => {
		let date = new Date();
		let str = `${date.getFullYear()}-${date.getMonth() +
			1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		fetch(URL)
			.then(response => {
				return response.json();
			})
			.then(response => {
				this.setState({
					currently: `Currently: ${response.main.temp}`,
					description: `Description: ${response.weather[0].description}`,
					cityName: `Location: ${response.name}`,
					timeStamp: str
				});
			})
			.then(response => {
				const search = {
					cityName: this.state.cityName,
					timeStamp: this.state.timeStamp,
					description: this.state.description,
					currently: this.state.currently
				};
				fire.database().ref('search').push(search);
			});
	};

	getRandom = () => {
		let city = randomCities[Math.floor(Math.random() * randomCities.length)];
		this.getWeather(city);
	};

	getCurrentLocation = () => {
		const APIKey = '2eacf5cd8e08d4adc524186577921400';
		navigator.geolocation.getCurrentPosition(position => {
			const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${position
				.coords.latitude}&lon=${position.coords
				.longitude}&APPID=${APIKey}&units=imperial`;
			this.fetchData(URL);
		});
	};

	render() {
		const Wrapper = styled.div`
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			h1 {
				color: white;
				font-size: 40px;
			}
			input,
			select,
			textarea {
				color: white;
			}
			input {
				width: 315px;
				margin-left: 50px;
				margin-top: 50px;
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
			input::placeholder {
				color: white;
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
				<div className="App">
					<Header
						getRandom={this.getRandom}
						getCurrent={this.getCurrentLocation}
					/>
					<h1>DAGON WEATHER APP</h1>
					<input
						onKeyPress={this.addSearch}
						type="text"
						onChange={this.handleChange}
						placeholder="Search a city for the current weather"
						ref={el => (this.inputEl = el)}
					/>
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
