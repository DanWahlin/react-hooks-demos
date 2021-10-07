import React, { useReducer } from 'react';
import reducer from './reducer';
import { getCartStore } from './cartStore';

function ShoppingCart() {
  const products = [
    { id: 1, name:'Soccer Ball', icon: 'fa fa-futbol-o', price: 32.99 },
    { id: 2, name:'Book', icon: 'fa fa-book', price: 12.99 },
    { id: 3, name:'Binoculars', icon: 'fa fa-binoculars', price: 99.99 }
  ];

  const [state, dispatch] = useReducer(reducer, products);

  return (
    <div>
      {state.map((product, i: number) => (
        <div key={i}>
          <span>{product.name}</span>
          {!product.quantity &&
            <button className="reducer-button" onClick={() => dispatch({ type: 'add', payload: product.name })}>+</button>
          }
          <br />
        </div>
      ))}

      <h2>Cart Items</h2>

      <ul>
      {getCartStore().map((product, i: number) => (
        <li key={i}>
          {product.name} <button className="reducer-button" onClick={() => dispatch({ type: 'remove', payload: product.name })}>X</button> 
        </li>
      ))}
      </ul>
      
    </div>
  )
}

export default ShoppingCart;
