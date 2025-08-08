import WelcomeScreen from "./WelcomeScreen";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import StatsSection from "./StatsSection";
import DeveloperBioSection from "./DeveloperBioSection";

interface LandingPageProps {
    onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
    return (
        // MUDANÇA 1: Removemos a cor de fundo 'bg-[#0A0A0A]' daqui.
        <main className="w-full">
            <section className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
                <WelcomeScreen onStart={onStart} />
            </section>

            <section className="py-32 px-4">
                <HowItWorksSection />
            </section>
            
            {/* MUDANÇA 2: Removemos o 'bg-[#111111]' para a seção ser transparente. */}
            <section className="py-24 px-4 border-y border-white/10">
                <StatsSection />
            </section>

            <section className="py-32 px-4">
                <TestimonialsSection />
            </section>
            
            {/* MUDANÇA 3: Removemos o 'bg-[#111111]' daqui também. */}
            <section className="py-32 px-4 border-y border-white/10">
                <FaqSection />
            </section>

            <footer className="py-24 px-4">
                <DeveloperBioSection />
                <p className="text-center text-[#A1A1AA] mt-20 text-sm">
                    {/* A data aqui estava errada, corrigi para o ano atual. */}
                    Desenvolvido por Arthur Thomas Mariano, 2025.
                </p>
            </footer>
        </main>
    )
}