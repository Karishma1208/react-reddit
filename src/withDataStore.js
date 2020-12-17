import React, { Component } from 'react';
import TopicUtil from './TopicUtil';
import loadInitialTopics from './database';

const username = 'guest';

// This is the API to the data store.
const withDataStore = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            const { addNewTopic, upvoteTopic, downvoteTopic, changeDisplay } = this;
            this.api = { addNewTopic, upvoteTopic, downvoteTopic, changeDisplay };
            this.state = {
                topics: loadInitialTopics(),
                displayType: 'Top',
                username
            };
        }

        // Creates new topic
        addNewTopic = (event, topic) => {
            const { topics, username } = this.state;
            const newTopic = {
                topicId: TopicUtil.getNewTopicId(topics),
                topic,
                username,
                creationDate: new Date().toLocaleString(),
                upvotes: [{ username }],
                downvotes: []
            };
            const newTopics = TopicUtil.addTopic(topics, newTopic);
            this.setState({ topics: newTopics });
            event.preventDefault();
        }

        // Upvotes a topic
        upvoteTopic = (topicId) => {
            const { topics, username } = this.state;
            const newTopics = TopicUtil.upvoteTopic(topics, topicId, username);
            this.setState({ topics: newTopics });
        }

        // Downvotes a topic
        downvoteTopic = (topicId) => {
            const { topics, username } = this.state;
            const newTopics = TopicUtil.downvoteTopic(topics, topicId, username);
            this.setState({ topics: newTopics });
        }

        // Changes display to Top / All
        changeDisplay = (event) => {
            this.setState({ displayType: event.target.value });
            event.preventDefault();
        }

        render() {
            const { topics, displayType } = this.state;
            const sortedTopics = displayType === 'Top' ?
                TopicUtil.getTop20TopicsSortedByVotes(topics) :
                TopicUtil.getAllTopicsSortedByVotes(topics);

            // The wrapped component uses 'api' prop to access data store.
            return <WrappedComponent api={this.api}
                topics={sortedTopics}
                displayType={displayType}
                {...this.props} />;
        }
    };
};

export default withDataStore;