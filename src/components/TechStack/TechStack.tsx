import type { StackDetail, Type } from "../../ts/types";

import styles from "./TechStack.module.css";
import StackItem from "./StackItem";

interface TechStackProps {
  techStack: StackDetail[];
  getCategories: Type[];
}

const TechStack = ({ techStack, getCategories }: TechStackProps) => {
  const isAnySelected = getCategories.length > 0;

  // 1. 렌더링 직전에 스택 순서를 정렬합니다.
  const sortedStack = [...techStack].sort((a, b) => {
    if (!isAnySelected) return 0;

    const aIsActive = getCategories.includes(a.type as Type);
    const bIsActive = getCategories.includes(b.type as Type);

    // 선택된 타입(true)인 항목을 앞으로(-1), 아니면 뒤로(1)
    if (aIsActive && !bIsActive) return -1;
    if (!aIsActive && bIsActive) return 1;
    return 0;
  });
  
  return (
    <ul className={styles.container}>
      {/* {techStack.map((stack) => { */}
      {sortedStack.map((stack) => {
        // 2. 강조 로직 수정: 
        // - 아무것도 선택되지 않았으면 모두 활성(true)
        // - 무언가 선택되었다면, 현재 스택이 포함되어 있는지 확인
        const isActive = !isAnySelected || getCategories.includes(stack.type as Type);
        return (
          <li key={stack.type} className={`${styles.stackSection} ${isActive ? styles.active : styles.inactive}`}>
            <div className={styles.category} style={{ borderLeft: `var(--color-${stack.type}) 5px solid` }}>{stack.type}</div>
            <ul className={styles.container}>
              {stack.contents.map((content) => (
                <li key={content.features} className={styles.item}>
                  <StackItem key={content.features} contents={content} />
                </li>
              ))}
            </ul>
          </li>
        )
      })}
    </ul>
  );
}

export default TechStack;