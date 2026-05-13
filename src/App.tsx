import { useState } from 'react';
import styles from './App.module.css'
import CategoryToggle from './components/Projects/CategoryToggle';
import { PROJECTS } from './ts/projects';
import type { ProjectType, Type } from './ts/types';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

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
      <div>
        할일: 선택된 타입에 맟게 features 정렬 다시
        Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process;git config user.email "tesv010615@naver.com";git config user.name "sisu-01"
      </div>
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