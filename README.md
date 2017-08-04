# GarageSaleApp

This is a map-centric application for users to search for and list garage sales.  A demo of the application is deployed using Heroku at [link to Demo!](https://another-mans-treasure.herokuapp.com/).  Sample data for the Chicagoland area has been added to demonstrate search and sort functionality.

Responsive layout was designed using Bootstrap with some supplemental custom styles.

User and listing data is stored on a Firebase database. Images are stored on Firebase storage.

### Search Features:
(see list.js)
- Sort based on popularity (Listings with the most RSVPs)
- Sort based on user location (Geolocation)
- Sort based on map position (Recentering map will sort based on the map position)
- Sort based on date (oldest to newest listings - see filters also)
- Sort alphabetically on listing name
- Filter based on upcoming, in-progress, and past listing dates

### Map Features:
(see map.js)
- Based on the current search results, map is populated with map pins for each listing
- Clicking on pins provides thumbnail details for listing

### Login Features:
(see login.js, popup.js, profile.js)
- Email authentication through Firebase
- Ability to add new listings
- Ability to view personal profile

### Community Features:
(see comments.js, profile.js)
- Comments thread is available for each event.  Logged in users can post new comments for events.
- User profile shows what events user is hosting and what events user is attending


##### Contributors:
Tony Storti, Max Rashes, Travis Cornejo, Jeremy Lipsitz

This repository is a refactored version of application at [https://github.com/Mrashes/sailingGarages]