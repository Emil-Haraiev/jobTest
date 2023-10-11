import './App.css';
import Main from "./components/Main/Main";
import WhyUs from "./components/WhyUs/WhyUs";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Accordion from "./components/Accordion/Accordion";
import Brief from "./components/Brief/Brief";

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
    </div>
  );
}

export default App;
