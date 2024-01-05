import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleOnClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ email: form.email, password: form.password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Authentication FAILED');
      }

      const data = await response.json();
      const token = data.token;
      console.log(form);
      console.log('user logged in with token', token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='logincard'>
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Login Your account</Card.Subtitle>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleOnClick}>
              Submit
            </Button>
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
