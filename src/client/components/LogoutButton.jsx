import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// Removes the JSW token and redirects to home page

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <Button variant="primary" onClick={handleLogout}>Log Out</Button>
  );
}

export default LogoutButton;