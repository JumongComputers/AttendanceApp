import mongoose from 'mongoose'


const Schema = new mongoose.Schema({
  
pupils: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
class:{
    type: String,
},
// DateCheckedIn:{
//     type:Date,
//     require: true

// },
// DateCheckedOut:{
//     type:Date,
//     require: true

// }
 
},  { timestamps: true })




const Pupils = mongoose.model('pupils', Schema)

export default Pupils