import React from 'react'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



const Contact = () => {
  const navigate = useNavigate();
   
  const goback =()=>{
    navigate('/home')
  }
  
  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          <h3>Contact Us</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>If You Any Kind of Help you Rich Out To Here </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content. "On the other hand, we denounce with righteous indignation
            and dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
        
          </Card.Text>

        <Card  className='CONTACT-PAGE' >
    <Card.Body>
      
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
       </Card.Body>
       </Card>
       
        </Card.Body>
        <Card.Footer className="text-muted">
          Shopify.com <h4>HelpLineNumber +91 7387307668</h4>
        </Card.Footer>
      </Card>
      <br></br>
      <button onClick={goback}>click me</button>Go Back to Page
    </div>
  );
}


export default Contact
