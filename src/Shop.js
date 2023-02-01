import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Shop = () => {

  const [categories, setCategories] = useState([]);
 
  const getShoppingCategories = async () => {
    const result = await fetch(`https://dummyjson.com/products/categories`);
    const categories = await result.json();
    setCategories(categories);
  }

  useEffect(() => {
    getShoppingCategories();
  },[])

  return (
    <div>
      <h1>Shop</h1>
      <ul>
      {
      categories.map((item) => {
        return <li key={uuidv4()}>{item}</li>
      })
      }
      </ul>
    </div>
  )
}

export default Shop;