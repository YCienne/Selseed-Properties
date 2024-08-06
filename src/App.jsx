import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";

const App = () => {
  
  return (
    <>
    
    <div className="pt-[5.75rem] lg:pt-[1.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
    </div>

    <ButtonGradient />
    
    </>
  )
}

export default App
