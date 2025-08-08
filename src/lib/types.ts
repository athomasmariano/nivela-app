export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1'; 
  }
  
  export interface Level {
    name: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
    description: string;
    minCorrect: number;
  }