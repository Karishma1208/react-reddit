import TopicUtil from './TopicUtil';
import loadInitialTopics from './database.js';

it('returns all topics sorted by votes', () => {
    const topics = loadInitialTopics();

    const sortedTopics = TopicUtil.getAllTopicsSortedByVotes(topics);

    expect(sortedTopics.length).toBe(30);
    expect(sortedTopics[0].topicId).toBe(3);
});

it('returns top 20 topics sorted by votes', () => {
    const topics = loadInitialTopics();

    const sortedTopics = TopicUtil.getTop20TopicsSortedByVotes(topics);

    expect(sortedTopics.length).toBe(20);
    expect(sortedTopics[0].topicId).toBe(3);
});

it('returns new topic ID', () => {
    const topics = loadInitialTopics();

    const newTopicId = TopicUtil.getNewTopicId(topics);

    expect(newTopicId).toBe(31);
});

it('adds new topic', () => {
    const topics = loadInitialTopics();
    const username = 'guest';
    const topic = {
        topicId: 31,
        topic: 'Sample topic',
        username,
        upvotes: [{ username }],
        downvotes: []
    };

    const updatedTopics = TopicUtil.addTopic(topics, topic);

    expect(updatedTopics.length).toBe(31);
    // Ensure that original topic list was not modified.
    expect(topics.length).toBe(30);
});

it('upvotes the topic', () => {
    const topics = loadInitialTopics();
    const topicId = 1;
    const username = 'guest';
    const originalTopic = topics.find(topic => topic.topicId === topicId);
    expect(originalTopic.upvotes.length).toBe(4);

    const updatedTopics = TopicUtil.upvoteTopic(topics, topicId, username);

    const upvotedTopic = updatedTopics.find(topic => topic.topicId === topicId);
    expect(upvotedTopic.upvotes.length).toBe(5);
});

it('downvotes the topic', () => {
    const topics = loadInitialTopics();
    const topicId = 1;
    const username = 'guest';
    const originalTopic = topics.find(topic => topic.topicId === topicId);
    expect(originalTopic.downvotes.length).toBe(2);

    const updatedTopics = TopicUtil.downvoteTopic(topics, topicId, username);

    const downvotedTopic = updatedTopics.find(topic => topic.topicId === topicId);
    expect(downvotedTopic.downvotes.length).toBe(3);
});
