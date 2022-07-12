import mongoose from 'mongoose'

const connection = () =>{
  mongoose.connect(process.env.Mongo_Url,(error)=>{
    if(!error){
      console.log("connectio to database is successful")
    }
    else{
      console.log(error)
    }
  })
}

export default connection