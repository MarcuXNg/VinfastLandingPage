import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/hero";
import ModelsGrid from "./components/ModelsGrid";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Popup from "./components/PopUp";
import BanGiaoXe from "./components/BanGiaoXe";
import FloatingContact from "./components/FloatingContact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Popup />
                <FloatingContact
                  zaloLink="https://zalo.me/0967034207" // OA hoặc số Zalo
                  phone="0967034207"
                />
                <Hero />
                <ModelsGrid />
                <BanGiaoXe />
                <Form defaultModel="EI13_2024" />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
