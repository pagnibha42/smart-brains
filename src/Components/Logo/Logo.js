import React from 'react';
import brain from './brain.png'
import './Logo.css'
import Tilt from 'react-tilt'


const Logo = () => {
    return(
        <Tilt className="Tilt br3 shadow-2 ml5" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
            <div className="Tilt-inner pa3">
                <img src={brain} alt='logo'/>
            </div>
        </Tilt>
    )
}

export default Logo;