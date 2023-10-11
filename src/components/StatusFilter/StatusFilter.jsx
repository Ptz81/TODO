import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constants.js";
import { Button } from "react-bootstrap";
import { setStatusFilter } from "../../redux/actions.js";

export const StatusFilter = () => {
    const dispatch = useDispatch();  
    const filter = useSelector(state => state.filters.status);
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div>
        <Button
        variant="primary"
      className="ms-2"
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
        >
        All</Button>
        <Button
        variant="warning"
        className="ms-2"
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
        >
        Active
        </Button>
        <Button
        variant="success"
        className="ms-2"
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
        >
        Completed
      </Button>
      <Button
        variant="info"
        // className="ms-2"
        // selected={filter === statusFilters.favorites}
         className={`ms-2 ${filter === statusFilters.favorites ? 'active-filter' : ''}`}
        onClick={() => handleFilterChange(statusFilters.favorites)}
        >
        Favorites
        </Button>
    </div>
  );
};