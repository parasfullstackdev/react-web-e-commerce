# ShoppyGlobe E-commerce Application

A modern e-commerce application built with React, Redux Toolkit, and Tailwind CSS.

## Features

- Browse products with search functionality
- View detailed product information
- Add products to cart
- Manage cart items (update quantity, remove items)
- Responsive design for all screen sizes
- Code splitting and lazy loading for optimal performance

## Tech Stack

- React 18
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shoppy-globe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Cart/          # Cart related components
│   ├── Header/        # Header component
│   ├── Products/      # Product related components
│   └── NotFound/      # 404 page component
├── hooks/             # Custom React hooks
├── redux/             # Redux store and slices
├── App.jsx           # Main application component
└── main.jsx         # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
