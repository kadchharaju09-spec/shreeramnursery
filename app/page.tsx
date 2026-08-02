import Link from 'next/link';
import { PlantCard } from '@/components/PlantCard';
import { plants } from '@/lib/data/plants';
import { CATEGORIES } from '@/lib/constants';

export default function Home() {
  // Get featured plants (first 6)
  const featuredPlants = plants.slice(0, 6);
  // Get fruit plants
  const fruitPlants = plants.filter(plant => plant.category === 'fruit');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Shree Ram Nursery</h1>
          <p className="text-lg md:text-xl mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>Your One-Stop Destination for Premium Plants</p>
          <p className="text-md mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>From air-purifying indoor plants to vibrant flowering varieties and medicinal herbs</p>
          <Link
            href="/catalog"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition animate-slide-up"
            style={{animationDelay: '0.3s'}}
          >
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 animate-slide-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(CATEGORIES).map(([key, label]) => (
              <Link
                key={key}
                href={`/catalog?category=${key}`}
                className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-6 px-4 rounded-lg text-center transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-12 bg-gray-50 animate-slide-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Featured Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/catalog"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              View All Plants
            </Link>
          </div>
        </div>
      </section>

      {/* Fruit Plants Section */}
      {fruitPlants.length > 0 && (
        <section className="py-12 animate-slide-up">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Fruit Plants</h2>
            <p className="text-center text-gray-600 mb-12 animate-slide-up">Grow your own fresh fruits at home with our premium fruit-bearing plants</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fruitPlants.map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/catalog?category=fruit"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Explore Fruit Plants
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-12 bg-gray-50 animate-slide-up">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-left">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
              <p className="text-gray-600">Healthy, well-maintained plants that thrive in your space</p>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-bold text-xl mb-2">Quick Delivery</h3>
              <p className="text-gray-600">Fast and safe delivery right to your doorstep</p>
            </div>
            <div className="text-center animate-slide-right">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-bold text-xl mb-2">Expert Care Tips</h3>
              <p className="text-gray-600">Guidance on plant care and maintenance included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 animate-slide-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">Why Choose Shree Ram Nursery?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Wide Variety</h3>
                <p className="text-gray-600">From indoor plants to outdoor varieties, herbs, and flowering plants</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Expert Support</h3>
                <p className="text-gray-600">Get tips and advice from our experienced nursery team</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Healthy Plants</h3>
                <p className="text-gray-600">All plants are carefully grown and health-checked before delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12 animate-slide-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Ready to Green Your Space?</h2>
          <p className="text-lg mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>Browse our complete catalog or contact us for personalized recommendations</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/catalog"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
