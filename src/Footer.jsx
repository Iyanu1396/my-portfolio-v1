import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex">
      <div className="container">
        <h5>Let&apos;s Connect 🤝</h5>
        <p className="pad-footer">
          I&apos;m interested in contributing to interesting projects and ideas.
        </p>
        <a href="mailto:iyanu1396@gmail.com">
          <strong> Let&apos;s make magic with code 👋</strong>
        </a>
        <div className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/#featured-projects">Projects</NavLink>
        </div>
        <div className="socials">
          <a href="https://iyanucodes.hashnode.dev/" target="_blank">
            <i className="fa-brands fa-hashnode" />
          </a>
          <a href="https://github.com/Iyanu1396" target="_blank">
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/atijosan-iyanuoluwa-827049246/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://twitter.com/iyanu_codes" target="_blank">
            <i className="fa-brands fa-twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
