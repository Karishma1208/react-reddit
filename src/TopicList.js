import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';

// Displays list of topics
const TopicList = ({ topics, handleUpvote, handleDownvote }) => {
    return (
        <div>
            <ol className='TopicList'>
                {topics.map(topic =>
                    <TopicItem key={topic.topicId}
                        topic={topic}
                        handleUpvote={handleUpvote}
                        handleDownvote={handleDownvote} />)}
            </ol>
        </div>
    );
};

TopicList.propTypes = {
    topics: PropTypes.array.isRequired,
    handleUpvote: PropTypes.func,
    handleDownvote: PropTypes.func
};

export default TopicList;