import React from 'react'
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Comp from './forGit/comp';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
       <Route path='/' exact element={<Comp/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;











/*import Classcomp from "./forGit/classComp";
import Fncomp from "./forGit/fnComp";
import Eventfile from "./forGit/EventFile";
import FnPropcomp from "./forGit/FnPropComp";
import ClPropComp from "./forGit/ClPropComp";
import ClStateComp from "./forGit/ClStateComp";

function App() {
  return (
    <>
      <FnPropcomp name="to React" />
      <ClPropComp arg="Class based" />
      <Classcomp />
      <Fncomp />
      <Eventfile />
      <ClStateComp />
    </>
  );
}

export default App;*/
//------------------------------------------------------------------------------------
