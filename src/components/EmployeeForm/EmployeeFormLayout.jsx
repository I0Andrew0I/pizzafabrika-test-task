import PropTypes from "prop-types";
import { Button, Grid, Snackbar, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import SelectField from "../Fields/SelectField";
import PhoneField from "../Fields/PhoneField";
import DateField from "../Fields/DateField";
import CheckboxField from "../Fields/CheckboxField";
import { redirectDelay, roles } from "../../constants/constants";
import {
  handleBoolChange,
  handleDateChange,
  handleTextChange,
} from "../../helpers/helpers";
import "./EmployeeForm.scss";

const EmployeeFormLayout = ({
  fields,
  isAdd,
  getIsChanged,
  handleSave,
  isError,
  isOpenAlert,
}) => {
  const history = useHistory();
  const handleCancel = () => history.push("/");

  const { name, phone, isArchive, role, birthday } = fields;

  return (
    <>
      <div className="employee-form">
        <Grid
          className="grid"
          spacing={2}
          container
          item
          xs={12}
          sm={9}
          md={7}
          lg={6}
          xl={5}
        >
          <Grid className="grid-item" item xs={12} sm={6} zeroMinWidth>
            <TextField
              fullWidth
              label={name.label}
              value={name.value}
              onChange={handleTextChange(name.setValue)}
              helperText={
                isError && !name.isValid ? "Должно содержать только буквы" : " "
              }
              error={isError && !name.isValid}
            />
          </Grid>
          <Grid className="grid-item" item xs={12} sm={6} zeroMinWidth>
            <SelectField
              selectList={roles}
              value={role.value}
              onChange={handleTextChange(role.setValue)}
              label={role.label}
              isError={isError && !role.isValid}
            />
          </Grid>
          <Grid className="grid-item" item xs={12} sm={6}>
            <PhoneField
              value={phone.value}
              onChange={handleTextChange(phone.setValue)}
              label={phone.label}
              isError={isError && !phone.isValid}
            />
          </Grid>
          <Grid className="grid-item" item xs={12} sm={6} zeroMinWidth>
            <DateField
              value={birthday.value}
              onChange={handleDateChange(birthday.setValue)}
              label={birthday.label}
              isError={isError && !birthday.isValid}
            />
          </Grid>
          <Grid className="grid-item" item xs={12} zeroMinWidth>
            <CheckboxField
              value={isArchive.value}
              onChange={handleBoolChange(isArchive.setValue)}
              label={isArchive.label}
            />
          </Grid>
          <Grid className="grid-item" item xs={8} zeroMinWidth>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              disabled={(!isAdd && !getIsChanged()) || isOpenAlert}
              fullWidth
            >
              {isAdd ? "Добавить" : "Сохранить"}
            </Button>
          </Grid>
          <Grid className="grid-item" item xs={4} zeroMinWidth>
            <Button
              onClick={handleCancel}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Отмена
            </Button>
          </Grid>
        </Grid>
      </div>
      <Snackbar
        open={isOpenAlert}
        autoHideDuration={redirectDelay}
        onClose={handleCancel}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        message="Успешно"
      />
    </>
  );
};

EmployeeFormLayout.propTypes = {
  fields: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.instanceOf(Date),
      ]).isRequired,
      setValue: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired,
      isValid: PropTypes.bool,
    })
  ),
  isAdd: PropTypes.bool.isRequired,
  getIsChanged: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  isOpenAlert: PropTypes.bool.isRequired,
  handleCloseAlert: PropTypes.func.isRequired,
};

export default EmployeeFormLayout;
