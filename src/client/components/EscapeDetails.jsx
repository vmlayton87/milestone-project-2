import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const EscapeDetails = () => {
  const [ itineraryIdData, setItineraryIdData ]= useState([]);
  let { id } = useParams();

  useEffect(() => {
    
    const fetchData = async (id) => {

      const response = await axios.get(`/itinerary/${id}`)
      const IdData  = response.data;
     
      setItineraryIdData(IdData)
      console.log("id data after set state: ", IdData)
      
    }
    fetchData(id);
    
}, [id]);

  // use itineraryIdData to retrieve individual data. 
  // using the following function to test. **works**
  // const renderItineraryData = ()=>{
    
  //   return(
  //     <div>
  //       <p>{itineraryIdData.destination}</p>
  //     </div>
  //   )
  // }

    const divStyle = {
        display:'flex',
        flexWrap: 'wrap',
        margin:'5%',
        paddingBottom: '5%'
    }
      
    return (
      <div style={divStyle}>
        <h4>This is the Escape Details page</h4>
        {/* {renderItineraryData()} // used to test that the api call is working. */} 
      </div>
      
    )
  }
  
  export default EscapeDetails;