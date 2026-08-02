import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '../constants';

/**
 * Generate a WhatsApp link with pre-filled message
 * @param message - The message to pre-fill
 * @param phone - The phone number (with country code, without +)
 * @returns The WhatsApp link
 */
export function generateWhatsAppLink(message: string, phone: string = BUSINESS_INFO.whatsappPhone): string {
  // URL encode the message
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Generate a WhatsApp link for plant inquiry
 * @param plantName - The name of the plant
 * @returns The WhatsApp link
 */
export function generatePlantInquiryLink(plantName: string): string {
  const message = WHATSAPP_MESSAGES.plantInquiry(plantName);
  return generateWhatsAppLink(message);
}

/**
 * Generate a WhatsApp link for general inquiry
 * @returns The WhatsApp link
 */
export function generateGeneralInquiryLink(): string {
  return generateWhatsAppLink(WHATSAPP_MESSAGES.generalInquiry);
}
