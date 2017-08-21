import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
	margin-top: 50px;
	margin-bottom: 40%;
	color: white;
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	a {
		cursor: pointer;
	}
	a:hover {
		text-decoration: underline;
	}
	div:hover {
		text-decoration: underline;
	}
`;

export default props =>
	<Wrapper>
		<Link style={{ textDecoration: 'none', color: 'white' }} to="/searches">
			<div>PAST SEARCHES</div>
		</Link>
		<a onClick={props.getRandom}>RANDOM</a>
		<a onClick={props.getCurrent}>YOUR LOCATION</a>
	</Wrapper>
