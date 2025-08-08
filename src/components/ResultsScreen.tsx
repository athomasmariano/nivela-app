import { motion, Variants } from 'framer-motion';
import { RefreshCw, CheckCircle, Award } from 'lucide-react';
import { Level } from "@/lib/types";
import React from 'react';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  finalLevel: Level | null;
  onRestart: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResultsScreen({ score, totalQuestions, finalLevel, onRestart }: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center w-full max-w-2xl gap-8 p-4"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <CheckCircle className="w-16 h-16 text-[#4ADE80] mb-4" />
        <h2 className="text-4xl font-bold text-white mb-2">Teste Concluído!</h2>
        <p className="text-lg text-[#A1A1AA]">
          Aqui está o seu resultado final.
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <p className="text-lg text-[#A1A1AA]">Sua Pontuação</p>
        
        <p className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-[#A1A1AA] my-2">
          {percentage}<span className="text-4xl">%</span>
        </p>
        <p className="text-[#A1A1AA]">{`Você acertou ${score} de ${totalQuestions} perguntas.`}</p>
      </motion.div>
      
      {finalLevel && (
        <motion.div 
            variants={itemVariants} 
            className="w-full max-w-md bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] p-6 rounded-xl text-white"
        >
           <Award className="w-8 h-8 mx-auto mb-3" />
           <h3 className="font-bold text-xl">Nível Recomendado: {finalLevel.name}</h3>
           <p className="opacity-80 mt-1">{finalLevel.description}</p>
        </motion.div>
      )}
      
      <motion.div variants={itemVariants}>
        <motion.button
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-3 w-full max-w-xs mx-auto bg-transparent border border-[#3F3F46] text-[#A1A1AA] font-semibold py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-[#27272A] hover:text-white"
        >
          <RefreshCw className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" />
          Fazer o Teste Novamente
        </motion.button>
      </motion.div>
    </motion.div>
  );
}