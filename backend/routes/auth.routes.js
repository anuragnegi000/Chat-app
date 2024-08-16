import express from "express";
import {signinUser,signoutUser,signupUser} from "../controllers/auth.controllers.js";

const router=express.Router();

router.post("/signin",signinUser)

router.post("/signup",signupUser)

router.post("/logout",signoutUser)

export default router;