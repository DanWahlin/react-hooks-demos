import React from 'react';
import ThemeSwitcher from './createContext-useContext/ThemeSwitcher';

function Header() {
    return (
      <header>
        <ThemeSwitcher />
      </header>
    );
}

export default Header;