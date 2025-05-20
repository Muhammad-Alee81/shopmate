export const Products = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="border-1 basis-[32%] p-4 rounded ">
      <img
        src={image}
      />
      <h2 className="text-xl font-bold my-4">
        {title}
      </h2>
      <div className="price-btn flex justify-between items-center ">
        <h2 className="text-xl font-bold">$ {price}</h2>
        <button className="bg-blue-900 py-1.5 px-3 rounded text-white cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
