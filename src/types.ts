export type Screen = 
  | 'home' 
  | 'services' 
  | 'pricing-enquiry' 
  | 'book-appointment'
  | 'tv-repair-johannesburg'
  | 'samsung-tv-repair-johannesburg'
  | 'lg-tv-repair-johannesburg'
  | 'hisense-tv-repair-johannesburg'
  | 'appliance-repair-johannesburg'
  | 'appliance-repair-roodepoort'
  | 'appliance-repair-krugersdorp'
  | 'fridge-repair-johannesburg'
  | 'washing-machine-repair-johannesburg'
  | 'samsung-tv-repair'
  | 'lg-tv-repair'
  | 'hisense-tv-repair'
  | 'smart-tv-repair'
  | 'appliance-repair-pretoria';

export type TransitionType = 'none' | 'push';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Refrigeration' | 'Laundry' | 'Cooking' | 'Electronics' | 'Commercial';
  tagline: string;
  description: string;
  commonIssues: string[];
  brands: string[];
  estTime: string;
  priceRange: string;
  warranty: string;
  iconName: string;
  popular?: boolean;
}

export interface BookingFormData {
  appliance: string;
  brand: string;
  model: string;
  issueDescription: string;
  symptoms: string[];
  serviceDate: string;
  timeSlot: string;
  isUrgent: boolean;
  fullName: string;
  phone: string;
  email?: string;
  streetAddress: string;
  suburb: string;
  notes: string;
}
