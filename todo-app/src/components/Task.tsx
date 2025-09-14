'use client';

import { useState } from 'react';
import { Task as TaskType } from '@/types/task';

interface TaskProps {
  task: TaskType;
  onToggleComplete: (id: string) => void;
  onUpdate: (id: string, title: string, description?: string) => void;
  onDelete: (id: string) => void;
}

export const Task = ({ task, onToggleComplete, onUpdate, onDelete }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(task.id, editTitle.trim(), editDescription.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      setEditTitle(task.title);
      setEditDescription(task.description || '');
      setIsEditing(false);
    }
  };

  const getCategoryColor = (category: string) => {
    // Special colors for predefined categories
    switch (category) {
      case 'Work':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Personal':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Health':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        // Generate a consistent color based on category name hash for custom categories
        const colors = [
          'bg-purple-100 text-purple-800 border-purple-200',
          'bg-orange-100 text-orange-800 border-orange-200',
          'bg-pink-100 text-pink-800 border-pink-200',
          'bg-indigo-100 text-indigo-800 border-indigo-200',
          'bg-teal-100 text-teal-800 border-teal-200',
          'bg-cyan-100 text-cyan-800 border-cyan-200',
          'bg-lime-100 text-lime-800 border-lime-200',
          'bg-amber-100 text-amber-800 border-amber-200',
        ];
        
        // Simple hash function to get consistent color for same category
        let hash = 0;
        for (let i = 0; i < category.length; i++) {
          hash = ((hash << 5) - hash + category.charCodeAt(i)) & 0xffffffff;
        }
        
        return colors[Math.abs(hash) % colors.length];
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1"
        />
        
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                autoFocus
                placeholder="Task title..."
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 resize-none"
                rows={2}
                placeholder="Task description (optional)..."
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditTitle(task.title);
                    setEditDescription(task.description || '');
                    setIsEditing(false);
                  }}
                  className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setIsEditing(true)}>
              <div
                className={`font-medium ${
                  task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                }`}
              >
                {task.title}
              </div>
              {task.description && (
                <div
                  className={`text-sm mt-1 ${
                    task.completed ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {task.description}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(task.category)}`}>
            {task.category}
          </span>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
            title="Delete task"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
