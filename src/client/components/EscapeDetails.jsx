import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';

const EscapeDetails = () => {

  const [ itineraryData, setItineraryData ]= useState([]);
  let { id } = useParams();

  useEffect(() => {
    
    const fetchItinerariesData = async (id) => {

      const response = await axios.get(`/itinerary/${id}`)
      const data  = response.data;
      console.log(`1:${data}`);
      setItineraryData(data)     
    }
    fetchItinerariesData(id);  
  }, [id]);

  const renderEscapeDetails = () => {
    if (itineraryData.length === 0) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ); 
    }
    
    const handleActivities = () => {
      return (
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reprehenderit eveniet sunt consectetur veritatis porro architecto asperiores quam natus maiores voluptas est tempore, aliquam recusandae. Dolorum, ab ut consectetur animi quibusdam vitae officiis? Esse expedita facilis hic dolorum! Id voluptatibus praesentium quam neque maiores libero tempore, iusto dolorem delectus dicta fugit aliquam tempora quibusdam pariatur provident voluptatem tenetur perferendis possimus reprehenderit, ipsum eius omnis quidem nihil! Beatae id quo architecto nesciunt alias maiores animi delectus? Enim ex quo iste quibusdam, incidunt molestiae modi animi, porro reiciendis sequi culpa! Totam consequatur facilis maxime amet pariatur impedit tenetur unde iste itaque in perferendis deleniti molestiae voluptates quod praesentium corporis obcaecati, aliquam molestias ea minima quae fugiat corrupti! Soluta porro qui neque laborum quaerat nihil aperiam quasi, accusantium dolores numquam ducimus aliquid asperiores aspernatur nemo voluptas? Doloribus, impedit? Eligendi velit expedita mollitia rerum, unde omnis saepe! Officiis illum molestiae amet consequatur dicta, eum fugiat at quis, possimus blanditiis eos quidem enim fuga a! Iure, blanditiis beatae doloremque esse quam nulla corrupti maxime, harum rem pariatur voluptatibus facere laborum illo recusandae consequuntur porro eveniet. Natus eveniet, asperiores perferendis ducimus dolorum ab eaque. Voluptate tempore aliquam eius repellendus dolore expedita ullam laudantium, eum nostrum nisi nemo! Esse veniam ad ex fugiat perferendis blanditiis maiores aliquid earum? At repellat neque quasi ex incidunt aperiam est doloremque recusandae repudiandae consequatur consequuntur fuga minima fugit nisi beatae ipsum, quod nihil expedita, provident reprehenderit quaerat. Voluptatum, veritatis quisquam. Quas maxime molestiae nemo dolor? Maiores minima esse, asperiores numquam porro quae repellendus excepturi ipsam facere totam sed explicabo quas suscipit, assumenda provident tempore quasi temporibus iste neque deleniti fugit facilis. Repellat, eaque quam voluptates iure doloribus perferendis libero repudiandae, rem cumque harum, reiciendis voluptas molestiae accusantium magni? Qui praesentium deserunt inventore id dignissimos atque nemo dolor excepturi, delectus maiores nesciunt?
        </div>
      );
    }

    return (
      <div>
      <Card>
        <div>
          <img src='https://placehold.co/600x400' alt='beautiful_view' style={{margin:'1em'}}/>
        </div>
        <div>
        <div style={{display:'flex', justifyContent:'center', margin: '1em'}}>
          <div>Destination:</div>
          <div>{itineraryData.destination}</div>
        </div>
        <div style={{display:'flex', justifyContent:'center', margin: '1em'}}>
          <div>Vibe:</div>
          <div>{itineraryData.vibe}</div>
        </div>
        <div style={{display:'flex', justifyContent:'center', margin: '1em'}}>
          <div>Start Date:</div>
          <div>{new Date(itineraryData.startDate).getFullYear()}-{new Date(itineraryData.startDate).getMonth() + 1}-{new Date(itineraryData.startDate).getDate()}</div>
        </div>
        <div style={{display:'flex', justifyContent:'center', margin: '1em'}}>
          <div>End Date:</div>
          <div>{new Date(itineraryData.endDate).getFullYear()}-{new Date(itineraryData.endDate).getMonth() + 1}-{new Date(itineraryData.endDate).getDate()}</div>
        </div>
        </div>
        <div>
        <Tabs defaultActiveKey="day-1">
        <Tab eventKey="day-1" title="Day1">
          {handleActivities()}
        </Tab>
        <Tab eventKey="day-2" title="Day2">
          {handleActivities()}
        </Tab>
        <Tab eventKey="day-3" title="Day3">
          {handleActivities()}
        </Tab>
      </Tabs>
      </div>
    </Card>
    </div>
    );
  };

    const divStyle = {
        display:'flex',
        flexWrap: 'wrap',
        margin:'5%',
        paddingBottom: '5%'
    }
      
    return (
      <div style={divStyle}>
        {renderEscapeDetails()} 
      </div>
    )
  }
  
  export default EscapeDetails;