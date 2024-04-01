import express from "express";
const activity = express.Router();
import Activity from "../models/activity";

// get all activities
activity.get ("/", (req, res)=>{
    // res.send("Hello from the itinerary get call.")
    Activity.find()
    .then(foundActivities => {
      console.log(foundActivities)
      res.send(foundActivities)
      
    })
    .catch(err=>{console.log(err)})
  })


// get activity by id
activity.get("/:id", (req,res)=>{

Activity.findById(req.params.id)

.then(foundActivity => {
    res.send(foundActivity)
    })
    .catch(err=>{
    console.log(err)
    res.send(err)})
})


// create a new activity
activity.post("/new", (req,res)=>{

console.log(req.body)

Activity.create(req.body)
.then(newActivity =>{
    res.send(newActivity)
})
.catch(err=>{
    console.log(err)
    res.send(err)
})
})

//update by id

activity.put("/:id", (req, res)=>{
Activity.findByIdAndUpdate(req.params.id, req.body, {new:true})
.then(updatedActivity=>{
    res.send(updatedActivity)
})
.catch(err=>{
    console.log(err)
    res.send(err)
})
})

  //delete an activity *will need to create an "are you sure" check before running this on the client side.
activity.delete("/:id", (req, res)=>{
  Activity.findByIdAndDelete(req.params.id)
  .then(deletedActivity=>{
    console.log(deletedActivity)
    res.json({message: "deleted the following:", deleted: deletedActivity})
  })
  .catch(err=>{
    console.log(err)
    res.send(err)
  })
})


export default activity