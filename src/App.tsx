/* App.tsx */
import { useState } from 'react';
import styles from './App.module.css';
import { PROJECTS } from './ts/projects';
import type { ProjectType, Type } from './ts/types';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import CategoryToggle from './components/Projects/CategoryToggle';
import TagChart from './components/Projects/TagChart';

const getProjectList = (project: ProjectType[]) => {
  const mainList = project.filter(p => p.isMain);
  const sideList = project.filter(p => !p.isMain);
  return { mainList, sideList };
};

function App() {
  const projectList = getProjectList(PROJECTS);
  const [getCategories, setCategories] = useState<Type[]>([]);

  // Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process;git config user.email "tesv010615@naver.com";git config user.name "sisu-01"
  
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.logo}>Dev Portfolio</h1>
          <nav className={styles.nav}>
            <a href="#main-projects">주요 프로젝트</a>
            <a href="#other-projects">기타</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div>
          Todo:<br/>
          - 도전! 롤든벨 flask, scapping 같이 안 되는 이유 확인<br/>
          - 쪼개져있는 리포지토리들 합칠 수 있나 확인<br/>
          - 프로젝트 이미지 레이아웃 디자인<br/> 
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