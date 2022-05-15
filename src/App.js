import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Basket } from "./pages/Basket";
import { History } from "./pages/History";
import { Main } from "./pages/Main";
import { Header } from "./pages/components/Header";
import { Footer } from "./pages/components/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppleProduct } from "./pages/components/AppleProduct";
import { fetchItems, setItems } from "./redux/reducers/main_reducer";
import { Preloader } from "./pages/components/Preloader";
import { EmptyBasket } from "./pages/components/EmptyBasket";

const App = () => {
  const dispatch = useDispatch();

  const [value, setSearch] = React.useState("");

  const { items } = useSelector(({ main }) => {
    return {
      items: main.items,
    };
  });

  const filteredName = items.filter((items) => {
    return items.name.toLowerCase().includes(value.toLowerCase());
  });

  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="App clear p-20">
      <Header setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={<Main items={items} filteredName={filteredName} />}
        />
        <Route path="/basket" element={<Basket />} />
        <Route path="/history" element={<History items={items} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
