export default function AboutSection() {
  return (
    <section id="story" className="relative mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-stone-900">The Studio</h2>
          <p className="mt-4 text-stone-700 leading-relaxed">
            Working from a small studio in Kyoto, I draw from local clay bodies and traditional firing methods to create quiet, tactile forms. Each piece is thrown, trimmed, and glazed by hand, embracing subtle variation as a signature of the process.
          </p>
          <p className="mt-4 text-stone-700 leading-relaxed">
            My practice is guided by the rhythm of tea and the seasons. I favor natural ash glazes, matte surfaces, and profiles that feel grounded in the hand—ceramics designed to be lived with every day.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1549890762-0a3f8933bcf9?q=80&w=1600&auto=format&fit=crop"
              alt="Japanese ceramicist shaping clay on the wheel"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
