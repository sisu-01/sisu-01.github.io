/* TechStack.tsx */
import type { StackDetail, Type } from "../../ts/types";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./TechStack.module.css";
import StackItem from "./StackItem";

interface TechStackProps {
  techStack: StackDetail[];
  getCategories: Type[];
}

const TechStack = ({ techStack, getCategories }: TechStackProps) => {
  const isAnySelected = getCategories.length > 0;

  const sortedStack = [...techStack].sort((a, b) => {
    if (!isAnySelected) return 0;

    const aIsActive = getCategories.includes(a.type as Type);
    const bIsActive = getCategories.includes(b.type as Type);

    if (aIsActive && !bIsActive) return -1;
    if (!aIsActive && bIsActive) return 1;
    return 0;
  });
  
  return (
    <ul className={styles.container}>
      {/* 단순 순서 변경(Layout) 시에는 popLayout 모드가 
        오히려 레이아웃 계산을 꼬이게 만들 수 있으므로 기본 상태로 둡니다.
      */}
      <AnimatePresence>
        {sortedStack.map((stack) => {
          const isActive = !isAnySelected || getCategories.includes(stack.type as Type);
          
          return (
            <motion.li 
              key={stack.type}
              layout // 위치 이동 애니메이션 활성화
              
              // CSS 대신 Framer Motion이 직접 스타일 상태를 변경하도록 설정
              animate={{ 
                opacity: isActive ? 1 : 0.2,
                filter: isActive ? "grayscale(0) blur(0px)" : "grayscale(1) blur(0.5px)",
                x: isActive && isAnySelected ? 8 : 0, // 무언가 선택되어 활성화되었을 때만 우측 이동
                scale: isActive ? 1 : 0.98
              }}
              
              // 레이아웃 이동 속도와 스타일 변화 속도를 동기화
              transition={{
                type: "spring", 
                stiffness: 250, 
                damping: 28,
                // filter나 opacity가 레이아웃 스프링과 자연스럽게 묶이도록 처리
                opacity: { duration: 0.25 },
                filter: { duration: 0.25 }
              }}
              className={styles.stackSection}
            >
              <div className={styles.categoryWrapper}>
                <div className={styles.categoryLine} style={{ backgroundColor: `var(--color-${stack.type})` }} />
                <div className={styles.category}>
                  {stack.type}
                </div>
              </div>
              <ul className={styles.contentList}>
                {stack.contents.map((content) => (
                  <li key={content.features} className={styles.item}>
                    <StackItem contents={content} />
                  </li>
                ))}
              </ul>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}

export default TechStack;