import Tech from "./Tech";

function About() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <p>Hey there!👋</p>
      <p>
        I&apos;m Atijosan Iyanuoluwa, and I&apos;m on a mission to craft
        top-notch, modern web applications that not only scale effortlessly but
        also make a tangible difference in people&apos;s lives. My journey as a
        frontend developer has been a self-taught adventure fueled by an
        unyielding passion for technology.
      </p>

      <p>
        What sets me apart is my commitment to continuous growth. Whether
        it&apos;s through devouring online courses, seeking guidance from
        mentors, or staying at the forefront of emerging tools and trends,
        I&apos;m always hungry for knowledge.zz
      </p>

      <p>
        But life isn&apos;t just about code! When I&apos;m not immersed in
        programming, you&apos;ll likely find me unwinding with a sitcom on
        Netflix, penning down my thoughts in an article, or engaging in epic
        battles in video games. I&apos;m also a pianist, finding solace and joy
        in the harmonies of music.
      </p>

      <Tech />
      <h2>Contact Me</h2>
      <p>
        If you&apos;re looking to elevate your digital presence or have a
        project that needs that extra touch of finesse, let&apos;s connect. Drop
        me a line on{" "}
        <a href="https://twitter.com/iyanu_codes" target="_blank">
          <strong> Twitter</strong>
        </a>{" "}
        or shoot me an
        <a href="mailto:iyanu1396@gmail.com" target="_blank">
          <strong> Email </strong>
        </a>
        – I&apos;d love to chat!
      </p>
    </section>
  );
}

export default About;
