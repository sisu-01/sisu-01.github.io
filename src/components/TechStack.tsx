import type { StackDetail, Type } from "../types";

interface TechStackProps {
  techStack: StackDetail[];
}

const TechStack = ({ techStack }: TechStackProps) => {
  const tags: Partial<Record<Type, string[]>> = {};
  for (const s of techStack) {
    tags[s.type] = s.tags;
  }
  console.log(tags);
  return (
    <div>
      <ul>
        {Object.entries(tags).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>
            {value?.map((tag) => (
              <span key={tag}>{tag}&nbsp;</span>
            ))}
          </li>
        ))}
      </ul>
      <ul>
      {techStack.map((stack) => (
        <li key={stack.type}>
          타입: {stack.type}
          <ul>
            {stack.contents.map((content) => (
              <li>
                <h3>{content.features}</h3>
                <h6>{content.description}</h6>
              </li>
            ))}
          </ul>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default TechStack;