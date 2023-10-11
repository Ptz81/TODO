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
    const title = form.elements.title.value; 
    console.log(title);
    const text = form.elements.text.value; 
   
    dispatch(addTask(text, title)); 
    form.reset();
  };

  return (
<Container style={{borderRadius:"20px", boxShadow: "0px 0px 3px #0d6efd", padding: "20px"}}>
     <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="write title"
                autoFocus
                name="title"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="ControlTextarea1"
            >
              <Form.Label>Task</Form.Label>
              <Form.Control as="textarea" rows={1} name="text"/>
            </Form.Group>
          <Button variant="primary" type="submit">Add task</Button>     
      </Form>
      
</Container>
                
  );
};
