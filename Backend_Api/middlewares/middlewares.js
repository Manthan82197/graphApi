import Student from '../Schema/Schema.js'
export const add_new_student = async (req,res,next) =>{
   const {Name,Roll_No,Class,Division} = req.body
  console.log(req.body)
   try{
    
    const new_student = new Student({
      Name:Name,
      Roll_No:Roll_No,
      Class:Class,
      Division:Division
    })
    console.log(req.body)

    new_student.save()
    console.log(req.body)
   next()
  }
  catch(error){
   console.log(error)
  }
}



export const delete_student = async (req,res,next) =>{
  const id = req.params.id
  console.log(id)
  try{
    const student = await Student.findById(id)
     if(student){
      await Student.findByIdAndDelete(id)
     next()}
     else{
       res.json({"message":"the student is not present in the database"}).status(500).send()
     }
  }catch(error){
  console.log(error)
  }
}


export const get_all_students =async (req,res,next) =>{
  try{
    const all_student =await Student.find()
    res.status(200).send(all_student)
  }catch(err){
    console.log(err)
  }
}

export const update_student = async (req,res,next)=>{
  const {Class,Roll_No} = req.body
  const id = req.params.id
  try{
    const student = await Student.findById(id)
    if(student){
      await Student.findByIdAndUpdate(id,{Class:Class,Roll_No:Roll_No}) 
      next()
    }
      else{
        res.json({"message":"the student you are trying to update is not present in the system"}).status(500).send()
      }
  }
  catch(err){
    console.log(err)

  }
}