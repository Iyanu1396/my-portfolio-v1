import Nav from "./Nav";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";
import projectsData from "./projects";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "animate.css";

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
              <Typewriter
                options={{
                  strings: [
                    '  Hey there, I&apos;m <span class="iyanu">IyanuOluwa</span>.',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="intro-text">
              I am a{" "}
              <span className="iyanu">
                <strong>Frontend Developer</strong>
              </span>{" "}
              who is passionate with crafting beautiful and functional digital
              experiences. With a keen eye for design and a knack for code, I
              specialize in bringing ideas to life through engaging user
              interfaces and seamless interactions. By using the newest and and most powerful tools, I design and build websites that are not only functional but also look great.
            </p>
            <p className="animate__animated animate__pulse animate__infinite">
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
