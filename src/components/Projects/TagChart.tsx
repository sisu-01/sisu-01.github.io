import { useMemo } from "react";
import { PROJECTS } from "../../ts/projects";
import styles from "./TagChart.module.css";

// 카테고리별 테마 색상 지정
const COLOR_PALETTES: Record<string, string[]> = {
  프론트엔드: ["#2563eb", "#6366f1", "#0ea5e9", "#38bdf8", "#818cf8"],
  백엔드: ["#10b981", "#059669", "#14b8a6", "#8b5cf6", "#a78bfa"],
  인프라: ["#f59e0b", "#d97706", "#475569", "#64748b", "#94a3b8"],
};

interface SkillItem {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface CategoryData {
  type: string;
  skills: SkillItem[];
}

const TagChart = () => {
  const categoryStats = useMemo<CategoryData[]>(() => {
    // 💡 하드코딩 제거: 어떤 기술이 들어올지 모르므로 빈 객체로 시작
    const stats: Record<string, Record<string, number>> = {
      프론트엔드: {},
      백엔드: {},
      인프라: {},
    };

    // 1단계: 모든 프로젝트의 태그를 카테고리별로 집계
    PROJECTS.forEach((project) => {
      project.techStack.forEach((stack) => {
        const category = stack.type.trim();
        // 프론트엔드, 백엔드, 인프라 등 기존에 정의된 카테고리인 경우만 처리
        if (stats[category]) {
          stack.tags.forEach((tag) => {
            const trimmedTag = tag.trim();
            // 일단 모든 태그의 등장 횟수를 카운트
            stats[category][trimmedTag] = (stats[category][trimmedTag] || 0) + 1;
          });
        }
      });
    });

    // 💡 필터링 기준: 최소 2개 이상의 프로젝트에서 사용된 기술만 "핵심 기술"로 간주
    // (이 숫자를 1로 바꾸면 1번만 쓰인 라이브러리도 모두 나타납니다)
    const MIN_COUNT_THRESHOLD = 2;

    // 2단계: 카테고리별 데이터 정제 및 퍼센트 계산
    return Object.entries(stats).map(([category, skillsObj]) => {
      // 내림차순 정렬 (많이 쓰인 기술이 먼저 오도록)
      const sortedEntries = Object.entries(skillsObj).sort((a, b) => b[1] - a[1]);

      // 임계값을 넘는 주요 기술만 필터링 (자잘한 라이브러리는 여기서 자동 탈락)
      const mainSkills = sortedEntries.filter(([_, count]) => count >= MIN_COUNT_THRESHOLD);
      
      // 차트의 기준이 될 총합 계산 (메인 기술들의 카운트 합)
      const totalMainCount = mainSkills.reduce((acc, [_, count]) => acc + count, 0);

      const palette = COLOR_PALETTES[category] || ["#cbd5e1"];

      // 최종 차트용 데이터 배열 생성
      const skills = mainSkills.map(([name, count], index) => {
        const percentage = totalMainCount > 0 ? Math.round((count / totalMainCount) * 100) : 0;
        const color = palette[index % palette.length];
        return { name, count, percentage, color };
      });

      return {
        type: category,
        skills,
      };
    });
  }, []);

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartHeader}>
        <h3 className={styles.chartTitle}>
          <i className="fa-solid fa-chart-bar"></i> 기술 스택 점유율
        </h3>
        <p className={styles.chartSubtitle}>
          영역별 반복 사용된 핵심 기술 통계 (2회 이상)
        </p>
      </div>

      <div className={styles.barChartContainer}>
        {categoryStats.map((category) => (
          <div key={category.type} className={styles.categoryRow}>
            <div className={styles.categoryLabel}>{category.type}</div>

            <div className={styles.barAndLegendWrapper}>
              <div className={styles.progressBarTrack}>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={styles.progressBarItem}
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color,
                    }}
                    title={`${skill.name}: ${skill.count}개 프로젝트 (${skill.percentage}%)`}
                  >
                    {/* 가독성을 위해 10% 이상일 때만 내부 텍스트 렌더링 */}
                    {skill.percentage >= 10 && (
                      <span className={styles.barText}>
                        {skill.name} {skill.percentage}%
                      </span>
                    )}
                  </div>
                ))}
                
                {/* 만약 임계값을 넘는 기술이 하나도 없을 경우의 예외 처리 */}
                {category.skills.length === 0 && (
                  <div className={styles.emptyBar}>
                    반복해서 사용된 핵심 기술이 없습니다.
                  </div>
                )}
              </div>

              <div className={styles.legendList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className={styles.legendName}>{skill.name}</span>
                    <span className={styles.legendPercent}>{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagChart;