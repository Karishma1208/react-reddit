import React from 'react';
import { shallow } from 'enzyme';
import TopicItem from './TopicItem';

const username = 'mrmeeseeks';
const topic = {
    topicId: 1,
    username,
    topic: 'Sample topic',
    upvotes: [{ username }],
    downvotes: []
};

it('renders elements without exploding', () => {
    const topicItem = shallow(<TopicItem topic={topic} />);

    expect(topicItem.find('li')).toHaveLength(1);
    expect(topicItem.find('.Topic__title').text()).toBe('Sample topic');
    expect(topicItem.find('.Topic__upvote').length).toBe(1);
    expect(topicItem.find('.Topic__points').length).toBe(1);
    expect(topicItem.find('.Topic__downvote').length).toBe(1);
});

it('calls handleUpvote when upvote is clicked', () => {
    const handleUpvote = jest.fn();
    const topicItem = shallow(<TopicItem topic={topic} handleUpvote={handleUpvote} />);

    topicItem.find('.Topic__upvote').simulate('click');

    expect(handleUpvote).toBeCalled();
});

it('calls handleDownvote when downvote is clicked', () => {
    const handleDownvote = jest.fn();
    const topicItem = shallow(<TopicItem topic={topic} handleDownvote={handleDownvote} />);

    topicItem.find('.Topic__downvote').simulate('click');

    expect(handleDownvote).toBeCalled();
});
