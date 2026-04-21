import data from "./DATA/offers.js"
import OfferList from "./Compenents/OfferList.jsx"
import Header from "./Compenents/Header.jsx"

function App() {


  return (
    <div >
   
    
    <Header/>
    <OfferList
     offers={data}
     />
    </div>
  )
}

export default App
