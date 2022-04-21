import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Basket } from "./pages/Basket";
import { History } from "./pages/History";
import { Main } from "./pages/Main";
import { Header } from "./pages/components/Header";
import { Footer } from "./pages/components/Footer";
import axios from "axios";

const App = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="App clear p-20">
      <Header />
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
