import express from "express";
const router = express.Router();
import Itinerary from "../models/itineraries.js"

// get all itineraries
router.get ("/", (req, res)=>{
    // res.send("Hello from the itinerary get call.")
    Itinerary.find()
    .then(foundIteneraires => {
      console.log(foundIteneraires)
      res.send(foundIteneraires)
      
    })
    .catch(err=>{console.log(err)})
  })

  // get itineraries by vibe key
  router.get("/:vibe", (req, res)=>{
    Itinerary.find({vibe: { $regex: req.params.vibe, $options: 'i'}}).exec()
    // for this to work best, need to make the get request based on an input dropdown or selection that way it doesn't return an empty array if someone misspells something.
    // name: { $regex: searchString, $options: 'i' }  this will search for a regular expression that matches req.params.vibe
    // MyModel.find({ name: /john/i }, 'name friends').exec(); from the docs
    .then(foundItenerary => {
      console.log(foundItenerary)
      res.send(foundItenerary)
    })
    .catch(err=>{console.log(err)})
  })
  export default router