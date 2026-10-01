import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPlantById } from '@/lib/data/plants';
import { generatePlantInquiryLink } from '@/lib/utils/whatsapp';
import { CATEGORIES, CARE_LEVELS } from '@/lib/constants';

interface PlantDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PlantDetailPageProps) {
  const { id } = await params;
  const plant = getPlantById(id);

  if (!plant) {
    return {
      title: 'Plant Not Found',
      description: 'The plant you are looking for does not exist.',
    };
  }

  return {
    title: `${plant.name} | Shree Ram Nursery`,
    description: plant.description,
  };
}

export default async function PlantDetailPage({ params }: PlantDetailPageProps) {
  const { id } = await params;
  const plant = getPlantById(id);

  if (!plant) {
    notFound();
  }

  const whatsappLink = generatePlantInquiryLink(plant.name);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Home</Link>
            <span>/</span>
            <Link href="/catalog" className="hover:text-green-600">Catalog</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{plant.name}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col gap-4">
            <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg relative overflow-hidden flex items-center justify-center text-green-700 font-semibold text-xl">
              {plant.image ? (
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span>{plant.name}</span>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div>
            {/* Title and Botanical Name */}
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{plant.name}</h1>
            <p className="text-lg text-gray-600 italic mb-6">{plant.botanicalName}</p>

            {/* Badges */}
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-semibold text-sm">
                {CATEGORIES[plant.category]}
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-semibold text-sm">
                {CARE_LEVELS[plant.careLevel]} Care
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Description</h3>
              <p className="text-gray-700 leading-relaxed">{plant.description}</p>
            </div>

            {/* Care Information */}
            <div className="mb-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">☀️️</div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sunlight</p>
                  <p className="text-gray-600">{plant.sunlight}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">💧</div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Watering</p>
                  <p className="text-gray-600">{plant.watering || plant.water}</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Benefits</h3>
              <ul className="space-y-2">
                {plant.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition text-center text-lg"
              >
                Enquire Now on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-6 rounded-lg transition text-center text-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Related Plants Link */}
            <Link
              href="/catalog"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              ← Back to Catalog
            </Link>
          </div>
        </div>

        {/* Additional Care Tips Section */}
        <div className="mt-12 p-8 bg-green-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Care Tips</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The {plant.name} is a wonderful addition to any space. With {CARE_LEVELS[plant.careLevel].toLowerCase()} care requirements, it&apos;s perfect for both beginners and experienced plant parents. Remember to provide {plant.sunlight.toLowerCase()} and follow a regular watering schedule as described above.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For more personalized care advice and recommendations on other plants that pair well with the {plant.name}, feel free to reach out to our expert team via WhatsApp or contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
