import React, { useEffect, useState } from "react";
import axios from "../services/api"; // Make sure this has withCredentials: true
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Blogging Platform</h1>
      <h2>All Blog Posts</h2>

      {posts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>
                <Link to={`/post/${post.id}`} className="post-link">
                  {post.title}
                </Link>
              </h3>
              <p className="post-summary">{post.summary}</p>
              <div className="post-meta">
                <span>Author: {post.author_name}</span>
                <br />
                <span>
                  Date: {new Date(post.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
