import { Link } from "react-router-dom";
import "../styles/navbar.css";
const NavbarOne = () => {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </nav>
    </>
  );
};

export default NavbarOne;
