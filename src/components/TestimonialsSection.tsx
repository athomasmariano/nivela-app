import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
    { name: "Kennedy Gomes", role: "Escrevente", quote: "O teste foi super rápido e preciso! Me deu a confiança que eu precisava para me matricular no nível certo sem medo de estar na turma errada." },
    { name: "Jaílson Mendes", role: "Profissional de TI", quote: "Excelente ferramenta. O design é impecável e a experiência é muito fluida. Me ajudou a validar meu inglês para uma oportunidade de trabalho." },
    { name: "Juliana Teixeira", role: "Viajante", quote: "Usei o Nivela para ter uma ideia do meu nível antes de um mochilão. Foi ótimo para focar nos pontos que eu precisava melhorar. Recomendo!" },
];

const TestimonialItem = ({ t }: { t: Testimonial }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className="relative py-12">
            <motion.div style={{ y }} className="absolute top-0 left-0 text-8xl text-[#27272A]/50 font-serif z-0">
                “
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="relative z-10"
            >
                <p className="text-2xl md:text-3xl leading-relaxed text-white mb-6">
                    {t.quote}
                </p>
                <p className="font-bold text-white text-lg">— {t.name}, <span className="text-[#A1A1AA] font-normal">{t.role}</span></p>
            </motion.div>
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
            >
                O que dizem sobre a experiência
            </motion.h2>
            <div className="flex flex-col gap-16">
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem key={index} t={testimonial} />
                ))}
            </div>
        </div>
    );
}