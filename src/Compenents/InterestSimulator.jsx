import React from "react";

function simulateCapital(offer){
    let results=[];
    let currentCapital=offer.amount
    for(let i=1;i<=offer.details.Durée;i++){
           let  interet=currentCapital*offer.rate;
           currentCapital=currentCapital+interet;
           results.push({
            year:i,
            interet:Number(interet.toFixed(2)),
            total: Number(currentCapital.toFixed(2))
           })
    }
    return results;
}

 function SimulateCapital({offer}){
    const Data=simulateCapital(offer)
    return(
        <table className="table-auto border-collapse border border-gray-400 mx-auto">
            <thead>
                <tr className="bg-gray-200">
                    <th  className="border border-gray-400 px-4 py-2">Year</th>
                    <th  className="border border-gray-400 px-4 py-2">Interet</th>
                    <th  className="border border-gray-400 px-4 py-2">Total</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((ele)=>(
                    <tr key={ele.year} 
                    className="text-center">
                        <td className="border border-gray-400 px-4 py-2">{ele.year}</td>
                        <td className="border border-gray-400 px-4 py-2">{ele.interet}</td>
                        <td className="border border-gray-400 px-4 py-2">{ele.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
 }
 export default SimulateCapital;