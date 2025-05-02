import { createFileRoute } from "@tanstack/react-router";
import { AnimatedHero } from "../components/AnimatedHero";
import { AboutSection } from "../components/AboutSection";
import { Feature } from "../components/Feature";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CallToActionSection } from "../components/CallToActionSection";
import { Header } from "../components/Header";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col pt-20">
        {/* pt-20 to offset the fixed header height */}
        <AnimatedHero />
        <AboutSection />
        <section
          id="features"
          className="flex-1 px-4 py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up"
        >
          <Feature
            title="30+ Unique Challenges"
            description="Memory, logic, attention, reflexes, vision, verbal reasoning, and more. Scientifically designed for real improvement."
            icon={
              <span role="img" aria-label="Puzzle">
                🧩
              </span>
            }
          />
          <Feature
            title="Global Rankings"
            description="Compete with users worldwide. Real-time leaderboards and regional stats keep you motivated."
            icon={
              <span role="img" aria-label="Trophy">
                🏆
              </span>
            }
          />
          <Feature
            title="Personal Progress"
            description="Track your stats, see your growth, and get personalized suggestions to boost your skills."
            icon={
              <span role="img" aria-label="Chart">
                📈
              </span>
            }
          />
        </section>
        <TestimonialsSection />
        <CallToActionSection />
        <footer className="py-8 text-center text-gray-500 text-sm bg-white/60 mt-8 animate-fade-in">
          &copy; {new Date().getFullYear()} NeuroChallenge. All rights reserved.
        </footer>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes hero-fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in { animation: fade-in 1s both; }
          .animate-fade-in-up { animation: fade-in-up 1.2s both; }
          .animate-spin-slow { animation: spin-slow 6s linear infinite; }
          .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
          .animate-hero-fade-in { animation: hero-fade-in 1.2s both; }
        `}</style>
      </main>
    </>
  );
}
