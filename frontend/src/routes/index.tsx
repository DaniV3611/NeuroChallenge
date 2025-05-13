import AnimatedLogo from "@/components/AnimatedLogo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center">
      {/** Hero Section */}
      <section className="w-full flex flex-col items-center mt-24 animate-fade-in-up">
        <AnimatedLogo />
        <h1 className="text-4xl font-bold text-slate-950">Neuro Challenge</h1>
      </section>
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
    </div>
  );
}
