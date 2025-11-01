# Supercars Showcase

## Overview

A premium web application showcasing high-performance supercars from leading manufacturers including Lamborghini, Ferrari, McLaren, Porsche, Bugatti, Aston Martin, and Koenigsegg. The application features a modern, dark-themed interface with dynamic brand color theming, 3D visualization capabilities, and interactive galleries. Built as a single-page application (SPA) with rich animations and responsive design, it delivers an immersive automotive showcase experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (November 2025)

### Migration from Lovable to Replit
- Configured Vite server for Replit environment (port 5000, host 0.0.0.0)
- Set up Replit workflow and deployment configuration
- All dependencies installed and working

### React Three Fiber 3D Canvas - PRODUCTION READY
- **Fixed critical error**: Installed react-reconciler@0.29.2 to resolve "Cannot read properties of undefined (reading 'S')" error
- **Enabled 3D canvas**: Changed show3D default from false to true in HeroSection
- **Added production-ready GLB model loading**: Car3DCanvas now supports loading 3D car models from public/models/
- **Error handling**: Implemented Model3DErrorBoundary class for safe fallback to placeholder
- **Multi-material support**: Handles both single materials and Material[] arrays
- **Material preservation**: Clones existing materials to preserve all properties (maps, transparency, emissive, etc.)
- **Theme integration**: Automatically applies theme color to loaded models while preserving original material properties
- **Current state**: Displays placeholder box until car.glb is added to public/models/

See MIGRATION_COMPLETE.md for full details and instructions on adding 3D car models.

## System Architecture

### Frontend Architecture

**Framework Stack:**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal performance with hot module replacement
- **React Router** for client-side routing with a catch-all 404 handler

**UI Component System:**
- **shadcn/ui** components built on Radix UI primitives, providing accessible, customizable components
- **Tailwind CSS** for utility-first styling with extensive custom design tokens
- **CSS Variables** system for dynamic theming (HSL color format required for all theme colors)

**Animation & Interaction:**
- **Framer Motion** for declarative animations and page transitions
- **GSAP** for advanced performance-oriented animations (used in PerformanceSection)
- **React Three Fiber** and **Drei** for 3D canvas rendering with WebGL

**State Management:**
- **React Context API** (ThemeContext) for global theme color management
- **TanStack Query (React Query)** for server state management (infrastructure in place)
- Local component state using React hooks

**Design System:**
- Dark theme as primary with matte black backgrounds (HSL: 0 0% 4%)
- Dynamic brand color theming that changes based on selected car
- Glassmorphism UI pattern (glass-panel class with backdrop blur and transparency)
- Responsive breakpoints: mobile (< 768px), tablet, desktop (2xl: 1400px)

### Component Architecture

**Page Structure:**
- Single-page layout with four main sections: Hero, Gallery, Performance, Contact
- Lazy-loaded 3D components for performance optimization
- Error boundary implementation for 3D model loading failures

**Key Components:**
- `Car3DCanvas`: WebGL-based 3D viewer with orbit controls, supports GLB model loading with metallic material rendering
- `CarCard`: Interactive car showcase cards with hover effects and theme-aware styling
- `ThemeProvider`: Context provider managing dynamic color theming across the application
- `ScrollIndicator`: Animated scroll prompt for improved navigation UX

**Section Components:**
- `HeroSection`: Full-screen introduction with 3D canvas integration and CTA
- `GallerySection`: Car carousel/grid with active selection and theme switching
- `PerformanceSection`: GSAP-animated performance metric comparison bars
- `ContactSection`: Contact form with toast notifications

### Data Layer

**Static Data:**
- Car catalog stored in `src/data/cars.ts` with typed interfaces
- Each car includes: specs (HP, torque, 0-100, top speed, engine), brand colors (hex + RGB), images, descriptions
- Images imported from `src/assets/cars/` directory

**Type Definitions:**
- Strong TypeScript typing throughout with custom interfaces (Car, CarCardProps, etc.)
- Relaxed compiler strictness settings (strict: false) for rapid development

### Styling Architecture

**Tailwind Configuration:**
- Custom color system using HSL CSS variables
- Extended theme with sidebar, chart, and custom color palettes
- CSS custom properties for dynamic theming: `--theme-color`, `--theme-rgb`
- Glassmorphism utilities: `--glass-bg`, `--glass-border`

**Animation System:**
- Framer Motion variants for consistent animation patterns
- GSAP timeline animations for performance bars
- CSS transitions for hover states and micro-interactions

### 3D Rendering System

**React Three Fiber Setup:**
- Canvas component with lazy loading and Suspense boundaries
- OrbitControls for user interaction (drag to rotate, scroll to zoom)
- Environment lighting for realistic material rendering
- Model3DErrorBoundary for graceful fallback to placeholder geometry

**3D Asset Pipeline:**
- GLB format support for car models (placed in `public/models/`)
- Fallback placeholder: Simple box geometry with theme-colored metallic material
- Material properties: 90% metalness, 10% roughness for premium appearance

### Build & Development

**Build Configuration:**
- Vite config with React SWC plugin for fast refresh
- Component auto-tagging in development mode (lovable-tagger)
- Path aliases: `@/` → `src/`, `@assets/` → `attached_assets/`
- Optimized dependencies: three.js, @react-three/fiber, @react-three/drei pre-bundled

**Development Server:**
- Runs on port 5000 with host 0.0.0.0 for network access
- Hot module replacement enabled
- ESLint configured with relaxed rules for unused variables

### Performance Considerations

**Optimization Strategies:**
- Lazy loading of 3D canvas to reduce initial bundle size
- Image optimization expected (car images loaded from assets)
- React.memo and useMemo opportunities for component optimization
- Vite's code-splitting and tree-shaking enabled by default

**Known Issues:**
- React Three Fiber reconciler compatibility with React 18.3 (documented in attached_assets)
- 3D canvas currently disabled by default (show3D hardcoded to false in HeroSection)

## External Dependencies

### UI Framework & Components
- **@radix-ui/***: Headless UI primitives for accessibility (accordion, dialog, dropdown, popover, etc.)
- **shadcn/ui**: Pre-styled component library built on Radix UI
- **lucide-react**: Icon library for UI elements

### Animation & 3D
- **framer-motion**: Declarative animations and gesture handling
- **gsap**: High-performance animation engine
- **@react-three/fiber**: React renderer for three.js
- **@react-three/drei**: Helper components for R3F (OrbitControls, Environment, useGLTF)
- **three**: WebGL 3D library (v0.169.0)

### Forms & Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Validation resolver integrations
- **zod** (implied by resolver usage): Schema validation

### Utilities
- **clsx** & **tailwind-merge**: Conditional className utilities
- **date-fns**: Date manipulation and formatting
- **class-variance-authority**: Type-safe variant props for components

### Development Tools
- **TypeScript**: Static type checking
- **ESLint**: Code linting with React and TypeScript configs
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **vite**: Build tool and dev server

### Carousel & Interaction
- **embla-carousel-react**: Touch-enabled carousel component
- **cmdk**: Command menu/palette component
- **vaul**: Drawer/bottom sheet component
- **sonner**: Toast notification system

### State & Data
- **@tanstack/react-query**: Server state management and caching
- **react-router-dom**: Client-side routing

### Styling
- **tailwindcss**: Utility-first CSS framework
- **autoprefixer**: CSS vendor prefixing

### Meta & SEO
- Configured meta tags for Open Graph and Twitter Cards
- robots.txt configured for major search engines (Google, Bing, Twitter, Facebook)