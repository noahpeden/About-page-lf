import React from 'react'

export default (props) => (
  <div>
    <ul>
      <li>{props.currently}</li>
      <li>{props.description}</li>
      <li>{props.cityName}</li>
    </ul>
  </div>
)