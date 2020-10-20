import React from 'react';
import './logo.css';
import Tilt from 'react-tilt';
import brain from './brain.png';
const Logo = () => {
    return (
        <div className='ma4'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 35 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> <img src={brain} alt='logo'></img></div>
            </Tilt>
        </div>
    )
}

export default Logo;