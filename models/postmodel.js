const mongoose  = require('mongoose') ;

const postSchema = new mongoose.Schema(

) ;

// export the schema
module.exports = mongoose.model("post",postSchema) ;