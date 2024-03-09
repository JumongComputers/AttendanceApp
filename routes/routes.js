import { Router } from 'express'
import { homepage } from '../controller/attendance.controller'
// import User from '../models/user'
import users from './users.route.js'
import attendance from './availability.route.js'
// import books from './books.route.js'
// import { homepage } from '../controllers/books.controller.js'

const route = Router()
route.get('/', homepage)
route.use('/users', users)
route.use('/attendance', attendance )

export default route
