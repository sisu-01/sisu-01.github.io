import type { StackDetail } from "../../types";

import styles from "./Stack.module.css";

interface TechStackProps {
  techStack: StackDetail[];
}



const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <ul className={styles.container}>
      {techStack.map((stack) => (
        <li key={stack.type} className={stack.type}>
          <ul className={styles.container}>
            {stack.contents.map((content) => (
              <li key={content.features} className={styles.item}>
                <h3>{content.features}</h3>
                <h6>{content.description}</h6>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default TechStack;