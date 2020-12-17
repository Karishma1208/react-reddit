import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopicItem extends Component {
    static propTypes = {
        topic: PropTypes.object.isRequired,
        handleUpvote: PropTypes.func,
        handleDownvote: PropTypes.func
    }

    handleUpvote = () => {
        this.props.handleUpvote(this.props.topic.topicId);
    }

    handleDownvote = () => {
        this.props.handleDownvote(this.props.topic.topicId);
    }

    render() {
        const { topic } = this.props;
        const points = topic.upvotes.length - topic.downvotes.length;

        return (
            <li className='Topic'>
                <div className='Topic__title'>{topic.topic}</div>
                <div className='Topic__meta'>
                    <div className='Topic__upvote' onClick={this.handleUpvote}></div>{' '}
                    <span className='Topic__points'>{points} points</span>{' '}
                    <div className='Topic__downvote' onClick={this.handleDownvote}></div>{' | '}
                    <span>By {topic.username} on {topic.creationDate}</span>
                </div>
            </li>
        );
    }
}

export default TopicItem;