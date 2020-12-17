import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import SubmitTopicForm from './SubmitTopicForm';
import TopicList from './TopicList';
import DisplayType from './DisplayType';

// Top-level component of the app
class App extends Component {
    static propTypes = {
        topics: PropTypes.array.isRequired,
        displayType: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        api: PropTypes.object.isRequired
    }

    static defaultProps = {
        displayType: 'Top',
        username: 'React-Reddit-User'
    }

    render() {
        const { topics, displayType, api, username } = this.props;
        return (
            <div className='App'>
                <div className='App__header'>
                    <span className='App__title'>REACT REDDIT APP</span>
                    <UserProfile username={username} />
                </div>
                <div className='App__content'>
                    <SubmitTopicForm handleSubmit={api.addNewTopic} />
                    <DisplayType displayType={displayType}
                        handleChange={api.changeDisplay} />
                    <TopicList topics={topics}
                        handleUpvote={api.upvoteTopic}
                        handleDownvote={api.downvoteTopic} />
                </div>
                <div className='App__footer'>
                    <a href='https://github.com/Karishma1208/react-reddit'>React-Reddit-App</a>
                </div>
            </div>
        );
    }
}

export default App;
