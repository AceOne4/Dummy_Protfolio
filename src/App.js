import "./App.css";
import Header from "./Component/header/Header";
import Nav from "./Component/nav/Nav";
import About from "./Component/about/About";
import Experience from "./Component/Experience/Experience";
import Services from "./Component/services/Services";
import PortFolio from "./Component/portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/footer/Footer";
import { useRef } from "react";
import UseObserever from "./Hook/ObserverHook";
function App() {
  const aboutref = useRef(null);
  const homeref = useRef(null);
  const expref = useRef(null);
  const servicesref = useRef(null);
  const meref = useRef(null);

  const refs = [aboutref, homeref, expref, servicesref, meref];

  const letstalkhandler = () => {
    aboutref.current.scrollIntoView();
  };

  const isVisable = UseObserever(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    },
    refs
  );
  return (
    <>
      <Header myref={homeref} onClick={letstalkhandler} />
      <Nav shows={isVisable} />
      <About myref={meref} onClick={letstalkhandler} />
      <Experience myref={expref} />
      <Services myref={servicesref} />
      <PortFolio />
      <Contact myref={aboutref} />
      <Footer />
    </>
  );
}

export default App;
