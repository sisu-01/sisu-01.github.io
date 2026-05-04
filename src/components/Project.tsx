import type { ProjectType } from "../types";
import TechStack from "./TechStack";

interface ProjectProps {
  project: ProjectType;
  isMain: boolean;
}

const Project = ({ project, isMain }: ProjectProps) => {
  return (
    <div
      style={{ 
        backgroundColor: isMain ? "red" : "blue",
        padding: "20px", // 가독성을 위해 패딩 추가
        color: "white"   // 배경색 대비 글자색 설정
      }}>
      <h2>{project.title}</h2>
      <h5>{project.summary}</h5>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          링크
        </a>
      )}
      <div>
        <div>
          <TechStack techStack={project.techStack}/>
          {project.etc}
        </div>
      </div>
    </div>
  );
}

export default Project;