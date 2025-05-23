import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const NavbarTwo = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/home");
    window.location.reload(); // reload to update App state
  };

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/createBlog">Create Blog</Link>
      <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
        Logout
      </button>
    </nav>
  );
};

export default NavbarTwo;
