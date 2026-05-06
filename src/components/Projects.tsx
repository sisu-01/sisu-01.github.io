import type { ProjectType } from "../types";
import styles from "./Projects.module.css";
import Stack from "./TechStack/Stack";
import Tags from "./TechStack/Tags";

interface ProjectsProps {
  projects: ProjectType[];
  isMain: boolean;
}

const Projects = ({ projects, isMain }: ProjectsProps) => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div className={`${styles.wrapper} ${isMain ? styles.isMain : styles.isSide}`}>
          <h2>{project.title}</h2>
          <h5>{project.summary}</h5>
          <div>{project.repoUrl && (<a href={project.repoUrl} target="_blank" rel="noopener noreferrer">링크</a>)}</div>
          <div>
            <Tags techStack={project.techStack} />
            <Stack techStack={project.techStack} />
            {project.etc}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;