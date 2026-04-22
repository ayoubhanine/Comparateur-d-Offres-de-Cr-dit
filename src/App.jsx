import data from "./DATA/offers.js";
import OfferList from "./Compenents/OfferList.jsx";
import Header from "./Compenents/Header.jsx";
import { useState } from "react";

function App() {
  return (
    <div className="bg-slate-200 h-screen p-6 overflow-auto">
      <Header />
      <OfferList offers={data} />
    </div>
  );
}

export default App;
