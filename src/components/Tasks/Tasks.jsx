import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { correctTask, deleteTask, toggleCompleted, toggleFavorites } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalForm from "../Modal/Modal";
import css from "./Task.module.css";
import CustomCheckbox from "../Checkbox/CustomCheckbox";
import { CustomDoneCheckbox } from "../Checkbox/CustomDoneCheckbox";

export const Task = ({ task }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteTask(task.id));
    const handleToggle = () => dispatch(toggleCompleted(task.id));
    const handleToggleFavorites = () => dispatch(toggleFavorites(task.id))
    
  const handleUpdate = (taskId, newTitle, newText) => {
    setIsModalOpen(true);
    dispatch(correctTask(taskId, newTitle, newText));
    };
  return (
    <div className={css.taskWrapper}>
      <div className={css.inputWrapper}>
        <CustomDoneCheckbox className={css.checkbox} onChange={handleToggle} checked={task.completed}/>
      <p className={css.title}>{task.title}</p>
        <p className={css.text}>{task.text}</p>
        <CustomCheckbox onChange={handleToggleFavorites} checked={task.favorites}/>
      </div>
      <div className={css.buttonWrapper}>
        <Button onClick={() => handleUpdate()}>Correct</Button>
    <Button className="ms-2" onClick={handleDelete}>
      Delete
    </Button>
     </div>
    
    {isModalOpen && (
    <ModalForm
          task={task}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};
Task.propTypes = {
 task: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
    title: PropTypes.string,
   completed: PropTypes.bool,
    favorites: PropTypes.bool,
  }).isRequired,
};
