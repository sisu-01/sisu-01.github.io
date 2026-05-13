/* CategoryToggle.tsx */
import type { Dispatch, SetStateAction } from "react";
import { CATEGORIES, type Type } from "../../ts/types";
import styles from './CategoryToggle.module.css';

interface CategoryToggleProps {
  getCategories: Type[];
  setCategories: Dispatch<SetStateAction<Type[]>>;
}

const CategoryToggle = ({ getCategories, setCategories }: CategoryToggleProps) => {

  const toggleCategory = (category: Type) => {
    if (getCategories.includes(category)) {
      setCategories(getCategories.filter((c) => c !== category));
    } else {
      setCategories([...getCategories, category]);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>Filter by:</span>
      <div className={styles.buttonGroup}>
        {CATEGORIES.map((cat) => {
          const isActive = getCategories.includes(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`${styles.toggleBtn} ${isActive ? styles.active : ''}`}
            >
              {cat}
              {isActive && <i className="fas fa-check ml-1 text-[10px]"></i>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryToggle;