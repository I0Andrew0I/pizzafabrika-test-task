import { Redirect, Route, Switch } from "react-router";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import EmployeesList from "./components/EmployeesList/EmployeesList";
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Switch>
        <Route exact path="/employee/add" component={EmployeeForm} />
        <Route exact path="/employee/:employeeId" component={EmployeeForm} />
        <Route exact path="/" component={EmployeesList} />
        <Redirect to="/" />
      </Switch>
    </main>
  );
};

export default App;
