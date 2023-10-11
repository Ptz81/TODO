import { StatusFilter } from "../StatusFilter/StatusFilter.jsx";
import { TaskCounter } from "../TaskCounter/TaskCounter.jsx";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
<div className={css.container}>
        <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>  
</div>
      

  );
};
