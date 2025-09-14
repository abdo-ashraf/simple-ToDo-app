import { Task } from '@/types/task';

const STORAGE_KEY = 'todo-app-tasks';

export const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, serializedTasks);
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
  }
};

export const loadTasksFromStorage = (): Task[] => {
  try {
    const serializedTasks = localStorage.getItem(STORAGE_KEY);
    if (serializedTasks === null) {
      return [];
    }
    
    const tasks = JSON.parse(serializedTasks);
    // Convert date strings back to Date objects
    return tasks.map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt),
      updatedAt: new Date(task.updatedAt),
    }));
  } catch (error) {
    console.error('Failed to load tasks from localStorage:', error);
    return [];
  }
};

export const clearTasksFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear tasks from localStorage:', error);
  }
};
