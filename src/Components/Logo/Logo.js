import React from 'react';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return(
        <div className='ml5 '>
                <div className="Tilt shadow-2 pa3" style={{  height: 100, width: 100, }}>
                    <img  src={brain} alt='logo'></img>
                </div>
        </div>
    )
}

export default Logo;