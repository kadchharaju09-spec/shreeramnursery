export interface Plant {
  id: string;
  name: string;
  botanicalName: string;
  category: 'indoor' | 'outdoor' | 'flowering' | 'succulent' | 'herb' | 'fruit';
  description: string;
  careLevel: 'easy' | 'medium' | 'hard';
  sunlight: string;
  water: string;
  benefits: string[];
  image?: string;
}

export const plants: Plant[] = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    botanicalName: 'Rhaphidophora tetrasperma',
    category: 'indoor',
    description: 'Beautiful Swiss Cheese plant with distinctive split leaves. Perfect for modern interiors.',
    careLevel: 'easy',
    sunlight: 'Bright, indirect light',
    water: 'Water when top soil is dry',
    benefits: ['Air purifying', 'Low maintenance', 'Statement piece'],
    image: 'monstera',
  },
  {
    id: 'pothos-golden',
    name: 'Golden Pothos',
    botanicalName: 'Epipremnum aureum',
    category: 'indoor',
    description: 'Fast-growing vine with heart-shaped leaves. Great for hanging baskets and shelves.',
    careLevel: 'easy',
    sunlight: 'Low to medium indirect light',
    water: 'Water when soil is dry',
    benefits: ['Air purifying', 'Very hardy', 'Cascading growth'],
    image: 'pothos',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    botanicalName: 'Sansevieria trifasciata',
    category: 'succulent',
    description: 'Architectural succulent with tall, striped leaves. Extremely drought tolerant.',
    careLevel: 'easy',
    sunlight: 'Low to bright light',
    water: 'Water sparingly, every 3-4 weeks',
    benefits: ['Air purifying', 'Low maintenance', 'Drought tolerant'],
    image: 'snake-plant',
  },
  {
    id: 'spider-plant',
    name: 'Spider Plant',
    botanicalName: 'Chlorophytum comosum',
    category: 'indoor',
    description: 'Classic houseplant with green and white striped leaves. Produces cute baby plantlets.',
    careLevel: 'easy',
    sunlight: 'Bright, indirect light',
    water: 'Keep soil moist but not waterlogged',
    benefits: ['Air purifying', 'Pet friendly', 'Propagates easily'],
    image: 'spider-plant',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    botanicalName: 'Spathiphyllum wallisii',
    category: 'indoor',
    description: 'Elegant white flowering plant. Known for air purifying abilities.',
    careLevel: 'medium',
    sunlight: 'Low to medium indirect light',
    water: 'Keep soil slightly moist',
    benefits: ['Air purifying', 'White flowers', 'Humidity indicator'],
    image: 'peace-lily',
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    botanicalName: 'Aloe barbadensis',
    category: 'succulent',
    description: 'Medicinal succulent with gel-filled leaves. Great for skin care and healing.',
    careLevel: 'easy',
    sunlight: 'Bright, indirect light',
    water: 'Water sparingly, drought tolerant',
    benefits: ['Medicinal properties', 'Low maintenance', 'Gel for skin'],
    image: 'aloe-vera',
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    botanicalName: 'Crassula ovata',
    category: 'succulent',
    description: 'Lucky plant with thick, coin-shaped leaves. Symbol of prosperity and friendship.',
    careLevel: 'easy',
    sunlight: 'Bright light',
    water: 'Water when soil is completely dry',
    benefits: ['Feng shui lucky plant', 'Long-lived', 'Easy care'],
    image: 'jade-plant',
  },
  {
    id: 'bougainvillea',
    name: 'Bougainvillea',
    botanicalName: 'Bougainvillea glabra',
    category: 'flowering',
    description: 'Vibrant flowering plant with colorful bracts. Perfect for outdoor gardens and patios.',
    careLevel: 'medium',
    sunlight: 'Full sun',
    water: 'Water regularly, reduce in winter',
    benefits: ['Stunning blooms', 'Vibrant colors', 'Outdoor display'],
    image: 'bougainvillea',
  },
  {
    id: 'basil-tulsi',
    name: 'Tulsi (Holy Basil)',
    botanicalName: 'Ocimum sanctum',
    category: 'herb',
    description: 'Sacred herb used in Indian cuisine and Ayurveda. Fragrant and easy to grow.',
    careLevel: 'easy',
    sunlight: 'Bright light, 6+ hours',
    water: 'Keep soil moist but not waterlogged',
    benefits: ['Medicinal', 'Culinary', 'Aromatic'],
    image: 'herb',
  },
  {
    id: 'fruit-plant-1',
    name: '',
    botanicalName: '',
    category: 'fruit',
    description: '',
    careLevel: 'easy',
    sunlight: '',
    water: '',
    benefits: [],
    image: 'fruit',
  },
  {
    id: 'fruit-plant-2',
    name: '',
    botanicalName: '',
    category: 'fruit',
    description: '',
    careLevel: 'easy',
    sunlight: '',
    water: '',
    benefits: [],
    image: 'fruit',
  },
  {
    id: 'fruit-plant-3',
    name: '',
    botanicalName: '',
    category: 'fruit',
    description: '',
    careLevel: 'easy',
    sunlight: '',
    water: '',
    benefits: [],
    image: 'fruit',
  },
];

export function getPlantById(id: string): Plant | undefined {
  return plants.find(plant => plant.id === id);
}

export function getPlantsByCategory(category: Plant['category']): Plant[] {
  return plants.filter(plant => plant.category === category);
}

export function searchPlants(query: string): Plant[] {
  const lowerQuery = query.toLowerCase();
  return plants.filter(plant =>
    plant.name.toLowerCase().includes(lowerQuery) ||
    plant.botanicalName.toLowerCase().includes(lowerQuery) ||
    plant.description.toLowerCase().includes(lowerQuery)
  );
}
