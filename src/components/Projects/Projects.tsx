import type { ProjectType, Type } from "../../ts/types";
import Tags from "../TechStack/Tags";
import TechStack from "../TechStack/TechStack";
import styles from "./Projects.module.css";

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
          <div className={styles.title}>
            <h2>{project.title}</h2>
            <h5>{project.subtitle}</h5>
          </div>
          <div>{project.summary}</div>
          <div>
            <div>주요 기술</div>
            <Tags techStack={project.techStack} getCategories={getCategories} />
            <hr />
            <TechStack techStack={project.techStack} getCategories={getCategories} />
            {project.etc}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;