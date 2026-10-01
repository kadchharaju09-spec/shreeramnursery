'use client';

import Link from 'next/link';
import { Plant } from '@/lib/data/plants';
import { generatePlantInquiryLink } from '@/lib/utils/whatsapp';
import { CATEGORIES, CARE_LEVELS } from '@/lib/constants';

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  const whatsappLink = generatePlantInquiryLink(plant.name);

  return (
  {/* Plant Image */}
      <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-200 relative overflow-hidden flex items-center justify-center text-green-700 font-semibold">
        {plant.image ? (
          <img
            src={plant.image}
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

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-4">
          <Link
            href={`/plants/${plant.id}`}
            className="flex-1 bg-green-600 text-white py-2 px-3 rounded font-semibold hover:bg-green-700 transition text-center text-sm"
          >
            View Details
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-500 text-white py-2 px-3 rounded font-semibold hover:bg-emerald-600 transition text-center text-sm"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}
