import { useDispatch } from "react-redux";
import {removeFromCart, increaseQuantity, decreaseQuantity} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    // Cart Items Details
    
    <div className="cart-items">
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} loading="lazy" width="150" />
      <div className="cart-details">
        <h2>{item.title}</h2>
        <h3>Rs {item.price}</h3>
        <p> Quantity : {item.quantity}</p>

        {/* Add Quantity Minus Quantity or Remove Item  */}

        <div>
          <button onClick={() => dispatch( decreaseQuantity(item.id))} > - </button>
          <button> {item.quantity} </button>
          <button onClick={() => dispatch( increaseQuantity(item.id))}> + </button>
        </div>

        <br />
        
        <button onClick={() => dispatch( removeFromCart(item.id))}> Remove Item </button>
        
      </div>
      </div>
    </div>
  );
}

export default CartItem;