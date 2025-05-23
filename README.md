Blog Platform :
A full-stack blogging platform comprising a Node.js/Express backend and a React frontend. This project enables users to create, read, update, and delete blog posts, offering a seamless blogging experience.

Project Overview : 
This platform is designed to provide a user-friendly interface for blogging. It includes features such as user authentication, post creation and editing, and responsive design to ensure accessibility across devices.

Approach to Solving the Problem Statement:
Modular Architecture: Separated concerns by dividing the project into blog_backend and blog_client directories, facilitating maintainability and scalability.

MySQL Database: Used relational data modeling for users and blog posts.

RESTful API Design: Implemented RESTful principles in the backend to ensure clear and efficient communication between client and server.

Responsive UI: Utilized modern CSS techniques to create a responsive and intuitive user interface.

State Management: Employed React's state management to handle user interactions and dynamic content rendering.


Use of AI in Development:
ChatGPT:- 
Provided guidance on best practices, debugging assistance, and explanations of complex concepts during development.
Explained backend concepts and guided in debugging issues.

Setup Instructions
Prerequisites
Node.js (v14 or higher)

npm (v6 or higher)

MySQL (for database)

Backend Setup (blog_backend):

Navigate to the backend directory:
cd blog_backend
Install dependencies:
npm install
Set up the .env file with your MySQL configuration:
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=blog_platform
PORT=5000
Import the database schema into your MySQL server (if applicable).

Start the backend server:
npm start
The server will run at: http://localhost:5000


Frontend Setup (blog_client)
Navigate to the frontend directory:
cd blog_client

Install dependencies:
npm install

Start the frontend server:
npm start (If Create-react-app).
http://localhost:3000

npm run dev (If React-vite).
http://localhost:5173

blog_platform/
├── blog_backend/   # Node.js + Express + MySQL backend
       ├──
└── blog_client/    # React frontend
