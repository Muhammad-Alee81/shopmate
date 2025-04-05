import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}
