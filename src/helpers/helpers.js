import { compareDesc, format } from "date-fns";
import {} from "date-fns";
import { sortTypes } from "../constants/constants";

export const getMaxId = (array) =>
  array.reduce((maxId, { id }) => (maxId > id ? maxId : id), 0);

const transformStrToDate = (str) => {
  const [day, month, year] = str.split(".");
  return new Date(year, month - 1, day);
};

export const transformDateToStr = (date) => {
  return format(date, "dd.MM.yyyy");
};

export const validatePhone = (phone) =>
  /^\+7 \(\d{3}\) \d{3}-\d{4}$/gm.test(phone);

export const getTotalIsValid = (...isValids) =>
  isValids.reduce((totalIsValid, isValid) => totalIsValid && isValid, true);

export const handleTextChange =
  (setFunc) =>
  ({ target }) =>
    setFunc(target.value);

export const handleBoolChange =
  (setFunc) =>
  ({ target }) =>
    setFunc(target.checked);

export const handleDateChange = (setFunc) => (date) => setFunc(date);

export const handleMultiSelectChange =
  (setFunc) =>
  ({ target }) =>
    setFunc(target.value);

const strCompare = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

export const sortObjArrayByText = (array, field, sortType) => {
  if (sortType === sortTypes.none) return array;
  const lessFactor = sortType === sortTypes.less ? 1 : -1;
  return [...array].sort((a, b) => strCompare(a[field], b[field]) * lessFactor);
};

export const sortObjArrayByDate = (array, field, sortType) => {
  if (sortType === sortTypes.none) return array;
  const lessFactor = sortType === sortTypes.less ? -1 : 1;
  return [...array].sort(
    (a, b) =>
      compareDesc(transformStrToDate(a[field]), transformStrToDate(b[field])) *
      lessFactor
  );
};

export { transformStrToDate, strCompare };
