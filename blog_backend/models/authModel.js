const db = require('../config/db')

exports.createUser = (userData) => {
    const { name, username, email, password } = userData;
    const q = 'insert into users(name, username, email, password) values(?,?,?,?)'
    return new Promise((resolve, reject) => {
        db.query(q, [name, username, email, password], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

exports.findUserByEmail = (email) => {
    const q = 'select * from users where email = ?';
    return new Promise((resolve, reject) => {
        db.query(q, [email], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}
