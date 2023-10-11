// import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions.js";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";

export const TaskForm = () => {
    const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
      const form = event.target;
      dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
<Container>
     <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="write title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1"
            >
              <Form.Label>Task</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </Form>
      <Button variant="primary" type="submit">Add task</Button>     
</Container>
                
  );
};
