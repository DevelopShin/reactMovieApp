const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = mongoose.Schema({
      userFrom: {
            type: Schema.Types.ObjectId,
            
            ref:"User"
      },
      movieId: {
            type: String
      },
      movieTitle: {
            type: String
      },
      comment:{
            type:String
      },
      like: {
            type:Number
      },
      dislike: {
        type:Number
  }

}, {timestamps: true})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {Comment}