import express from 'express'
import 'dotenv/config'

import connection from './Database_connection/database.js'

import router from './Routes/Routes.js'
const app = express();
app.use(express.json());
app.use('/',router)

app.listen(process.env.PORT,()=>{
  connection()
  console.log("Server is running on " + process.env.PORT)
})