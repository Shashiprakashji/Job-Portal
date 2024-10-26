import express from "express";

import isAutheticated from "../middlewares/auth.js";
import {
  getAllCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
const router = express.Router();

router.route("/register").post(isAutheticated, registerCompany);
router.route("/getallcompanies").get(isAutheticated, getAllCompany);
router.route("/getcompany/:id").get(isAutheticated, getCompanyById);
router.route("/update/:id").put(isAutheticated, updateCompany);
export default router;
