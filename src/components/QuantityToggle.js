import { useState } from "react";

const QuantityToggle = ({product, toggleType}) => {
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    if (qty < 99) {
      setQty(qty + 1);
    } 
  }

  const decreaseQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  }

  const setCustomQty = (qty) => {
    if (qty >= 0) {
      setQty(Number(qty));
    }
  }

 const buttonType = (btn) => {
  if (btn === 'add') {
    return <button className="add-to-basket-btn" type="button">Add</button>
  }
 }

  return(
  <div className="add-to-basket-container">
    <div className="add-qty-container">
      <button type="button" onClick={() => decreaseQty()} disabled={qty === 0}>-</button>
      <label htmlFor="qty-input">Quantity</label>
      <input id="qty-input" name="qty-input" type="number" value={qty} onChange={(event) => setCustomQty(event.target.value)} min="0" max="99"/>
      <button onClick={() => increaseQty()}type="button" disabled={qty === 99}>+</button>
    </div>
    { buttonType(toggleType) }
  </div>
  )
}

export default QuantityToggle;