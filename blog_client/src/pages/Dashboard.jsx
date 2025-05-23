import React, { useEffect, useState } from "react";
import { getUserPosts, deletePost } from "../services/api";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // listens to route changes

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    fetchPosts(); // fetch posts when dashboard loads or route changes
  }, [location]);

  const fetchPosts = async () => {
    try {
      const response = await getUserPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(id);
        fetchPosts(); // Refresh post list after deletion
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="dashboard-container">
      {user && <h2>Welcome, {user.name}!</h2>}

      <h3>Your Blog Posts</h3>

      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h4>
                <Link to={`/post/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </h4>
              <p className="post-summary">{post.summary}</p>
              <div className="post-meta">
                <span>Author: {post.author_name}</span>
                <br />
                <span>
                  Date: {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>

              {/* Buttons */}
              <div className="post-actions">
                <button
                  onClick={() => navigate(`/edit/${post.id}`)}
                  className="btn-edit">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="btn-delete">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
