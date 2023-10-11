import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from "./TaslCounter.module.css";
export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
       if (task.favorites) {
        acc.favorites += 1;
      }
      return acc;
    },
    { active: 0, completed: 0, favorites: 0 }
  );

  return (
    <div className={css.counter}>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
      <p>Favorites: {count.favorites}</p>
    </div>
  );
};
