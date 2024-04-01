import express from "express";
const itinerary = express.Router();
import Itinerary from "../models/itinerary.js"

// get all itineraries
itinerary.get ("/", (req, res)=>{
    // res.send("Hello from the itinerary get call.")
    Itinerary.find()
    .then(foundItineraires => {
      console.log(foundItineraires)
      res.send(foundItineraires)
      
    })
    .catch(err=>{console.log(err)})
  })


  // get itinerary by id
  itinerary.get("/:id", (req,res)=>{
    
    Itinerary.findById(req.params.id)
    
    .then(foundItinerary => {
        res.send(foundItinerary)
      })
      .catch(err=>{
        console.log(err)
        res.send(err)})
    })
    

  // create a new itinerary
  itinerary.post("/new", (req,res)=>{

    console.log(req.body)

    Itinerary.create(req.body)
    .then(newItinerary =>{
      res.send(newItinerary)
    })
    .catch(err=>{
      console.log(err)
      res.send(err)
    })
  })

  //update by id

  itinerary.put("/:id", (req, res)=>{
    Itinerary.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(updatedItinerary=>{
      res.send(updatedItinerary)
    })
    .catch(err=>{
      console.log(err)
      res.send(err)
    })
  })

  //delete an itinerary *will need to create an "are you sure" check before running this on the client side.
itinerary.delete("/:id", (req, res)=>{
  Itinerary.findByIdAndDelete(req.params.id)
  .then(deletedItinerary=>{
    console.log(deletedItinerary)
    res.json({message: "deleted the following:", deleted: deletedItinerary})
  })
  .catch(err=>{
    console.log(err)
    res.send(err)
  })
})


  export default itinerary