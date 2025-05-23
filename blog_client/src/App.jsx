import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarOne from "./components/NavbarOne";
import NavbarTwo from "./components/NavbarTwo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on page reload
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <>
      <Router>
        {isLoggedIn ? <NavbarTwo /> : <NavbarOne />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/post/:id" element={<BlogDetails />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
