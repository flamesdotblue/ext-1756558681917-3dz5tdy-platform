const products = [
  {
    id: 1,
    name: 'Shincha Mug',
    price: '¥4,800',
    image:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Hakeme Plate',
    price: '¥6,200',
    image:
      'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Tokoname Teapot',
    price: '¥12,400',
    image:
      'https://images.unsplash.com/photo-1582457575033-53a9a497d7ef?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Morning Bowl',
    price: '¥5,300',
    image:
      'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Stoneware Pour-Over',
    price: '¥8,900',
    image:
      'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Yunomi Set (2)',
    price: '¥7,600',
    image:
      'https://images.unsplash.com/photo-1617195737496-7b63c3bfb1d6?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-stone-900">Collection</h2>
          <p className="mt-2 text-stone-600">Small-batch editions. Each piece is unique.</p>
        </div>
        <a href="#" className="hidden sm:inline text-sm text-stone-700 underline underline-offset-4 hover:text-stone-900">View all</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-square overflow-hidden bg-stone-100">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg text-stone-900">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-stone-700">{p.price}</span>
                <button className="text-sm text-stone-800 hover:text-stone-950 underline underline-offset-4">
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
