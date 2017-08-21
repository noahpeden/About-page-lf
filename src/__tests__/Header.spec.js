import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';

test('ClientApp renders correctly', () => {
	const component = shallow(<Header />);
	expect(component).toMatchSnapshot();
});
