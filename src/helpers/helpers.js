const { parse, isValid } = require("date-fns");
const { format } = require("date-fns/esm");

exports.getMaxId = (array) =>
  array.reduce((maxId, { id }) => (maxId > id ? maxId : id), 0);

exports.transformStrToDate = (str) => {
  const [day, month, year] = str.split(".");
  return new Date(year, month - 1, day);
};

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
