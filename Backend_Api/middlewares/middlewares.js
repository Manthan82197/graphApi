import Student from '../Schema/Schema.js'
export const add_new_student = async (req,res,next) =>{
   const {Name,Roll_No,Class,Division} = req.body
  try{
    const new_student = new Student({
      Name:Name,
      Roll_No:Roll_No,
      Class:Class,
      Division:Division
    })

    new_student.save()
   next()
  }
  catch(error){
   console.log(error)
  }
}



export const delete_student = (req,res,next) =>{
  const id = req.params
  try{
   Student.remove({id:id})
  next()
  }catch(error){
  console.log(error)
  }
}


export const get_all_students = (req,res,next) =>{
  try{
    const all_student = Student.find()
    res.json({"student":all_student}).status(200).send()
  }catch(err){
    console.log(err)
  }
}

export const update_student =(req,res,next)=>{
  const {Class,Roll_No} = req.body
  const id = req.params
  try{
    Student.findByIdAndUpdate(id,{Class:Class,Roll_No:Roll_No}) 
      next()
  }
  catch(err){
    console.log(err)

  }
}