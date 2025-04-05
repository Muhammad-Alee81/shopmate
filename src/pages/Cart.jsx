import { CartList } from "../components/index";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  const cart = [
    {
      id: 1,
      image:
        "https://willya.de/wp-content/uploads/2018/09/Beats_by_Dre_Solo3_1.jpg",
      title: "Sony WH-1000XM5 – Noise Cancelling, Wireless",
      price: 10,
    },
    {
      id: 2,
      image:
        "https://a.storyblok.com/f/49568/3000x3000/65770f1602/logo.jpg/m/1600x0/filters:quality(80):format(jpeg)",
      title: "Bose QuietComfort 45 – Premium ANC, Wireless",
      price: 678,
    },
  ];
  useTitle("Cart");
  return (
    <>
      {cart.map((cartList) => {
        return <CartList cartList = {cartList} />;
      })}
    </>
  );
};
