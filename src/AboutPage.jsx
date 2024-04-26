import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import avatar from "./assets/avatar.png";
import Typewriter from "typewriter-effect";

function AboutPage() {
  return (
    <div>
      <Nav />
      <main>
        <section className="intro flex">
          <div className="container">
            {" "}
            <img src={avatar} alt="memoji avatar" className="avatar"/>
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
            <p className="intro-text">Nice to meet you! 😁</p>
          </div>
        </section>
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
