import { useEffect, useRef } from "react";

export function AnimatedHero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("animate-hero-fade-in");
    }
  }, []);
  return (
    <header ref={ref} className="py-10 px-4 flex flex-col items-center">
      <img
        src="/neural.png"
        alt="NeuroChallenge Logo"
        className="w-20 h-20 mb-4 drop-shadow-lg animate-spin-slow"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 text-center drop-shadow-sm">
        NeuroChallenge
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-6 animate-fade-in">
        Interactive platform to evaluate, train, and enhance your cognitive,
        sensory, and motor skills through fun, scientific challenges. Compete
        globally, track your progress, and unlock your brain's full potential!
      </p>
      <a
        href="#features"
        className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition animate-fade-in"
      >
        Explore Features
      </a>
    </header>
  );
}
