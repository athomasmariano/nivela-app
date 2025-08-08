import { motion, useScroll, useTransform } from 'framer-motion';
import { PlayCircle, HelpCircle, Award } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    { icon: <PlayCircle size={32} />, title: "Inicie o Teste", description: "Dê o primeiro passo na sua jornada de aprendizado com um clique." },
    { icon: <HelpCircle size={32} />, title: "Responda às Questões", description: "Enfrente uma série de perguntas que se adaptam ao seu conhecimento." },
    { icon: <Award size={32} />, title: "Receba seu Nível", description: "Obtenha seu resultado detalhado e a recomendação do nível ideal." },
];

export default function HowItWorksSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.05, 0.8], [0, 1]);

    return (
        <div ref={targetRef} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 relative">
            {/* Coluna da Esquerda (Sticky) */}
            <div className="lg:col-span-1 h-full">
                <div className="sticky top-24">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Simples, Rápido<br/> e Eficaz.
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-[#A1A1AA]"
                    >
                        Descobrir seu nível nunca foi tão fácil.
                    </motion.p>
                </div>
            </div>

            {/* Coluna da Direita (com Scroll) */}
            <div className="lg:col-span-2 relative">
                {/* Linha SVG Vertical */}
                <div className="absolute left-[15px] top-4 h-full hidden lg:block">
                    <svg width="3" height="100%" viewBox="0 0 3 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0V800" stroke="#3F3F46" strokeWidth="3"/>
                        <motion.path 
                            d="M1.5 0V800" 
                            stroke="url(#paint0_linear_faq)" 
                            strokeWidth="3" 
                            style={{ pathLength }}
                        />
                        <defs>
                            <linearGradient id="paint0_linear_faq" x1="1.5" y1="0" x2="1.5" y2="800" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#8B5CF6"/>
                                <stop offset="1" stopColor="#6D28D9" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Passos */}
                <div className="flex flex-col gap-24">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start gap-6 pl-12 lg:pl-20"
                        >
                            <div className="text-[#8B5CF6] mt-1">{step.icon}</div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-lg text-[#A1A1AA] max-w-md">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}