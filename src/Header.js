import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50%;
  margin-top: 50px;
`;

export default props =>
	<Wrapper>
			<Link to="/history">Past Searches</Link>
			<a onClick={props.getRandom}>Random US City</a>
			<a onClick={props.getCurrent}>Your Location</a>

	</Wrapper>;
