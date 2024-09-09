const express = require('express') ;
const app = express() ;


// loading port from .env file
require("dotenv").config() ;
const PORT = process.env.PORT || 5000 ;
// adding middleware for parsing json object
app.use(express.json()) ;

// import routes
const blogRoutes = require('./routes/blogroutes') ;
// mount api routes
app.use('/api/v1',blogRoutes) ;

// default route
app.get('/',(req,res)=>{
    res.send("Home route for blog App.") ;
})

// connecting to the database
const dbConnect = require('./config/database') ;
dbConnect() ;

// creating our server

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}! `) ;
});