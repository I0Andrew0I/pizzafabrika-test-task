import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/reducers";

const middleWares = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, middleWares);

export default store;
