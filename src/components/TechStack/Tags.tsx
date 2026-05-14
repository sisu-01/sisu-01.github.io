import { EXCEPTION_SLUGS, type StackDetail, type Type } from "../../ts/types";
// import * as icons from "simple-icons"; // 1. simple-icons 패키지 전체 import
// import type {SimpleIcon} from 'simple-icons';


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
          <li key={key} className={`${key} ${isActive ? styles.active : ""}`}>
            <ul className={styles.typeWrapper}>
              {value?.map((tag) => {
                // 3. tag 이름을 simple-icons의 PascalCase Key 형식으로 변환
                // 예: 'React' -> 'siReact', 'TypeScript' -> 'siTypescript'
                const targetSlug = EXCEPTION_SLUGS[tag] || tag.toLowerCase().replace(/\./g, "dot").replace(/[^a-z0-9]/g, "");
                // const iconKey = `si${targetSlug.charAt(0).toUpperCase() + targetSlug.slice(1)}`;
                // const iconData = (icons as Record<string, SimpleIcon>)[iconKey];

                return (
                  <li key={tag} className={styles.item}>
                    <span className={styles.tag}>
                      <img
                        src={`https://cdn.simpleicons.org/${targetSlug}`}
                        width="20"
                        height="20"
                        alt={`${tag} icon`}
                      />
                      {tag}
                    </span>
                    {/* <img
                      src={`https://img.shields.io/badge/${encodeURIComponent(tag)}-${iconData?.hex || "111111"}?&logo=${targetSlug}&logoColor=white`}
                      className={styles.badge}
                      alt={`${tag} badge`}
                    /> */}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;