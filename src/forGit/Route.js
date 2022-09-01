import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutingComp from "./RoutingComp";
import About from "./About";
import Contact from "./Contact";

function Rout() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<RoutingComp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rout;
