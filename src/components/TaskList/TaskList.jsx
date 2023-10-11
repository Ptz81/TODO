import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants.js";
import { ListGroup } from "react-bootstrap";
import { Task } from "../Tasks/Tasks.jsx";
import { getTasks, getStatusFilter } from "../../redux/selectors.js";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {

  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ListGroup as="ol" numbered>
      {visibleTasks.map(task => (
        <ListGroup.Item action variant="info" as="li" key={task.id}>
          <Task task={task} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};