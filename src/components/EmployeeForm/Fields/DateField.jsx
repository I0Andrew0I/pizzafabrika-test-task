import PropTypes from "prop-types";
import { KeyboardDatePicker } from "@material-ui/pickers";

const DateField = ({ value, onChange, label, isError }) => {
  return (
    <KeyboardDatePicker
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
    />
  );
};

PropTypes.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default DateField;
