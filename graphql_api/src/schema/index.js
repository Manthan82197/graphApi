import { buildSchema } from "graphql";

const schema = buildSchema(`
  
  type student{
    _id:ID!
    Name:String!
    Class:String!
    Division:String!
    Roll_No:Int!
  }

  input newStudent{
    Name:String!
    Class:String!
    Division:String!
    Roll_No:Int!
  }


  type RootQuery {
    student:[student!]!
  }

  type RootMutation{
    createStudent(student:newStudent):student
    deleteStudent(id:String):String
    updateStudent(id:String,student:newStudent):String
  }

 schema {
    query: RootQuery
    mutation : RootMutation
 }

`)


export default schema