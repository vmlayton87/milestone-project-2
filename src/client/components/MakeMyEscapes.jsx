import React, { useState } from 'react';
const Default = require('../default')

function newEscape() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    vibe: ''
  })

  const handleInput = (event) => {
    const { destination, value } = event.target;
    setFormData({
      ...formData,
      [destination]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit to server here
    console.log(formData);
  };

  return (
    <Default>
      <form onSubmit={handleSubmit}>
        <label>
          Destination
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Start Date
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          End Date
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Vibe
          <input
            type="text"
            name="vibe"
            value={formData.vibe}
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
  </Default>
  );

}

export default newEscape;