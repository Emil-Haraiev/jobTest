import './App.css';

import Main from "./components/Main/Main";
import WhyUs from "./components/WhyUs/WhyUs";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Accordion from "./components/Accordion/Accordion";
import Brief from "./components/Brief/Brief";
import LeadMagnet from "./components/LeadMagnet/LeadMagnet";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Main/>
        <WhyUs/>
        <Services/>
        <Projects/>
        <Contact/>
        <Accordion/>
        <Brief/>
        <LeadMagnet/>
        <Footer/>
    </div>
  );
}

export default App;
