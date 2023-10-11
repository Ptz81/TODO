import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import { correctTask } from '../../redux/actions';
function ModalForm({ task, onClose }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  
  useEffect(() => {
    setText(task.text);
    setTitle(task.title);
    
  }, [task]);
   
  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    dispatch(correctTask(task.id, text, title ));
    onClose();
  };


  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ToDo List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="write title"
                autoFocus
                value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1"
            >
              <Form.Label>Task</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3} 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  task: PropTypes.object,
  onClose: PropTypes.func,

};