import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";

function ModalForm({ task, onClose, onUpdate }) {

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    onUpdate(task.id, title, description);
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
  onUpdate: PropTypes.func,
};