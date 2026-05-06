import type { StackDetail, Type } from "../../types";

import styles from "./Tags.module.css";

interface TagsProps {
  techStack: StackDetail[];
}

const Tags = ({ techStack }: TagsProps) => {
  const tags: Partial<Record<Type, string[]>> = {};
  for (const s of techStack) {
    tags[s.type] = s.tags;
  }
  return (
    <ul className={styles.container}>
      {Object.entries(tags).map(([key, value]) => (
        <li key={key} className={styles[key]}>
          <ul className={styles.typeWrapper}>
            {value?.map((tag) => (
              <li key={tag} className={styles.item}>{tag}</li>
            ))}
          </ul>
        </li>
      ))}
      </ul>
  );
}

export default Tags;