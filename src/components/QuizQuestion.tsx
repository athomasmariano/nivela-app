import { motion } from 'framer-motion';
import { Question } from "@/lib/types";

interface QuizQuestionProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (selectedOption: string) => void;
}

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function QuizQuestion({ question, questionIndex, totalQuestions, onAnswer }: QuizQuestionProps) {
  return (
    <motion.div
      key={question.id}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'tween', duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-10">
        <p className="text-lg font-semibold text-[#8B5CF6]">
          Pergunta {questionIndex + 1} de {totalQuestions}
        </p>
        <h2 className="text-3xl font-bold text-[#F4F4F5] mt-2">
          {question.text}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {question.options.map((option: string) => (
          <motion.button
            key={option}
            onClick={() => onAnswer(option)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ 
              scale: 1.02, 
              borderColor: '#8B5CF6', 
              backgroundColor: 'rgba(139, 92, 246, 0.1)'
            }}
            className="w-full text-left p-5 rounded-xl border border-[#3F3F46] bg-[#1C1C1C] text-[#F4F4F5] text-lg transition-colors duration-200"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}