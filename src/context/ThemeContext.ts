import { createContext, useContext } from 'react';

// 1. 사용할 테마 타입 정의
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. 다른 파일(Provider)에서 쓸 수 있도록 Context를 export
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. 다른 컴포넌트에서 테마를 편하게 가져다 쓰기 위한 커스텀 훅
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme은 ThemeProvider 내부에서만 사용할 수 있습니다.');
  return context;
};