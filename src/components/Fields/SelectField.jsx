import PropTypes from "prop-types";
const {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} = require("@material-ui/core");

const SelectField = ({ selectList, value, onChange, isError, label }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} fullWidth error={isError}>
        {Object.keys(selectList).map((key) => (
          <MenuItem key={key} value={key}>
            {selectList[key]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={isError}>
        {isError ? "*Обязательное поле" : " "}
      </FormHelperText>
    </FormControl>
  );
};

SelectField.propTypes = {
  selectList: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

SelectField.defaultValue = {
  isError: false,
};

export default SelectField;
