import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircuitNode {
  id: number;
  x: number;
  y: number;
  delay: number;
}

const AnimatedCircuitBackground = () => {
  const [nodes, setNodes] = useState<CircuitNode[]>([]);

  useEffect(() => {
    const generateNodes = () => {
      const newNodes: CircuitNode[] = [];
      for (let i = 0; i < 20; i++) {
        newNodes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
        });
      }
      setNodes(newNodes);
    };

    generateNodes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Animated circuit lines */}
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Horizontal lines */}
        {[20, 40, 60, 80].map((y, index) => (
          <motion.line
            key={`h-${index}`}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="url(#circuitGradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 2,
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[25, 50, 75].map((x, index) => (
          <motion.line
            key={`v-${index}`}
            x1={x}
            y1="0"
            x2={x}
            y2="100"
            stroke="url(#circuitGradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              delay: index * 0.3 + 1,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          />
        ))}
        
        {/* Circuit nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="0.3"
            fill="#00d4ff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: node.delay,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedCircuitBackground;