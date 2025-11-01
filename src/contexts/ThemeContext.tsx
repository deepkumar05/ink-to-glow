import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  currentThemeColor: string;
  currentThemeRGB: string;
  updateTheme: (color: string, rgb: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentThemeColor, setCurrentThemeColor] = useState("#84E82D"); // Lamborghini green
  const [currentThemeRGB, setCurrentThemeRGB] = useState("132, 232, 45");

  const updateTheme = (color: string, rgb: string) => {
    setCurrentThemeColor(color);
    setCurrentThemeRGB(rgb);
  };

  useEffect(() => {
    // Update CSS custom properties
    document.documentElement.style.setProperty('--theme-color', currentThemeRGB);
    document.documentElement.style.setProperty('--theme-rgb', currentThemeRGB);
  }, [currentThemeRGB]);

  return (
    <ThemeContext.Provider value={{ currentThemeColor, currentThemeRGB, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
