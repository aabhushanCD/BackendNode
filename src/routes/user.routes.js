import { Router } from "express";
import { upload } from "../middlewares/cloud.middleware.js";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImg",
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
