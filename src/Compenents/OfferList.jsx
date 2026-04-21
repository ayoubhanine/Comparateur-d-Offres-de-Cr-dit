import React from "react";
function OfferList(props){
    return(
        <div className="flex space-x-64 ">
           {props.offers.map((offer)=>(
            <div key={offer.id} className="card">
                <h1 className="text-4xl ">{offer.bank}</h1>
                <p className="font-bold">Montant: {offer.amount} DH</p>
                <p className="text-blue-400">Taux dinteret: {(offer.rate)*10} %</p>

            </div>
           ))}
        </div>
    )
}
export default OfferList;