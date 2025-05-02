export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white/80 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-10">
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl shadow bg-white/90 text-center animate-fade-in">
            <p className="text-gray-700 italic mb-2">
              “NeuroChallenge made training my memory fun and competitive. I
              love the global rankings!”
            </p>
            <span className="font-bold text-blue-600">— Alex G.</span>
          </div>
          <div className="p-6 rounded-xl shadow bg-white/90 text-center animate-fade-in">
            <p className="text-gray-700 italic mb-2">
              “The variety of challenges keeps me coming back every day. My
              focus has improved a lot.”
            </p>
            <span className="font-bold text-blue-600">— Priya S.</span>
          </div>
          <div className="p-6 rounded-xl shadow bg-white/90 text-center animate-fade-in">
            <p className="text-gray-700 italic mb-2">
              “I can see my progress and compete with friends. The dashboard is
              awesome!”
            </p>
            <span className="font-bold text-blue-600">— Marco T.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
