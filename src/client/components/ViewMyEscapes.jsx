import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios"

const ViewMyEscapes = () => {

  const [ itineraryData, setItineraryData ]= useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchItineraries = async () => {
      try {
        const response = await fetch(API_URL);
        const resData = await response.json();
        setItineraryData(resData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
}, []);
    

    const renderItineraries = () => {
      if (itineraryData.length === 0) {
        return <p>Loading...</p>; 
      }
      return itineraryData.map((itinerary)=>{

        const cardStyle = {
          width: '30%',
          margin:'1%'
        }
        return (
            < React.Fragment key={itinerary._id}>
               <Card style={cardStyle}>
                 <Card.Img variant="top" src="https://placehold.co/10x10" />
                 <Card.Body>
                   <Card.Title>{itinerary.destination}</Card.Title>
                   <Card.Text>
                     Description data goes here
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   <ListGroup.Item>Vibe: {itinerary.vibe}</ListGroup.Item>
                   <ListGroup.Item>{itinerary.days}</ListGroup.Item>
                   <ListGroup.Item>{`${new Date(itinerary.startDate).getFullYear()}-${new Date(itinerary.startDate).getMonth() + 1}-${new Date(itinerary.startDate).getDate()} - ${new Date(itinerary.endDate).getFullYear()}-${new Date(itinerary.endDate).getMonth() + 1}-${new Date(itinerary.endDate).getDate()}`}</ListGroup.Item>
                 </ListGroup>
                 <Card.Body>
                   <Card.Link href="#">Card Link</Card.Link>
                   <Card.Link href="#">Another Link</Card.Link>
                 </Card.Body>
               </Card>
            </React.Fragment>
        );
      });
    }

    const divStyle = {
      // height: '80vh',
      display:'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      margin:'5%',
      paddingBottom: '5%'
    }

    return (
    <div style={divStyle}>
      {renderItineraries()}
    </div>
    );
}

export default ViewMyEscapes;