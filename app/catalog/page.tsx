'use client';

import { useState, useMemo } from 'react';
import { PlantCard } from '@/components/PlantCard';
import { plants, Plant } from '@/lib/data/plants';
import { CATEGORIES } from '@/lib/constants';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<Plant['category'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter plants
  const filteredPlants = useMemo(() => {
    let result = plants;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(plant => plant.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(plant =>
        plant.name.toLowerCase().includes(lowerQuery) ||
        plant.botanicalName.toLowerCase().includes(lowerQuery) ||
        plant.description.toLowerCase().includes(lowerQuery) ||
        plant.benefits.some(benefit => benefit.toLowerCase().includes(lowerQuery))
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Plant Catalog</h1>
          <p className="text-lg opacity-90">Browse our complete collection of healthy plants</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
              <h3 className="font-bold text-lg mb-4">Filters</h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === 'all'
                        ? 'bg-green-600 text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    All Plants
                  </button>
                  {Object.entries(CATEGORIES).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key as Plant['category'])}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === key
                          ? 'bg-green-600 text-white'
                          : 'bg-white hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-bold">{filteredPlants.length}</span> plant{filteredPlants.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content - Plants Grid */}
          <div className="lg:col-span-3">
            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPlants.map(plant => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">No plants found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
