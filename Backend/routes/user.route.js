import express from "express";
import {
  login,
  register,
  updateProfile,
  logout,
} from "../controllers/user.controller.js";
import isAutheticated from "../middlewares/auth.js";
const router = express.Router();
import { singleUpload } from "../middlewares/multer.js";

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAutheticated, updateProfile);
export default router;
