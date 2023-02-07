import { useState, useEffect } from "react";

const QuantityToggle = ({product, toggleType, addToBasket, defaultQty, changeBasketQty}) => {

  const [qty, setQty] = useState(defaultQty);
  

  useEffect(() => {
    setQty(defaultQty)
  },[defaultQty])

  const increaseQty = () => {
    if (qty < 99) {
      setQty(qty + 1);
    } 

    if (toggleType !== 'add') {
      addToBasket(product, 1);
    }
  }

  const decreaseQty = () => {

    if (toggleType !== 'add') {
      changeBasketQty(product, qty-1);
    }
    if (qty > 0) {
      setQty(qty - 1);
    }
  }

  const setCustomQty = (qty) => {
    if (toggleType !== 'add') {
      changeBasketQty(product, Number(qty));
    }

    if (qty >= 0) {
      setQty(Number(qty));
    }
  }

 const buttonType = (btn) => {
  if (btn === 'add') {
    return (
    <button
      className="add-to-basket-btn" 
      type="button"
      onClick={() => addToBasket(product, qty)}
    >   
      Add
    </button>
    )
  }
 }

 const handleEnterKey = (key) => {
  if (key === 'Enter') {
    addToBasket(product, qty);
  }
 }

  return(
  <div className="add-to-basket-container">
    <div className="add-qty-container">
      <button type="button" onClick={() => decreaseQty()} disabled={qty === 0}>-</button>
      <label htmlFor="qty-input">Quantity</label>
      <input 
        id="qty-input" 
        name="qty-input" 
        type="number" 
        value={qty} 
        onChange={(event) => setCustomQty(event.target.value)} 
        onKeyUp={(event) => handleEnterKey(event.key)}
        min="0" 
        max="99"/>
      <button onClick={() => increaseQty()}type="button" disabled={qty >= 99}>+</button>
    </div>
    { buttonType(toggleType) }
  </div>
  )
}

export default QuantityToggle;