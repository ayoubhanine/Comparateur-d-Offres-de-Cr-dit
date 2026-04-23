import React from "react";
import { useState } from "react";
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

 function SimulateCapital({offer, currentPage, setcurrentPage}){  // destructuring de props
    const Data=simulateCapital(offer)  
    const rowPerPage=4
    const limit=currentPage*rowPerPage
    const indexFirst=limit-rowPerPage
    const currentData=Data.slice(indexFirst,limit)
  
    return(
        <div>
            <h1 className="text-gray-900 font-semibold">l’évolution d’un capital pour chaque année</h1><br></br>
        <table className="table-auto border-collapse border border-gray-400 mx-auto">
            <thead>
                <tr className="bg-gray-200">
                    <th  className="border border-gray-400 px-4 py-2">Year</th>
                    <th  className="border border-gray-400 px-4 py-2">Interet</th>
                    <th  className="border border-gray-400 px-4 py-2">Total</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((ele)=>(
                    <tr key={ele.year} 
                    className="text-center">
                        <td className="border border-gray-400 px-4 py-2">{ele.year}</td>
                        <td className="border border-gray-400 px-4 py-2">{ele.interet}</td>
                        <td className="border border-gray-400 px-4 py-2">{ele.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
         <div className="flex items-center justify-center gap-4 mt-6"><button onClick={()=>setcurrentPage((p)=>p-1)}
            disabled={currentPage===1}
            className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50 ">prev</button>
         <span className="text-gray-700 font-semibold">page:{currentPage}</span>
         <button onClick={()=>setcurrentPage((p)=>p+1)}
         disabled={limit>=Data.length}
            className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"> next
            </button></div>
            </div >
    )
 }
 export default SimulateCapital;