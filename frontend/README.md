# RossCool Care - React Website

A modern, responsive React website for RossCool Care appliance repair services, converted from the original HTML/CSS/JS website while maintaining the exact same design and color scheme.

## Features

- 🎨 **Preserved Design**: Maintains the exact same color scheme and visual design as the original
- ⚛️ **Modern React**: Built with React functional components and hooks
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🚀 **Smooth Navigation**: Implemented smooth scrolling between sections
- 📋 **Interactive Contact Form**: Functional contact form with validation and feedback
- 🎯 **Component-Based**: Clean, modular component architecture
- 💅 **CSS Modules**: Each component has its own CSS file for better maintainability

## Color Scheme

- **Primary**: `#4fd1c7` (Teal)
- **Gradients**: 
  - Header/Features: `#1a365d` to `#2d5a87`
  - Hero: `#667eea` to `#764ba2`
- **Backgrounds**: `#f8fafc`, `white`
- **Text**: `#2d3748`, `#666`

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Brands/
│   │   ├── Features/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Installation & Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173` to view the website

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Components

### Header
- Fixed navigation bar with smooth scrolling
- Responsive design with mobile menu
- Company logo and contact information
- Scroll-based transparency effect

### Hero
- Eye-catching gradient background
- Call-to-action buttons
- Animated content loading

### Services
- Grid layout of service cards
- Hover effects and animations
- Service icons and descriptions

### Brands
- Authorized partner brands showcase
- Responsive grid layout
- Hover animations

### Features
- "Why Choose Us" section
- Feature highlights with icons
- Gradient background

### Contact
- Interactive contact form
- Form validation and feedback
- Company contact information
- Responsive two-column layout

### Footer
- Company information
- Quick links with smooth scrolling
- Social media links
- Copyright information

## Technologies Used

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with flexbox and grid
- **Modern JavaScript (ES6+)** - Component logic

## Key Features Implemented

✅ Responsive design across all screen sizes
✅ Smooth scrolling navigation
✅ Interactive contact form with validation
✅ Header scroll effects
✅ Component-based architecture
✅ Exact color scheme preservation
✅ Mobile-optimized navigation
✅ Form submission handling
✅ Loading states and animations
✅ SEO-friendly structure

## Notes

- Authentication features (Register/Login) have been removed as requested
- All content has been updated to reflect "RossCool Care" branding
- Contact information and company details have been updated
- No backend integration is currently implemented
- Form submissions show success messages without server communication

## Future Enhancements

- Backend integration for form submissions
- Email notification system
- Service booking calendar
- Customer dashboard (if needed)
- Performance optimizations
- SEO improvements
