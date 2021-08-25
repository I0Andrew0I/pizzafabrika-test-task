import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckboxField = ({ value, onChange, label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          checked={value}
          onChange={onChange}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label={label}
    />
  );
};

PropTypes.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxField;
