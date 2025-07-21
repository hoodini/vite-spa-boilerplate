# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite-based Single Page Application showcasing "MindWave AI" - a brain signal intelligence product landing page with Apple-inspired design.

## Essential Commands

### Development
```bash
npm run dev        # Start development server on http://localhost:5173
npm run build      # Create production build in dist/
npm run preview    # Preview production build locally
```

### Dependency Management
```bash
npm install        # Install dependencies

# If encountering rollup module errors on Windows:
rm -rf node_modules package-lock.json && npm install
npm install @rollup/rollup-win32-x64-msvc  # Install platform-specific dependency if needed
```

## Architecture

### Entry Points
- `index.html` - Single HTML entry point that loads the Vite app
- `src/main.js` - Main JavaScript file containing entire application logic and DOM manipulation
- `src/style.css` - Comprehensive stylesheet with Apple-inspired design system

### Key Design Patterns
1. **Dynamic Content Rendering**: All page content is rendered via JavaScript template literal in `main.js`
2. **Vanilla JavaScript**: No framework dependencies - uses native DOM APIs
3. **CSS Custom Properties**: Design tokens defined in `:root` for consistent theming
4. **Intersection Observer**: Used for scroll-triggered animations on sections and cards
5. **Smooth Scrolling**: Implemented for navigation anchor links

### CSS Architecture
- BEM-like naming convention (`.nav-container`, `.hero-content`)
- Responsive breakpoints: 1024px (tablet), 768px (mobile)
- Animation keyframes: `fadeInUp`, `pulse`, `float`, `rotate`
- Gradient variables for visual effects

### Current Implementation State
- **Active**: Landing page with hero, features, technology, pricing sections
- **Unused**: `counter.js` and `javascript.svg` from original boilerplate
- **No Configuration**: Vite runs with defaults (no `vite.config.js` exists despite README mention)

## Development Notes

- Hot Module Replacement (HMR) enabled by default
- No testing framework configured
- No linting or formatting tools set up
- Production builds output to `dist/` directory (gitignored)
