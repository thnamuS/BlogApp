# StudentCourseReg
Project using MERN STACK

Test    



# Blogging Platform

![Project Logo](project-logo.png) <!-- If available, include a logo or banner image -->

This project consists of a full-stack blogging platform, comprising both a React frontend and an Express backend, allowing users to register, log in, create, edit, and view blog posts.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Routes](#api-routes)
6. [Contributing](#contributing)
7. [License](#license)

## About

The Blogging Platform is built with React.js for the frontend and Express.js for the backend. It uses MongoDB as the database for storing user information and blog posts. The frontend provides a user-friendly interface for interacting with the backend API to perform various blogging tasks.

## Features

- User authentication: Register new users and log in with existing accounts.
- Blog post management: Create, edit, and delete blog posts with ease.
- Image upload: Upload cover images for blog posts to enhance their visual appeal.
- User profile: View and manage user profiles, including personal information and posts.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both the frontend and backend:

```bash
cd frontend
npm install
cd ../backend
npm install



Ensure MongoDB is installed and running on your system.
Update the MongoDB connection string in the backend app.js file.
Start the backend server:

cd backend
npm start
Start the frontend development server:

cd frontend
npm start
Usage
Once both the frontend and backend servers are running, you can access the blogging platform through your web browser. The frontend will be available at http://localhost:3000, while the backend API will be accessible at http://localhost:3001.

API Routes
POST /register: Register a new user with a username and password.
POST /login: Log in with an existing username and password to receive a JWT token.
GET /profile: Retrieve user profile information using a JWT token.
POST /logout: Log out by clearing the JWT token.
POST /post: Create a new blog post with a title, summary, content, and optional cover image.
GET /post: Retrieve a list of blog posts with pagination support.
GET /post/:id: Retrieve a specific blog post by ID.
PUT /post: Update an existing blog post by ID.
Contributing
Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines outlined in the respective frontend and backend directories.

