import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderComponent from "./components/header/HeaderComponent";
import { HelmetProvider } from "react-helmet-async";
import MenuPage from "./pages/menupage/MenuPage";

function App() {
  return (
    <>
      <HeaderComponent />

      <HashRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuestrosproductos" element={<MenuPage/>} />
          </Routes>
        </HelmetProvider>
      </HashRouter>
    </>
  );
}

export default App;
