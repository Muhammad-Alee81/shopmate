import { CartList } from "../components/index";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  useTitle("Cart");
  const { cartList, total } = useCart();

  return (
    <div className="container h-screen ">
      <h2 className="text-center font-bold mt-10">Sub Total : ${total}</h2>
      <div className="cart-container mt-20 ">
        {cartList.map((cartP) => {
          return <CartList key={cartP.id} cartProduct={cartP} />;
        })}
      </div>
    </div>
  );
};
