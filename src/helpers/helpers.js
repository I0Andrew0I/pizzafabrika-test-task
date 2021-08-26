const { parse, isValid, compareDesc } = require("date-fns");
const { format } = require("date-fns/esm");
const { sortTypes } = require("../constants/constants");

exports.getMaxId = (array) =>
  array.reduce((maxId, { id }) => (maxId > id ? maxId : id), 0);

const transformStrToDate = (str) => {
  const [day, month, year] = str.split(".");
  return new Date(year, month - 1, day);
};
exports.transformStrToDate = transformStrToDate;

exports.transformDateToStr = (date) => {
  return format(date, "dd.MM.yyyy");
};

exports.validatePhone = (phone) => /^\+7 \(\d{3}\) \d{3}-\d{4}$/gm.test(phone);

exports.isValidDate = (day, month, year) => {
  const parsed = parse(`${day}/${month}/${year}`, "P", new Date());
  return isValid(parsed);
};

exports.getTotalIsValid = (...isValids) =>
  isValids.reduce((totalIsValid, isValid) => totalIsValid && isValid, true);

exports.handleTextChange =
  (setFunc) =>
  ({ target }) =>
    setFunc(target.value);

exports.handleBoolChange =
  (setFunc) =>
  ({ target }) =>
    setFunc(target.checked);

exports.handleDateChange = (setFunc) => (date) => setFunc(date);

exports.handleMultiSelectChange =
  (setFunc) =>
  ({ target }) =>
    setFunc(target.value);

const strCompare = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

exports.sortObjArrayByText = (array, field, sortType) => {
  if (sortType === sortTypes.none) return array;
  const lessFactor = sortType === sortTypes.less ? 1 : -1;
  return [...array].sort((a, b) => strCompare(a[field], b[field]) * lessFactor);
};

exports.sortObjArrayByDate = (array, field, sortType) => {
  if (sortType === sortTypes.none) return array;
  const lessFactor = sortType === sortTypes.less ? -1 : 1;
  return [...array].sort(
    (a, b) =>
      compareDesc(transformStrToDate(a[field]), transformStrToDate(b[field])) *
      lessFactor
  );
};
