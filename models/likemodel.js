const mongoose = require('mongoose') ;

const likeSchema = new mongoose.Schema(

) ;

// export the schema
module.exports = mongoose.model("like",likeSchema) ;