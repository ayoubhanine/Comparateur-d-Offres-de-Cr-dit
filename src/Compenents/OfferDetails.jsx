import React from "react";

function OfferDetails({ offer, setShow }) {
  console.log(offer);

  return (
    <div>
      <p className="">duree: {offer.details.Durée}</p>
      <p>Mensualite :{offer.details.Mensualité}</p>
      <p>Cout Totale : {(offer.details.Durée)*(offer.details.Mensualité)*12}</p>
      <p>Interet Payées: {((offer.details.Durée)*(offer.details.Mensualité)*12)/(offer.rate*100)}</p>
      <button onClick={() => setShow((s) => false)}
         className="bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer w-40">close</button>
    </div>
  );
}

export default OfferDetails;
