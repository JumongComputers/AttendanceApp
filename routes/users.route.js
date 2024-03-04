import { Router } from 'express'
import { signInin, signUp } from '../controllers/users.controller.js'
import { validateLogin, validateSignup } from '../validations/users.validation.js'


const users = Router()


users.post('/',   signUp)
users.post('/signin',  signInin)
//  users.get('/', doSomething, getAllUsers)


export default users
