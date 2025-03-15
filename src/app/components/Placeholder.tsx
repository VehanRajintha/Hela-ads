"use client";
import { motion } from "framer-motion";

export default function Placeholder({ width, height }: { width: number; height: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      style={{ 
        width, 
        height,
        backgroundColor: '#242424',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '12px',
        borderRadius: '8px',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 2s infinite linear'
        }}
      />
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {width}x{height}
      </motion.span>
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.div>
  );
} 