import { useState } from "react";
import type { StackDetail } from "../../types";

import styles from "./StackItem.module.css";

interface StackItemProps {
  contents: StackDetail["contents"][number];
}

const StackItem = ({ contents }: StackItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li>
      <div className={styles.accordionHeader} onClick={toggleHandler}>
        <h3>{contents.features}</h3>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>▼</span>
      </div>
      <div className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ""}`}>
        <h6>{contents.description}</h6>
      </div>
    </li>
  );
}

export default StackItem;