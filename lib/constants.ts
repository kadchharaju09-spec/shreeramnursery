export const BUSINESS_INFO = {
  name: 'Shree Ram Nursery',
  phone: '+917862925844',
  whatsappPhone: '917862925844', // Without + for WhatsApp link
  description: 'Your one-stop destination for premium indoor and outdoor plants, herbs, and flowering varieties.',
  address: 'Shree Ram Nursery, [Your City], India',
  email: 'info@shreeram-nursery.com',
};

export const WHATSAPP_MESSAGES = {
  plantInquiry: (plantName: string) => `Hi, I'm interested in ${plantName} from Shree Ram Nursery. Could you share more details?`,
  generalInquiry: 'Hi, I\'d like to know more about plants available at Shree Ram Nursery.',
};

export const CATEGORIES = {
  indoor: 'Indoor Plants',
  outdoor: 'Outdoor Plants',
  flowering: 'Flowering Plants',
  succulent: 'Succulents',
  herb: 'Herbs',
  fruit: 'Fruit Plants',
} as const;

export const CARE_LEVELS = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Difficult',
} as const;
