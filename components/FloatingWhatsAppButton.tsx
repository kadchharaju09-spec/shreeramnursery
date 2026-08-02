'use client';

import { generateGeneralInquiryLink } from '@/lib/utils/whatsapp';

export function FloatingWhatsAppButton() {
  const whatsappLink = generateGeneralInquiryLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50 flex items-center justify-center animate-pulse"
      title="Chat with us on WhatsApp"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.29-2.12C10.21 21.48 11.05 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-.87 0-1.72-.22-2.49-.61l-.18-.1-1.85.62.63-1.81-.1-.16C4.7 15.86 4 14.05 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.89-9.01c-.18-.09-1.08-.53-1.25-.59-.16-.05-.29-.09-.41.1-.13.19-.48.59-.59.71-.1.12-.21.13-.39.04-.18-.09-.75-.28-1.43-.88-.53-.47-.89-1.04-1-1.22-.1-.18-.01-.28.08-.37.07-.07.16-.19.25-.29.08-.1.11-.17.17-.29.06-.12.03-.22-.02-.31-.05-.09-.41-1-.56-1.37-.15-.34-.29-.29-.41-.29-.1 0-.21-.01-.32-.01-.1 0-.28.04-.43.2-.14.17-.55.53-.55 1.3s.56 1.51.64 1.61c.08.1 1.12 1.7 2.7 2.38.37.16.66.26.88.34.37.12.71.1.98-.06.3-.19.48-.49.54-.99.05-.4.02-.77-.03-.85-.05-.09-.18-.14-.38-.23z" />
      </svg>
    </a>
  );
}
