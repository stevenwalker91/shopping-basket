import {useState} from 'react';
import QuantityToggle from './QuantityToggle';

const Product = ({product, addToBasket}) => {

  return (
    <div className="product-card">
      <div>
        <img src={product.thumbnail} alt={product.description} className="product-thumbnail" />
      </div>
      <div className="product-info">
        <span className="product-title">{product.title}</span>
        <span>£{product.price}</span>
        <QuantityToggle 
          product={product} 
          toggleType="add"
          addToBasket={addToBasket}
          />
          
      </div>
    </div>
      
  )

}

export default Product;