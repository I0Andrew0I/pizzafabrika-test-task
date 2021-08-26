import PropTypes from "prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DateField = ({ value, onChange, label, isError }) => {
  return (
    <KeyboardDatePicker
      autoOk
      disableToolbar
      format="dd.MM.yyyy"
      label={label}
      value={value}
      onChange={onChange}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
      invalidDateMessage="Неверный формат даты"
      clearable
      fullWidth
      helperText={isError ? "Неверный формат" : " "}
      error={isError}
      cancelLabel={""}
      clearLabel={""}
      okLabel={""}
    />
  );
};

DateField.propTypes = {
  value: PropTypes.objectOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

DateField.defaultValue = {
  isError: false,
};

export default DateField;
