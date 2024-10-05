import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = ({ mousePosition }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [clickEffect, setClickEffect] = useState(null);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(cursorPos.x, springConfig);
  const cursorY = useSpring(cursorPos.y, springConfig);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Add new star to the trail
      setTrail(prevTrail => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prevTrail.slice(0, 20), // Keep only the last 20 stars
      ]);
    };

    const handleMouseClick = (e) => {
      setClickEffect({ x: e.clientX, y: e.clientY, id: Date.now() });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  useEffect(() => {
    if (clickEffect) {
      const timeout = setTimeout(() => {
        setClickEffect(null);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [clickEffect]);

  return (
    <>
      {/* Main cursor (meteor) */}
      <motion.div
        className="meteor fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffffff 0%, #ffcc00 50%, #ff6600 100%)',
          boxShadow: '0 0 10px #ffcc00, 0 0 20px #ff6600',
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        {/* Glow effect */}
        <div
          className="glow absolute inset-0 pointer-events-none"
          style={{
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,204,0,0.4) 0%, rgba(255,102,0,0.1) 70%, rgba(255,102,0,0) 100%)',
          }}
        />
      </motion.div>

      {/* Trail of stars */}
      {trail.map((star, index) => (
        <motion.div
          key={star.id}
          className="star fixed pointer-events-none"
          style={{
            x: star.x - 3,
            y: star.y - 3,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            opacity: 1 - index * 0.05, // Fade out older stars
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Click effect */}
      {clickEffect && (
        <motion.div
          className="click-effect fixed pointer-events-none z-40"
          style={{
            x: clickEffect.x - 15,
            y: clickEffect.y - 15,
            width: 30,
            height: 30,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

export default CustomCursor;