import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Uncle;