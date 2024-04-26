import Nav from "./Nav";
import About from "./About";
import Footer from "./Footer";
import avatar from "./assets/avatar.png";

function AboutPage() {
  return (
    <div>
      <Nav />
      <main>
        <section className="intro flex">
          <div className="container">
            {" "}
            <img src={avatar} alt="memoji avatar" className="avatar"/>
            <h1>Hey there, I&apos;m <span className="iyanu">IyanuOluwa</span>.</h1>
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
