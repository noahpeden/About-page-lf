import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	ul {
		text-align: center;
		margin-top: 20px;
		font-size: 20px;
	}
`;

export default props =>
	<div>
		<Wrapper>
			<ul>
				<li>
					{props.currently}
				</li>
				<li>
					{props.description}
				</li>
				<li>
					{props.cityName}
				</li>
				<li>
					{props.timeStamp}
				</li>
			</ul>
		</Wrapper>
	</div>;
