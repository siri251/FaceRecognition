import React from 'react';
import './Recog.css';

const Image = ({ImageMain , box}) => {
    return(
      <div className="center na"> 
      <div className="absolute center mt2">
         <img id="faceimage" src={ImageMain} height="300px" width="auto"></img>
         <div className="bounding-box" style={{top:box.topRow, left:box.leftcol , right:box.rightcol , bottom:box.bottomrow}}></div>
      </div>
      </div>
    )
}

export default Image;