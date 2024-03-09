import { Router } from "express";
import { deleteAnAttendance, getAllAttendance, getOneAttendance, markAttendance, searchForPupilAttendance } from "../controller/attendance.controller";
import isSignIn from "../middleware/authentication";
import { validateAvailability } from "../validatons/availability.validation";



const attendance = Router();

attendance.get("/", getAllAttendance);
attendance.get('/search/?', searchForPupilAttendance)
attendance.get("/:id", getOneAttendance)

attendance.use(isSignIn);  //endpoints from here down uses isLogged middlware for authentication
attendance.post("/", validateAvailability, markAttendance);
attendance.delete("/:id", deleteAnAttendance);

export default attendance