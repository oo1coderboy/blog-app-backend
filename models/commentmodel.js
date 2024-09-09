const mongoose  = require('mongoose') ;

const commentSchema = new mongoose.Schema(

) ;

// export the schema
module.exports = mongoose.model("comment",commentSchema) ;