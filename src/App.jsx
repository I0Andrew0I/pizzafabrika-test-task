import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import defaultEmployees from "./data/defaultEmployees.json";
import { loadEmployees } from "./store/actions/employees";

const getEmployeesFromLocalStore = () =>
  JSON.parse(localStorage.getItem("employees"));

const saveEmployeesToLocalStore = (employees) =>
  localStorage.setItem("employees", JSON.stringify(employees));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const employees = getEmployeesFromLocalStore() || defaultEmployees;
    dispatch(loadEmployees(employees));
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">Pizza fabrika test task</header>
      <main className="app-main">Main content</main>
    </div>
  );
};

export default App;
