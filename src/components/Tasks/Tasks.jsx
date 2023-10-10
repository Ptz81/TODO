import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ModalForm from "../Modal/Modal";

export const Task = ({ task }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleCorrect = () => {
    setIsModalOpen(true);
  };
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteTask(task.id));
     const handleToggle = () => dispatch(toggleCompleted(task.id));
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
    <Button onClick={handleCorrect}>
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
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
