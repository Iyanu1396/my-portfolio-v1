import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav id="navbar">
      <ul>
        <li className="name-nav">
          <NavLink to="/">
            Atijosan <span className="iyanu">IyanuOluwa</span>
          </NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="projects">
          <a href="/#featured-projects">Projects</a>
        </li>
        <li className="resume-btn">
          <a href="" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
