// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

// 사용할 테마 타입 정의
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. LocalStorage에 저장된 이전 기록이 있는지 확인
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;

    // 2. 없다면 사용자의 OS 시스템 테마(다크모드 여부)를 감지
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    // 테마 상태가 변경될 때마다 최상위 <html> 태그에 속성을 심어줍니다.
    // CSS에서는 이 [data-theme='dark'] 속성을 보고 색상을 스위칭하게 됩니다.
    document.documentElement.setAttribute('data-theme', theme);
    
    // 동시에 다음 방문을 위해 로컬스토리지에 저장합니다.
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 라이트 <-> 다크 전환 함수
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 다른 컴포넌트에서 테마를 편하게 가져다 쓰기 위한 커스텀 훅
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme은 ThemeProvider 내부에서만 사용할 수 있습니다.');
  return context;
};