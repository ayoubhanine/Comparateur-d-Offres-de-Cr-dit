import React, { useState } from "react";
import OfferDetails from "./OfferDetails";
function OfferList(props) {
  const [currentPage, setcurrentPage] = useState(1);

  const [offer, setOffer] = useState({});
  const [show, setShow] = useState(false);
  let recommended = props.offers[0];
  for (let i = 0; i < props.offers.length; i++) {
    if (props.offers[i].rate < recommended.rate) {
      recommended = props.offers[i];
    }
  }

  return (
    <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
      {props.offers.map((offer) => (
        <div
          key={offer.id}
          className="bg-slate-50 p-5 rounded-lg flex flex-col gap-2 relative"
        >
          {offer.rate === recommended.rate && (
            <p className="bg-green-500 text-white px-2 py-1 rounded w-fit absolute -top-2 left-0">
              Recommended
            </p>
          )}
          <img src={offer.image} alt="" className="w-20 h-20 object-contain" />
          <h1 className="text-4xl ">{offer.bank}</h1>
          <p className="font-bold">Montant: {offer.amount} DH</p>
          <p className="text-blue-400">Taux dinteret: {offer.rate * 100} %</p>

          <button
            onClick={() => {
              setOffer(offer);
              setShow((show) => true);
              setcurrentPage(1);
            }}
            className="bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer w-40"
          >
            Voir Details
          </button>
        </div>
      ))}
      {show && (
        <OfferDetails
          offer={offer}
          setShow={setShow}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
      )}
    </div>
  );
}
export default OfferList;
