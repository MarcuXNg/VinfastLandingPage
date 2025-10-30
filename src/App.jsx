import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import ModelsGrid from "./components/ModelsGrid";
import Form from "./components/form";
import Footer from "./components/footer";
import ProductDetail from "./components/ProductDetail";

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
                <Hero />
                <ModelsGrid />
                <Form defaultModel="EI13_2024" />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
