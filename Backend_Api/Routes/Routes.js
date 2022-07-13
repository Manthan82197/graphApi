import express from 'express'
import {add_new_student,delete_student,get_all_students,update_student} from '../Middlewares/Methods.js'

const router = express.Router()

router.get('/',get_all_students)

router.post('/',add_new_student ,(req,res)=>{
    res.json({"message":"new"}).send()
    

})
router.put('/:id',update_student,(req,res)=>{
    res.json({"message":"updated"}).send()
    

})
router.delete('/:id',delete_student,(req,res)=>{
    res.json({"message":"delete"}).send()
    

})

export default router