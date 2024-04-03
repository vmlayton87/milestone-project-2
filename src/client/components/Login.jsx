import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInput = (event) => {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit to server here
    console.log(formData);
  };

  return (
    <div class="Create">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default login;