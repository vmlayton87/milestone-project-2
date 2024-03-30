import express from "express";
const router = express.Router();
import Itinerary from "../models/itinerary.js"
import User from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import 'dotenv/config.js'

// get all itineraries
router.get ("/", (req, res)=>{
    // res.send("Hello from the itinerary get call.")
    Itinerary.find()
    .then(foundItineraires => {
      console.log(foundItineraires)
      res.send(foundItineraires)
      
    })
    .catch(err=>{console.log(err)})
  })

  router.get("/:id", (req,res)=>{
    
    Itinerary.findById(req.params.id)
    
    .then(foundItinerary => {
        res.send(foundItinerary)
      })
      .catch(err=>{
        console.log(err)
        res.send(err)})
    })
    

  // create a new itinerary
  router.post("/new", (req,res)=>{

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

  router.put("/:id", (req, res)=>{
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
router.delete("/:id", (req, res)=>{
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

// user login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email.toLowerCase() })
    if (!user) {
      return res.status(401).json({ message: "User not found" })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
      return res.status(401).json({ message: "Invalid login credentials" })
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET, // JSON web token with the secret key, kind of like a password to verify user authenticity.
      { expiresIn: '1h' }
    )

    res.status(200).json({ message: "Login successful!", token: token }) // sends the token back to the client for subsequent authenticated requests
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})


  export default router