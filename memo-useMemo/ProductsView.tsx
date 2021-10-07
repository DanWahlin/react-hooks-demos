import React, {useState} from 'react';
import Product from './Product';
import MemoizedProduct from './MemoizedProduct';

function ProductsView() {
  const [, setState] = useState(false);
  const refreshProducts = () => setState((x: boolean) => !x);

  console.log('in ProductsView');

  const products = [
    {id: 1, name:'Soccer Ball', icon: 'fa fa-futbol-o', price: 32.99, quantity: 4},
    {id: 2, name:'Book', icon: 'fa fa-book', price: 12.99, quantity: 1},
    {id: 3, name:'Binoculars', icon: 'fa fa-binoculars', price: 99.99, quantity: 2}
  ];

  return (
    <div>
        <button onClick={refreshProducts}>Refresh Products</button>
        <br /><br />
        {products.map((product, id) => 
            <div>
              {(id % 2 === 0) ?
                <div key={product.id}>
                  <MemoizedProduct product={product} />
                </div> :
                <div key={product.id}>
                  <Product product={product} />
                </div>
              }
            </div>          
        )}
    </div>
  )

}

export default ProductsView;