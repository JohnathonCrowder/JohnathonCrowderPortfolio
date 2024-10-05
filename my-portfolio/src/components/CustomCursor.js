import React from 'react';
import rocketImage from './assets/rocket.png'; // Make sure this path is correct

const CustomCursor = ({ mousePosition }) => {
  const cursorStyle = {
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 9999,
    width: '30px',  // Adjust size as needed
    height: '30px', // Adjust size as needed
    transform: 'translate(-50%, -50%) rotate(-45deg)', // Center the cursor and rotate it
  };

  return (
    <img 
      src={rocketImage} 
      alt="Rocket Cursor" 
      style={cursorStyle}
    />
  );
};

export default CustomCursor;