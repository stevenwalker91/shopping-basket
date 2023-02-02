import {useEffect, useState} from 'react';
import Product from './Product';

const Products = ({category}) => {

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let url =  'https://dummyjson.com/products/';
      if (category !== 'all') {
        url += `category/${category}`;
      }

      const result = await fetch(url);
      const products = await result.json();

      setProductList(products.products);
    }
    
    if (category) {
      fetchProducts();
    }
    
  },[category])

  return (
    <div className="products">
      <h1>{category.replace('-', ' ')}</h1>
      <div className="products-list">
        {productList.map(product => <Product product={product} key={product.id}/>)}
      </div>
      
    </div>
  )
}

export default Products;