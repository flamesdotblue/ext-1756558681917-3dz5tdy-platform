import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Hero />
      <main>
        <ProductGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
