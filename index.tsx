import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Timer from './useState-useEffect-useRef/Timer';
import ProductsView from './memo-useMemo/ProductsView';
import ShoppingCart from './useReducer/ShoppingCart';
import ThemeContext from './createContext-useContext/ThemeContext';
import Header from './Header';
import './style.css';

function App() {
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  return (
    <div className={`app ${theme}-bg`}>
      <ThemeContext.Provider value={value}>
        <Header />
        <br />
        <div className="box">
          <Timer />
        </div>
        
        <ProductsView />

        <div className="box">
          <ShoppingCart />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
