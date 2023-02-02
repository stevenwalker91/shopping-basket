import Sidebar from "./Sidebar";
import Products from "./Products";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

const Shop = (props) => {

  const [shoppingCategory, setShoppingCategory] = useState('')

  const location = useLocation();
  let category = '';

  if (location.state !== null) {
    category = location.state.category;
  } else {
    category = 'all';
  }

  useEffect(() => {
    setShoppingCategory(category)
  }, [category])

  
  

  return (
    <div className="shop-container">
      <Sidebar />
      <Products category={shoppingCategory}/>
    </div>
  )
}

export default Shop;