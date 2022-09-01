import Classcomp from "./forGit/classComp";
import Fncomp from "./forGit/fnComp";
import Eventfile from "./forGit/EventFile";
import FnPropcomp from "./forGit/FnPropComp";
import ClPropComp from "./forGit/ClPropComp";
import ClStateComp from "./forGit/ClStateComp";
import Route from "./forGit/Route";
import Hooks from "./forGit/UseStateHook";
import UseEffectHook from "./forGit/UseEffectHook";
import CustomHook from "./forGit/CustomHook";

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
