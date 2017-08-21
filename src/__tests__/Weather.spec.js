import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Weather from '../components/Weather';

test('Weather renders correctly', () => {
	const component = shallow(<Weather />);
	expect(component).toMatchSnapshot();
});
