import React from 'react';

export const SpotCheck1  = () => {
    const beenHovered = () => {
        console.log("I was hovered!")
      }
    
    return (
    <div>
        <button onMouseOver={beenHovered}>Submit</button>
    </div>
)}

export default SpotCheck1 ;