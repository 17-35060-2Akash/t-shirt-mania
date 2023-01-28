import React from 'react';
import Special from '../Special/Special';

const Cousin = ({ house }) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>House: {house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Cousin;