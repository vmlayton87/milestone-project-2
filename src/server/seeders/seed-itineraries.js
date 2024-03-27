import connectDB from "../config/database.js"
import Itinerary from "../models/itineraries.js"

const seedItineraries = async () => {
    await connectDB()

    const itinerariesToSeed = [
        {
            destination: "Seagrove Beach, Florida",
            startDate: new Date(2024, 4, 24),
            endDate: new Date(2024, 4, 27),
            vibe: "relaxing",
            days: [
                {
                    date: new Date(2024, 4, 24),
                    activities: [
                        {
                            description: "Pick up bike rentals",
                            time: "10:00am",
                            location: "Crazy Earl's Suspiciously Cheap Bicycle Rentals",
                            cost: 80.00,
                            note: "Write down the lock combination, just in case."
                        }
                    ]
                }
            ]
        },
        {
            destination: "Glacier National Park, Montana",
            startDate: new Date(2024, 7, 8),
            endDate: new Date(2024, 7, 12),
            vibe: "adventure",
            days: [
                {
                    date: new Date(2024, 7, 8),
                    activities: [
                        {
                            description: "Guided Hike to Grinnell Glacier",
                            time: "7:30am",
                            location: "Grinnell Glacier Trailhead",
                            cost: 50.00,
                            note: "Bring water and snacks. Wear appropriate hiking shoes."
                        }
                    ]
                },
                {
                    date: new Date(2024, 7, 9),
                    activities: [
                        {
                            description: "Kayaking on Lake McDonald",
                            time: "9:00am",
                            location: "Lake McDonald",
                            cost: 120.00,
                            note: "Double kayak rental. Meet at the dock."
                        }
                    ]
                }
            ]
        },
        {
            destination: "Breckenridge, Colorado",
            startDate: new Date(2024, 11, 10),
            endDate: new Date(2024, 11, 16),
            vibe: "family-friendly",
            days: [
                {
                    date: new Date(2024, 11, 11),
                    activities: [
                        {
                            description: "Family Ski Lessons",
                            time: "10:00am",
                            location: "Breckenridge Ski Resort",
                            cost: 200.00,
                            note: "All-day group lesson for beginners."
                        }
                    ]
                },
                {
                    date: new Date(2024, 11, 13),
                    activities: [
                        {
                            description: "Ice Skating at Stephen C. West Ice Arena",
                            time: "2:00pm",
                            location: "Stephen C. West Ice Arena",
                            cost: 40.00,
                            note: "Rental skates included. Hot cocoa afterward."
                        }
                    ]
                }
            ]
        },
        {
            destination: "Napa Valley, California",
            startDate: new Date(2024, 8, 3),
            endDate: new Date(2024, 8, 8),
            vibe: "romantic",
            days: [
                {
                    date: new Date(2024, 8, 4),
                    activities: [
                        {
                            description: "Private Wine Tasting Tour",
                            time: "11:00am",
                            location: "Castello di Amorosa",
                            cost: 150.00,
                            note: "Includes lunch at a vineyard restaurant."
                        }
                    ]
                },
                {
                    date: new Date(2024, 8, 5),
                    activities: [
                        {
                            description: "Hot Air Balloon Ride over Napa Valley",
                            time: "5:30am",
                            location: "Napa Valley Balloons, Inc.",
                            cost: 240.00,
                            note: "Meet before sunrise. Champagne breakfast included."
                        }
                    ]
                }
            ]
        },
        {
            destination: "Charleston, SC",
            startDate: new Date(2024, 9, 16),
            endDate: new Date(2024, 9, 21),
            vibe: "romantic",
            days: [
                {
                    date: new Date(2024, 9, 17),
                    activities: [
                        {
                            description: "Sunrise Walk on Folly Beach",
                            time: "6:30am",
                            location: "Folly Beach",
                            cost: 0.00,
                            note: "Meet at the Folly Beach Pier entrance."
                        },
                        {
                            description: "Private Carriage Tour of Historic Downtown",
                            time: "11:00am",
                            location: "Downtown Charleston",
                            cost: 120.00,
                            note: "Pickup at hotel. Bring a light jacket."
                        },
                        {
                            description: "Dinner at Husk Restaurant",
                            time: "7:00pm",
                            location: "Husk",
                            cost: 180.00,
                            note: "Reservation required. Try the chef’s tasting menu!"
                        }
                    ]
                },
                {
                    date: new Date(2024, 9, 18),
                    activities: [
                        {
                            description: "Visit to Magnolia Plantation and Gardens",
                            time: "9:00am",
                            location: "Magnolia Plantation",
                            cost: 29.00,
                            note: "Includes garden tour. Wear comfortable shoes."
                        },
                        {
                            description: "Sunset Sail on Charleston Harbor",
                            time: "5:00pm",
                            location: "Charleston Harbor",
                            cost: 85.00,
                            note: "Boarding at Charleston Marina. Casual attire."
                        }
                    ]
                }
            ]
        },
        {
            destination: "Maui, Hawaii",
            startDate: new Date(2024, 5, 1),
            endDate: new Date(2024, 5, 9),
            vibe: "relaxing",
            days: [
                {
                    date: new Date(2024, 5, 2),
                    activities: [
                        {
                            description: "Snorkeling Trip to Molokini Crater",
                            time: "8:00am",
                            location: "Maalaea Harbor",
                            cost: 110.00,
                            note: "Includes equipment rental and lunch. Bring sunscreen."
                        },
                        {
                            description: "Relaxing at Wailea Beach",
                            time: "2:00pm",
                            location: "Wailea Beach",
                            cost: 0.00,
                            note: "Rent a cabana for added comfort."
                        }
                    ]
                },
                {
                    date: new Date(2024, 5, 4),
                    activities: [
                        {
                            description: "Road to Hana Tour",
                            time: "7:00am",
                            location: "Pickup from hotel",
                            cost: 160.00,
                            note: "Full-day tour. Includes stops at waterfalls and a black sand beach."
                        },
                        {
                            description: "Luau at Old Lahaina",
                            time: "6:00pm",
                            location: "Old Lahaina Luau",
                            cost: 125.00,
                            note: "Reservation needed. Authentic Hawaiian cuisine and entertainment."
                        }
                    ]
                }                
            ]
        },
        {
            destination: "Joshua Tree, California",
            startDate: new Date(2024, 8, 20),
            endDate: new Date(2024, 8, 26),
            vibe: "adventure",
            days: [
                {
                    date: new Date(2024, 8, 20),
                    activities: [
                        {
                            description: "Rock Climbing at Hidden Valley",
                            time: "8:00am",
                            location: "Hidden Valley Picnic Area",
                            cost: 150.00,
                            note: "Meet at the picnic area. Equipment provided. Beginners welcome."
                        },
                        {
                            description: "Lunch at Crossroads Cafe",
                            time: "12:30pm",
                            location: "Crossroads Cafe",
                            cost: 25.00,
                            note: "Try the Joshua Tree Salad and the homemade lemonade."
                        }
                    ]
                },
                {
                    date: new Date(2024, 8, 21),
                    activities: [
                        {
                            description: "Hike to Barker Dam",
                            time: "9:00am",
                            location: "Barker Dam Trailhead",
                            cost: 0.00,
                            note: "Easy hike. Great for photography. Bring water."
                        },
                        {
                            description: "Stargazing at Skull Rock",
                            time: "8:00pm",
                            location: "Skull Rock",
                            cost: 0.00,
                            note: "Join a ranger-led program or go on your own. Don’t forget a blanket."
                        }
                    ]
                },
                {
                    date: new Date(2024, 8, 22),
                    activities: [
                        {
                            description: "Guided Tour of Keys Ranch",
                            time: "10:00am",
                            location: "Keys Ranch",
                            cost: 15.00,
                            note: "Reservation required. Learn about early 20th-century ranch life."
                        },
                        {
                            description: "Sunset Yoga at Cap Rock",
                            time: "6:00pm",
                            location: "Cap Rock",
                            cost: 35.00,
                            note: "Bring your yoga mat. All levels welcome."
                        }
                    ]
                }                
            ]
        }
    ]

    try {
        await Itinerary.create(itinerariesToSeed)
        console.log('Itineraries seeded successfully!')
        process.exit()
    } catch (err) {
        console.error('Error seeding itineraries:', err)
        process.exit(1)
    }
}

seedItineraries()