import type { Dispatch, SetStateAction } from "react";
import { CATEGORIES, type Type } from "../types";

interface CategoryToggleProps {
  getCategories: Type[];
  setCategories: Dispatch<SetStateAction<Type[]>>;
}

const CategoryToggle = ({ getCategories, setCategories }: CategoryToggleProps) => {

  const toggleCategory = (category: Type) => {
    if (getCategories.includes(category as Type)) {
      // 이미 있으면 제거 (끄기)
      setCategories(getCategories.filter((c) => c !== category));
    } else {
      // 없으면 추가 (켜기)
      setCategories([...getCategories, category as Type]);
    }
  };

  return (
    <div>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => toggleCategory(cat)}
          style={{
            backgroundColor: getCategories.includes(cat) ? "#3B82F6" : "#E5E7EB",
            color: getCategories.includes(cat) ? "white" : "black",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryToggle;