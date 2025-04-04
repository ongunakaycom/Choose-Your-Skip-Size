Summary
The Choose-Your-Skip-Size project is a front-end challenge where the goal is to redesign the skip selection page for a waste management service. Users can select a skip based on the size that suits their needs. This web application displays available skip sizes, hire periods, prices, and additional information while ensuring an engaging and responsive user interface.

The project includes a React application with responsive UI, styled using Bootstrap and custom CSS. The skip options are dynamically fetched from an API based on the user's location.

My Approach to Design & Development
1. UI/UX Design
The design focuses on providing a clean and user-friendly experience. Users can easily browse different skip options and see detailed information on each, such as price, hire period, and whether the skip can be placed on the road. I've used React with Bootstrap for layout and styling, focusing on making the interface mobile-friendly and responsive.

2. Component Structure
The main component, PremiumCards, is responsible for fetching skip data from the API and rendering it as interactive cards. Each skip card displays the skip size, price (excl. VAT), hire period, and its suitability for different waste types. On hover, the cards feature a slight tilt effect for better interactivity.

3. Fetching Data
Skip data is dynamically fetched from the following API:

Skip Data API

The API provides information such as skip sizes, hire periods, prices, and other relevant details.

4. React Features
useEffect: Used to handle side-effects, such as initializing hover effects for cards.

useState: Manages local state within the components (e.g., selected skip).

React Router: Set up for routing, allowing for easy navigation across the app (though currently not extensively used in this project).

Bootstrap: For responsiveness and quick layout design.

Custom CSS: Custom styles for animations and card hover effects.

Tools/Technologies Used
React: For building the user interface.

React Router: For routing (though not fully utilized in this challenge, it's set up for future scalability).

Bootstrap: For layout and responsive design.

CSS: Custom styling, including hover effects and animations.

Font Awesome: For icons (e.g., skip icon).

Vite: For fast development builds.

Node.js & npm: For managing dependencies.