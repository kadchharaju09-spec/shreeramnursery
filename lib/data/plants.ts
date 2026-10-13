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
  image?: string[];
}

export const plants: Plant[] = [
  // --- Your Existing Plants ---
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
    images: [
      '/images/plants/monstera-1.jpg',
      '/images/plants/monstera-2.jpg'
    ],
  },
  {
    id: "allamanda",
    name: "Allamanda",
    botanicalName: "Allamanda cathartica",
    category: "flowering",
    careLevel: "easy",
    description: "Vibrant tropical flowering plant known for its bright yellow trumpet-shaped blooms.",
    sunlight: "Full sun to bright indirect light",
    water: "Water regularly, keep soil moist",
    benefits: ["Prolific bright blooms", "Great for sunny spots", "Low maintenance"],
    images: [
      '/images/plants/allamanda-1.jpg',
      '/images/plants/allamanda-2.jpg'
  ],
  },
  {
    id: 'pothos-golden',
    name: 'Money Plant',
    botanicalName: 'pothos-golden',
    category: 'indoor',
    description: 'Fast-growing vine with heart-shaped leaves. Great for hanging baskets and shelves.',
    careLevel: 'easy',
    sunlight: 'Low to medium indirect light',
    water: 'Water when soil is dry',
    benefits: ['Air purifying', 'Very hardy', 'Cascading growth'],
   images: [
  "/images/plants/golden-pothos-1.jpg",
  "/images/plants/golden-pothos-2.jpg"
],
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
   images: [
    "/images/plants/snake-plant-1.jpg",
    "/images/plants/snake-plant-2.jpg",
    "/images/plants/snake-plant-3.jpg",
  ],
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
  images: [
    '/images/plants/spider-plant-1.jpg',
    '/images/plants/spider-plant-2.jpg',
    '/images/plants/spider-plant-3.jpg',
  ],
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
   images: [
    '/images/plants/peace-lily-1.jpg',
    '/images/plants/peace-lily-2.jpg',
    '/images/plants/peace-lily-3.jpg',
  ],
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
  images: [
    '/images/plants/aloe-vera-1.jpg',
    '/images/plants/aloe-vera-2.jpg',
  ],
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
   images: [
    '/images/plants/jade-plant-1.jpg',
    '/images/plants/jade-plant-2.jpg',
    '/images/plants/jade-plant-3.jpg',
  ],
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
   images: [
    '/images/plants/bougainvillea-1.jpg',
    '/images/plants/bougainvillea-2.jpg',
    '/images/plants/bougainvillea-3.jpg',
  ],
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
 images: [
    '/images/plants/basil-tulsi-1.jpg',
    '/images/plants/basil-tulsi-2.jpg',
    '/images/plants/basil-tulsi-3.jpg',
  ],
  },

  // --- Bill No. 55 Items ---
  {
    id: 'bill55-1',
    name: "Sweet Gra. Kammarak 2'",
    botanicalName: "Murraya koenigii / Local Variety",
    category: "fruit",
    description: "Healthy grafted Sweet Kammarak plant (2 feet height).",
    careLevel: "easy",
    sunlight: "Full sunlight",
    water: "Moderate, allow soil to dry between waterings",
    benefits: ["Fresh edible produce", "Low maintenance"]
  },
  {
    id: 'bill55-2',
    name: "Thailand Mango Gra. 18'",
    botanicalName: "Mangifera indica",
    category: "fruit",
    description: "Premium Thailand variety grafted mango plant (18 feet / large sapling).",
    careLevel: "medium",
    sunlight: "Direct sunlight",
    water: "Regular watering until established",
    benefits: ["High-yield sweet mangoes", "Excellent garden fruit tree"]
  },
  {
    id: 'bill55-3',
    name: "Hyb Lemon 2'",
    botanicalName: "Citrus limon",
    category: "fruit",
    description: "Hybrid lemon plant (2 feet height), high yielding and disease resistant.",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Keep soil moist but well-drained",
    benefits: ["Continuous citrus harvest", "Rich in vitamin C"]
  },
  {
    id: 'bill55-4',
    name: "Apricot 2'",
    botanicalName: "Prunus armeniaca",
    category: "fruit",
    description: "Grafted apricot sapling (2 feet height).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Nutritious seasonal fruit", "Ornamental blossom"]
  },
  {
    id: 'bill55-5',
    name: "Boganwillia Thimma 2'",
    botanicalName: "Bougainvillea 'Thimma'",
    category: "flowering",
    description: "Vibrant Thimma variety bougainvillea flowering shrub (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low water requirement once established",
    benefits: ["Bright multi-colored bracts", "Drought tolerant"]
  },
  {
    id: 'bill55-6',
    name: "Boganwillia Mix 78/10",
    botanicalName: "Bougainvillea spectabilis",
    category: "flowering",
    description: "Mixed variety bougainvillea plants.",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low",
    benefits: ["Lush colorful blooms", "Great for hedges"]
  },
  {
    id: 'bill55-7',
    name: "Thailand Pink Guava + A.Saf. 2'",
    botanicalName: "Psidium guajava",
    category: "fruit",
    description: "Thailand pink guava grafted variant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular watering",
    benefits: ["Sweet crisp fruits", "Rich in fiber and vitamins"]
  },
  {
    id: 'bill55-8',
    name: "Bhagawa Annar 2'",
    botanicalName: "Punica granatum",
    category: "fruit",
    description: "Bhagawa pomegranate (Anar) grafted plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate, drought tolerant when mature",
    benefits: ["Deep red sweet arils", "High antioxidant properties"]
  },
  {
    id: 'bill55-9',
    name: "Hyb Jamboo Red 2'",
    botanicalName: "Syzygium malaccense",
    category: "fruit",
    description: "Hybrid red bell fruit (Jamboo) plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun to partial shade",
    water: "Regular",
    benefits: ["Juicy tropical fruits", "Attractive glossy foliage"]
  },
  {
    id: 'bill55-10',
    name: "Seetafal Gra. Balanagar 2'",
    botanicalName: "Annona squamosa",
    category: "fruit",
    description: "Balanagar custard apple grafted plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Sweet creamy custard apple fruit", "Adaptable growth"]
  },
  {
    id: 'bill55-11',
    name: "Amla Na-7 Gra. 2'",
    botanicalName: "Phyllanthus emblica",
    category: "fruit",
    description: "NA-7 variety grafted Indian gooseberry (Amla) plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular until established",
    benefits: ["High vitamin C content", "Traditional medicinal uses"]
  },
  {
    id: 'bill55-12',
    name: "Ravanakalam White 10'",
    botanicalName: "Syzygium cumini variant / Local",
    category: "fruit",
    description: "Ravanakalam white plant (10 feet height sapling).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Unique fruit variety", "Sturdy large plant"]
  },
  {
    id: 'bill55-13',
    name: "Ravanakalam Badoli 2'",
    botanicalName: "Syzygium cumini variant",
    category: "fruit",
    description: "Ravanakalam Badoli variety plant (2 feet).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Specialty regional fruit variety"]
  },
  {
    id: 'bill55-14',
    name: "KG-10 Jamoon Gra. 2'",
    botanicalName: "Syzygium cumini",
    category: "fruit",
    description: "KG-10 hybrid grafted Jamoon (Black Plum) plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Large seedless/small-seeded sweet jamoon", "Health benefits for blood sugar control"]
  },
  {
    id: 'bill55-15',
    name: "Ramafal Gra. 2'",
    botanicalName: "Annona reticulata",
    category: "fruit",
    description: "Grafted Bullock's Heart (Ramafal) plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Delicious sweet seasonal fruit"]
  },
  {
    id: 'bill55-16',
    name: "Sweet Narangi 2'",
    botanicalName: "Citrus reticulata / microcarpa",
    category: "fruit",
    description: "Sweet Narangi citrus plant (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Compact size suitable for pots", "Sweet citrus fruits"]
  },
  {
    id: 'bill55-17',
    name: "Verchimary Green Palm 2'",
    botanicalName: "Areca / Palm family",
    category: "outdoor",
    description: "Verchimary green ornamental palm (2 feet).",
    careLevel: "easy",
    sunlight: "Bright indirect light to partial sun",
    water: "Keep soil evenly moist",
    benefits: ["Air purification", "Tropical landscape appeal"]
  },
  {
    id: 'bill55-18',
    name: "Hyb Lemon 8'x8'",
    botanicalName: "Citrus limon",
    category: "fruit",
    description: "Hybrid lemon established plant in container/bag size 8'x8'.",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Immediate fruiting potential", "High yield"]
  },
  {
    id: 'bill55-19',
    name: "Hyb Lemon 13'",
    botanicalName: "Citrus limon",
    category: "fruit",
    description: "Tall hybrid lemon plant (13 feet height).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Mature canopy", "Abundant citrus yield"]
  },
  {
    id: 'bill55-20',
    name: "Boganwillia Mix 10' Konk. Ver.",
    botanicalName: "Bougainvillea spectabilis",
    category: "flowering",
    description: "Konkan variety mixed bougainvillea (10 inch bag size).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low",
    benefits: ["Vibrant colorful floral displays"]
  },

  // --- Bill No. 56 Items ---
  {
    id: 'bill56-21',
    name: "Avacodo 10'",
    botanicalName: "Persea americana",
    category: "fruit",
    description: "Avocado sapling (10 inch bag / height variant).",
    careLevel: "medium",
    sunlight: "Full sun to partial shade",
    water: "Keep soil well-drained, avoid waterlogging",
    benefits: ["Nutritious superfood fruit", "Rich healthy fats"]
  },
  {
    id: 'bill56-22',
    name: "Setur 10'",
    botanicalName: "Local Specimen",
    category: "outdoor",
    description: "Setur plant variety (10 inch configuration).",
    careLevel: "easy",
    sunlight: "Sun to partial shade",
    water: "Moderate",
    benefits: ["General landscaping"]
  },
  {
    id: 'bill56-23',
    name: "Oliv Oil 13'",
    botanicalName: "Olea europaea",
    category: "fruit",
    description: "Olive plant variety (13 feet / container size).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Low to moderate, drought resistant",
    benefits: ["Mediterranean olive foliage", "Ornamental and productive"]
  },
  {
    id: 'bill56-24',
    name: "Sweet Imly Gra. 10'",
    botanicalName: "Tamarindus indica",
    category: "fruit",
    description: "Grafted sweet tamarind (Imly) plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low to moderate",
    benefits: ["Sweet edible tamarind pods", "Long-lived shade tree"]
  },
  {
    id: 'bill56-25',
    name: "Sone Champa Gra. 13'",
    botanicalName: "Magnolia champaca",
    category: "flowering",
    description: "Fragrant Sone Champa grafted flowering tree (13 foot spec).",
    careLevel: "medium",
    sunlight: "Full sun to partial shade",
    water: "Regular",
    benefits: ["Intensely fragrant golden blossoms", "Traditional value"]
  },
  {
    id: 'bill56-26',
    name: "Miyazaki Mango Gra. 13'",
    botanicalName: "Mangifera indica 'Miyazaki'",
    category: "fruit",
    description: "Exotic Miyazaki mango grafted plant (13 feet).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular watering",
    benefits: ["World-renowned premium mango variety", "High value fruit"]
  },
  {
    id: 'bill56-27',
    name: "Rudraksh 10'",
    botanicalName: "Elaeocarpus ganitrus",
    category: "outdoor",
    description: "Sacred Rudraksh tree sapling (10 inch).",
    careLevel: "medium",
    sunlight: "Full sun to partial shade",
    water: "Regular, keep moist",
    benefits: ["Spiritual and religious significance", "Traditional bead production"]
  },
  {
    id: 'bill56-28',
    name: "Miracle Fruit 10'",
    botanicalName: "Synsepalum dulcificum",
    category: "fruit",
    description: "Miracle fruit plant that alters taste buds (10 inch).",
    careLevel: "medium",
    sunlight: "Partial shade to indirect sun",
    water: "Keep soil acidic and moist",
    benefits: ["Produces berries that turn sour foods sweet"]
  },
  {
    id: 'bill56-29',
    name: "Golden-8 Guava 10'",
    botanicalName: "Psidium guajava 'Golden-8'",
    category: "fruit",
    description: "Golden-8 high-yield guava plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Crisp sweet guava fruits", "Compact bearing habit"]
  },
  {
    id: 'bill56-30',
    name: "Vietnam Musambi 13'",
    botanicalName: "Citrus limetta",
    category: "fruit",
    description: "Sweet lime Vietnam variety (13 foot spec).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Refreshing sweet citrus juice", "High vitamin content"]
  },
  {
    id: 'bill56-31',
    name: "A.T. Panas Gra. 10'",
    botanicalName: "Artocarpus heterophyllus",
    category: "fruit",
    description: "Advanced/All-Time Jackfruit (Panas) grafted plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Massive edible tropical fruit", "Sturdy shade tree"]
  },
  {
    id: 'bill56-32',
    name: "Malasana Apple 10'",
    botanicalName: "Malus domestica variant",
    category: "fruit",
    description: "Malasana apple plant variety (10 inch).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Fresh homegrown apples"]
  },
  {
    id: 'bill56-33',
    name: "Hyb Gra. Kammarak 13'",
    botanicalName: "Averrhoa carambola",
    category: "fruit",
    description: "Hybrid grafted Starfruit (Kammarak) plant (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Star-shaped juicy fruit", "Ornamental canopy"]
  },
  {
    id: 'bill56-34',
    name: "Hyb Gra. Kammarak 10'",
    botanicalName: "Averrhoa carambola",
    category: "fruit",
    description: "Hybrid grafted Starfruit plant (10 inch bag).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Edible star fruit", "Easy grower"]
  },
  {
    id: 'bill56-35',
    name: "Ravanakalam White 10'",
    botanicalName: "Syzygium variant",
    category: "fruit",
    description: "Ravanakalam white fruit plant (10 inch size).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Unique garden specimen"]
  },
  {
    id: 'bill56-36',
    name: "Thailand Mango Gra. 13'",
    botanicalName: "Mangifera indica",
    category: "fruit",
    description: "Thailand mango grafted tree (13 feet).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["High quality sweet mangoes"]
  },
  {
    id: 'bill56-37',
    name: "Seetafal Gra. Balanagar 13'",
    botanicalName: "Annona squamosa",
    category: "fruit",
    description: "Balanagar custard apple mature plant (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Superior custard apple variety"]
  },
  {
    id: 'bill56-38',
    name: "Alphonso Mango Gra. Ratnagiri 13'",
    botanicalName: "Mangifera indica 'Alphonso'",
    category: "fruit",
    description: "Authentic Ratnagiri Alphonso grafted mango tree (13 feet).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["King of mangoes (rich flavor and aroma)"]
  },
  {
    id: 'bill56-39',
    name: "Badoli Kanajamoon Gra. 13'",
    botanicalName: "Syzygium cumini 'Badoli'",
    category: "fruit",
    description: "Badoli Jamoon grafted variety (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Premium jamoon fruit quality"]
  },

  // --- Bill No. 57 Items ---
  {
    id: 'bill57-40',
    name: "Seetafal Gra. Balanagar 10'",
    botanicalName: "Annona squamosa",
    category: "fruit",
    description: "Balanagar custard apple plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Sweet delicious fruit"]
  },
  {
    id: 'bill57-41',
    name: "Red Seetafal Gra. 10' Big Size",
    botanicalName: "Annona squamosa 'Red'",
    category: "fruit",
    description: "Rare Red Custard Apple grafted plant (Big size 10 inch).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Striking red foliage and fruit", "Sweet flavor"]
  },
  {
    id: 'bill57-42',
    name: "Chiku Kalapatti 10'",
    botanicalName: "Manilkara zapota 'Kalapatti'",
    category: "fruit",
    description: "Kalapatti Sapota / Chikoo grafted plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Sweet sandy-textured brown fruits", "Reliable bearer"]
  },
  {
    id: 'bill57-43',
    name: "Red Seetafal Gra. 2'",
    botanicalName: "Annona squamosa 'Red'",
    category: "fruit",
    description: "Red custard apple sapling (2 feet).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Exotic fruit variety"]
  },
  {
    id: 'bill57-44',
    name: "Panas Rgo Gra. 2'",
    botanicalName: "Artocarpus heterophyllus",
    category: "fruit",
    description: "Panas jackfruit grafted variety (2 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Tropical fruit tree"]
  },
  {
    id: 'bill57-45',
    name: "Hyb Singapore Red 18'",
    botanicalName: "Bougainvillea 'Singapore Red'",
    category: "flowering",
    description: "Hybrid Singapore Red bougainvillea plant (18 inch spec).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low",
    benefits: ["Continuous bright red blooms"]
  },
  {
    id: 'bill57-46',
    name: "Musambi Rangapur 10'",
    botanicalName: "Citrus limetta 'Rangapur'",
    category: "fruit",
    description: "Rangapur lime / sweet orange rootstock/plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Citrus fruit production"]
  },
  {
    id: 'bill57-47',
    name: "Nagpur Santhara 10'",
    botanicalName: "Citrus reticulata",
    category: "fruit",
    description: "Nagpur Mandarin Orange plant (10 inch).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Juicy sweet mandarin oranges"]
  },
  {
    id: 'bill57-48',
    name: "Falsa 10'",
    botanicalName: "Grewia asiatica",
    category: "fruit",
    description: "Falsa berry bush plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Refreshing tart berries used for summer coolers"]
  },
  {
    id: 'bill57-49',
    name: "Hyb Anjora 10'",
    botanicalName: "Punica granatum / Local hybrid",
    category: "fruit",
    description: "Hybrid Anjora plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Fruit bearing ornamental"]
  },
  {
    id: 'bill57-50',
    name: "Arekapalm 16'",
    botanicalName: "Dypsis lutescens",
    category: "indoor",
    description: "Large Areca Palm plant (16 feet / big container).",
    careLevel: "easy",
    sunlight: "Bright indirect light",
    water: "Keep soil moist",
    benefits: ["Top indoor air purifier", "Lush tropical look"]
  },
  {
    id: 'bill57-51',
    name: "Arekapalm 13'",
    botanicalName: "Dypsis lutescens",
    category: "indoor",
    description: "Areca Palm plant (13 feet).",
    careLevel: "easy",
    sunlight: "Bright indirect light",
    water: "Moderate",
    benefits: ["Natural humidifier", "Clean air"]
  },
  {
    id: 'bill57-52',
    name: "Arekapalm 10'",
    botanicalName: "Dypsis lutescens",
    category: "indoor",
    description: "Areca Palm plant (10 inch container).",
    careLevel: "easy",
    sunlight: "Bright indirect light",
    water: "Moderate",
    benefits: ["Popular indoor decorative plant"]
  },
  {
    id: 'bill57-53',
    name: "KG-10 Jamoon Gra. 10'",
    botanicalName: "Syzygium cumini",
    category: "fruit",
    description: "KG-10 grafted Jamoon plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["High quality sweet black plums"]
  },
  {
    id: 'bill57-54',
    name: "Badoli Jamoon Gra. 10'",
    botanicalName: "Syzygium cumini 'Badoli'",
    category: "fruit",
    description: "Badoli Jamoon grafted plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Nutritious fruit crop"]
  },
  {
    id: 'bill57-55',
    name: "Seetafal Gra. Kattman 10'",
    botanicalName: "Annona squamosa 'Kattman'",
    category: "fruit",
    description: "Kattman variety custard apple grafted plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Sweet fleshy fruit"]
  },
  {
    id: 'bill57-56',
    name: "Kelatia Lufra 8'",
    botanicalName: "Calathea / Foliage plant",
    category: "indoor",
    description: "Kelatia Lufra decorative foliage plant (8 inch).",
    careLevel: "medium",
    sunlight: "Indirect filtered light",
    water: "Keep soil consistently moist",
    benefits: ["Gorgeous patterned leaves", "Indoor aesthetics"]
  },
  {
    id: 'bill57-57',
    name: "Boganwillia Thimma 13'",
    botanicalName: "Bougainvillea 'Thimma'",
    category: "flowering",
    description: "Thimma bougainvillea large plant (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low",
    benefits: ["Abundant multi-colored bracts"]
  },
  {
    id: 'bill57-58',
    name: "Sweet Lemon 10'",
    botanicalName: "Citrus limetta",
    category: "fruit",
    description: "Sweet lemon plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Sweet citrus juice fruit"]
  },

  // --- Bill No. 58 Items ---
  {
    id: 'bill58-59',
    name: "Boganwillia Multi Colours 12pp",
    botanicalName: "Bougainvillea spectabilis",
    category: "flowering",
    description: "Multi-colored grafted bougainvillea (12 plant pot/pack configuration).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low",
    benefits: ["Multiple flower colors on a single plant", "Striking garden visual"]
  },
  {
    id: 'bill58-60',
    name: "Kallaspati 10'",
    botanicalName: "Ornamental Shrub",
    category: "outdoor",
    description: "Kallaspati landscaping plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun to partial shade",
    water: "Moderate",
    benefits: ["Good for garden borders"]
  },
  {
    id: 'bill58-61',
    name: "Musambi Rangapur 13'",
    botanicalName: "Citrus limetta",
    category: "fruit",
    description: "Rangapur Musambi sweet lime plant (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Healthy citrus fruits"]
  },
  {
    id: 'bill58-62',
    name: "Green Jamboo 10'",
    botanicalName: "Syzygium samarangense",
    category: "fruit",
    description: "Green wax apple / water apple (Green Jamboo) plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular, loves moisture",
    benefits: ["Refreshing crisp water apples"]
  },
  {
    id: 'bill58-63',
    name: "Singapure Cherry 10'",
    botanicalName: "Muntingia calabura",
    category: "fruit",
    description: "Singapore cherry / Jamaica cherry fast-growing plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low to moderate",
    benefits: ["Sweet edible small berries", "Attracts birds"]
  },
  {
    id: 'bill58-64',
    name: "Hyb Jamboo White 10'",
    botanicalName: "Syzygium samarangense 'White'",
    category: "fruit",
    description: "Hybrid white bell fruit / Jamboo plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Sweet white bell-shaped crisp fruits"]
  },
  {
    id: 'bill58-65',
    name: "American Plu. White 13'",
    botanicalName: "Plumeria obtusa 'White'",
    category: "flowering",
    description: "American White Frangipani / Plumeria tree (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Low",
    benefits: ["Fragrant white flowers", "Elegant sculptural branches"]
  },
  {
    id: 'bill58-66',
    name: "Pan Jamoon 10'",
    botanicalName: "Syzygium cumini variant",
    category: "fruit",
    description: "Pan Jamoon fruit plant (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Quality edible black plum variety"]
  },
  {
    id: 'bill58-67',
    name: "Egg Fruit 10'",
    botanicalName: "Pouteria campechiana",
    category: "fruit",
    description: "Canistel / Egg fruit tree sapling (10 inch).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Moderate",
    benefits: ["Nutritious unique yellow fruit resembling egg yolk texture"]
  },
  {
    id: 'bill58-68',
    name: "Sweet Narangi 13'",
    botanicalName: "Citrus microcarpa",
    category: "fruit",
    description: "Sweet Narangi mature citrus plant (13 feet).",
    careLevel: "easy",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Abundant sweet citrus fruits"]
  },
  {
    id: 'bill58-69',
    name: "Black Berry 10'",
    botanicalName: "Rubus fruticosus",
    category: "fruit",
    description: "Blackberry berry shrub plant (10 inch).",
    careLevel: "medium",
    sunlight: "Full sun",
    water: "Regular",
    benefits: ["Delicious antioxidant-rich berries"]
  },
  {
    id: 'bill58-70',
    name: "Blue Berry 10'",
    botanicalName: "Vaccinium corymbosum",
    category: "fruit",
    description: "Blueberry fruiting shrub (10 inch).",
    careLevel: "medium",
    sunlight: "Full sun with acidic soil",
    water: "Keep soil moist",
    benefits: ["Superfood berries", "Attractive seasonal foliage"]
  }
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
  
