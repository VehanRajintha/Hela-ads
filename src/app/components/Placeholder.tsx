"use client";
import React from 'react';
import { motion } from "framer-motion";

interface PlaceholderProps {
  width: number | string;
  height: number | string;
  className?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ width, height, className = '' }) => {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  // Format the dimensions for display
  const displayWidth = typeof width === 'number' ? width : 'auto';
  const displayHeight = typeof height === 'number' ? height : 'auto';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{ 
        ...style,
        backgroundColor: '#242424',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative'
      }}
      className={`${className}`}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1a1a1a 25%, #242424 25%, #242424 50%, #1a1a1a 50%, #1a1a1a 75%, #242424 75%, #242424 100%)',
          backgroundSize: '20px 20px',
          opacity: 0.5
        }}
      />
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          position: 'absolute',
          color: '#666',
          fontSize: '12px',
          fontFamily: 'monospace'
        }}
        transition={{ delay: 0.1 }}
      >
        {displayWidth !== 'auto' && displayHeight !== 'auto' ? `${displayWidth}x${displayHeight}` : ''}
      </motion.span>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Placeholder; 