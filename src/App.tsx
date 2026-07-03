/* App.tsx */
import { useState } from 'react';
import styles from './App.module.css';
import { PROJECTS } from './ts/projects';
import type { ProjectType, Type } from './ts/types';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import CategoryToggle from './components/Projects/CategoryToggle';
import TagChart from './components/Projects/TagChart';
import { useTheme } from './context/ThemeContext';

const getProjectList = (project: ProjectType[]) => {
  const mainList = project.filter(p => p.isMain);
  const sideList = project.filter(p => !p.isMain);
  return { mainList, sideList };
};

function App() {
  const projectList = getProjectList(PROJECTS);
  const [getCategories, setCategories] = useState<Type[]>([]);
  const { theme, toggleTheme } = useTheme();

  // Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process;git config user.email "tesv010615@naver.com";git config user.name "sisu-01"
  
  return (
    <div className={styles.app}>
      <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>Portfolio</div>

        <nav className={styles.nav}>
          <a href="#main-projects">주요 프로젝트</a>
          <a href="#other-projects">기타</a>

          {/* 다크모드 토글 버튼 추가 */}
          <button 
            onClick={toggleTheme} 
            style={{
              marginLeft: '1.5rem',
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              fontSize: '1.25rem'
            }}
            title={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>

      <main className={styles.main}>
        <div>
          Todo:<br/>
          - 도전! 롤든벨 flask, scapping 같이 안 되는 이유 확인<br/>
          - 쪼개져있는 프론트-백앤드 리포지토리 하나로 합치고 Readme.md 작성, 트러블 슈팅 ㄱ<br/>
          - 프로젝트 이미지 촬영<br/>
          - 자기소개<br/>
          - 증사 새로 찍기?<br/>
          - 이미지 미리 로딩<br/>
        </div>
        <Profile />
        <TagChart />
        <CategoryToggle getCategories={getCategories} setCategories={setCategories} />
        
        <section id="main-projects" className={styles.section}>
          <div className={styles.sectionTitle}>
            <h3>Main Projects</h3>
            <div className={styles.line}></div>
          </div>
          <Projects projects={projectList.mainList} isMain={true} getCategories={getCategories} />
        </section>

        <section id="other-projects" className={styles.section}>
          <div className={styles.sectionTitle}>
            <h3>Side & Utility Projects</h3>
            <div className={styles.line}></div>
          </div>
          <Projects projects={projectList.sideList} isMain={false} getCategories={getCategories} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Developer Portfolio. Built with Vite-React-TS.</p>
      </footer>
    </div>
  );
}

export default App;