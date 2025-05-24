const db = require('../config/db');

exports.createPost = ({ author_name, title, summary, content, author_id }) => {
    const q = 'INSERT INTO blog_posts (author_name, title, summary, content, author_id) VALUES (?, ?, ?, ?,?)';
    return new Promise((resolve, reject) => {
        db.query(q, [author_name, title, summary, content, author_id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

exports.getAllPosts = () => {
    const q = `
      SELECT blog_posts.id, blog_posts.author_name,blog_posts.title, blog_posts.summary, blog_posts.content, blog_posts.author_id, blog_posts.created_at, users.username 
      FROM blog_posts 
      JOIN users ON blog_posts.author_id = users.id 
      ORDER BY blog_posts.created_at DESC
    `;
    return new Promise((resolve, reject) => {
        db.query(q, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

exports.getPostById = (postId) => {
    const q = `
      SELECT blog_posts.id, blog_posts.author_name, blog_posts.title, blog_posts.summary, blog_posts.content, blog_posts.author_id, blog_posts.created_at, users.username 
      FROM blog_posts 
      JOIN users ON blog_posts.author_id = users.id 
      WHERE blog_posts.id = ?
    `;
    return new Promise((resolve, reject) => {
        db.query(q, [postId], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};

exports.updatePost = (postId, title, summary, content) => {
    const q = 'UPDATE blog_posts SET title = ?, summary = ?, content = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(q, [title, summary, content, postId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

exports.deletePost = (postId) => {
    const q = 'DELETE FROM blog_posts WHERE id = ?';
    return new Promise((resolve, reject) => {
        db.query(q, [postId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

exports.getPostsByUser = (userId) => {
    const q = `
      SELECT id, author_name, title, summary, content, created_at 
      FROM blog_posts 
      WHERE author_id = ? 
      ORDER BY created_at DESC
    `;
    return new Promise((resolve, reject) => {
        db.query(q, [userId], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
