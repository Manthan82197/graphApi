import express from 'express'
import {add_new_student,delete_student,get_all_students,update_student,get_single_student} from '../Middlewares/Middlewares.js'

const router = express.Router()

router.get('/',get_all_students)

router.get('/:id',get_single_student,(req,res)=>{
    res.json({"details":res.data}).status(200).send()
})

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