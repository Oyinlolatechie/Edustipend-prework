# Node.js Service

This is a Node.js service that provides logged in users two GET API endpoints for retrieving comments and posts from the JSONPlaceholder API.

## Prerequisites

- Node.js (version 10 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd Edustipend

3. Install all dependencies:
   npm install

## Usage

1. Start the Node.js server:
   npm start
   This will start the server on http://localhost:3000.

2. Open your web browser or use an API testing tool (e.g., Postman) to access the following endpoints:

POST /auth/signup - To create a user account with username, email and password
GET /auth/sigin - To login a user with email and password
GET /api/comments - Retrieves comments from the JSONPlaceholder API.
GET /api/posts - Retrieves posts from the JSONPlaceholder API.
You can pass the limit query parameter to specify the number of items per page.

## Required Environment Variables

The following environment variables are required to run the service:

PORT: The port number on which the server will listen. (Default: 3000)
MongoDB_URI = "mongodb+srv://Oyinlola:Oyinlola@cluster0.51mxk5i.mongodb.net/?retryWrites=true&w=majority" ||(I created this cluster mainly for this assessment, in a real project i will never share the database URI!)
JWT_SECRET= "iggidrugirdsuvusvuiguufusgfiusecdzk"
