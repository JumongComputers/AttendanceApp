import mongoose from 'mongoose'


const Schema = new mongoose.Schema({
  
pupil: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
class:{
    type: String,
},
Parent:{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'parent',
  require: true
}
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