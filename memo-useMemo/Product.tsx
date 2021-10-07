import React, {useMemo} from 'react';
import randomBackground from './randomBackground';

function Product({product}) {
  const { name, icon, price, quantity} = product;

  // Pretend this is a super expensive function :-)
  function getTotal(price, quantity) {
    return price * quantity;
  }

  const total = useMemo(() => {
    console.log(`in useMemo: price=${price} quantity=${quantity}`);
    return getTotal(price, quantity);
  }, [price, quantity]);
 
  return (
    <div className="box" style={{ backgroundColor: randomBackground() }}>
      <h2><i className={icon} aria-hidden="true"></i> <span>{name}</span></h2>

      {quantity} @ ${price} per item
      <h3>${total}</h3>
    </div>
  )

}

export default Product;
