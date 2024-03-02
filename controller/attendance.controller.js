import Exception from '../exception.js'
import dotenv from 'dotenv'

export function homepage(req, res) {
    res.send('Welcome to the attendance system')
}

export async function getAllAttendance(req, res, next) {