import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Alert Meassage for if inputs are not Field

  function handleOrder() {
    if (!name || !address || !phone) {
      alert("Please Fill All Details");
      return;
    }
    alert("Order Placed");
    dispatch(clearCart());
    navigate("/");
  }

  return (
    <>
    {/* Inputs for Checkout order */}

    <h1 className="h4">Checkout</h1>
    <div className="checkout-container">
      
      <div id="address">
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />

        <input type="text" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <br /><br />
        <input type="number" placeholder="Enter Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />

      </div>
      <br />

      {/* Summary of Placed Order */}
      
      <div id="summary">
      <h2>Order Summary</h2>
      {
        cartItems.map((item) => (
          <div key={item.id}>
            <h3> Product Name: {item.title}</h3>
            <p> Price : Rs {item.price} × {item.quantity}</p>
          </div>
        ))
      }
      <h2>Total : Rs {totalPrice}</h2>
      <button onClick={handleOrder}> Place Order </button>
      </div>
    </div>
    </>
  );
}

export default Checkout;