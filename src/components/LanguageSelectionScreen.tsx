'use client';

import { motion, Variants } from 'framer-motion';
import { allQuestions } from '@/lib/questions';

interface LanguageSelectionScreenProps {
  onSelect: (language: keyof typeof allQuestions) => void;
}

const languages = [
  { code: 'en', name: 'Inglês', flag: '🇬🇧' },
  { code: 'es', name: 'Espanhol', flag: '🇪🇸' },
  { code: 'fr', name: 'Francês', flag: '🇫🇷' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150 } },
};

export default function LanguageSelectionScreen({ onSelect }: LanguageSelectionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto text-center"
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]"
      >
        Para qual idioma você quer ser nivelado?
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {languages.map((lang) => (
          <motion.div
            key={lang.code}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(lang.code as keyof typeof allQuestions)}
            className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl cursor-pointer flex flex-col items-center gap-4 transition-colors duration-300"
          >
            <span className="text-7xl" role="img" aria-label={lang.name}>{lang.flag}</span>
            <h2 className="text-3xl font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">{lang.name}</h2>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}