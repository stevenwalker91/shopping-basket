const Basket = ({basketContents, removeFromBasket}) => {

  const generateProductList = () => {
    return basketContents.map(item => {
      const lineTotal = item.qty * item.price;
      return (
      <p 
        key={item.id}
      >
        {`${item.title} x ${item.qty}: £${lineTotal.toLocaleString('en-GB')}`}
      </p>
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
      {generateProductList()}
      <span>Order Total: £{getBasketTotal()}</span>
    </div>
  )
}

export default Basket;