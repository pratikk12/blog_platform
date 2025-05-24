const bcrypt = require('bcrypt');
const userModel = require('../models/authModel');
const db = require('../config/db')

exports.signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await userModel.createUser({ name, username, email, password: hashedPassword });

        res.status(201).json({ message: "User created successfully", userId: result.insertId });
    } catch (err) {
        res.status(500).json({ message: "Signup failed", error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findUserByEmail(email);

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        // Save user info in session
        req.session.user = {
            id: user[0].id,
            name:user[0].name,
            username: user[0].username,
            email: user[0].email
        };

        res.status(200).json({
            message: "Login successful",
            user: req.session.user
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
};


exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ message: 'Logout failed' });
        res.clearCookie('connect.sid');
        res.json({ message: 'Logged out successfully' });
    });
};

exports.getAllUsers = (req, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        res.status(200).json(results);
    });
};