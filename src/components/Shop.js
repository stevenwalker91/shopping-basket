import Sidebar from "./Sidebar";
import Products from "./Products";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import Basket from "./Basket";

const Shop = () => {

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
      <div className="main-section">
        <Products category={shoppingCategory}/>
        <Basket />
      </div>
      
    </div>
  )
}

export default Shop;