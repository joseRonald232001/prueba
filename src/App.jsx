import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import HeaderComponent from "./components/header/HeaderComponent";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HeaderComponent />

      <HashRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuestrosproductos" element={<MenuPage />} />
          </Routes>
        </HelmetProvider>
      </HashRouter>
    </>
  );
}

export default App;
