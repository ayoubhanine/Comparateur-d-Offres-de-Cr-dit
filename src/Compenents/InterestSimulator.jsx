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
        <table border="1">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interet</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((ele)=>(
                    <tr key={ele.year}>
                        <td>{ele.year}</td>
                        <td>{ele.interet}</td>
                        <td>{ele.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
 }
 export default SimulateCapital;