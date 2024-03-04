import { type } from 'express/lib/response'
import mongoose from 'mongoose'


const Schema = new mongoose.Schema({
  
pupil: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pupils',
    required: true
  },
parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parent',
    require: true
},
checked: {
    type: String,
    enum: ['checked in', 'checked out'],
    require: true
}

 
},  { timestamps: true })




const Availabilty = mongoose.model('availability', Schema)

export default Availabilty