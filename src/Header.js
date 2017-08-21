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
  opacity: 50%;
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default props =>
	<Wrapper>
			<Link style={{ textDecoration: 'none', color: 'white' }} to="/history"><a>PAST SEARCHES</a></Link>
			<a onClick={props.getRandom}>RANDOM</a>
			<a onClick={props.getCurrent}>YOUR LOCATION</a>
	</Wrapper>;
