import QuantityToggle from "./QuantityToggle";

const Basket = ({basketContents, changeBasketQty, addToBasket}) => {

  const generateProductList = () => {
    return basketContents.map(item => {
      const lineTotal = item.qty * item.price;
      return (
      <tr
        key={item.id}
      >
        <td className="basket-title">{item.title}</td>
        
        <td>£{lineTotal.toLocaleString('en-GB')}</td>
        <td>
          <QuantityToggle 
            product={item}
            defaultQty={item.qty}
            changeBasketQty={changeBasketQty}
            addToBasket={addToBasket} 
          />
        </td>
      </tr>
      )
    })
  }

  const getBasketTotal = () => {
    const itemsInBasket = basketContents.length
    // if statement is required otherwise error for calling reduce on empty array
    if(itemsInBasket> 0) {
      const total = basketContents.reduce( ( a , b ) => a + (b.price * b.qty) , 0);
      return total.toLocaleString('en-GB');
    }
   return 0;
  }

  return (
    <div className="shopping-basket">
      <h2>Shopping Basket</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Total</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
        {generateProductList()}
        </tbody>
      </table>
      <span className="order-total">Order Total: £{getBasketTotal()}</span>
    </div>
  )
}

export default Basket;