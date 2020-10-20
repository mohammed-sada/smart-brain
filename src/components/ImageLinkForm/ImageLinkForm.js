import React from 'react';
import './recognition.css';

const ImageLinkForm = ({ onButtonSubmit, onInputChange }) => {
    return (
        <div className="tc">
            <p className='f3 ma2'>This shit Magic Brain will detect faces in your pictures. give it a try !</p>
            <div className='pa3 ma3 shadow-3 br3 w-70 center '>
                <input onChange={onInputChange} className='w-60 br3 input' type='text' placeholder='Put your image url here !'></input>
                <button onClick={onButtonSubmit} className='w-20 br3 grow link ph3 pv2 pointer white bg-primary btn'>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;