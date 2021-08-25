import { useSelector } from "react-redux";
import "./EmployeesList.scss";

const EmployeeList = () => {
  const employees = useSelector(({ employees }) => employees);

  return <div className="employee-list">{JSON.stringify(employees)}</div>;
};

export default EmployeeList;
