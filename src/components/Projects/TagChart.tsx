import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PROJECTS } from "../../ts/projects";
import styles from "./TagChart.module.css"; // CSS 모듈 임포트

ChartJS.register(ArcElement, Tooltip, Legend);

const TagChart = () => {
  const chartData = useMemo(() => {
    const tagCounts: Record<string, number> = {};

    PROJECTS.forEach((project) => {
      project.techStack.forEach((stack) => {
        stack.tags.forEach((tag) => {
          const trimmedTag = tag.trim();
          tagCounts[trimmedTag] = (tagCounts[trimmedTag] || 0) + 1;
        });
      });
    });

    const sortedEntries = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
    const threshold = 1; // <- 기타로 들어가는 기준 값
    const mainTags = sortedEntries.filter(([_, count]) => count > threshold);
    const otherTags = sortedEntries.filter(([_, count]) => count <= threshold);
    const otherCount = otherTags.reduce((acc, [_, count]) => acc + count, 0);

    const labels = mainTags.map(([tag]) => tag);
    const data = mainTags.map(([_, count]) => count);

    if (otherCount > 0) {
      labels.push("기타");
      data.push(otherCount);
    }

    const backgroundColors = labels.map((label, index) => {
      if (label === "기타") return "#cbd5e1"; // slate-300

      // 포트폴리오 메인 컬러인 Blue-600(#2563eb)과 어울리는 세련된 팔레트
      const colors = [
        "#2563eb", "#6366f1", "#0ea5e9", "#10b981", "#f59e0b",
        "#8b5cf6", "#ec4899", "#f43f5e", "#14b8a6", "#475569"
      ];
      return colors[index % colors.length];
    });

    return {
      labels,
      datasets: [
        {
          label: "사용된 프로젝트 수",
          data,
          backgroundColor: backgroundColors,
          borderColor: "#ffffff",
          borderWidth: 3,
          hoverOffset: 10, // 호버 시 살짝 확장되는 효과
        },
      ],
    };
  }, []);

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%", // 도넛을 더 얇고 세련되게 설정
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#475569",
          usePointStyle: true, // 범례 아이콘을 원형으로 변경
          pointStyle: "circle",
          font: {
            size: 13,
            family: "'Pretendard', sans-serif",
            weight: 600,
          },
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.9)", // slate-900 톤의 툴팁
        padding: 12,
        bodyFont: { size: 14 },
        callbacks: {
          label: function (context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1);
            return ` ${context.label}: ${value}개 (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartHeader}>
        <h3 className={styles.chartTitle}>
          <i className="fa-solid fa-chart-pie"></i> 기술 스택 점유율
        </h3>
        <p className={styles.chartSubtitle}>프로젝트에 사용된 주요 기술 통계</p>
      </div>
      <div className={styles.chartContainer}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TagChart;