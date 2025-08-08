import WelcomeScreen from "./WelcomeScreen";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import StatsSection from "./StatsSection";

interface LandingPageProps {
    onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
    return (
        <main className="w-full">
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
        </main>
    )
}