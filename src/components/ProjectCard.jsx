import { useState } from "react";

function ProjectCard (project) {

  const [show, setShow] = useState(false);
  const handleClick = event => {
    setShow(current => !current)
  }
    return (
        <div class="card projectCard" onClick={handleClick}  id={project.id}>
            <h1>{project.name}</h1>
            <h3><span class="colorTitle">Tech Used :</span> {project.tech}</h3>
            
            <div style={{display: show ? 'flex' : 'none'}} class="toggledProject">
                <p>{project.desc}</p>
                <img src={project.img} alt={project.img} />
                <a href={project.url}>{project.url}</a>
            </div>
        </div>
    );
}

export default ProjectCard; 