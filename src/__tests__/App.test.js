import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";
import EmployeesList from "../components/EmployeesList/EmployeesList";
import store from "../store";

const getWithStore = (component) => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {component}
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  </Provider>
);

describe("ui", () => {
  it("init app", async () => {
    render(getWithStore(<App />));
    expect(await screen.findByTestId("app")).not.toBeNull();
  });

  it("init employee form", async () => {
    render(getWithStore(<EmployeeForm />));
    expect(await screen.findByTestId("employees-form")).not.toBeNull();
  });

  it("init employees list", async () => {
    render(getWithStore(<EmployeesList />));
    expect(await screen.findByTestId("employees-list")).not.toBeNull();
  });
});
