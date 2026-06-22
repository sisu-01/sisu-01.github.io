import React, { useState, useEffect, useRef } from 'react';

interface ResponsiveFixedCarouselProps {
  images: string[];
}

const TILT_ANGLE = -30;
const EASE_FACTOR = 0.1;
const PADDING = 24;

const lerp = (start: number, end: number, t: number) =>
  start * (1 - t) + end * t;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const ResponsiveFixedCarousel: React.FC<ResponsiveFixedCarouselProps> = ({
  images,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [visualIndex, setVisualIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [containerSize, setContainerSize] = useState({
    width: 1200,
    height: 750,
  });

  const totalItems = images.length;

  // 부모 크기 추적
  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setContainerSize({
        width: rect.width,
        height: rect.height,
      });
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // =========================
  // 반응형 크기 계산
  // =========================
  const { width: cw, height: ch } = containerSize;

  // 카드 너비: 부모 너비 기준
  const itemWidth = clamp(cw * 0.72, 240, 700);

  // 카드 비율 유지 (기존 550 x 310 비율)
  const aspectRatio = 310 / 550;
  let itemHeight = itemWidth * aspectRatio;

  // 높이가 너무 크면 부모 높이에 맞게 다시 제한
  const maxItemHeight = ch * 0.55;
  if (itemHeight > maxItemHeight) {
    itemHeight = maxItemHeight;
  }

  // 높이에 맞춰 너비도 다시 비율 유지
  const finalItemWidth = itemHeight / aspectRatio;
  const finalItemHeight = itemHeight;

  // 부모 안에서 안 잘리는 최대 반경
  const maxRadiusByHeight =
    Math.max(0, (ch - finalItemHeight) / 2 - PADDING);

  // 너무 작지도 않게, 너무 크지도 않게
  // 부모 높이 기준 원하는 기본 반경
  const preferredRadius = ch * 0.22;

  const radius = clamp(preferredRadius, 40, maxRadiusByHeight);

  // 애니메이션
  useEffect(() => {
    if (totalItems === 0) return;
    if (visualIndex === selectedIndex) return;

    const frameId = requestAnimationFrame(() => {
      setVisualIndex((prev) => {
        const next = lerp(prev, selectedIndex, EASE_FACTOR);

        if (Math.abs(next - selectedIndex) < 0.001) {
          return selectedIndex;
        }
        return next;
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [selectedIndex, visualIndex, totalItems]);

  const handleImageClick = (index: number) => {
    if (totalItems === 0) return;

    const currentActualMod =
      ((selectedIndex % totalItems) + totalItems) % totalItems;

    let diff = index - currentActualMod;

    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    setSelectedIndex((prev) => prev + diff);
  };

  if (!images || totalItems === 0) return null;

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: 500, // 부모가 너무 작을 때 최소 높이
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        overflow: 'hidden',
        perspective: '2000px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `${finalItemWidth}px`,
          height: `${finalItemHeight}px`,
          transform: `rotateY(${TILT_ANGLE}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {images.map((src, i) => {
          const currentActualMod =
            ((selectedIndex % totalItems) + totalItems) % totalItems;
          const isActive = i === currentActualMod;

          const itemAngleDeg = (i - visualIndex) * (360 / totalItems);
          const itemAngleRad = (itemAngleDeg * Math.PI) / 180;

          const y = radius * Math.sin(itemAngleRad);
          const z = radius * Math.cos(itemAngleRad);

          const normalizedDepth = (z + radius) / (2 * radius || 1);

          const opacity = lerp(0.15, 1, normalizedDepth);
          const blur = lerp(10, 0, normalizedDepth);
          const scale = lerp(0.75, 1, normalizedDepth);

          const antiTiltTransform = `rotateY(${-TILT_ANGLE}deg)`;
          const transform = `
            translate3d(-50%, -50%, ${z}px)
            translateY(${y}px)
            scale(${scale})
            ${antiTiltTransform}
          `;

          const zIndex = Math.round(normalizedDepth * 100);

          return (
            <div
              key={i}
              onClick={() => handleImageClick(i)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                transform,
                zIndex,
                opacity,
                filter: `blur(${blur}px) brightness(${0.4 + normalizedDepth * 0.6})`,
                transition: 'filter 0.1s ease-out, opacity 0.1s ease-out',
                cursor: 'pointer',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: `0 ${lerp(0, 25, normalizedDepth)}px ${lerp(
                  0,
                  50,
                  normalizedDepth
                )}px rgba(0,0,0,0.6)`,
                border: isActive
                  ? '3px solid rgba(255,255,255,0.7)'
                  : '2px solid rgba(255,255,255,0.05)',
                backfaceVisibility: 'hidden',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                touchAction: 'none',
              }}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 15,
                  left: 15,
                  color: 'white',
                  background: 'rgba(0,0,0,0.6)',
                  padding: '4px 10px',
                  borderRadius: 8,
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                {i + 1}번
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveFixedCarousel;