export const getToday = (): string => new Date().toISOString().split('T')[0];

export const getDayOfWeek = (): number => new Date().getDay();

export const isToday = (date: string): boolean => date === getToday();

export const formatDayName = (day: number): string => {
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  return days[day];
};

export const WeekDays = [
  {id: 1, label: 'mon'},
  {id: 2, label: 'tue'},
  {id: 3, label: 'wed'},
  {id: 4, label: 'thu'},
  {id: 5, label: 'fri'},
  {id: 6, label: 'sat'},
  {id: 0, label: 'sun'},
 ];

export type WeekDays = (typeof WeekDays)[keyof typeof WeekDays];