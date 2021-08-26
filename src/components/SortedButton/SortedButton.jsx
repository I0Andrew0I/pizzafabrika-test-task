import PropTypes from "prop-types";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { sortTypes } from "../../constants/constants";
import "./SortedButton.scss";

const SortedButton = ({ sortType, setSortType, children }) => {
  const { none, less, above } = sortTypes;
  return (
    <div
      className="sorted-button"
      onClick={() => {
        if (sortType === none) setSortType(less);
        if (sortType === less) setSortType(above);
        if (sortType === above) setSortType(none);
      }}
    >
      {children}
      <div className={`arrow ${sortType !== none && "visible"}`}>
        {sortType === none && <ExpandLessIcon />}
        {sortType === less && <ExpandLessIcon />}
        {sortType === above && <ExpandMoreIcon />}
      </div>
    </div>
  );
};

SortedButton.propTypes = {
  sortType: PropTypes.oneOf(Object.values(sortTypes)).isRequired,
  setSortType: PropTypes.func.isRequired,
};

export default SortedButton;
