## Problem Statement
Consumers want to support eco-friendly and local brands but struggle to find trustworthy, transparent, and easily accessible sources. Existing online marketplaces often lack a focus on sustainability, local products, and community engagement, making it challenging for environmentally conscious consumers to make informed shopping choices and connect with sustainable brands.

## Solution
Econest provides a centralized, Eco-friendly Marketplace to list products from local and sustainable brands. User reviews and ratings enable users to evaluate products based on their sustainability and quality. Community tips and articles allow users to share tips, articles, and experiences about sustainable shopping practices. Wishlists and shopping lists enable users to curate lists that promote mindful shopping. Brand profiles provide detailed pages for brands highlighting their eco-certifications and sustainability practices.

## Technologies Used
Language: JavaScript (ES6+)
Framework/Library: React.js (with Create React App for bootstrapping)
Styling: Tailwind CSS (@tailwindcss/forms, @tailwindcss/aspect-ratio)
Routing: React Router DOM
State Management: React Context API (for Auth and Cart)
Authentication: Firebase Authentication (integrated with Google Sign-In)
PI Communication: Fetch API (or Axios)
Deployment CI/CD: GitHub Actions
Hosting: Netlify, Render, Firebase Hosting

## Prerequisites
Before you begin, ensure you have the following installed:
Node.js: v18.x.x or higher
npm: (Comes with Node.js) or Yarn

## Installation
Clone the repository:
```
git clone https://github.com/SteanHeta/Econest-frontend.git
cd Econest-frontend
```
Install dependencies:
```
npm install # or yarn install
```
## Running the Application
To start the frontend development server:
```
npm start # or yarn start
```
The application will typically open in your browser at http://localhost:3000.

## Configuration
Tailwind CSS: Configured via tailwind.config.js at the project root.
React Router: Client-side routing is handled in src/App.jsx. Remember the basename property for GitHub Pages deployments.
Firebase: Initialized in src/firebase.js using environment variables.

## Project Structure
The project follows a standard Create React App structure:
public/: Static assets, index.html, and 404.html for routing fallbacks.
src/: Main application source code.
src/App.jsx: Main application component and React Router setup.
src/index.jsx: Entry point for the React application.
src/components/: Reusable UI components (e.g., Header, Footer, ProductCard).
src/pages/: Top-level components representing different routes/pages (e.g., HomePage, ProductsPage).
src/context/: React Context providers for global state (e.g., AuthContext, CartContext).
src/services/: Modules for API calls and authentication logic (e.g., api.jsx, authService.jsx).
src/assets/: Images, icons, or other static assets used within components.
src/index.css: Main CSS file, including Tailwind CSS directives.
src/firebase.js: Firebase initialization.

## Contributing
Contributions are welcome! Please follow these steps:
Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'feat: Add new feature X').
Push to the branch (git push origin feature/your-feature-name).
Open a Pull Request.

## License
[License](./License)