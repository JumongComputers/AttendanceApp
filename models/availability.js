import mongoose from 'mongoose'


const Schema = new mongoose.Schema({
  
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
DateSignIn:{
    type: Date,
    require: true
},
DateSignOut:{
    type: Date,
    require: true
}

 
},  { timestamps: true })




const Availabilty = mongoose.model('availability', Schema)

export default Availabilty