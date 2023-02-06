import {useState, useEffect} from 'react';

const Basket = ({basketContents, removeFromBasket}) => {

  const [basket, setBasket] = useState(basketContents);

  useEffect(() => {
    setBasket(basketContents);
  }, [basketContents])

  const generateProductList = () => {
    return basket.map(item => {
      return <p key={item.product}>{`${item.product} x ${item.qty}`}</p>
    })
  }


  return (
    <div className="shopping-basket">
      <h2>Shopping Basket</h2>
      {generateProductList()}
    </div>
  )
}

export default Basket;