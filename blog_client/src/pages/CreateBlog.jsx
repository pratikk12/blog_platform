import React, { useState } from "react";
import { createPost } from "../services/api";
import "../styles/CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost({ title, summary, content });
      alert("Post created!");
      console.log(response.data);
    } catch (error) {
      alert("Error creating post");
      console.error(error);
    }
  };

  return (
    <div className="create-blog-container">
      <h2 className="create-blog-heading">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="create-blog-form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            placeholder="Enter the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary" className="form-label">
            Summary
          </label>
          <input
            type="text"
            id="summary"
            name="summary"
            className="form-input"
            placeholder="Enter the summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            className="form-textarea"
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
