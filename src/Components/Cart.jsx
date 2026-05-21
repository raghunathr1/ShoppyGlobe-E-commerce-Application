import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      
      <Header />
      <div className="cart-total">
        
      {/* Total Price and and Checkout  */}
      
        <h2> Total Price : ₹ {totalPrice} </h2>
        <Link to="/checkout"> <button id="ceBack"> Proceed To Checkout </button> </Link>
      </div>
      <h1 className="h4">Shopping Cart</h1>
      {
        cartItems.length > 0 ? (
          <>
            {
              cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))
            }
 
          </>
          // If Cart is Empty 
        ) : (
          <div className="empty-cart">
            <h2> 🛒 Cart is Empty 🛒</h2>
            <Link to="/"> <button id="ceBack"> Continue Shopping </button> </Link>
          </div>

        )
      }

    </div>
  );
}

export default Cart;