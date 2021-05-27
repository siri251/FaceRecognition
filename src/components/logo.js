import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Brain from './face-detection.png'

const Logo = () => {
    return(
        <div className="ma4 mt0">
           <Tilt className="Tilt br2 shadow-2" options={{ max : 15 }} style={{ height: 100, width: 100 }} >
               <div className="Tilt-inner pa2"> <img height='80' width='100' src={Brain} alt="logo"></img> </div>
           </Tilt>
        </div>
    )
}

export default Logo;