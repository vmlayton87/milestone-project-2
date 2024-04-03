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

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/login', { // Adjust this URL if your API endpoint is different
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        // Here you might want to do further processing, like saving the token or redirecting the user
      } else {
        console.error('Login failed');
        // Here you can handle errors, such as displaying a message to the user
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle the error, for example, by displaying an error message
    }
  };
  

  return (
    <div className="Create">
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