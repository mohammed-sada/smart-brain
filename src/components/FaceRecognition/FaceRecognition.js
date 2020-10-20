import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="ma center tc ">
            <div className='absolute ma2 '>
                <img id="image" width='450px' height='auto' alt='' src={imageUrl}></img>
                <div className="bounding-box" style={{ top: box.topRow, left: box.leftCol, bottom: box.bottomRow, right: box.rightCol }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;