import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './useState-useEffect-useRef/Timer';
import ProductsView from './memo-useMemo/ProductsView';
import ShoppingCart from './useReducer/ShoppingCart';
import './style.css';

function App() {
  return (
      <div>
        <div className="box">
          <Timer />
        </div>
        
        <ProductsView />

        <div className="box">
          <ShoppingCart />
        </div>

      </div>
    );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
