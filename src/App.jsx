import "./App.css";
import { Header } from "./components/index";
import { Home } from "./pages/Home";
import { AllRoutes } from "./routes/AllRoutes";
export function App() {
  return (
    <>
      <Header />
      <AllRoutes />
    </>
  );
}
