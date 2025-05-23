import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSinglePost, updatePost } from "../services/api";

const EditBlog = () => {
  const { id } = useParams(); // post ID from route
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getSinglePost(id);
        setPost({
          title: response.data.title,
          summary: response.data.summary,
          content: response.data.content,
        });
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, post);
      alert("Post updated successfully!");
      navigate("/dashboard"); // Redirect after update
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  return (
    <div className="edit-blog-container">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Summary:</label>
          <textarea
            name="summary"
            value={post.summary}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            required
            rows={10}
          />
        </div>

        <button type="submit" className="btn-save">
          Save Changes
        </button>
        <button type="button" onClick={() => navigate("/dashboard")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
