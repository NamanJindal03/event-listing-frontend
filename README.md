# FrontEnd - Event Listing Application
# About
Book My Events is an event listing and viewing application

# How to Use
1. Clone this project
2. Enter these commands
```
npm install
npm start
```
3. Rename .envsample file to .env
4. Clone the below project
```
https://github.com/NamanJindal03/event-listing-backend
```
5. Write the jwt secret key in .envsample and rename it to .env
6. Enter these commands
```
npm install
npm start
```
7. Your Project is ready

## POSTMAN LINK
```
https://www.getpostman.com/collections/0dc932aded0a2b2c7f48
```

# Directory Structure 
1. Public Folder where index.html is present where all everything is rendered
2. Src
    1. Auth 
        1. index.js - all auth logic and auth api hits
        2. PrivateRoute.js - privateRoute - authentication of routes logic
    2. Core - reusable components
        1. Helper
            1. evevntApiCalls - event api calls present here
        2. Card - card component
        3. Create Event Page 
        4. Home - Displays All Events
        5. Navabar - navbar component
    3. User 
        1. signin - signin page component
        2. signup - signup page component
    4. backend.js - base url for api is getting exported
    5. index.js - all components getting rendered here
    6. Routes.js - client side routing is done here
    7. style.css - all css present in the application


