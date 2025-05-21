import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const Products = ({ product }) => {
  const { image, title, price } = product;
  const { addToCart, cartList , removeFromCart } = useCart();
  const [checkCart, setCheckCart] = useState(false);

  useEffect(() => {
    const isInCart = cartList.find((cartItem) => cartItem.id === product.id);
    if (isInCart) {
      setCheckCart(true);
    } else {
      setCheckCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="border-1 basis-[32%] p-4 rounded ">
      <img src={image} />
      <h2 className="text-xl font-bold my-4">{title}</h2>
      <div className="price-btn flex justify-between items-center ">
        <h2 className="text-xl font-bold">$ {price}</h2>
        {checkCart ? (
          <button className="bg-red-700 py-1.5 px-3 rounded text-white cursor-pointer"
          onClick={() => removeFromCart(product)}>
            Remove From Cart
          </button>
        ) : (
          <button
            className="bg-blue-900 py-1.5 px-3 rounded text-white cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
