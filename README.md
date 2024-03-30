# Blog Site

Project using MERN STACK

# Blogging Platform

Welcome to the Blogging Platform! This project is a full-stack application built with React.js for the frontend and Express.js for the backend. It provides users with the ability to register, log in, create, edit, and view blog posts. This README.md serves as a guide to understand the project, install it locally, and contribute to its development.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Routes](#api-routes)
6. [Contributing](#contributing)

## About

The Blogging Platform aims to provide users with a seamless blogging experience. It leverages the power of React.js for the frontend, providing an intuitive user interface, and Express.js for the backend, handling data storage, authentication, and business logic. MongoDB serves as the database for storing user information and blog posts.

## Features

- **User Authentication**: Allow users to register new accounts and log in securely using passwords.
- **Blog Post Management**: Provide functionality to create, edit, and delete blog posts.
- **Image Upload**: Enable users to upload cover images for their blog posts to enhance visual appeal.
- **User Profiles**: Allow users to view and manage their profiles, including personal information and posts.

## Installation

To run the Blogging Platform locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/thnamuS/BlogApp.git
    ```

2. **Navigate to Project Directory**: Change your current directory to the cloned repository:

    ```bash
    cd BlogApp
    ```

3. **Install Dependencies**: Install frontend and backend dependencies separately:

    ```bash
    cd client
    npm install
    cd ../api
    npm install
    ```

4. **Set Up MongoDB**: Ensure MongoDB is installed and running on your system. Update the MongoDB connection string in the backend `app.js` file if necessary.

5. **Start Backend Server**: Start the backend Express server: here in my scripts i changes the scripts for run dev as nodemon index.js 

    ```bash
    cd api
    npm run dev
    ```

6. **Start Frontend Development Server**: Start the frontend development server:

    ```bash
    cd client
    npm run dev
    ```

7. **Access the Application**: Once both servers are running, access the blogging platform through your web browser. The frontend will be available at `http://localhost:5173`, while the backend API will be accessible at `http://localhost:3000`.

## Usage

The Blogging Platform provides an intuitive user interface for users to interact with. Here are some key functionalities:

- **Register**: Create a new account by providing a username and password.
- **Log In**: Log in with your existing credentials to access your account.
- **Create Post**: Write and publish new blog posts with titles, summaries, and content.
- **Edit Post**: Modify existing blog posts to update content or cover images.
- **View Posts**: Browse through the list of available blog posts, view individual posts, and read their content.

## API Routes

The backend API provides the following routes for interaction:

- `POST /register`: Register a new user with a username and password.
- `POST /login`: Log in with an existing username and password to receive a JWT token.
- `GET /profile`: Retrieve user profile information using a JWT token.
- `POST /logout`: Log out by clearing the JWT token.
- `POST /post`: Create a new blog post with a title, summary, content, and optional cover image.
- `GET /post`: Retrieve a list of blog posts with pagination support.
- `GET /post/:id`: Retrieve a specific blog post by ID.
- `PUT /post`: Update an existing blog post by ID.

https://github.com/thnamuS/BlogApp/assets/118098664/130bdecf-b9e1-43d2-927e-827884c8c46e

