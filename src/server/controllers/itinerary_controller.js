import express from "express";
const router = express.Router();
import Itinerary from "../models/itinerary.js";
import verifyToken from "../middleware/verifyToken.js";

//NEED TEAM INPUT: We need to determine which routes will be protected, aka which routes require a user to be logged in in order to access. All you have to do to implement this protection is add verifyToken into the paramaters. 
// Ex: router.get ("/itinerary/my-escapes", verifyToken, (req, res) => {
  // we may want to consider refactoring the names of these routes for better flow, ex: "/escapes/my-escapes" "/itineraries/my-itineraries" etc.

// Get all itineraries
router.get("/", (req, res) => {
  Itinerary.find()
    .then(foundItineraries => res.send(foundItineraries))
    .catch(err => res.status(500).json(err));
});

// Get a single itinerary by ID
router.get("/:id", (req, res) => {
  Itinerary.findById(req.params.id)
    .then(foundItinerary => res.send(foundItinerary))
    .catch(err => res.status(500).json(err));
});

// Create a new itinerary
router.post("/new", (req, res) => {
  Itinerary.create(req.body)
    .then(newItinerary => res.send(newItinerary))
    .catch(err => res.status(500).json(err));
});

// Update an itinerary by ID
router.put("/:id", (req, res) => {
  Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedItinerary => res.send(updatedItinerary))
    .catch(err => res.status(500).json(err));
});

// Delete an itinerary by ID - *will need to create an "are you sure" check before running this on the client side.
router.delete("/:id", (req, res) => {
  Itinerary.findByIdAndDelete(req.params.id)
    .then(deletedItinerary => res.json({ message: "Deleted successfully", deleted: deletedItinerary }))
    .catch(err => res.status(500).json(err));
});

export default router;
