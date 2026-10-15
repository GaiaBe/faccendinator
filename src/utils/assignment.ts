import { type User, type Chore, type Assignment } from '../types';
import { getToday, getDayOfWeek } from './date';

export const shouldAssignToday = (chore: Chore, user: User): boolean => {
  const today = getDayOfWeek();
  
  if (chore.frequency === 'daily') {
    return user.daysHome.includes(today);
  }
  
  if (chore.frequency === 'weekly') {
    // Assegna il primo giorno a casa della settimana
    return user.daysHome[0] === today;
  }
  
  if (chore.frequency === 'monthly') {
    // Assegna il primo del mese se è un giorno a casa
    const isFirstOfMonth = new Date().getDate() === 1;
    return isFirstOfMonth && user.daysHome.includes(today);
  }
  
  return false;
};

export const createAssignment = (chore: Chore, user: User): Assignment => ({
  id: `${chore.id}-${user.id}-${getToday()}`,
  choreId: chore.id,
  userId: user.id,
  date: getToday(),
  completed: false,
});