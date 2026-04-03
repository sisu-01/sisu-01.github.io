import './App.css'; // 1. 일반 CSS 임포트로 변경
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from './projects';

function App() {
  return (
    <div className="container"> {/* 2. className을 일반 문자열로 수정 */}
      <header className="header">
        <div className="profile-img">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <h1 className="title">sisu-01</h1>
        <div className="subtitle">Software Developer</div>
        
        <div style={{ marginTop: '15px' }}>
          <a href="https://github.com/sisu-01" target="_blank" rel="noreferrer" className="github-btn">
            <FontAwesomeIcon icon={faGithub} /> <span>GitHub</span>
          </a>
        </div>

        <p className="intro">
          효율적인 코드와 사용자 중심의 인터페이스를 설계하는 데 집중하고 있습니다. <br />
          새로운 기술을 학습하고 이를 프로젝트에 녹여내는 과정을 즐깁니다.
        </p>
      </header>

      <section className="project-list">
        <h2 style={{ marginBottom: '25px' }}>Projects</h2>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="project-card"
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              
              <div className="project-detail">
                <div>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                {project.repoUrl?.trim() ? (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="repo-link"
                  >
                    <FontAwesomeIcon icon={faGithub} /> View Repository →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;