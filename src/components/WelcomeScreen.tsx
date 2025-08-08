'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BarChart, Zap, Clock } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const titleAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const logoText = "NIVELA";
  const features = [
    { icon: <Zap size={24}/>, title: "Resultado Imediato", description: "Veja sua pontuação assim que terminar." },
    { icon: <BarChart size={24}/>, title: "Análise de Níveis", description: "Saiba qual o seu nível de conhecimento." },
    { icon: <Clock size={24}/>, title: "Rápido e Intuitivo", description: "Complete o teste em poucos minutos." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-24"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.h1
          variants={titleAnimation}
          initial="hidden"
          animate="visible"
          className="font-logo text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-br from-white to-[#A1A1AA] tracking-wider"
        >
          {logoText.split('').map((letter, index) => (
            <motion.span key={index} variants={wordAnimation} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg text-[#A1A1AA] max-w-2xl"
        >
          Descubra seu nível de conhecimento com nosso teste interativo. É rápido, intuitivo e projetado para você.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
        >
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-3 w-full max-w-xs mx-auto bg-[#8B5CF6] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 hover:bg-[#7C3AED]"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 1.5 } } }}
        className="w-full flex flex-col md:flex-row items-center justify-center gap-8"
      >
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-col items-center text-center gap-4 max-w-xs"
            >
              <div className="text-[#8B5CF6]">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-white">{feature.title}</h3>
              <p className="text-base text-[#A1A1AA]">{feature.description}</p>
            </motion.div>
            {index < features.length - 1 && (
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="w-px h-24 bg-white/10 hidden md:block" 
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
}