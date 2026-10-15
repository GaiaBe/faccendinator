import type { Chore } from '../types';

export const defaultChores: Chore[] = [
  // Quotidiane
  { id: 'dishes', name: 'Lavare i piatti', nameEn: 'Wash dishes', frequency: 'daily', estimatedMinutes: 15 },
  { id: 'tidy', name: 'Riordinare casa', nameEn: 'Tidy up', frequency: 'daily', estimatedMinutes: 10 },
  { id: 'cooking', name: 'Cucinare', nameEn: 'Cook', frequency: 'daily', estimatedMinutes: 45 },
  { id: 'trash', name: 'Svuotare cestino', nameEn: 'Empty trash', frequency: 'daily', estimatedMinutes: 5 },
  
  // Settimanali
  { id: 'vacuum', name: 'Aspirapolvere', nameEn: 'Vacuum', frequency: 'weekly', estimatedMinutes: 30 },
  { id: 'mopping', name: 'Lavare i pavimenti', nameEn: 'Mop floors', frequency: 'weekly', estimatedMinutes: 40 },
  { id: 'laundry', name: 'Lavatrice', nameEn: 'Laundry', frequency: 'weekly', estimatedMinutes: 60 },
  { id: 'bathroom', name: 'Pulire bagno', nameEn: 'Clean bathroom', frequency: 'weekly', estimatedMinutes: 25 },
  { id: 'kitchen', name: 'Pulire cucina', nameEn: 'Clean kitchen', frequency: 'weekly', estimatedMinutes: 20 },
  { id: 'dusting', name: 'Spolverare', nameEn: 'Dusting', frequency: 'weekly', estimatedMinutes: 15 },
  
  // Mensili
  { id: 'fridge', name: 'Pulire frigo', nameEn: 'Clean fridge', frequency: 'monthly', estimatedMinutes: 30 },
  { id: 'oven', name: 'Pulire forno', nameEn: 'Clean oven', frequency: 'monthly', estimatedMinutes: 45 },
  { id: 'windows', name: 'Pulire finestre', nameEn: 'Clean windows', frequency: 'monthly', estimatedMinutes: 40 },
  { id: 'closets', name: 'Riordinare armadi', nameEn: 'Organize closets', frequency: 'monthly', estimatedMinutes: 60 },
];