import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Shop = () => {

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState([true])

 
  const getShoppingCategories = async () => {
    const result = await fetch(`https://dummyjson.com/products/categories`);
    const categories = await result.json();
    setCategories(categories);
    setIsLoading(false)
  }

  useEffect(() => {
    getShoppingCategories();
  },[isLoading])

  return (
    <div>
      <h1>Shop</h1>
      <ul>
      { !isLoading ? 
        categories.map((item) => {
          return <li className="category-list-name" key={uuidv4()}>{item.replace('-', ' ')}</li>
        })
        : 'loading' // to be replaced with loader.js
      }
      </ul>
    </div>
  )
}

export default Shop;