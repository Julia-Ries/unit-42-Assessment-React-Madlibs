import React from 'react';

const Madlib = ({
    id,
    noun,
    noun2,
    adjective,
    color,
    handleRemove
}) => {
    const remove = () => handleRemove(id);
    return (
        <div>
        <h2 id={id}>There was a {color} {noun} who loved a {adjective} {noun2}.</h2>
        <button onClick= {remove}>Restart!</button>
        </div>
    )
}

export default Madlib;


//there was a purple (noun)slug who loved a (adjective)hungry (noun2)butterfly