export const Products = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="products p-4 rounded basis-[32%]">
      <div className="image w-full ">
        <img src={image} alt="loading...." />
      </div>
      <div className="title text-[20px] font-bold mt-[10px] ">
        <h2>{title}</h2>
      </div>
      <div className="price-btn flex justify-between items-center mt-[15px] ">
        <span className="text-1xl font-bold block ">$:{price}</span>
        <span className="bg-sky-700 px-3 py-2 rounded text-white cursor-pointer block w-fit ">
          Add To Cart
        </span>
      </div>
    </div>
  );
};
