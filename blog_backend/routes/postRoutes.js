const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/', postController.getAllPosts);

router.get('/user/myposts', isAuthenticated, postController.getUserPosts);

router.use(isAuthenticated); // Protect routes below
router.get('/:id', postController.getPostById);

router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);


module.exports = router;
