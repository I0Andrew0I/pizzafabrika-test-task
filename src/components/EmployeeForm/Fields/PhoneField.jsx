import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import ReactInputMask from "react-input-mask";

const PhoneField = ({ value, onChange, isError, label }) => {
  return (
    <ReactInputMask
      mask="+7 (999) 999-9999"
      value={value}
      onChange={onChange}
      disabled={false}
      maskChar="_"
    >
      {() => (
        <TextField
          value={value}
          fullWidth
          label={label}
          helperText={isError ? "Неверный формат" : " "}
          error={isError}
        />
      )}
    </ReactInputMask>
  );
};

PropTypes.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default PhoneField;
