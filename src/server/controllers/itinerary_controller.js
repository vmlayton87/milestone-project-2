import express from "express";
const router = express.Router();
import Itinerary from "../models/itineraries.js"


router.get ("/", (req, res)=>{
    // res.send("Hello from the itinerary get call.")
    Itinerary.find()
    .then(foundIteneraires => {
      console.log(foundIteneraires)
      res.send(foundIteneraires)
      
    })
    .catch(err=>{console.log(err)})
  })

  export default router