import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface EncryptedTextProps {
  text: string;
  isVisible: boolean;
  onComplete?: () => void;
}

const EncryptedText = ({ text, isVisible, onComplete }: EncryptedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      setIsDecrypting(false);
      return;
    }

    setIsDecrypting(true);
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return char;
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecrypting(false);
        onComplete?.();
      }

      iteration += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, text, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      className="font-mono text-primary"
    >
      <span className={isDecrypting ? 'animate-pulse' : ''}>
        {displayText}
      </span>
      {isDecrypting && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
};

export default EncryptedText;