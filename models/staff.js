import mongoose from 'mongoose'


const Schema = new mongoose.Schema({
  
staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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




const Staff = mongoose.model('staffs', Schema)

export default Staff