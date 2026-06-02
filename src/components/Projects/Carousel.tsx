/* Carousel.tsx */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Carousel.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지가 없거나 빈 배열인 경우 렌더링하지 않음
  if (!images || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 자체에 클릭 이벤트가 있을 경우를 대비한 버블링 방지
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      {/* 이미지 영역 */}
      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`Project screenshot ${currentIndex + 1}`}
          className={styles.image}
        />
      </div>

      {/* 이미지가 2개 이상일 때만 네비게이션 UI 표시 */}
      {images.length > 1 && (
        <>
          <button type="button" onClick={handlePrev} className={`${styles.navButton} ${styles.prev}`}>
            <FontAwesomeIcon icon="chevron-left" />
          </button>
          <button type="button" onClick={handleNext} className={`${styles.navButton} ${styles.next}`}>
            <FontAwesomeIcon icon="chevron-right" />
          </button>

          {/* 하단 점(Dots) 인디케이터 */}
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                onClick={(e) => handleDotClick(index, e)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;