import rootReducer from "./CompState";
import { configureStore } from "redux";
const store = configureStore(rootReducer);
export default rootReducer;
