import { Router } from 'express'
import { signInin, signUp } from '../controllers/users.controller.js'
import { validateLogin, validateSignup } from '../validations/users.validation.js'
import { validateSignIn } from '../validatons/users.validation.js'


const users = Router()


users.post('/', validateSignup,  signUp)
users.post('/signin', validateSignIn, signInin)
//  users.get('/', doSomething, getAllUsers)


export default users
