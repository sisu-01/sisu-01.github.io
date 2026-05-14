/* TechChart.tsx */
import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PROJECTS } from "../../ts/projects";

// Chart.js 컴포넌트 사용을 위해 필수 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const TagChart = () => {
  // 1. PROJECTS 데이터에서 모든 태그의 빈도수(점유율) 계산
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

    // 1. 데이터 정렬
    const sortedEntries = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);

    // 2. 빈도수가 1인 것과 그 이상인 것 분리 (또는 상위 N개만 남기기)
    const threshold = 1; // 1개 이하는 기타로 분류
    const mainTags = sortedEntries.filter(([_, count]) => count > threshold);
    const otherTags = sortedEntries.filter(([_, count]) => count <= threshold);

    // 3. '기타(Others)' 계산
    const otherCount = otherTags.reduce((acc, [_, count]) => acc + count, 0);

    // 4. 최종 라벨과 데이터 구성
    const labels = mainTags.map(([tag]) => tag);
    const data = mainTags.map(([_, count]) => count);

    if (otherCount > 0) {
      labels.push("기타");
      data.push(otherCount);
    }

    // 5. 색상 배정 (기타 항목은 회색 계열로 고정하면 더 보기 좋습니다)
    const backgroundColors = labels.map((label, index) => {
      if (label === "기타") return "#94a3b8"; // slate-400

      const colors = [
        "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#6366f1",
        "#ec4899", "#8b5cf6", "#14b8a6", "#f43f5e", "#06b6d4"
      ];
      if (index < colors.length) return colors[index];
      return `hsl(${(index * 45) % 360}, 70%, 60%)`;
    });

    return {
      labels,
      datasets: [
        {
          label: "사용된 프로젝트 수",
          data,
          backgroundColor: backgroundColors,
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    };
  }, []);

  // 2. 차트 옵션 설정
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const, // 범례를 우측에 배치
        labels: {
          color: "#475569", // var(--slate-600) 계열 색상
          font: {
            size: 12,
            weight: "bold" as const,
          },
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          // 툴팁에 단순히 개수뿐만 아니라 퍼센트(점유율)도 보여주도록 커스텀
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
    <div style={{ width: "100%", height: "350px", marginBottom: "5rem", padding: "1rem" }}>
      <h3 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#334155" }}>
        📊 기술 스택 점유율
      </h3>
      <div style={{ width: "100%", height: "calc(100% - 2rem)" }}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TagChart;