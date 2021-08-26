import { getMaxId } from "../../helpers/helpers";

const {
  ADD_EMPLOYEE,
  SET_EMPLOYEE,
  LOAD_EMPLOYEES,
} = require("../actions/employees");

const employees = (employeesState = [], { type, payload }) => {
  switch (type) {
    case ADD_EMPLOYEE:
      const newId = getMaxId(employeesState) + 1;
      return [...employeesState, { ...payload, id: newId }];
    case SET_EMPLOYEE:
      return employeesState.map((employee) =>
        employee.id === payload.id ? payload : employee
      );
    case LOAD_EMPLOYEES:
      return payload;
    default:
      return employeesState;
  }
};

export default employees;
