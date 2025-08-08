import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    { q: "O teste de nivelamento é realmente gratuito?", a: "Sim, o teste é 100% gratuito e você pode fazê-lo quantas vezes quiser. Nosso objetivo é te ajudar a começar na jornada do idioma da melhor forma." },
    { q: "Quanto tempo leva para completar o teste?", a: "A maioria dos usuários completa o teste entre 5 a 7 minutos. Ele é projetado para ser rápido e direto ao ponto, respeitando o seu tempo." },
    { q: "Os resultados são confiáveis?", a: "Nossas perguntas são baseadas no Quadro Europeu Comum de Referência para Línguas (CEFR), um padrão internacional. O resultado te dará uma excelente estimativa do seu nível de proficiência atual." },
    { q: "Preciso me cadastrar para fazer o teste?", a: "Não! Nenhum cadastro é necessário. Acreditamos em uma experiência sem barreiras. Você pode começar o teste imediatamente." },
];

const FaqItem = ({ q, a }: { q: string, a: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-[#3F3F46]">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-6">
                <span className="text-lg font-semibold text-white">{q}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="text-[#A1A1AA]" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-[#A1A1AA] pb-6 pr-8">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FaqSection() {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
            >
                Dúvidas? Nós respondemos.
            </motion.h2>
            <div>
                {faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
            </div>
        </div>
    );
}