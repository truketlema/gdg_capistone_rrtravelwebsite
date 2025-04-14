# Rebel Rover Travel Website - React Capstone

A modern travel booking platform built with React, integrating with MockAPI for dynamic travel destination data.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Rebel Rover is a React-based travel booking platform that allows users to:
- Browse featured travel destinations
- Search and filter destinations by country and price
- Complete multi-step booking process
- Manage their profile and booking history

The project was developed as a capstone to demonstrate React proficiency, including component architecture, state management, and API integration.

## Features

### Pages & Functionality
- **Home Page**: Hero banner, featured destinations, testimonials
- **Destinations Page**: Searchable grid with filters (price, country)
- **Booking Flow**: Multi-step form with date picker
- **User Profile**: Booking history and account settings

### Technical Highlights
- Responsive design with Tailwind CSS
- Dynamic data fetching from MockAPI
- React Router for navigation
- Context API for state management
- Form validation

## Technologies

- **Frontend**: 
  - React 18
  - React Router 6
  - Tailwind CSS
  - React Icons
  - Date-fns (for date handling)

- **Backend Simulation**:
  - MockAPI.io

- **Build Tools**:
  - Vite
  - ESLint
  - Prettier

## Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rebel-rover-travel.git
   cd rebel-rover-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## API Integration

The project uses the following MockAPI endpoints:

### Destinations
- **Base URL**: `https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations`
- **Methods**:
  - `GET`: Fetch all destinations
  - `POST`: Create new destination (admin)
  - `PUT`: Update destination (admin)
  - `DELETE`: Remove destination (admin)
 
### Deployment

```
https://rebel-rover-tt.netlify.app/
```
## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Design Reference**: [Figma Design](https://www.figma.com/file/your-design-link)  
**API Documentation**: [MockAPI Guide](https://mockapi.io/docs)  

Built with ❤️ by Team 4 as a React capstone project.
