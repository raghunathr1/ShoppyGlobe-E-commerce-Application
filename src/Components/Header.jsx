import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import './style.css'

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    
    // Heading Section 

    <header className="header">
      <div id="heading">
        <h1 className="h1">Shoppy-Globe</h1>

        {/* Link Section */}

        <nav>
        <Link to="/"> <h3 className="h2"> 🏠 Home</h3> </Link>
        <Link to="/cart"> <h3 className="h2">🛒 Cart ({cartItems.length}) </h3> </Link>
      </nav>
      
      {/* Marquee Added */}

        <marquee>E-Commerce Application</marquee>
      </div>
      <h1 className="h4">All Products</h1>
      <div id='input'>
         <input type="text" placeholder="Search Product" onChange={(e) => dispatch( setSearchTerm(e.target.value) )} />
      </div>
    </header>
  );
}

export default Header;