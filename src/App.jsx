
import Header from "./components/Header"
import Footer from "./components/Footer"
import Mainbanner from "./components/Mainbanner"
import Features from "./components/Features"
import Financials from "./components/Financials"
import Socialproof from "./components/Socialproof"

export default function App() {
  
  return (
    <div className="w-full h-screen overflow-y-scroll ">
      <Header/>
      <Mainbanner/>
      <Features/>
      <Socialproof/>
      <Financials/>
      <Footer/>
    </div>
    
  )
}