import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="flex justify-between items-center py-5 border-b-1 border-gray-300">
          <div className="logo">
            <h2 className="text-[23px] font-bold">Shopping Cart</h2>
          </div>
          <div className="navigation">
            <ul className="flex gap-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>`px-3 py-2 rounded
                    ${isActive ? "bg-gray-200" : "" }` 
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>`px-3 py-2 rounded
                    ${isActive ? "bg-gray-200" : "" }` 
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="cart">
            <span className="font-semibold">Cart : 2</span>
          </div>
        </header>
      </div>
    </>
  );
};
