import {useEffect, useState} from 'react';
import Product from './Product';
import Loader from './Loader';

const Products = ({category, addToBasket}) => {

  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      
      let url =  'https://dummyjson.com/products/';
      if (category !== 'all') {
        url += `category/${category}`;
      }

      const result = await fetch(url);
      const products = await result.json();
      setProductList(products.products);
      setIsLoading(false);
    }

    if (category) {
      fetchProducts();
    }
    
  },[category])


  return (

    <div className="products">
      <h1>{category.replace('-', ' ')}</h1>
      <div className="products-list">
      {isLoading ? <Loader color="black" /> :
        productList.map(product => <Product product={product} key={product.id}addToBasket={addToBasket}/>)
      }
      </div>
    </div>
  )
}

export default Products;