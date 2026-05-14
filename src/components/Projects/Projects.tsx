/* Projects.tsx */
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
    <div className={isMain ? styles.mainGrid : styles.sideGrid}>
      {projects.map((project) => (
        <div key={project.title} className={styles.card}>
          {/* 헤더 영역: 제목과 깃허브 아이콘이 양 옆으로 배치됨 */}
          <div className={styles.cardHeader}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleImg}>img</div>
              <div className={styles.titleArea}>
                <h4>{project.title}</h4>
                <p className={styles.subtitle}>{project.subtitle}</p>
              </div>
            </div>
            {/* 이 부분이 우측 상단에 위치하게 됩니다 */}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.githubIcon}>
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
          <div className={styles.summary}>{project.summary}</div>
          <div className={styles.content}>
            <Tags techStack={project.techStack} getCategories={getCategories} />
            <div className={styles.divider}></div>
            <TechStack techStack={project.techStack} getCategories={getCategories} />
          </div>
          <div className={styles.etc}>{project.etc}</div>
        </div>
      ))}
    </div>
  );
}

export default Projects;