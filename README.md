# 📝 Blog Platform

A full-stack blogging platform comprising a **Node.js/Express backend** and a **React frontend**. This project enables users to **create, read, update, and delete** blog posts, offering a seamless and responsive blogging experience.

---

## 🚀 Project Overview

This platform is designed to provide a **user-friendly interface** for blogging. It includes:

- 🔒 User authentication (login/signup)
- ✍️ Post creation, editing, and deletion
- 📱 Responsive design for all devices

---

## 🧠 Approach to Solving the Problem

- **Modular Architecture**  
  Separated concerns by dividing the project into `blog_backend` and `blog_client` directories, improving maintainability and scalability.

- **MySQL Database**  
  Used relational data modeling for storing users and blog posts efficiently.

- **RESTful API Design**  
  Implemented clean REST APIs in the backend to ensure effective communication between frontend and backend.

- **Responsive UI**  
  Applied modern CSS techniques to ensure smooth UX across devices.

- **State Management**  
  Used React's built-in state management and hooks to handle dynamic UI interactions.

---

## 🤖 Use of AI in Development

- **ChatGPT**  
  - Explained backend concepts like routing, Middleware, and REST principles.  
  - Guided in solving bugs and improving project structure.  
  - Helped write reusable frontend components and refine code logic.

---

## ⚙️ Setup Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MySQL](https://www.mysql.com/)

---

### 📦 Backend Setup (`blog_backend`)

1. Navigate to the backend folder:
   ```bash
   cd blog_backend

2. Install dependencies:
   npm install
   
3. Create a .env file in the root of blog_backend with the following content:
       DB_HOST=localhost
       DB_USER=your_mysql_username
       DB_PASSWORD=your_mysql_password
       DB_NAME=blog_platform
       PORT=5000

 4.Start the backend server:
       node server.js
       nodemon server.js (using nodemon)

### 📦 frontend Setup (`blog_client`)

1. Navigate to the frontend folder:
   ```bash
   cd blog_client

2. Install dependencies:
   npm install
   
3. Start the frontend server:
    If using Create React App:
      npm start
      Opens at: http://localhost:3000
   If using Vite:
      npm run dev
     Opens at: http://localhost:5173
 
