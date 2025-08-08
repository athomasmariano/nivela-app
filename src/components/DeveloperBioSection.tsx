'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const bioText = "Olá! Sou Arthur, um desenvolvedor e estudante apaixonado por construir experiências digitais que sejam não apenas funcionais, mas intuitivas e visualmente impactantes. Este projeto, 'Nivela', é um reflexo da minha dedicação em unir código limpo com design moderno para criar soluções reais.";

export default function DeveloperBioSection() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
        >
            {/* Coluna da Foto */}
            <div className="md:col-span-1 flex justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#1c1c1c] to-[#2d2d2d] border border-[#3F3F46] flex items-center justify-center">
                    {
                      <Image 
                        src="/me2.jpeg" 
                        alt="Foto de Arthur Thomas Mariano" 
                        width={144} 
                        height={144} 
                        className="rounded-full object-cover" 
                      />
                    }
                </div>
            </div>

            {/* Coluna da Bio e Links */}
            <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Sobre o Desenvolvedor</h3>
                <p className="text-lg text-[#A1A1AA] mb-6">
                    {bioText}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <p className="text-[#A1A1AA]">Conecte-se comigo:</p>
                    <motion.a 
                        href="https://github.com/athomasmariano" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="text-white hover:text-[#8B5CF6] transition-colors"
                    >
                        <Github size={28} />
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/arthur-thomas-941a97234" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="text-white hover:text-[#8B5CF6] transition-colors"
                    >
                        <Linkedin size={28} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}