import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">{BUSINESS_INFO.name}</h3>
            <p className="text-sm">{BUSINESS_INFO.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/catalog" className="hover:text-green-400 transition">Catalog</Link></li>
              <li><Link href="/about" className="hover:text-green-400 transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-white mb-3">Contact</h3>
            <p className="text-sm mb-2">Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-green-400 transition">{BUSINESS_INFO.phone}</a></p>
            <p className="text-sm mb-2">Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-green-400 transition">{BUSINESS_INFO.email}</a></p>
            <p className="text-sm">{BUSINESS_INFO.address}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
