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
        <main className="w-full relative">
            <section className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
                <WelcomeScreen onStart={onStart} />
            </section>

            <section className="py-32 px-4">
                <HowItWorksSection />
            </section>
            
            <section className="py-24 px-4 border-y border-white/10">
                <StatsSection />
            </section>

            <section className="py-32 px-4">
                <TestimonialsSection />
            </section>
            
            <section className="py-32 px-4 border-y border-white/10">
                <FaqSection />
            </section>

            <footer className="py-24 px-4">
                <DeveloperBioSection />
                <p className="text-center text-[#A1A1AA] mt-20 text-sm">
                    Desenvolvido por Arthur Thomas Mariano, 2025.
                </p>
            </footer>
        </main>
    )
}