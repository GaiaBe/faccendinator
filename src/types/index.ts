export interface User {
  id: string;
  name: string;
  daysHome: number[]; // 0=dom, 1= lun, ..., 6=sab
}

export type Frequency = 'daily' | 'weekly' | 'monthly';

export interface Chore {
  id: string;
  name: string;
  nameEn: string;
  frequency: Frequency;
  estimatedMinutes: number;
}

export interface Assignment {
  id: string;
  choreId: string;
  userId: string;
  date: string; // ISO date
  completed: boolean;
  completedAt?: string;
}

export interface AppState {
  users: User[];
  assignments: Assignment[];
  setupComplete: boolean;
}