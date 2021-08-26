export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const SET_EMPLOYEE = "SET_EMPLOYEE";
export const LOAD_EMPLOYEES = "LOAD_EMPLOYEES";

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const setEmployee = (employee) => ({
  type: SET_EMPLOYEE,
  payload: employee,
});

export const loadEmployees = (employees) => ({
  type: LOAD_EMPLOYEES,
  payload: employees,
});
