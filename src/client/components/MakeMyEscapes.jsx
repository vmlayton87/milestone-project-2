import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

function newEscape() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    vibe: ''
  })

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDate = (e) => {
    const { name, value } = e.target;
    // Formatting the date value to match the format expected by input type="date"
    const formattedDate = new Date(value).toISOString().split('T')[0];
    setFormData({
      ...formData,
      [name]: formattedDate,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // submit to server here
    try {
      await axios.post(`/itinerary/new`, formData)
    }
    catch {
    res.status(404).send("Unable to create new itinerary.") // will look up a better status code.
  }};

  return (
    <div className="Create">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="destination">
        <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInput}
            // onChange= {e=>setFormData({destination:e.target.value, startDate, endDate ,vibe})}
            
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload an image for your experience</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <br />
        <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleDate}
            // onChange= {e=>setFormData({destination, startDate: e.target.value, endDate ,vibe})}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleDate}
            // onChange= {e=>setFormData({destination, startDate, endDate: e.target.value ,vibe})}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="vibe">
        <Form.Label>Vibe</Form.Label>
          <Form.Select aria-label="Select a vibe" 
          onChange={handleInput}
          // onChange= {e=>setFormData({destination, startDate, endDate ,vibe: e.target.value})}
          // value={formData.vibe}
          name="vibe"
          >
            <option defaultValue>Select one...</option>
            <option value="Adventure">Adventure</option>
            <option value="Romantic">Romantic</option>
            <option value="Relaxing">Relaxing</option>
            <option value="Family-friendly">Family-friendly</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default newEscape;