import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = ({ mousePosition }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(cursorPos.x, springConfig);
  const cursorY = useSpring(cursorPos.y, springConfig);

  useEffect(() => {
    const updateCursorPosition = () => {
      setCursorPos({ x: mousePosition.x, y: mousePosition.y });
      setIsMoving(true);
      
      // Add new star to the trail
      setTrail(prevTrail => [
        { x: mousePosition.x, y: mousePosition.y, id: Date.now() },
        ...prevTrail.slice(0, 10), // Keep only the last 10 stars
      ]);

      // Set a timeout to stop the moving state
      const timeout = setTimeout(() => setIsMoving(false), 100);
      return () => clearTimeout(timeout);
    };

    updateCursorPosition();
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor (meteor) */}
      <motion.div
        className="meteor fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          width: 30, // Increased size
          height: 30, // Increased size
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffffff 0%, #ffcc00 50%, #ff6600 100%)',
          boxShadow: '0 0 10px #ffcc00, 0 0 20px #ff6600',
        }}
      />

      {/* Trail of stars */}
      {trail.map((star, index) => (
        <motion.div
          key={star.id}
          className="star fixed pointer-events-none"
          style={{
            x: star.x,
            y: star.y,
            width: 6, // Increased size
            height: 6, // Increased size
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            opacity: 1 - index * 0.1, // Fade out older stars
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Glow effect when moving */}
      {isMoving && (
        <motion.div
          className="glow fixed pointer-events-none"
          style={{
            x: cursorX,
            y: cursorY,
            width: 60, // Increased size
            height: 60, // Increased size
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,204,0,0.4) 0%, rgba(255,102,0,0.1) 70%, rgba(255,102,0,0) 100%)',
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
};

export default CustomCursor;