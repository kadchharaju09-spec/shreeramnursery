import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">About Shree Ram Nursery</h1>
          <p className="text-lg opacity-90">Growing green dreams since day one</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shree Ram Nursery was founded with a passion for bringing nature closer to homes and workplaces. What started as a small local plant shop has grown into a trusted destination for premium quality plants and gardening expertise.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that plants have the power to transform spaces, improve air quality, and bring peace and joy to our lives. Our mission is to provide healthy, well-cared-for plants to every customer who walks through our doors or reaches out to us online.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we take pride in our extensive collection of indoor plants, outdoor varieties, flowering plants, herbs, and succulents, all carefully selected and nurtured for your satisfaction.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center text-green-700 font-semibold text-xl">
              Our Nursery
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Quality First</h3>
              <p className="text-gray-600">We only source and grow the healthiest plants, ensuring they thrive in your home or office.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Customer Care</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We provide expert advice and ongoing support for all your plant needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Sustainability</h3>
              <p className="text-gray-600">We&apos;re committed to eco-friendly practices and promoting a greener planet for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Expert Knowledge</h3>
                <p className="text-gray-600">Our team has years of experience in plant care, cultivation, and customer support.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Wide Selection</h3>
                <p className="text-gray-600">From rare varieties to popular favorites, we have something for every plant enthusiast.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600">Every plant is health-checked and properly conditioned before delivery.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Care Support</h3>
                <p className="text-gray-600">We provide detailed care instructions and ongoing support for your plants.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 text-white text-xl">✓</div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Easy Communication</h3>
                <p className="text-gray-600">Reach us via WhatsApp, email, phone, or visit our store for personalized service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex gap-1 mb-3">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-700 mb-4 italic">&quot;Amazing quality plants and excellent customer service. My indoor garden looks beautiful thanks to Shree Ram Nursery!&quot;</p>
              <p className="font-semibold text-gray-900">- Priya M.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex gap-1 mb-3">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-700 mb-4 italic">&quot;The care tips provided were very helpful. My plants are thriving now. Highly recommended!&quot;</p>
              <p className="font-semibold text-gray-900">- Rajesh K.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex gap-1 mb-3">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-700 mb-4 italic">&quot;Best nursery in town! They have everything I need and the team is always ready to help with advice.&quot;</p>
              <p className="font-semibold text-gray-900">- Anjali S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Plant Community</h2>
          <p className="text-lg mb-8">Ready to transform your space with beautiful, healthy plants?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/catalog"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Explore Plants
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
