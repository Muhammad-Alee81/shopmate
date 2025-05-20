import React from "react";

export const CartList = ({ cartProduct }) => {
  const { image, title, price } = cartProduct;

  return (
    <div>
      <div className="add-cart flex justify-between items-center  border-b-gray-500 border-b-1 py-4 ">
        <img
          className="w-[120px] h-[80px] rounded "
          src={image}
          alt="loading.."
        />
        <h2 className="font-bold">{title}</h2>
        <h2 className="font-bold">$: {price}</h2>
        <button className="bg-red-800 py-1 px-3.5 rounded text-white cursor-pointer ">
          Remove
        </button>
      </div>
    </div>
  );
};
