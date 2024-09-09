// import the model which is gonna use
const like = require('../models/likemodel') ;

// create the route handler and exports it
exports.makeLike = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error) ;
        console.error(error.message) ;
        res.status(500) 
        .json({
            success:false,
            data:"Internal Server Error!",
            message:error.message,
        })
    }
}