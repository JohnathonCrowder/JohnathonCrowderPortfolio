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
      
      // Add new fire particle to the trail
      setTrail(prevTrail => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prevTrail.slice(0, 40), // Keep only the last 40 fire particles (doubled length)
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
          width: 20,
          height: 20,
          borderRadius: '50%',
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          background: 'radial-gradient(circle, #ffffff 0%, #ffcc00 50%, #ff6600 100%)',
          boxShadow: '0 0 5px #ffcc00, 0 0 10px #ff6600',
          zIndex: 999999,
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
  
      {/* Trail of fire */}
      {trail.map((fire, index) => (
        <motion.div
          key={fire.id}
          className="fire fixed pointer-events-none"
          style={{
            left: fire.x - 4, // Adjusted position
            top: fire.y - 4, // Adjusted position
            width: 8, // Doubled size
            height: 8, // Doubled size
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(255, 102, 0, ${1 - index * 0.025}) 0%, rgba(255, 204, 0, ${1 - index * 0.025}) 100%)`,
            opacity: 1 - index * 0.025, // Fade out older fire particles
            boxShadow: `0 0 4px rgba(255, 102, 0, ${1 - index * 0.025}), 0 0 8px rgba(255, 204, 0, ${1 - index * 0.025})`, // Adjusted shadow size
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