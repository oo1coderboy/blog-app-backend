// import mongoose
const mongoose = require('mongoose') ;

// create the database connection 
const dbConnect = () =>{
    require("dotenv").config() ;
    mongoose.connect(process.env.DATABASE_URI)
    .then(()=>console.log("Database connected successfully!"))
    .catch((error)=>{
        console.error(error.message()) ;
        console.log("Caught error while connecting to the database!");
        process.exit(1) ;
    })
}

// export the function 
module.exports = dbConnect ;