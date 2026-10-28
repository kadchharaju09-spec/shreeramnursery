'use client';

import Link from 'next/link';
import { Plant } from '@/lib/data/plants';
import { generatePlantInquiryLink } from '@/lib/utils/whatsapp';
import { CATEGORIES, CARE_LEVELS } from '@/lib/constants';
import { useCart } from '@/context/CartContext'; // 👈 Import useCart

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  const { addToCart } = useCart(); // 👈 Initialize cart hook
  const whatsappLink = generatePlantInquiryLink(plant.name);

  // Pick the first image from the images array, or fall back to single image if it exists
  const displayImage = plant.images?.[0] || plant.image;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col animate-fade-in hover:scale-105">
      {/* Plant Image */}
      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-200 relative overflow-hidden flex items-center justify-center text-green-700 font-semibold">
        {displayImage ? (
          <img
            src={displayImage}
            alt={plant.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{plant.name}</span>
        )}
      </div>

      {/* Plant Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-800">{plant.name}</h3>
        <p className="text-sm text-gray-500 italic">{plant.botanicalName}</p>

        {/* 👇 PRICE DISPLAY */}
        <p className="text-green-700 font-extrabold text-xl mt-2">₹{plant.price}</p>

        {/* Category and Care Level */}
        <div className="flex gap-2 mt-3 flex-wrap">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {CATEGORIES[plant.category]}
          </span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
            {CARE_LEVELS[plant.careLevel]}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{plant.description}</p>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 space-y-2">
          {/* Row 1: View Details & Add to Cart */}
          <div className="flex gap-2">
            <Link
              href={`/plants/${plant.id}`}
              className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded font-semibold hover:bg-gray-200 transition text-center text-sm"
            >
              Details
            </Link>
            <button
              onClick={() =>
                addToCart({
                  id: plant.id,
                  name: plant.name,
                  price: plant.price, // 👈 Passes price to CartContext
                  image: displayImage || '',
                })
              }
              className="flex-1 bg-green-600 text-white py-2 px-3 rounded font-semibold hover:bg-green-700 transition text-center text-sm"
            >
              Add to Cart
            </button>
          </div>

          {/* Row 2: WhatsApp Enquire */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-emerald-500 text-white py-2 px-3 rounded font-semibold hover:bg-emerald-600 transition text-center text-sm"
          >
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
