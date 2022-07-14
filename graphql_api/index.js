import express from 'express'
import 'dotenv/config'
import connection from './Database/Database_Connection.js'
import { graphqlHTTP } from 'express-graphql'
import schema from './src/schema/index.js'
import student from './Model/Model.js'
const app = express()

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:{
      student : async () =>{
        const all_students = await student.find()
        return all_students
      },  
      createStudent : async (args)=>{
        const new_student = new student({
         Name:args.student.Name,
         Class:args.student.Class,
         Division:args.student.Division,
         Roll_No:args.student.Roll_No
        })
        
        const saved_student = await new_student.save()
        

        return saved_student
      } ,
      deleteStudent:async (id)=>{
        try{
        await student.findByIdAndRemove(id.id)
        return "student is successfully deleted"
        }catch(err){
            return "invalid id"
        }},
        updateStudent:async (args)=>{
            try{
              
                const update = await student.findByIdAndUpdate(args.id,{
                    Name:args.student.Name,
                    Class:args.student.Class,
                    Division:args.student.Division,
                    Roll_No:args.student.Roll_No
                })
                return "successfully updated"
            }catch(err){
                return "id or the data is wrong please check it  "
            }
        }
    },
    graphiql:true
}))


app.listen(process.env.PORT,()=>{
    connection()
    console.log('server is running on port '+process.env.PORT)
})