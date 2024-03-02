import mongoose from 'mongoose'


const Schema = new mongoose.Schema({
  
parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
// DateCheckedIN: {
//     type: Date,
//     require: true
// },
// DateCheckedout: {
//     type: Date,
//     require: true
// }


 
},  { timestamps: true })




const Parent = mongoose.model('parent', Schema)

export default Parent