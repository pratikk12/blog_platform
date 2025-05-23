const postModel = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        const { title, summary, content, } = req.body;
        const userId = req.user.id;
        const userName = req.user.name;

        if (!title || !content)
            return res.status(400).json({ message: 'Title and content are required' });

        const result = await postModel.createPost({ author_name: userName, title, summary, content, author_id: userId });
        res.status(201).json({ message: 'Post created', postId: result.insertId });
    } catch (err) {
        console.error('Error creating post:', err);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postModel.getPostById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, summary, content } = req.body;
        const userId = req.user.id;

        const post = await postModel.getPostById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.author_id !== userId)  // <-- author_id here
            return res.status(403).json({ message: 'Not authorized' });

        if (!title || !content)
            return res.status(400).json({ message: 'Title and content are required' });

        await postModel.updatePost(postId, title, summary, content);
        res.json({ message: 'Post updated successfully' });
    } catch (err) {
        console.error('Error updating post:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user.id;

        const post = await postModel.getPostById(postId);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.author_id !== userId)
            return res.status(403).json({ message: 'Not authorized' });

        await postModel.deletePost(postId);
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error('Error deleting post:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getUserPosts = async (req, res) => {
    try {
        const userId = req.user.id;
        const posts = await postModel.getPostsByUser(userId);
        res.json(posts);
    } catch (err) {
        console.error('Error fetching user posts:', err);
        res.status(500).json({ message: 'Server error' });
    }
};