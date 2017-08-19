import React from 'react';

export default props => {
	const { history } = props;
	return (
		<div>
			{' '}{/* Render the list of searches */
			history.map(search =>
				<li key={search.id}>
					{search.text}
				</li>
			)}
		</div>
	);
};
