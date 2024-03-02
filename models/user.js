import mongoose from 'mongoose'
import { type } from 'os'

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'last name is required']
    },
    age: {
        type: String,
        require: [true, 'age is required']
    },

    address: {
        houseNumber: { type: String },
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
    },
   
    telephone: {
        type: String,
        unique: true,
        required: [true, 'telephone is required'],
      },
    
      role: {
        type: String,
        enum: ['parent', 'pupils', 'staffs','admin'],
        default: 'pupils',
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },

})
const User = mongoose.model('users', Schema)

export default User