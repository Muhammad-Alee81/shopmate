import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
export const Header = () => {
  const { total , cartList } = useCart();

  return (
    <>
      <div className="container ">
        <header className="header border-b-1 border-gray-500 flex justify-between py-10 ">
          <div className="logo">
            <h1 className="font-semibold">Shopping Cart</h1>
          </div>
          <nav className="navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` px-[13px] py-[10px] rounded ${isActive ? "bg-gray-300" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                ` px-[13px] py-[10px] rounded ${isActive ? "bg-gray-300" : ""}`
              }
            >
              Cart
            </NavLink>
          </nav>
          <div className="cartItems">cart : {cartList.length}</div>
        </header>
      </div>
    </>
  );
};
