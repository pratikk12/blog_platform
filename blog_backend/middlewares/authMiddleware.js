exports.isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        req.user = req.session.user; // attach user to request
        next();
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
};
