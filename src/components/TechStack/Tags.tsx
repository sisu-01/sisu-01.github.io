import type { StackDetail, Type } from "../../ts/types";

import styles from "./Tags.module.css";

interface TagsProps {
  techStack: StackDetail[];
  getCategories: Type[];
}

const Tags = ({ techStack, getCategories }: TagsProps) => {
  const tags: Partial<Record<Type, string[]>> = {};
  for (const s of techStack) {
    tags[s.type] = s.tags;
  }
  return (
    <ul className={styles.container}>
      {Object.entries(tags).map(([key, value]) => {
        const isActive = getCategories.includes(key as Type);
        return (
          <li key={key} className={`${key} ${isActive ? styles.active : ''}`}>
            <ul className={styles.typeWrapper}>
              {value?.map((tag) => (
                <li key={tag} className={styles.item}>
                  <span className={styles.tag}>{tag}</span>
                  {/* <img
                    src={`https://img.shields.io/badge/${tag}-${TECH_BADGE_INFO[tag]?.color || 'white'}?&logo=${TECH_BADGE_INFO[tag]?.logo || tag}&logoColor=white`} 
                    className={styles.badge}
                    alt={`${tag} badge`} 
                  /> */}
                </li>
              ))}
            </ul>
          </li>
        )
      })}
      </ul>
  );
}

export default Tags;