import { Route, Switch } from "react-router";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Switch>
        <Route path="/employee/add" component={EmployeeForm} />
        <Route path="/employee/:employeeId" component={EmployeeForm} />
        <Route path="*" component={EmployeesList} />
      </Switch>
    </main>
  );
};

export default App;
