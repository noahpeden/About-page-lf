import React, { Component } from 'react';
import fire from './firebase';

export default class Searches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searches: []
    };
    this.searches = []
	}
  
	componentWillMount() {
    let searchesRef = fire
      .database()
      .ref('searches')
      .orderByKey()
      .limitToLast(100);
		searchesRef.on('child_added', snapshot => {
      let search = { text: snapshot.val(), id: snapshot.key };
      this.searches.push(search)
			this.setState({ searches: this.searches });
    });
    // anything?
	}

	render() {
		return (
			<div className="searches">
				{/* Render the list of searches */
				this.state.searches.map(search =>
					<li key={search.id}>
						{search.text}
					</li>
				)}
			</div>
		);
	}
}
