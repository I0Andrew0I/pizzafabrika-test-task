import { useSelector } from "react-redux";
import Item from "./Item/Item";
import Filters from "./Filters/Filters";
import { useState } from "react";
import { sortTypes } from "../../constants/constants";
import { sortObjArrayByDate, sortObjArrayByText } from "../../helpers/helpers";
import "./EmployeesList.scss";

const EmployeesList = () => {
  const employees = useSelector(({ employees }) => employees);
  const [nameSortType, setNameSortType] = useState(sortTypes.none);
  const [birthdaySortType, setBirthdaySortType] = useState(sortTypes.none);

  const [roleFilter, setRoleFilter] = useState([]);
  const [isArchiveFilter, setIsArchiveFilter] = useState(false);

  const filteredByIsArchive = employees.filter(
    ({ isArchive }) => isArchive === isArchiveFilter
  );
  const filteredByRole = filteredByIsArchive.filter(({ role }) =>
    roleFilter.length > 0 ? roleFilter.includes(role) : true
  );

  const sortedByName = sortObjArrayByText(filteredByRole, "name", nameSortType);
  const sortedByBirthday = sortObjArrayByDate(
    sortedByName,
    "birthday",
    birthdaySortType
  );

  return (
    <div data-testid="employees-list" className="employees-list">
      <Filters
        sorted={{
          name: { sortType: nameSortType, setSortType: setNameSortType },
          birthday: {
            sortType: birthdaySortType,
            setSortType: setBirthdaySortType,
          },
        }}
        filtered={{
          role: {
            filter: roleFilter,
            setFilter: setRoleFilter,
          },
          isArchive: {
            filter: isArchiveFilter,
            setFilter: setIsArchiveFilter,
          },
        }}
      />

      {sortedByBirthday.map((employee) => (
        <Item key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeesList;
