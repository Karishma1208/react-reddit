import React from 'react';
import { shallow } from 'enzyme';
import SubmitTopicForm from './SubmitTopicForm';

it('renders elements without exploding', () => {
    const submitForm = shallow(<SubmitTopicForm />);

    expect(submitForm.find('input').length).toBe(1);
    expect(submitForm.find('input').prop('maxLength')).toBe(255);
    expect(submitForm.find('button').length).toBe(1);
});

it('disabled submit button if there is no topic', () => {
    const submitForm = shallow(<SubmitTopicForm />);

    expect(submitForm.find('button').prop('disabled')).toBe(true);
});

it('enables submit button if there is a topic', () => {
    const submitForm = shallow(<SubmitTopicForm />);
    const input = submitForm.find('input');

    input.simulate('change', { target: { value: 'Changed' } });

    expect(submitForm.find('button').prop('disabled')).toBe(false);
});

it('sets state when input is changed', () => {
    const submitForm = shallow(<SubmitTopicForm />);
    const input = submitForm.find('input');

    input.simulate('change', { target: { value: 'Changed' } });

    expect(submitForm.state().newTopic).toBe('Changed');
});

it('calls handleSubmit when input is changed', () => {
    const handleSubmit = jest.fn();
    const submitForm = shallow(<SubmitTopicForm handleSubmit={handleSubmit} />);

    submitForm.find('form').simulate('submit');

    expect(handleSubmit).toBeCalled();
});
