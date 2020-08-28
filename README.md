# Meal Manager

A Full Stack web application built with MERN Stack.

With this application you can keep track of your daily diet by managing meals with associated date and calories. You can visualize the data using table in the front end.


This application uses ExpressJS framework for the backend apis and ReactJS for front-end views. The Data is stored with NoSQL database using MongoDB/mongoose.

## Glimpse of UI

![GIF](../master/screenshots/meal_manager.gif)

**Login:**
![Screenshot](../master/screenshots/Login.png)

**Register:**
![Screenshot](../master/screenshots/Register.png)

**Dashboard:**
![Screenshot](../master/screenshots/Dashboard.png)

**Add Meal:**
![Screenshot](../master/screenshots/Addmeal.png)

**Edit Meal:**
![Screenshot](../master/screenshots/EditMeal.png)

**Delete Meal:**
![Screenshot](../master/screenshots/DeleteMeal.png)

## Installation

Use npm to install meal-manager.

**Installing dependencies:**

    npm install && npm client-install

**Running both server and client concurrently:**

    npm run dev

**Running the server:**

    npm run server

**Running the client:**

    npm run client

**Other Environment Variables:**

MONGO_URI : Url to connect with MongoDB (default value: mongodb://localhost:27017/meal-manager)

SECRET : Secret key to sign authentication tokens. ( default value: 'mern_meal-manager_secret')

PORT : port to run the server (default value: 5000 )


## Folder Structure

```

    |-- server.js (Server Code - mongoConn, routes desc)
    |-- routes/api (Handling routes)
    |-- models (Models for collection documents)
    |-- middleware (Authenticate private routes)
    |-- controllers (Business Logic for API routes)
    |-- config (Setting env variables)
    |-- package.json
    |-- client (React-Redux App)
        |-- package.json
        |-- public
        |-- src
            |-- package.json
            |-- public
            |-- actions 
            |-- reducers 
            |-- common
                |-- components (Used by all features)
                |-- constants (All appconstants, apiRoutes, appRoutes)
                |-- utils (Utility functions)
            |-- features
                |-- auth (Login, Register pages)
                |-- dashboard (Home page)
```

## Design Decisions

```bash

Pages: Login, Register, Home

Login Page - Enter email, password. Hit Login

Register Page - Enter name, email, password. Hit Register

Home Page: 

- Dashboard is loaded with Name and Logout button in the navbar.

- Page displays meal table (with date, meal name and calories) for the 
  logged in user.

- User can add, delete and update meal.
  - To add meal, click Add Meal button from the table header, it will open a 
    popup with form fields - Date, Meal and Calories. Enter the details and hit
    Add Meal Button.
  - Every row item in table has actions column with edit and delete button.
  - When meals are displayed, they go green if the total for that 
    day is less than 2000 calories per day, otherwise they go red.

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
