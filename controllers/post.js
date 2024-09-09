// import model you want to use
const post = require('../models/likemodel') ;

// create route handler and export 
exports.createPost = async (req,res)=>{
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