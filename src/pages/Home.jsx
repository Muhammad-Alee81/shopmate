import { useEffect } from "react";
import { ProductList } from "../components/index";
import { useTitle } from "../hooks/useTitle";
export const Home = () => {
  useTitle("Home");
  return (
    <>
      <ProductList />
    </>
  );
};
