require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// ✅ Enable CORS for React Vite dev server (http://localhost:5173)
app.use(cors({
    origin: 'http://localhost:5173', // React app URL
    credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // secure: true in production with HTTPS
}));

// Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.get('/', (req, res) => {
    res.send("This is Blogging platform");
});

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
