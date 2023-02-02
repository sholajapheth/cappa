import React from "react";
import { Home } from "./pages";
import { Route, createBrowserRouter as Router, Routes } from "react-router-dom";
import Reservation from "./pages/Reservation/Reservation";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
