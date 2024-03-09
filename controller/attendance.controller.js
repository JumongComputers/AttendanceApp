import Exception from '../exception.js'
import dotenv from 'dotenv'
import Availabilty from '../models/availability.js'
import { status } from 'express/lib/response.js'

export function homepage(req, res) {
    res.send('Welcome to the attendance system')
}

export async function getAllAttendance(req, res, next) {
    const attendance = await Availabilty.find()
    res.send({
        status: 'success',
        statusCode: 200,
        message: 'List of authenticated users found',
        data:{
            attendance,
        },
    })
}

export async function findAnAttendance(availability_id) {
    const attendance = await Availabilty.findOne({_id:availability_id})
    if(!attendance){
        throw new Exception('Attendance not found', 404)
}
    return attendance
}

export async function getOneAttendance(req, res, next) {
    try {
        const id = req.params.id
        const attendance = await findAnAttendance(id)
        res.send({
            status: 'success',
            statusCode: 200,
            message: 'Attendance found',
            data: {
                attendance
            }
        })
    } catch (error) {
        next(new Exception(error.message, error.status))
    }
}


export async function searchForPupilAttendance(req, res, next) {
    try {
    const { pupilId } = req.query;

    const attendance = await Availabilty.find({pupil: pupilId});

    if(!attendance){
      throw new Exception('No attendance record found for this pupil', 404);
    }

    res.send({
      status: 'success',
      statusCode: 200,
      message: 'Attendance record found for pupil',
      data: {
        attendance
      }
    });

  } catch (error) {
    next(new Exception(error.message, error.status));
  }
}

export  async function markAttendance(req, res, next) {
    try {
    const { pupilId, parentId, checked } = req.body;

    if(!pupilId || !parentId || !checked) {
      throw new Exception("Pupil Id, Parent Id and checked field are required", 400);
    }

    const attendance = await Availabilty.create({
      pupil: pupilId,
      parent: parentId,
      checked
    });

    res.status(201).send({
      status: 'success',
      statusCode: 201,
      message: 'Attendance marked successfully',
      data: {
        attendance
      }
    });

  } catch (error) {
    next(new Exception(error.message, error.status));
  }
}



export async function updateAnAttendance(req, res, next) {
  try {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['pupil', 'parent', 'checked']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
    }

    const attendance = await findAnAttendance(req.params.id)
    
} catch (error) {
  next(new Exception(error.message, error.status))
}

export async function deleteAnAttendance(req, res){
  await Availabilty.findByIdAndDelete({_id: req.params.id})
  res.send({
    status: "success",
    statusCode: 200,
    message: "Attendance record deleted successfully",
    data: 'Attendance Deleted'
  })
}


// export async function deleteAttendances(req, res, next ) {
//   try{
//     await Availabilty.deleteMany()
//     res.semd({
//       status: "success",
//       statusCode: 200,
//       message: "All attendance records deleted successfully",
//       data: 'All Attendance Deleted'
//     })
//   } catch(error) 
//   {
//     next(new Exception(error.message, error.status))

//   }
// }


