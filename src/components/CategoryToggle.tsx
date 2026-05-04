import type { Dispatch, SetStateAction } from "react";
import { CATEGORIES } from "../types";

interface CategoryToggleProps {
  getCategories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
}

const CategoryToggle = ({ getCategories, setCategories }: CategoryToggleProps) => {

  const toggleCategory = (category: string) => {
    if (getCategories.includes(category)) {
      // 이미 있으면 제거 (끄기)
      setCategories(getCategories.filter((c) => c !== category));
    } else {
      // 없으면 추가 (켜기)
      setCategories([...getCategories, category]);
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