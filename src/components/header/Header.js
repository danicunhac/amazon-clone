import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from "../stateProvider/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      {/* Search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option header_border">
            <span className="header_option_one">Hello,</span>
            <span className="header_option_two">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option header_border">
            <span className="header_option_one">Returns</span>
            <span className="header_option_two">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option header_border">
            <span className="header_option_one">Your</span>
            <span className="header_option_two">Prime</span>
          </div>
        </Link>
      </div>
      {/* Basket icon with number */}
      <Link to="/checkout" className="header_link">
        <div className="header_option_basket header_border">
          {/* Shopping basket icon */}
          <ShoppingBasketIcon />
          {/* Number of items in the basket */}
          <span className="basket_count">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
