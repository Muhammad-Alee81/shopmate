import { useTitle } from "../hooks/useTitle";
import { ProductList } from "../components/index";

export const Home = () => {
  useTitle("Home");
  return <ProductList />;
};
