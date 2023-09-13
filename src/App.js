import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShopPage from "./Pages/ShopPage";
import ProductPage from "./Pages/ProductPage";
import NotFound from "./Pages/NotFound";
import PortalPage from "./Pages/PortalPage";
import ScrollToTop from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} exact />
        <Route path="/home" Component={HomePage} exact />
        <Route path="/shop" Component={ShopPage} />
        <Route path="/products/:proId" Component={ProductPage} />
        <Route path="/portal" Component={PortalPage} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
