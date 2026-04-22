import React from "react";

function OfferDetails({ offer, setShow }) {
  console.log(offer);

  return (
    <div  className="bg-slate-50 p-4 rounded-lg flex flex-col gap-2">
      <p className="">duree: {offer.details.Durée} Ans</p>
      <p>Mensualite :{offer.details.Mensualité} DH</p>
      <p>Cout Totale : {(offer.details.Durée)*(offer.details.Mensualité)*12} DH</p>
      <p>Interet Payées: {((offer.details.Durée)*(offer.details.Mensualité)*12)/(offer.rate*100)} DH</p>
      <button onClick={() => setShow((s) => false)}
         className="bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer w-40">close</button>
    </div>
  );
}

export default OfferDetails;
