  import {addCartItem, removeCartItem} from './cartStore';
  
  const reducer = (products, action) => {

    if (action.type == 'add') {
      return products.map(product => {
        if(product.name === action.payload) {
          addCartItem(product);
        }
        return product;
      })
    }

    if (action.type == 'remove') {
      return products.map(product => {
        if(product.name === action.payload) {
          removeCartItem(product);
        }
        return product;
      })
    }

  };

  export default reducer;