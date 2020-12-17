import React, { Component } from 'react';
import PropTypes from 'prop-types';

const maxTopicLength = 255;

class SubmitTopicForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = { newTopic: '' };
    }

    handleChange = (event) => {
        this.setState({ newTopic: event.target.value });
    }

    handleSubmit = (event) => {
        this.props.handleSubmit(event, this.state.newTopic);
    }

    render() {
        const { newTopic } = this.state;
        const isTopicEmpty = newTopic.length <= 0;

        return (
            <form className='SubmitForm' onSubmit={this.handleSubmit}>
                <label>Subject:
                     <input value={newTopic}
                        onChange={this.handleChange}
                        maxLength={maxTopicLength}
                        placeholder='Enter new content'>
                    </input>
                </label>
                <button disabled={isTopicEmpty}>Deploy Post</button>
            </form>
        );
    }
}

export default SubmitTopicForm;