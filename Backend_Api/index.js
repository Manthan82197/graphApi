import express from 'express'
import 'dotenv/config'

import connection from '../Database_connection/database.js'
import Router from '../Routes/Routes.js'
const app = express();

app.use('/',Router)

app.listen(process.env.PORT,()=>{
  connection()
  console.log("Server is running on " + process.env.PORT)
})