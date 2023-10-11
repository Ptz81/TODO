import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";
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
      <p className={css.counterActive}>Active: {count.active}</p>
      <p className={css.counterCompleted}>Completed: {count.completed}</p>
      <p className={css.counterFavorites}>Favorites: {count.favorites}</p>
    </div>
  );
};
