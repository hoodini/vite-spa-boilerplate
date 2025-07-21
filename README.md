# Vite SPA Boilerplate

A modern Single Page Application (SPA) boilerplate built with Vite for fast development and optimized production builds.

## Features

- Lightning fast HMR (Hot Module Replacement)
- Optimized build with rollup
- Modern JavaScript (ES6+)
- Development server with instant server start
- Production-ready build optimization

## Prerequisites

- Node.js (version 14.18+ or 16+)
- npm or yarn

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/hoodini/vite-spa-boilerplate.git
cd vite-spa-boilerplate
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
vite-spa-boilerplate/
├── index.html          # Entry HTML file
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── public/            # Static assets
├── src/               # Source files
│   ├── main.js        # Application entry point
│   ├── style.css      # Global styles
│   └── counter.js     # Example component
└── README.md          # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.