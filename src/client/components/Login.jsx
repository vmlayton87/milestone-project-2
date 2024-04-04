import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const { login } = useAuth() // destructure the login function from our imported useAuth

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
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json()
        console.log('Login successful', data)
        login(data.token) // calling the login function from context to update the auth state
        navigate('/')
      } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }
  

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

export default Login;