import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link hand-drawn-underline ${isActive ? "active" : ""}`
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/films"
          className={({ isActive }) =>
            `nav-link hand-drawn-underline ${isActive ? "active" : ""}`
          }
        >
          FILMS
        </NavLink>

        <NavLink
          to="/fiction"
          className={({ isActive }) =>
            `nav-link hand-drawn-underline ${isActive ? "active" : ""}`
          }
        >
          FICTION
        </NavLink>

        <NavLink
          to="/script-reading"
          className={({ isActive }) =>
            `nav-link hand-drawn-underline ${isActive ? "active" : ""}`
          }
        >
          SCRIPT READING
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link hand-drawn-underline ${isActive ? "active" : ""}`
          }
        >
          CONTACT
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;