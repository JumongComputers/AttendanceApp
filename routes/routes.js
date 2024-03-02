import { Router } from 'express'
// import users from './users.route.js'
// import books from './books.route.js'
// import { homepage } from '../controllers/books.controller.js'

const route = Router()
route.get('/', homepage)
route.use('/users', users)
route.use('/availability', books)

export default route
