import React from "react";
import ReactDOM from "react-dom";
import "date-fns";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import store from "./store";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/ru";
import DateFnsUtils from "@date-io/date-fns";
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiPickersUtilsProvider locale={ruLocale} utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
