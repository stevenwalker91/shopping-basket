const Product = ({product}) => {

  return (
    <div className="product-card">
      <div>
        <img src={product.thumbnail} alt={product.thumbnail} className="product-thumbnail" />
      </div>
      <div className="product-info">
        <span className="product-title">{product.title}</span>
        <span>£{product.price}</span>
        <span className="add-to-basket"></span>
      </div>
      
    </div>
  )

}

export default Product;