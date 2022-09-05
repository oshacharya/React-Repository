import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './forGit/forRedux/Store'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber, decNumber } from './forGit/forRedux/Action'

const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
Store.subscribe(()=>console.log(Store.getState()))
  return (
    <>
    <Provider Store={Store}>
    <div className="container">
    <h1>Increment/Decrement Counter</h1>
    <h4>using React and redux</h4>
    <div className="">
      <a onClick={()=>dispatch(decNumber())} title='Decrement'><span> - </span></a>
      <input type="text" value="0" name="" className=""></input>
      <a onClick={()=>dispatch(incNumber())} title='Increment'><span> + </span></a>
    </div>
    </div>
    </Provider>
    </>
  )
}

export default App



//--------------------------------------------------------------------------------------------------
/*import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {Store}  from "./forGit/Store"
import {Provider}  from "react-redux"
import Home from "./forGit/Home"
import Login from "./forGit/Login"
import Contact from "./forGit/Contact"

function App() {
  return (
    <div className="App">
      <Provider store={Store}> 
      <Router>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </Router>      
      </Provider>
    </div>
  );
}

export default App;*/

//--------------------------------------------------------------------------------------------------
/*import Classcomp from "./forGit/classComp";
import Fncomp from "./forGit/fnComp";
import Eventfile from "./forGit/EventFile";
import FnPropcomp from "./forGit/FnPropComp";
import ClPropComp from "./forGit/ClPropComp";
import ClStateComp from "./forGit/ClStateComp";
import Route from "./forGit/Route";
import Hooks from "./forGit/UseStateHook";
import UseEffectHook from "./forGit/UseEffectHook";
import CustomHook from "./forGit/CustomHook";
import { BrowserRouter } from 'react-router-dom';
import changeTheNumber from './forGit/forRedux/Reducer';

function App() {
  return (
    <>
      <FnPropcomp name="to React" />
      <ClPropComp arg="Class based" />
      <Classcomp />
      <Fncomp />
      <Eventfile />
      <ClStateComp />
      <Route />
      <Hooks />
      <UseEffectHook />
      <CustomHook />
    </>
  );
}

export default App;
*/
