import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt3'>
                <img id='inputimage' style={{borderRadius: '0.5rem'}} src={imageUrl} alt='' width='500px' height='auto'/>
                <div className='bounding-box' style={{borderRadius: '2rem', top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>            
            </div>
        </div>
    );
}

export default FaceRecognition;