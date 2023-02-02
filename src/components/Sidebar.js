import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

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
    <nav className="sidebar">
      <ul>
      { !isLoading ? 
        categories.sort().map((item) => {
          return (
          <NavLink 
            to={`/shop/${item}`}
            state={{category: `${item}`}}
            key={uuidv4()}>
              <li className="category-list-name">{item.replace('-', ' ')}</li>
          </NavLink>
          )
        })
        : 'loading' // to be replaced with loader.js
      }
      </ul>
    </nav>
  )
}

export default Sidebar;