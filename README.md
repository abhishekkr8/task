# Rymbie Dashboard

A modern, responsive dashboard for Rymbie - an academic writing service platform. Built with React, Vite, and Tailwind CSS v4.

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Well-organized, maintainable code structure
- **React Router**: Client-side routing with layout and outlet system
- **Tailwind CSS v4**: Latest version with Vite plugin for optimal performance

## Tech Stack

- **React 18**: Latest React with hooks and modern patterns
- **Vite**: Fast build tool and development server
- **Tailwind CSS v4**: Utility-first CSS framework with Vite plugin
- **React Router DOM**: Client-side routing
- **Inter Font**: Modern, readable typography

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── HeroSection.jsx # Hero section with CTA
│   ├── FeaturesSection.jsx # Features list
│   └── HowItWorksSection.jsx # Process flow
├── layouts/            # Layout components
│   └── Layout.jsx      # Main layout with navbar and outlet
├── pages/              # Page components
│   └── Dashboard.jsx   # Main dashboard page
├── assets/             # Static assets
│   └── icons/          # Icon assets
├── App.jsx             # Main app component with router
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rymbie-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Key Features Implemented

### Navigation
- Responsive navbar with logo
- Navigation links (Home, How It Works, Services, AI Study Tools)
- Call-to-action buttons (Get started, Login/Register)

### Hero Section
- Compelling headline and sub-text
- Call-to-action buttons
- Decorative illustration placeholder

### Features Section
- Dark blue title section
- Two-column feature list with green checkmarks
- Responsive grid layout

### How It Works Section
- Three-step process flow with icons
- Connected arrows between steps
- Customer testimonial with star rating

## Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary colors (blues): `primary-50` to `primary-900`
- Secondary colors (yellows): `secondary-50` to `secondary-900`

### Components
All components are modular and can be easily customized:
- Update colors in the Tailwind config
- Modify component props for different content
- Add new sections by creating new components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
