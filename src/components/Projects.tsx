import type { ProjectType, Type } from "../types";
import styles from "./Projects.module.css";
import Stack from "./TechStack/Stack";
import Tags from "./TechStack/Tags";

interface ProjectsProps {
  projects: ProjectType[];
  isMain: boolean;
  getCategories: Type[];
}

const Projects = ({ projects, isMain, getCategories }: ProjectsProps) => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <div key={project.title} className={`${styles.wrapper} ${isMain ? styles.isMain : styles.isSide}`}>
          <div className={styles.link}>{project.repoUrl && (<a href={project.repoUrl} target="_blank" rel="noopener noreferrer">링크</a>)}</div>
          <h2>{project.title}</h2>
          <h5>{project.summary}</h5>
          <div>
            <Tags techStack={project.techStack} getCategories={getCategories} />
            <Stack techStack={project.techStack} getCategories={getCategories} />
            {project.etc}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;