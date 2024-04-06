# Escape Plan
## Description
<p>Escape Plan is a web application for creating and sharing travel itineraries with the world. Whether you're wanting to get inspiration for your next big trip or share insights gained as you wait for your connecting flight home, Escape Plan offers a seamless platform for travelers to plan, share, and be inspired as they explore the world.</p>

### Developers
##### Escape Plan would not exist without the collective effort of the dedicated team behind it.
- Front End Development
    - Together, Andrew Thomas and Kai Han brought their talents to the digital South Beach of Escape Plan as they curated a smooth and fluid experience to make planning your trip almost as fun as the trip itself.
- Back End Development
    - Like a master cartographer, Vanessa Pursley charted the New World of data and connectivity, mapping out the intricate pathways that bridge the gap between your dreams of a lavish escape and the punching your ticket.
    - Behind every successful mission is a man sitting in the glow of his computer screen, weaving the digital fabric that supports and protects its users. Jordan Cox orchestrated the database and raised the defenses of user authentication to give the people what they want, and the bad guys nothing.
### How it works
Users can create an account with Escape Plan and immediately either jump into building and sharing their own travel itineraries, or viewing those that others have created to seek inspiration. Simply click "Make My Escapes" to start crafting your dream trip, "View My Escape" to review, edit, or delete your itineraries, or "Browse Escapes" to see what others have put together. Was your trip a raving success? Maybe share it with the world!
### Link
### Tech / Frameworks Used
- MongoDB
    - Mongoose
- Express
- React
    - Vite
    - Bootstrap
- Node
    - Axios
    - JSON Web Token
    - bcryptjs

### Database Schema
<p>Below is the database schema for Escape Plan, designed to efficiently store and manage travel itineraries down to the day and activity.</p>

{
  "User": {
    "_id": "UUID",
    "email": "String, unique",
    "password": "String"
  },
  "Itinerary": {
    "_id": "UUID",
    "destination": "String",
    "startDate": "Date",
    "endDate": "Date",
    "days": Array (References Day Schema)
    "vibe": "String"
  },
}
