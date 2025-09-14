# 📝 Minimal To-Do App MVP

A modern, responsive task management application built with Next.js and Tailwind CSS. Organize your tasks by categories with an intuitive interface that supports both predefined and custom categories.


![ToDo App Preview](<../Preview Image.png>)


## ✨ Features

### Core Functionality
- ✅ **Add, Edit, Delete Tasks** - Complete CRUD operations
- ✅ **Mark Tasks Complete/Incomplete** - Visual feedback with checkboxes
- ✅ **Task Descriptions** - Optional detailed descriptions with inline editing
- ✅ **Category Organization** - Predefined categories (Work, Personal, Health) + custom categories
- ✅ **LocalStorage Persistence** - Tasks survive browser refreshes
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

### Enhanced Features
- 🎨 **Dynamic Color Coding** - Consistent colors for categories
- 🖱️ **Inline Editing** - Click any task to edit title and description
- 🎯 **Smart Category System** - Predefined categories prioritized, unlimited custom categories
- 📱 **Mobile-First Design** - Optimized for all screen sizes
- ⚡ **Fast Performance** - Built with Next.js 15 and Tailwind CSS v4

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm 9.0 or later

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdo-ashraf/simple-ToDo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Browser LocalStorage
- **Development**: ESLint, Turbopack

## 📁 Project Structure

```
todo-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main dashboard page
│   ├── components/
│   │   ├── Task.tsx             # Individual task component
│   │   ├── CategorySection.tsx  # Category grouping component
│   │   └── AddTaskModal.tsx     # Add task modal/form
│   ├── hooks/
│   │   └── useTasks.ts          # Custom hook for task management
│   ├── utils/
│   │   └── localStorage.ts      # LocalStorage utility functions
│   └── types/
│       └── task.ts              # TypeScript interfaces
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.ts              # Next.js configuration
```

## 🎯 Usage

### Adding Tasks
1. Click the floating "+" button in the bottom right
2. Enter a task title (required)
3. Add an optional description
4. Select a category (Work, Personal, Health, or create custom)
5. Click "Add Task"

### Managing Tasks
- **Edit**: Click anywhere on a task to edit title and description
- **Complete**: Check the checkbox to mark as complete
- **Delete**: Click the trash icon to remove a task
- **Save Changes**: Press Enter or click "Save" button
- **Cancel**: Press Escape or click "Cancel" button

### Categories
- **Predefined**: Work (Blue), Personal (Green), Health (Red)
- **Custom**: Create unlimited custom categories with dynamic colors
- **Organization**: Predefined categories appear first, followed by custom ones

## 🎨 Design System

### Color Palette
- **Work**: Blue (#3B82F6)
- **Personal**: Green (#10B981)
- **Health**: Red (#EF4444)
- **Custom Categories**: Dynamic colors (Purple, Orange, Pink, Indigo, Teal, Cyan, Lime, Amber)

### Typography
- **Headings**: Bold, dark gray (#111827)
- **Body Text**: Medium gray (#374151)
- **Descriptions**: Light gray (#6B7280)
- **Completed Tasks**: Muted with strikethrough

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Development Server
The app runs on [http://localhost:3000](http://localhost:3000) by default. If port 3000 is in use, Next.js will automatically use the next available port.

### Building for Production
```bash
npm run build
npm run start
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full layout with sidebar and detailed views
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Compact design with floating action button

## 💾 Data Storage

Tasks are stored in the browser's LocalStorage, which means:
- ✅ Data persists across browser sessions
- ✅ No server required
- ✅ Works offline
- ⚠️ Data is tied to the specific browser/device

## 🧪 Testing

The application has been thoroughly tested for:
- ✅ Core functionality (CRUD operations)
- ✅ LocalStorage persistence
- ✅ Responsive design
- ✅ Cross-browser compatibility
- ✅ Edge cases and error handling


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Inspired by modern task management applications

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Review the code examples

---

**Made with ❤️ using Next.js and Tailwind CSS**