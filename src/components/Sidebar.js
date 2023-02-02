import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';

const Sidebar = () => {

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

 
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
          
            <li 
              className="category-list-name"
              key={uuidv4()}
            >
              <NavLink 
              to={`/shop/${item}`}
              state={{category: `${item}`}}
              >
              {item.replace('-', ' ')}
              </NavLink>
            </li>
          )
        })
        : <Loader />
      }
      </ul>

    </nav>
  )
}

export default Sidebar;