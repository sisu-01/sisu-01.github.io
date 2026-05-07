import type { StackDetail, Type } from "../../types";

import styles from "./Stack.module.css";

interface TechStackProps {
  techStack: StackDetail[];
  getCategories: Type[];
}

const TechStack = ({ techStack, getCategories }: TechStackProps) => {
  return (
    <ul className={styles.container}>
      {techStack.map((stack) => {
        const isActive = getCategories.includes(stack.type as Type);
        return (
          <li key={stack.type} className={`${stack.type} ${isActive ? styles.active : ''}`}>
            <ul className={styles.container}>
              {stack.contents.map((content) => (
                <li key={content.features} className={styles.item}>
                  <h3>{content.features}</h3>
                  <h6>{content.description}</h6>
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