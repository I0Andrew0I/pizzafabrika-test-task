import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/reducers";
import defaultEmployees from "../data/defaultEmployees.json";

const middleWares = composeWithDevTools(applyMiddleware(thunk));

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : { employees: defaultEmployees };

const store = createStore(reducer, persistedState, middleWares);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
