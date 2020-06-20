import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ data: { _id, content }, handleRemoveCard }) => {

    const handleRemove = evt => {
        handleRemoveCard(_id);
    };

    return (
        <div className="card">
            { content }
            <button type="button" onClick={ handleRemove }>remove</button>
        </div>
    );
};

Card.propTypes = {
    props: PropTypes.shape({
        data: PropTypes.shape({
            _id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired
        }),
        handleRemoveCard: PropTypes.func.isRequired
    })
};

export default Card;

