# Personal Portfolio - Vlasov Oleksandr

A responsive, multi-language portfolio website built with React and Vite. It features a modern design inspired by Figma, including smooth animations, dark/light mode, and comprehensive localization support.

## Features

- **Responsive Design**: Fully responsive layout matching exact Figma specifications across mobile, tablet, and desktop devices.
- **Dark/Light Mode**: Elegant theme switching with custom CSS variables, persisting user preferences.
- **Multi-language Support**: Full translation system supporting French (default), English, Russian, and Ukrainian.
- **Smooth Animations**: Engaging UI transitions and entry animations powered by Framer Motion.
- **Projects Showcase**: Grid layout for highlighting featured projects and a dedicated page for all works.
- **Interactive Timeline**: Visually appealing chronological timeline for Education and Experience.
- **SEO Ready**: Dynamic SEO meta tags configured per page.

## Tech Stack

- **Framework**: React 18, Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: Vanilla CSS, CSS Variables for theming

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will generate optimized static assets in the `dist` directory, ready to be deployed.

## Project Structure

- `src/components/` - Reusable UI components (Buttons, Cards, Timeline, etc.)
- `src/pages/` - Main views (Home, About, Projects, Resume, Contact)
- `src/styles/` - Modular CSS files and global variables
- `src/context/` - React contexts for Language and Theme state
- `src/data/` - Static data, including all portfolio content and translations (`portfolio.js`)
- `src/assets/` - Static assets like local icons
