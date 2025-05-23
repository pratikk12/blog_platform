import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import "../styles/login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log("Login Success : ", response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setIsLoggedIn(true); // update App state
      alert("Login successful");
      navigate("/home");
    } catch (err) {
      console.error("Login error : ", err);
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="formContainer">
      <h1>Login User</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account</p>
      <button onClick={() => navigate("/signup")} className="signup-btn">
        Signup
      </button>
    </div>
  );
}

export default Login;
