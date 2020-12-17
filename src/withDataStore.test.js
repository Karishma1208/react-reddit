import React from 'react';
import { shallow } from 'enzyme';
import withDataStore from './withDataStore';

const MockComponent = () => (<div>Mock Component</div>);

it('renders wrapped component as the root element', () => {
    const MockComponentWithDataStore = withDataStore(MockComponent);

    const wrapper = shallow(<MockComponentWithDataStore />);

    expect(wrapper.first().is(MockComponent)).toBeTruthy();
});

it('passes through component\'s props', () => {
    const MockComponentWithDataStore = withDataStore(MockComponent);

    const wrapper = shallow(<MockComponentWithDataStore testProp='test' />);

    expect(wrapper.props().testProp).toBeTruthy();
});

it('adds api property', () => {
    const MockComponentWithDataStore = withDataStore(MockComponent);

    const wrapper = shallow(<MockComponentWithDataStore />);

    expect(wrapper.props().api).toBeTruthy();
});

it('adds topics property', () => {
    const MockComponentWithDataStore = withDataStore(MockComponent);

    const wrapper = shallow(<MockComponentWithDataStore />);

    expect(wrapper.props().topics).toBeTruthy();
});

it('adds displayType property', () => {
    const MockComponentWithDataStore = withDataStore(MockComponent);

    const wrapper = shallow(<MockComponentWithDataStore />);

    expect(wrapper.props().displayType).toBeTruthy();
});
