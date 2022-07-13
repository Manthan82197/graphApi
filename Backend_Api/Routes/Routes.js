import express from 'express'
import {add_new_student,delete_student,get_all_students,update_student} from '../Middlewares/Middlewares.js'

const router = express.Router()

router.get('/',get_all_students)

router.post('/',add_new_student ,(req,res)=>{
    res.json({"message":"New Student is successfully generated "}).send()
    

})
router.put('/:id',update_student,(req,res)=>{
    res.json({"message":"the student is successfully updated "}).send()
    

})
router.delete('/:id',delete_student,(req,res)=>{
    res.json({"message":"the student is successfully deleted from the database"}).send()
    

})

export default router