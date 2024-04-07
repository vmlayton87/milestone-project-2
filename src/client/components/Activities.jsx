
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useParams } from 'react-router-dom';

function Activities() {
  let {id}= useParams()
  
  const [ itineraryData, setItineraryData ]= useState([]);
  const [daysArray, setDaysArray] = useState([])
  const [error, setError] = useState(null);

  const fetchData = async (id) => {
    console.log("inside fetch data function")
    // debugger
    try {
      const {data} = await axios.get(`/itinerary/${id}`)
      setItineraryData(data)
      console.log("after setitinerary: ", itineraryData)
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => { 
    fetchData(id);
}, [id]);

// const renderDates = () => {
//   let itinerary = itineraryData
//   //  const dateRange = itinerary.days.map(days=>days.date);
//     return (
//       <div className="Create" key={itinerary._id}>
//         <Card>
//           <Card.Header>
//             <Nav variant="tabs" defaultActiveKey="#first">
//               <Nav.Item>
//                 <Nav.Link href="#first">
//                   {itinerary.days.map((date, index) => (
//                     <span key={index}>{date.toLocaleDateString()}</span>
//                   ))}
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Card.Header>
//           <Card.Body>
//             <Card.Title>Title</Card.Title>
//             <Card.Text>
//               Descriptions of activities
//             </Card.Text>
//             <Button variant="primary">Save</Button>
//           </Card.Body>
//         </Card>
//       </div>
//     )
//   }


const divStyle = {
  display:'flex',
  flexWrap: 'wrap',
  margin:'5%',
  paddingBottom: '5%'
}

return (
  <div style={divStyle}>
      <h4>This is the create escape activity details page</h4>
      {/* {renderDates()} */}
  </div>
)
}

export default Activities;