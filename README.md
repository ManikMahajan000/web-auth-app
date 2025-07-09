This project is a simple user authentication system with a React frontend and Node.js/Express backend connected to MongoDB.  
It supports user signup and login with password hashing.

---

## Features

- User registration (signup) with hashed passwords (bcrypt)  
- User login with password verification  
- Basic frontend with toggleable signup/login forms  
- Display user profile on successful login  
- Error handling and alerts on invalid credentials  

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v16+ recommended)  
- [MongoDB](https://www.mongodb.com/) running locally or remotely  
- [npm](https://www.npmjs.com/) (comes with Node.js)

---
## Folder Structure:
```perl
.
├── backend
│   ├── config/           # Configuration files (e.g., DB setup)
│   ├── controllers/      # Route logic and request handlers
│   ├── models/           # Database models (e.g., Mongoose schemas)
│   ├── node_modules/     # Backend dependencies
│   ├── routes/           # Express routes
│   ├── .env              # Environment variables
│   ├── .gitignore
│   ├── package.json      # Backend dependencies & scripts
│   ├── package-lock.json
│   └── server.js         # Entry point for backend server
│
├── frontend
│   ├── node_modules/     # Frontend dependencies
│   ├── public/           # Static files like index.html
│   ├── src/              # React source files
│   ├── .gitignore
│   ├── package.json      # Frontend dependencies & scripts
│   ├── package-lock.json
│   └── README.md         # Frontend-specific documentation
│
└── README.md             # Project overview (this file)
```
---

## Backend Setup: 
1. Navigate to the backend folder
   
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```
3. Create a .env file in backend with your MongoDB Compass connection string:
```bash
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=5000
```
4. Start the backend server
```bash
npm start
```

The backend API will run at http://localhost:5000


---
## Frontend Setup

1. Navigate to the frontend folder in a separate terminal:
```bash
cd frontend
```
2. Install dependencies
```bash
npm install
```
3. Start the React development server:
```
npm start
```
The React app will open at http://localhost:3000

## Usage:

1. Open the frontend URL in your browser.
2. Toggle between Sign Up and Sign In using the buttons.
3. Register a new user on Sign Up form.
4. Login with registered user credentials.
5. On successful login, your profile page will show.
6. Logout using the logout button.