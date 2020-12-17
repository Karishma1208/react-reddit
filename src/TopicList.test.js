import React from 'react';
import { shallow } from 'enzyme';
import TopicList from './TopicList';
import TopicItem from './TopicItem';

const topics = [
    {
        topicId: 1,
        username: 'user1',
        topic: 'Sample topic1',
        upvotes: [
            { username: 'user1' }
        ],
        downvotes: []
    },
    {
        topicId: 2,
        username: 'user2',
        topic: 'Sample topic2',
        upvotes: [
            { username: 'user2' }
        ],
        downvotes: []
    }
];

it('renders two TopicItems', () => {
    const topicList = shallow(<TopicList topics={topics} />);

    expect(topicList.find(TopicItem).length).toBe(2);
});

it('renders a list of topics', () => {
    const topicList = shallow(<TopicList topics={topics} />);

    expect(topicList.find('ol').length).toBe(1);
});
