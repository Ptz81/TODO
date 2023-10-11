import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants.js";
import { ListGroup } from "react-bootstrap";
import { Task } from "../Tasks/Tasks.jsx";
import { getTasks, getStatusFilter } from "../../redux/selectors.js";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    case statusFilters.favorites:
      return tasks.filter(task => task.favorites);
    default:
      return tasks;
  }
};

export const TaskList = () => {

  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ListGroup as="ol" numbered className={css.list}>
      {visibleTasks.map(task => (
        <ListGroup.Item  action style={{ display: 'flex' }} variant="info" as="li" mr="3" key={task.id}>
          <Task task={task}/>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};