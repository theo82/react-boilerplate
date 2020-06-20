import React from 'react';
import { shallow } from 'enzyme';
import DahsboardPage from '../../components/DashboardPage';

test('should render ExpenseDahsboardPage', () => {
    const wrapper = shallow(<DahsboardPage />);
    expect(wrapper).toMatchSnapshot();
});