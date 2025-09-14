'use client';

import { useState } from 'react';
import { useTasks } from '@/hooks/useTasks';
import { CategorySection } from '@/components/CategorySection';
import { AddTaskModal } from '@/components/AddTaskModal';
import { TaskCategory } from '@/types/task';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
  } = useTasks();

  // Get unique categories from tasks, prioritizing predefined ones
  const allCategories = Array.from(new Set(tasks.map(task => task.category)));
  const predefinedCategories = ['Work', 'Personal', 'Health'];
  const customCategories = allCategories.filter(cat => !predefinedCategories.includes(cat));
  const categories = [...predefinedCategories.filter(cat => allCategories.includes(cat)), ...customCategories];

  const handleAddTask = (title: string, description: string, category: TaskCategory) => {
    addTask({ title, description, category });
  };

  const handleUpdateTask = (id: string, title: string, description?: string) => {
    updateTask(id, { title, description });
  };

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  const handleToggleComplete = (id: string) => {
    toggleTaskCompletion(id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">To-Do</h1>
          <p className="text-gray-600">Organize your tasks by category</p>
        </div>

        {/* Task Statistics */}
        {categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {categories.map(category => {
              const categoryTasks = tasks.filter(task => task.category === category);
              const pendingCount = categoryTasks.filter(task => !task.completed).length;
              const completedCount = categoryTasks.filter(task => task.completed).length;
              
              // Get category-specific colors
              const getCategoryDotColor = (cat: string) => {
                switch (cat) {
                  case 'Work': return 'bg-blue-500';
                  case 'Personal': return 'bg-green-500';
                  case 'Health': return 'bg-red-500';
                  default: return 'bg-purple-500';
                }
              };
              
              const getCategoryTextColor = (cat: string) => {
                switch (cat) {
                  case 'Work': return 'text-blue-600';
                  case 'Personal': return 'text-green-600';
                  case 'Health': return 'text-red-600';
                  default: return 'text-purple-600';
                }
              };
              
              return (
                <div key={category} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${getCategoryDotColor(category)} rounded-full`}></div>
                    <span className="font-medium text-gray-700">{category}</span>
                  </div>
                  <p className={`text-2xl font-bold ${getCategoryTextColor(category)} mt-2`}>
                    {categoryTasks.length}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {pendingCount} pending, {completedCount} completed
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Category Sections */}
        {categories.length > 0 ? (
          <div className="space-y-8">
            {categories.map(category => (
              <CategorySection
                key={category}
                category={category}
                tasks={tasks.filter(task => task.category === category)}
                onToggleComplete={handleToggleComplete}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
            <p className="text-gray-500 mb-4">Create your first task to get started</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Your First Task
            </button>
          </div>
        )}

        {/* Floating Add Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
          title="Add new task"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>

        {/* Add Task Modal */}
        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
}
