import express from "express";

import isAutheticated from "../middlewares/auth.js";
import {
  applyjob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";
const router = express.Router();

router.route("/apply/:id").get(isAutheticated, applyjob);
router.route("/getappliedjobs").get(isAutheticated, getAppliedJobs);
router.route("/:id/applicants").get(isAutheticated, getApplicants);
router.route("/status/:id/update").post(isAutheticated, updateStatus);
export default router;
