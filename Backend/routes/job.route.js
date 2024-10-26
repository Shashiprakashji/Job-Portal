import express from "express";

import isAutheticated from "../middlewares/auth.js";
import {
  getAllJob,
  getJobByAdmin,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/postjob").post(isAutheticated, postJob);
router.route("/getalljob").get(isAutheticated, getAllJob);
router.route("/getadminjob/:id").get(isAutheticated, getJobByAdmin);
router.route("/getjob/:id").get(isAutheticated, getJobById);
export default router;
