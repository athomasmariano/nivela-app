'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { allQuestions, proficiencyLevels } from '@/lib/questions';
import { Level } from '@/lib/types';

import LanguageSelectionScreen from '@/components/LanguageSelectionScreen';
import LandingPage from '@/components/LandingPage';
import QuizQuestion from '@/components/QuizQuestion';
import ResultsScreen from '@/components/ResultsScreen';

type QuizState = 'welcome' | 'selecting_language' | 'in_progress' | 'finished';

export default function HomePage() {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof allQuestions | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [finalLevel, setFinalLevel] = useState<Level | null>(null);
  
  const handleStartQuiz = () => setQuizState('selecting_language');

  const handleLanguageSelect = (language: keyof typeof allQuestions) => {
    setSelectedLanguage(language);
    setQuizState('in_progress');
  };
  
  const handleRestartQuiz = () => {
    setQuizState('welcome');
    setSelectedLanguage(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setFinalLevel(null);
  };
  
  // LÓGICA DE CÁLCULO
  const calculateResults = (answers: string[], questions: any[]) => {
    let correctAnswers = 0;
    
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);

    let determinedLevel: Level = proficiencyLevels[0]; // Nível padrão caso não atinja nenhum.
    for (let i = proficiencyLevels.length - 1; i >= 0; i--) {
        const level = proficiencyLevels[i];
        if (correctAnswers >= level.minCorrect) {
            determinedLevel = level;
            break; // Encerra o loop ao encontrar o nível mais alto correspondente.
        }
    }
    
    setFinalLevel(determinedLevel);
  };

  const handleAnswerSelect = (selectedOption: string) => {
    if (!selectedLanguage) return;

    const currentQuestions = allQuestions[selectedLanguage];
    const newAnswers = [...userAnswers, selectedOption];
    setUserAnswers(newAnswers);

    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;

    if (isLastQuestion) {
      calculateResults(newAnswers, currentQuestions);
      setQuizState('finished');
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };
  
  const currentQuestions = selectedLanguage ? allQuestions[selectedLanguage] : [];
  const totalQuestions = currentQuestions.length;

  return (
    <>
      {quizState === 'welcome' && <LandingPage onStart={handleStartQuiz} />}

      {(quizState === 'selecting_language' || quizState === 'in_progress' || quizState === 'finished') && (
        <main className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {quizState === 'selecting_language' && (
              <LanguageSelectionScreen key="lang-select" onSelect={handleLanguageSelect} />
            )}

            {quizState === 'in_progress' && selectedLanguage && (
              <QuizQuestion
                key={`question_${currentQuestionIndex}`}
                question={currentQuestions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
                onAnswer={handleAnswerSelect}
              />
            )}
            
            {quizState === 'finished' && (
              <ResultsScreen
                key="results"
                score={score}
                totalQuestions={totalQuestions}
                finalLevel={finalLevel}
                onRestart={handleRestartQuiz}
              />
            )}
          </AnimatePresence>
        </main>
      )}
    </>
  );
}