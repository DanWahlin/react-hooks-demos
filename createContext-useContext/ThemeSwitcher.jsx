import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="theme-switcher">
      <button 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="button-theme"
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeSwitcher