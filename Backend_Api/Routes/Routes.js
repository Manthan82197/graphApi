import express from 'express'
import {add_new_student,delete_student,get_all_students,update_student} from '../Middlewares/Methods.js'

const Router = express()

Router.get('/',get_all_students)

Router.post('/',add_new_student)
Router.put('/:id',update_student)
Router.delete('/:id',delete_student)

export default Router