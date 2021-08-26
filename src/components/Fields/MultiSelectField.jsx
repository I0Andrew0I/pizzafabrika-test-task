import PropTypes from "prop-types";
const {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} = require("@material-ui/core");

const MultiSelectField = ({ selectList, value, onChange, isError, label }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={value}
        onChange={onChange}
        fullWidth
        error={isError}
      >
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

MultiSelectField.propTypes = {
  selectList: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  isError: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

MultiSelectField.defaultValue = {
  isError: false,
};

export default MultiSelectField;
