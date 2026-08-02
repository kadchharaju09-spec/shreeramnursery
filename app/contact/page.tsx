'use client';

import { useState } from 'react';
import { generateGeneralInquiryLink } from '@/lib/utils/whatsapp';
import { BUSINESS_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Hide message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const whatsappLink = generateGeneralInquiryLink();

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="text-lg opacity-90">We&apos;d love to hear from you. Contact us for any inquiries.</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>

            {/* Address */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Our Location</h3>
              <p className="text-gray-700">{BUSINESS_INFO.address}</p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Phone</h3>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-green-600 hover:text-green-700 font-semibold text-lg"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="text-green-600 hover:text-green-700 font-semibold text-lg"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-2 text-gray-900">WhatsApp</h3>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.259c-1.538.755-2.836 1.779-3.7 3.114-1.83 2.902-1.934 6.817.2 9.839 1.12 1.633 2.79 2.956 4.624 3.61.228.072.461.108.696.108.566 0 1.134-.165 1.635-.49 1.532-.954 2.652-2.527 3.126-4.36.301-1.16.434-2.413.434-3.682 0-3.584-1.127-5.738-3.554-7.961-.74-.681-1.612-1.213-2.531-1.497z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-gray-900">Business Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-900">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <p className="text-gray-700 mb-3">
                Prefer quick chat? Contact us on WhatsApp for instant responses!
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Chat with us now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
