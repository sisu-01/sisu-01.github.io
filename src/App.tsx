import { useState } from 'react';
import './App.css'; // 1. 일반 CSS 임포트로 변경
import CategoryToggle from './components/CategoryToggle';
import Projects from './components/Projects';
import { PROJECTS } from './projects';
import type { ProjectType, Type } from './types';
import Profile from './components/Profile';

const getProjectList = (project: ProjectType[]) => {
  const mainList = [];
  const sideList = [];
  for (const p of project) {
    if (p.isMain) {
      mainList.push(p)
    } else {
      sideList.push(p)
    }
  }
  return {mainList: mainList, sideList: sideList}
}

function App() {
  const projectList = getProjectList(PROJECTS);
  const [getCategories, setCategories] = useState<Type[]>([]);
  
  return (
    <div>
      <Profile />
      <CategoryToggle getCategories={getCategories} setCategories={setCategories} />
      <h1>메인</h1>
      <div>
        <Projects projects={projectList["mainList"]} isMain={true} getCategories={getCategories} />
      </div>
      <h1>사이드</h1>
      <div>
        <Projects projects={projectList["sideList"]} isMain={false} getCategories={getCategories} />
      </div>
    </div>
  );
}

export default App;