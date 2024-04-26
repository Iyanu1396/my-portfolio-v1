import Nav from "./Nav";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";
import projectsData from "./projects";
import { NavLink } from "react-router-dom";

function HomePage() {
  const projects = projectsData.map((data) => (
    <FeaturedProjects key={data.title} {...data} />
  ));
  return (
    <div>
      <Nav />
      <main>
        <section className="intro flex">
          <div className="container">
            <h1>
              Hey there, I&apos;m <span className="iyanu">IyanuOluwa</span>.
            </h1>
            <p className="intro-text">
              I am a passionate, self-taught Frontend Developer with a strong
              enthusiasm for JavaScript.
            </p>
            <p>
              LEARN MORE ABOUT
              <NavLink to="about">
                <span className="me"> ME </span>
              </NavLink>
              !
            </p>
          </div>
        </section>
        <section id="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects--container">{projects}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
