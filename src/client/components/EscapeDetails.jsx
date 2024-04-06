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

const renderItineraryData = () => {
  if (itineraryIdData.length === 0) {
    return <p>Loading...</p>; 
  }
  // return itineraryData.map((itinerary)=>{

    const cardStyle = {
      width: '70%',
      margin:'1%'
    }
    let itinerary = itineraryIdData
    return (

      
        < React.Fragment key={itinerary._id}>
          <div class="card mb-12">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
           {/* <Card style={cardStyle}>
             <Card.Img variant="start" src="https://placehold.co/10x10" />
             <Card.Body>
             <Card.Title>
               <Link to={`/escapes/${itinerary._id}`}>{itinerary.destination}</Link>
             </Card.Title>
               <Card.Text>
                 Description data goes here
               </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroup.Item>Vibe: {itinerary.vibe}</ListGroup.Item>
               <ListGroup.Item>{`${new Date(itinerary.startDate).getFullYear()}-${new Date(itinerary.startDate).getMonth() + 1}-${new Date(itinerary.startDate).getDate()} ~ ${new Date(itinerary.endDate).getFullYear()}-${new Date(itinerary.endDate).getMonth() + 1}-${new Date(itinerary.endDate).getDate()}`}</ListGroup.Item>
             </ListGroup>
           </Card> */}
        </React.Fragment>
    );
  };




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
        {renderItineraryData()} // used to test that the api call is working. 
      </div>
      
    )
  }
  
  export default EscapeDetails;