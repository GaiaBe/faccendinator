const STORAGE_KEY = 'faccendinator_data';

export const loadState = <T>(key: string): T | null => {
  try {
    const serializedState = localStorage.getItem(`${STORAGE_KEY}_${key}`);
    if (serializedState === null) return null;
    return JSON.parse(serializedState);
  } catch {
    return null;
  }
};

export const saveState = <T>(key: string, state: T): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(`${STORAGE_KEY}_${key}`, serializedState);
  } catch {
    console.error('Could not save state');
  }
};