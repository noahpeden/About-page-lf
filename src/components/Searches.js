import React, { Component } from 'react';
import fire from '../firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Searches extends Component {
	state = {
		searches: []
	};
	history = [];

	componentWillMount() {
		let searchesRef = fire
			.database()
			.ref('search')
			.orderByKey()
			.limitToLast(100);
		searchesRef.on('child_added', snapshot => {
			let searches = snapshot.val();
			this.history.push({
				id: snapshot.key,
				currently: searches.currently,
				timeStamp: searches.timeStamp,
				description: searches.description,
				cityName: searches.cityName
      });
      
      this.setState({ searches: this.history });
		});
	}

	render() {
		const Wrapper = styled.div`
			margin-top: 30px;
			color: white;
			font-size: 20px;
			font-family: sans-serif;
			text-align: center;
			ul {
				margin: 10px;
      }
      .home {
        position: absolute;
        top: 0;
        left: 0;
      }
      .home:hover {
        text-decoration: underline;
      }
		`;
		return (
			<Wrapper>
				<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
					<div className="home">HOME</div>
				</Link>
				<div className="searches">
					<h1>PAST SEARCHES</h1>
					{/* Render the list of searches */
					this.state.searches.map(search =>
						<ul key={search.id}>
							<li>
								{search.cityName}
							</li>
							<li>
								{search.currently}
							</li>
							<li>
								{search.timeStamp}
							</li>
							<li>
								{search.description}
							</li>
						</ul>
					)}
				</div>
			</Wrapper>
		);
	}
}
