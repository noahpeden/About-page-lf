import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Searches from '../components/Searches';

test('ClientApp renders correctly', () => {
	const component = shallow(<Searches />);
	expect(component).toMatchSnapshot();
});
