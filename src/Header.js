import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Wrapper = styled.div`

`

export default (props) => (
  <div>
    <Link to="/history">Past Searches</Link>
    <a onClick={props.getRandom}>Random City</a>
  </div>
)