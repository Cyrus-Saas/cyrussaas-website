import React, { useId } from "react";
import { motion } from "framer-motion";

export const NeuralGrid = ({
  className,
  gridSize = 40,
}: {
  className?: string;
  gridSize?: number;
}) => {
  const id = useId();

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black ${className || ""}`}>
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-black to-black opacity-80" />
      
      {/* Moving gradient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [-50, 0, 50, -50],
          y: [-50, 50, 0, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[120px]"
      />
      
      {/* Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-white/5 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={id}
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
            patternTransform="translate(-1 -1)"
          >
            <path d={`M.5 ${gridSize}V.5H${gridSize}`} fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

export default NeuralGrid;
