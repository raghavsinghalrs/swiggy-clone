# SwiggyWebsite

Swiggy Clone Project
This is a Swiggy-like food delivery platform developed using Angular (version 17). The project is designed to replicate the basic functionality of the Swiggy homepage and provide an interactive experience for discovering restaurants and food items, managing favorites, adding items to a cart, and simulating a user authentication process.

Project Overview
The Swiggy Clone Project provides a food discovery experience with the following functionalities:

A well-designed homepage displaying featured restaurants and popular cuisines
Real-time search for restaurants and food items
A system to manage favorite food items
A cart feature with dynamic price calculation
Mock user authentication with Sign Up and Sign In capabilities
This project employs Angular's standalone components and uses static data for restaurant details and menu items, integrating MockAPI for user order and authentication data storage.

Features:
Homepage
Attractive layout showcasing featured restaurants and popular cuisines.
Search bar for filtering food items by name.
Uses static data to populate restaurant information and popular categories.
Favorites Management
Allows users to add food items to a favorites list.
Favorites are managed using Angular services or stored in localStorage to maintain the session.
Cart Simulation
Menu items on the restaurant detail page include an "Add to Cart" button.
Real-time price calculation and cart display.
Displays all selected items in a separate cart page with total cost information.
Authentication
Sign Up and Sign In functionality with user data stored on MockAPI.
Error handling for incorrect login details with user-friendly messages.
Seamless navigation between Sign In and Sign Up forms, with visual cues for active tabs.
Project Structure
The key components in the project are structured as follows:

HomeComponent: Displays the homepage with restaurant details and a search bar.
RestaurantDetailComponent: Shows details of selected restaurants along with their menu items.
CartComponent: Displays items added to the cart and the total cost.
SigninComponent: Manages user authentication with form validation for login and registration.
Services:
CartService: Manages items in the cart and provides dynamic pricing.
FavoriteService: Manages user's favorite items.
AuthService: Handles user authentication and MockAPI integration.
Technologies Used
Angular 17: Framework for building the frontend application.
 CSS: CSS framework used for responsive and visually appealing styling.
MockAPI: Used for managing user data and storing orders.
Getting Started
Prerequisites
Node.js (v14 or higher)
Angular CLI
Installation
Clone the repository:


git clone [repository_url]
cd swiggy-clone
Install the dependencies:


npm install
Start the development server:


ng serve
The application will run at http://localhost:4200.

Usage
Homepage: Browse featured restaurants, use the search bar, and select a restaurant to view details.
Favorites: Add food items to favorites and view them in the Favorites section.
Cart: Add items from the restaurant menu to the cart and view the total cost.
Authentication: Navigate to the Sign In page, where users can sign up or sign in. Registered users can log in with their credentials, and new users can sign up.

