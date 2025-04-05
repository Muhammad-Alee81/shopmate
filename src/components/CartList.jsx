export const CartList = ({ image, title, price }) => {
  return (
    <>
      <div className="container py-10">
        <div className="cart-list flex justify-between items-center">
          <div className="image w-[100px] ">
            <img
              src="https://a.storyblok.com/f/49568/3000x3000/65770f1602/logo.jpg/m/1600x0/filters:quality(80):format(jpeg)"
              alt="loading...."
            />
          </div>
          <div className="title text-[20px] font-bold mt-[10px] ">
            <h2>title</h2>
          </div>

          <span className="text-1xl font-bold ">$:45</span>
          <span className="bg-red-700 px-3 py-2 rounded text-white cursor-pointer  w-fit ">
            Remove
          </span>
        </div>
      </div>
    </>
  );
};
