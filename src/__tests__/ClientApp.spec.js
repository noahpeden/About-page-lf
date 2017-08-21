import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ClientApp from '../components/ClientApp';
import Weather from '../components/Weather'
import Header from '../components/Header'

test('ClientApp renders correctly', () => {
	const component = shallow(<ClientApp />);
	expect(component).toMatchSnapshot();
});

test('Should render weather', () => {
  const component = shallow(<ClientApp/>)
  expect(component.find(Weather).length).toEqual(1)
})

test('Should render header', () => {
  const component = shallow(<ClientApp/>)
  expect(component.find(Header).length).toEqual(1)
})

