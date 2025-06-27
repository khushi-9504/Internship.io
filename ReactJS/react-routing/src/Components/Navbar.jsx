import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "beige", padding: "10px" }}>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li style={{ listStyle: "none" }}>
          <Link to="/home" style={{ textDecoration: "none", fontSize: "20px" }}>
            Home
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link
            to="/about"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            About
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link
            to="/services"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            Services
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link
            to="/contact"
            style={{ textDecoration: "none", fontSize: "20px" }}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
