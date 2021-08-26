import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";
import CheckboxField from "../../Fields/CheckboxField";
import MultiSelectField from "../../Fields/MultiSelectField";
import SortedButton from "../../SortedButton/SortedButton";
import AddIcon from "@material-ui/icons/Add";
import { roles, titleOfEmployee } from "../../../constants/constants";
import {
  handleBoolChange,
  handleMultiSelectChange,
} from "../../../helpers/helpers";
import "./Filters.scss";

const Field = ({ children }) => <div className="field">{children}</div>;

const Filters = ({ sorted, filtered }) => {
  const { name, birthday } = sorted;
  const { isArchive, role } = filtered;

  return (
    <div className="employee-filter">
      <Grid container>
        <div className="filters">
          <Grid item container xs={12}>
            <Grid item xs={12} md={8}>
              <div className="filter">
                <MultiSelectField
                  selectList={roles}
                  onChange={handleMultiSelectChange(role.setFilter)}
                  value={role.filter}
                  label={"Должности"}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="filter">
                <CheckboxField
                  value={isArchive.filter}
                  onChange={handleBoolChange(isArchive.setFilter)}
                  label={"В архиве"}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <Grid container item xs={10}>
          <Grid item xs={6} md={3}>
            <Field>
              <SortedButton
                sortType={name.sortType}
                setSortType={name.setSortType}
              >
                {titleOfEmployee.name}
              </SortedButton>
            </Field>
          </Grid>
          <Grid item xs={6} md={3}>
            <Field>{titleOfEmployee.role}</Field>
          </Grid>
          <Grid item xs={6} md={3}>
            <Field>
              <SortedButton
                className="field"
                sortType={birthday.sortType}
                setSortType={birthday.setSortType}
              >
                {titleOfEmployee.birthday}
              </SortedButton>
            </Field>
          </Grid>
          <Grid item xs={6} md={3}>
            <Field>{titleOfEmployee.phone}</Field>
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Field>
            <IconButton
              variant="contained"
              component={Link}
              to={`/employee/add`}
            >
              <AddIcon />
            </IconButton>
          </Field>
        </Grid>
      </Grid>
    </div>
  );
};

Filters.propTypes = {
  sorted: PropTypes.objectOf(
    PropTypes.shape({
      sortType: PropTypes.string.isRequired,
      setSortType: PropTypes.func.isRequired,
    })
  ).isRequired,
  filtered: PropTypes.objectOf(
    PropTypes.shape({
      filter: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string).isRequired,
        PropTypes.bool.isRequired,
      ]).isRequired,
      setFilter: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Filters;
