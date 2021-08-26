import PropTypes from "prop-types";
import { Grid, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { roles } from "../../../constants/constants";
import EditIcon from "@material-ui/icons/Edit";
import "./Item.scss";

const Item = ({ employee }) => {
  const { id, name, role, phone, birthday } = employee;
  return (
    <div className="employee-item">
      <Grid container>
        <Grid container item xs={10}>
          <Grid item xs={6} md={3}>
            <div className="field">{name}</div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className="field">{roles[role]}</div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className="field">{birthday}</div>
          </Grid>
          <Grid item xs={6} md={3}>
            <div className="field">{phone}</div>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <div className="field">
            <IconButton
              variant="contained"
              component={Link}
              to={`/employee/${id}`}
            >
              <EditIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Item.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isArchive: PropTypes.bool.isRequired,
    role: PropTypes.oneOf(Object.keys(roles)),
    phone: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
  }),
};

export default Item;
