import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { isEqual, isValid } from "date-fns";
import { addEmployee, setEmployee } from "../../store/actions/employees";
import {
  getTotalIsValid,
  transformDateToStr,
  transformStrToDate,
  validatePhone,
} from "../../helpers/helpers";
import EmployeeFormLayout from "./EmployeeFormLayout";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const { employeeId } = useParams();

  const currEmployee = useSelector(
    ({ employees }) =>
      employees.filter(({ id }) => id === Number(employeeId))[0]
  );

  const isAdd = !Boolean(currEmployee);

  const [name, setName] = useState(currEmployee?.name || "");
  const [isArchive, setIsArchive] = useState(currEmployee?.isArchive || false);
  const [role, setRole] = useState(currEmployee?.role || "");
  const [phone, setPhone] = useState(currEmployee?.phone || "");
  const [birthday, setBirthday] = useState(
    (currEmployee?.birthday && transformStrToDate(currEmployee.birthday)) ||
      new Date(1990, 0, 1)
  );
  const [isError, setIsError] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const handleCloseAlert = () => setIsOpenAlert(false);

  const getIsChanged = () =>
    !(
      name === currEmployee?.name &&
      isArchive === currEmployee?.isArchive &&
      role === currEmployee?.role &&
      phone === currEmployee?.phone &&
      isEqual(birthday, transformStrToDate(currEmployee?.birthday))
    );

  const handleNameChange = ({ target }) => setName(target.value);
  const handleIsArchiveChange = ({ target }) => setIsArchive(target.checked);
  const handleRoleChange = ({ target }) => setRole(target.value);
  const handlePhoneChange = ({ target }) => setPhone(target.value);
  const handleBirthdayChange = (date) => setBirthday(date);

  const isValidDate = isValid(birthday);
  const isValidPhone = validatePhone(phone);
  const isValidName = name?.length > 0 && /^[a-zA-Zа-яА-Я -]+$/gm.test(name);
  const isValidRole = role?.length > 0;

  const handleSave = () => {
    const totalIsValid = getTotalIsValid(
      isValidDate,
      isValidPhone,
      isValidName,
      isValidRole
    );

    if (!totalIsValid) {
      setIsError(true);
      return;
    }

    const newBirthday = transformDateToStr(birthday);
    const newEmployee = {
      name: name.trim(),
      isArchive,
      role,
      phone,
      birthday: newBirthday,
    };
    dispatch(
      isAdd
        ? addEmployee(newEmployee)
        : setEmployee({ ...newEmployee, id: Number(employeeId) })
    );
    setIsOpenAlert(true);
  };

  return (
    <EmployeeFormLayout
      fields={{
        name: {
          value: name,
          onChange: handleNameChange,
          label: "Имя и фамилия",
          isValid: isValidName,
        },
        isArchive: {
          value: isArchive,
          onChange: handleIsArchiveChange,
          label: "В архиве",
          isValid: isValidName,
        },
        role: {
          value: role,
          onChange: handleRoleChange,
          label: "Должность",
          isValid: isValidRole,
        },
        phone: {
          value: phone,
          onChange: handlePhoneChange,
          label: "Телефон",
          isValid: isValidPhone,
        },
        birthday: {
          value: birthday,
          onChange: handleBirthdayChange,
          label: "Дата рождения",
          isValid: isValidDate,
        },
      }}
      getIsChanged={getIsChanged}
      isAdd={isAdd}
      handleSave={handleSave}
      isError={isError}
      isOpenAlert={isOpenAlert}
      handleCloseAlert={handleCloseAlert}
    />
  );
};

export default EmployeeForm;
