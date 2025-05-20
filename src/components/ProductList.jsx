import { Products } from "./index";
export const ProductList = () => {
  const products = [
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
    {
      id: 3,
      image:
        "https://p1.music.126.net/RkAXxeK3ETEuiwH9GSxYUQ==/109951163925010061.jpg",
      title: "Apple AirPods Max – High-End, Spatial Audio",
      price: 12,
    },
    {
      id: 4,
      image: "https://yarhifi.ru/share/catalog/pic_90033341.jpg",
      title: "Sennheiser Momentum 4 – Audiophile Quality, Wireless",
      price: 23,
    },
    {
      id: 5,
      image:
        "https://i1.sndcdn.com/artworks-DTQaIpD48tqz5zo7-tVsRxw-t1080x1080.jpg",
      title: "JBL Tour One M2 – ANC, Deep Bass",
      price: 34,
    },
  ];
  return (
    <div className="container" >
      <div className="product-list flex gap-6 flex-wrap my-[50px]">
        {products.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
