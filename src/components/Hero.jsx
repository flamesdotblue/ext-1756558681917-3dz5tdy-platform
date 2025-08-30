import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="tracking-widest text-xs uppercase text-stone-500">Handcrafted in Japan</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-stone-900">
            Quiet Ceramics for Daily Rituals
          </h1>
          <p className="mt-5 max-w-xl text-stone-700 leading-relaxed">
            A small collection of wheel-thrown mugs, plates, and teapots. Natural clays, wood ash glazes, and forms that honor wabi-sabi simplicity.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-50 px-6 py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Shop Collection <ArrowRight size={18} />
            </a>
            <a
              href="#story"
              className="text-stone-700 hover:text-stone-900 text-sm underline underline-offset-4"
            >
              The Studio
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1592039014782-9c2dd75d78a2?q=80&w=1600&auto=format&fit=crop"
              alt="Handmade ceramic vessels in earth tones"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:block w-40 h-40 rotate-6 rounded-xl bg-[url('https://images.unsplash.com/photo-1542966336-2276f6a0d0cb?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center border border-stone-200 shadow-md" />
        </div>
      </div>
    </section>
  );
}
