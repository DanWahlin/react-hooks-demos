  import React from 'react';
  import Product from './Product';
  
  const productsAreEqual = (prevProps, nextProps) => {
    console.log(prevProps.product.name, nextProps.product.name);
    return (
      prevProps.product.name === nextProps.product.name &&
      prevProps.product.price === nextProps.product.price && 
      prevProps.product.quantity === nextProps.product.quantity
    );
  };

  const MemoizedProduct = React.memo(Product, productsAreEqual);

  export default MemoizedProduct;