import QuantityToggle from './QuantityToggle';

const Product = ({product, addToBasket}) => {

  return (
    <div className="product-card">
      <div>
        <img src={product.thumbnail} alt={product.description} className="product-thumbnail" />
      </div>
      <div className="product-info">
        <span className="product-title">{product.title}</span>
        <span>£{product.price.toLocaleString('en-GB')}</span>
        <QuantityToggle 
          product={product} 
          toggleType="add"
          addToBasket={addToBasket}
          defaultQty={1}
          />
          
      </div>
    </div>
      
  )

}

export default Product;