export interface Task {
  id: string;
  title: string;
  description?: string;
  category: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskCategory = string;

export interface CreateTaskData {
  title: string;
  description?: string;
  category: TaskCategory;
}

export interface UpdateTaskData {
  title?: string;
  description?: string;
  category?: TaskCategory;
  completed?: boolean;
}
