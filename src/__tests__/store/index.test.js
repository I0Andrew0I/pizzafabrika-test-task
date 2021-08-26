import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import reducers from "../../store/reducers/reducers";

import defaultEmployees from "../../data/defaultEmployees.json";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addEmployee,
  loadEmployees,
  setEmployee,
} from "../../store/actions/employees";

describe("store", () => {
  describe("employees", () => {
    let store;

    beforeAll(() => {
      const middleWares = composeWithDevTools(applyMiddleware(thunk));

      const persistedState = localStorage.getItem("reduxState")
        ? JSON.parse(localStorage.getItem("reduxState"))
        : { employees: defaultEmployees };

      store = createStore(reducers, persistedState, middleWares);
    });

    const employee = {
      birthday: "07.06.1983",
      isArchive: true,
      name: "Прасковья Кондратьева",
      phone: "+7 (875) 517-3873",
      role: "cook",
    };

    it("init employees", () => {
      expect(store.getState().employees).toEqual(defaultEmployees);
    });

    it("load employee action", () => {
      store.dispatch(loadEmployees([]));
      expect(store.getState().employees).toEqual([]);
    });

    it("add employee action", () => {
      store.dispatch(addEmployee(employee));
      const output = [{ ...employee, id: 1 }];
      expect(store.getState().employees).toEqual(output);
    });

    it("set employee action", () => {
      store.dispatch(
        setEmployee({ ...employee, name: "Andrew Statnikov", id: 1 })
      );
      const output = [{ ...employee, id: 1, name: "Andrew Statnikov" }];
      expect(store.getState().employees).toEqual(output);
    });
  });
});
