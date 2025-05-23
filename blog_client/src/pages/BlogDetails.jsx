import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/api"; // assuming this uses withCredentials

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>
        <strong>Author:</strong> {post.author_name}
      </p>
      <p>
        <strong>Date:</strong> {new Date(post.created_at).toLocaleDateString()}
      </p>
      <div className="post-content">{post.content}</div>
    </div>
  );
};

export default BlogDetails;
