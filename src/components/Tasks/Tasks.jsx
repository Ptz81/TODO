import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { correctTask, deleteTask, toggleCompleted } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalForm from "../Modal/Modal";

export const Task = ({ task }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  //   const handleCorrect = () => {
  //   setIsModalOpen(true);
  // };
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  const handleUpdate = (taskId, newTitle, newDescription) => {
    setIsModalOpen(true);
    dispatch(correctTask(taskId, newTitle, newDescription));
  };
  return (
    <div>
        <input
        onChange={handleToggle}
        type="checkbox"
        checked={task.completed}
      />
    <p>{task.text}</p>
    <Button onClick={handleDelete}>
        Delete
    </Button>
    <Button onClick={() => handleUpdate(task.id, task.title, task.text)}>
        Correct
    </Button>
    {isModalOpen && (
    <ModalForm
          task={task}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
Task.propTypes = {
 task: PropTypes.shape({
    id: PropTypes.number.isRequired, 
    text: PropTypes.string.isRequired, 
    title: PropTypes.string,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
