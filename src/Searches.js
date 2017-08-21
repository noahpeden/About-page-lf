import React, { Component } from 'react';
import fire from './firebase';
import styled from 'styled-components'

export default class Searches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searches: []
		};
		this.history = [];
	}

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
      margin: 10px
    }
    `
		return (
      <Wrapper>
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
