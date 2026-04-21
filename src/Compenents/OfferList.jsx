import React, { useState } from "react";
import OfferDetails from "./OfferDetails";
function OfferList(props) {

  return (
    <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
      {props.offers.map((offer) => (
        <div
          key={offer.id}
          className="bg-slate-50 p-5 rounded-lg flex flex-col gap-2"
        >
          <img src={offer.image} alt="" className="w-20 h-20 object-contain" />
          <h1 className="text-4xl ">{offer.bank}</h1>
          <p className="font-bold">Montant: {offer.amount} DH</p>
          <p className="text-blue-400">Taux dinteret: {offer.rate * 100} %</p>
          <button className="bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer w-40">
            Details
          </button>
        </div>
      ))}
      <OfferDetails />
    </div>
  );
}
export default OfferList;
