import React from 'react';
import PropTypes from 'prop-types';

// Control whether to display top or all topics
const DisplayType = ({ displayType, handleChange }) => {
    return (
        <div className='DisplayType'>
            Listed Contents:
            <select value={displayType} onChange={handleChange}>
                <option value='All'>All</option>
                <option value='Top'>Top 10</option>
            </select>
        </div>
    );
};

DisplayType.propTypes = {
    displayType: PropTypes.string.isRequired,
    handleChange: PropTypes.func
};

export default DisplayType;