'use client';

import { Task as TaskType } from '@/types/task';
import { Task } from './Task';

interface CategorySectionProps {
  category: string;
  tasks: TaskType[];
  onToggleComplete: (id: string) => void;
  onUpdateTask: (id: string, title: string) => void;
  onDeleteTask: (id: string) => void;
}

export const CategorySection = ({
  category,
  tasks,
  onToggleComplete,
  onUpdateTask,
  onDeleteTask,
}: CategorySectionProps) => {
  const getCategoryIcon = (category: string) => {
    // Special icons for predefined categories
    switch (category) {
      case 'Work':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
          </svg>
        );
      case 'Personal':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'Health':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        // Default tag icon for custom categories
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        );
    }
  };

  const getCategoryColor = (category: string) => {
    // Special colors for predefined categories
    switch (category) {
      case 'Work':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Personal':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Health':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        // Generate a consistent color based on category name hash for custom categories
        const colors = [
          'text-purple-600 bg-purple-50 border-purple-200',
          'text-orange-600 bg-orange-50 border-orange-200',
          'text-pink-600 bg-pink-50 border-pink-200',
          'text-indigo-600 bg-indigo-50 border-indigo-200',
          'text-teal-600 bg-teal-50 border-teal-200',
          'text-cyan-600 bg-cyan-50 border-cyan-200',
          'text-lime-600 bg-lime-50 border-lime-200',
          'text-amber-600 bg-amber-50 border-amber-200',
        ];
        
        // Simple hash function to get consistent color for same category
        let hash = 0;
        for (let i = 0; i < category.length; i++) {
          hash = ((hash << 5) - hash + category.charCodeAt(i)) & 0xffffffff;
        }
        
        return colors[Math.abs(hash) % colors.length];
    }
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-4">
      <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getCategoryColor(category)}`}>
        {getCategoryIcon(category)}
        <h2 className="text-lg font-semibold">{category}</h2>
        <span className="text-sm opacity-75">
          ({pendingTasks.length} pending, {completedTasks.length} completed)
        </span>
      </div>

      <div className="space-y-2">
        {pendingTasks.length === 0 && completedTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No {category.toLowerCase()} tasks yet</p>
            <p className="text-sm">Add your first task using the + button</p>
          </div>
        ) : (
          <>
            {pendingTasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onToggleComplete={onToggleComplete}
                onUpdate={onUpdateTask}
                onDelete={onDeleteTask}
              />
            ))}
            {completedTasks.length > 0 && (
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Completed</h3>
                {completedTasks.map(task => (
                  <Task
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onUpdate={onUpdateTask}
                    onDelete={onDeleteTask}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
