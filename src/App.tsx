import { useState } from 'react';
import './App.css'; // 1. 일반 CSS 임포트로 변경
import CategoryToggle from './components/CategoryToggle';
import Projects from './components/Projects';
import { PROJECTS } from './projects';
import type { ProjectType } from './types';

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
  const [getCategories, setCategories] = useState<string[]>([]);
  
  return (
    <div>
      <CategoryToggle getCategories={getCategories} setCategories={setCategories} />
      <div>
        {getCategories.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <h1>메인</h1>
      <div>
        <Projects projects={projectList["mainList"]} isMain={true}/>
      </div>
      <h1>사이드</h1>
      <div>
        <Projects projects={projectList["sideList"]} isMain={false}/>
      </div>
    </div>
  );
}

export default App;