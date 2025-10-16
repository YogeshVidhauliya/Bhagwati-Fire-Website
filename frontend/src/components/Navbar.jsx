import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Bhagwati Logo" className="navbar-logo" />
        <h2 className="logo">Bhagwati Sales & Fire Company</h2>
      </div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/enquiry"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Enquiry
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>

        <li>
        <NavLink 
          to="/training"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Training
        </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
