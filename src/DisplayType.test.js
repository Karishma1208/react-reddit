import React from 'react';
import { shallow } from 'enzyme';
import DisplayType from './DisplayType';

it('renders elements without exploding', () => {
    const displayType = shallow(<DisplayType displayType='Top' />);

    expect(displayType.find('select').length).toBe(1);
    expect(displayType.find('select').prop('value')).toBe('Top');
});

it('calls handleChange when dropdown is changed', () => {
    const handleChange = jest.fn();
    const displayType = shallow(<DisplayType displayType='Top'
        handleChange={handleChange} />);

    displayType.find('select').simulate('change');

    expect(handleChange).toBeCalled();
});
