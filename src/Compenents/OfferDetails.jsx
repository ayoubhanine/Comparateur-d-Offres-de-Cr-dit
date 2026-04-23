import React from "react";
import SimulateCapital from "./InterestSimulator";
function OfferDetails({ offer, setShow, currentPage, setcurrentPage }) {
  console.log(offer);

  return (
    <div className="bg-slate-50 p-4 rounded-lg flex flex-col gap-2">
      <p className="">Durée: {offer.details.Durée} ans</p>
      <p>Mensualite :{offer.details.Mensualité} DH</p>
      <p>
        Cout Totale :{" "}
        <span className="text-red-500">
          {offer.details.Durée * offer.details.Mensualité * 12} DH
        </span>
      </p>
      {/* <p>Interet Payées: <span className="text-gray-600">{((offer.details.Durée)*(offer.details.Mensualité)*12)/(offer.rate*100)} DH</span></p> */}
      <SimulateCapital
        offer={offer}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
      />
      <button
        onClick={() => setShow((s) => false)}
        className="bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer w-23"
      >
        close
      </button>
    </div>
  );
}

export default OfferDetails;
