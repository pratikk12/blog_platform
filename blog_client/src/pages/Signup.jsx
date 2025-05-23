import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "../styles/signup.css";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        name,
        username,
        email,
        password,
      });
      alert("Signup Successful!");
      navigate("/login");
    } catch (err) {
      console.error("error while SignUp : ", err);
      alert("SignUp failed try again.");
    }
  };
  return (
    <div className="formContainer">
      <h1>User Registration</h1>
      <form onSubmit={handleSignup} className="registration-form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="set Password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account?</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}

export default SignUp;
