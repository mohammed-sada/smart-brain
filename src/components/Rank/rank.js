import React from 'react';
//import './rank.css';
const Rank = ({ name, entries }) => {
    return (
        <div className="tc" style={{ color: '#bbb' }}>
            <p className='f3' >{`${name}, your current rank is :`}</p>
            <p className='f2'>#{entries}</p>
        </div>
    )
}

export default Rank;