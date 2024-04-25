function FeaturedProjects(props) {
  console.log(props);
  return (
    <div className="project">
      <div className="tech-used">
        <p>{props.technologies.join(" ")}</p>
      </div>

      <h4 className="project-name">{props.title}</h4>
      <p className="project-description">{props.description}</p>
      <div className="project-icons">
        <a href={props.github} target="_blank">
          <i className="fa-brands fa-github" />
        </a>
        <a href={props.live} target="_blank">
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProjects;
