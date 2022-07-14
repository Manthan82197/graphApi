import  mongoose from 'mongoose'
var schema  = mongoose.Schema

const student = new schema({

  Name:{
    type:String,
    required:true
  },
  Class:{
    type:String,
    required:true
  },
  Division:{
    type:String,
    required:true
  },
  Roll_No:{
    type:Number,
    required:true
  }
})

export default mongoose.model('Student',student)