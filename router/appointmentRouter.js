import express from "express";

import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";
import {
  deleteAppointment,
  getAllAppointments,
  newAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";

const router = express.Router();

router.post("/new", isPatientAuthenticated, newAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
export default router;
