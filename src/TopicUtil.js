// Curried function that returns a function to sort topics.
const getSortedTopics = comparison =>
    topics => {
        const sortedTopics = [...topics].sort(comparison);
        return sortedTopics;
    };

// Comparison method that compares two topics based on upvotes and downvotes.
const compareTopicVotes = (topicA, topicB) => {
    return (topicB.upvotes.length - topicB.downvotes.length) -
        (topicA.upvotes.length - topicA.downvotes.length);
};

// Partially apply getSortedTopics to return a function that returns the sorted topics.
const getTopicsSortedByVotes = getSortedTopics(compareTopicVotes);

const getTopicById = (topics, topicId) => {
    return topics.find(currTopic => currTopic.topicId === topicId);
};

// Returns a new topic with added upvote/downvote. It does not change existing topic.
const addVoteToTopic = (voteType) =>
    (topic, username) => {
        return (voteType === 'up') ?
            { ...topic, upvotes: topic.upvotes.concat([{ username }]) } :
            { ...topic, downvotes: topic.downvotes.concat([{ username }]) };
    };

// Partially apply addVoteToTopic for upvote
const addUpvoteToTopic = addVoteToTopic('up');

// Partially apply addVoteToTopic for downvote
const addDownvoteToTopic = addVoteToTopic('down');

// Replaces the topic in list based on index and returns a new list.
const replaceTopic = (topics, topic) => {
    const topicIndex = topics.findIndex(currTopic => currTopic.topicId === topic.topicId);
    const newTopics = [...topics.slice(0, topicIndex), topic, ...topics.slice(topicIndex + 1)];
    return newTopics;
};

const TopicUtil = {
    getTop20TopicsSortedByVotes(topics) {
        const sortedTopics = getTopicsSortedByVotes(topics);
        return sortedTopics.slice(0, 10);
    },

    getAllTopicsSortedByVotes(topics) {
        return getTopicsSortedByVotes(topics);
    },

    // Returns max topic ID incremented by 1
    getNewTopicId(topics) {
        const maxTopicId = topics.map(topic => topic.topicId)
            .reduce((max, current) => Math.max(max, current));
        const newTopicId = maxTopicId + 1;
        return newTopicId;
    },

    // Adds topic to the list. A new list is returned. Original list is kept intact.
    addTopic(topics, topic) {
        return topics.concat([topic]);
    },

    // Creates new copy of topics with upvote added to topic. It does not mutate existing topics.
    upvoteTopic(topics, topicId, username) {
        const topic = getTopicById(topics, topicId);
        const updatedTopic = addUpvoteToTopic(topic, username);
        return replaceTopic(topics, updatedTopic);
    },

    // Creates new copy of topics with downvote added to topic. It does not mutate existing topics.
    downvoteTopic(topics, topicId, username) {
        const topic = getTopicById(topics, topicId);
        const updatedTopic = addDownvoteToTopic(topic, username);
        return replaceTopic(topics, updatedTopic);
    }
};

export default TopicUtil;