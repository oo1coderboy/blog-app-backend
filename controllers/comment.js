// import the model which you want to use
const comment = require('../models/commentmodel') ;

// define route handler and export

exports.createComment = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error) ;
        console.error(error) ;
        res.status(500)
        .json({
            success:false,
            data:"Internal Server Error!",
            message:error.message,
        })
    }
}
