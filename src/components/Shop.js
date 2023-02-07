import Sidebar from "./Sidebar";
import Products from "./Products";
import { useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import Basket from "./Basket";

const Shop = () => {

  const [shoppingCategory, setShoppingCategory] = useState('');
  const [productsInBasket, setProductsInBasket] = useState([]);

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

  const addToBasket = (product, qty) => {
    const basketArray = [...productsInBasket];
    const productExistsAlready = basketArray.indexOf(basketArray.find(item => item.id === product.id));
   
    if (productExistsAlready >= 0 ) {
      basketArray[productExistsAlready].qty += qty;
    } else {
      product.qty = qty;
      basketArray.push(product);
    }
    
    setProductsInBasket(basketArray);
  }

  return (
    <div className="shop-container">
      <Sidebar />
      <div className="main-section">
        <Products 
          category={shoppingCategory}
          addToBasket={addToBasket}
        />
        <Basket
          basketContents={productsInBasket} 
        />
      </div>
      
    </div>
  )
}

export default Shop;