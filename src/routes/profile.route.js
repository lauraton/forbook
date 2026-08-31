import { Router } from "express";
import { createProfile, getProfiles } from "../controllers/profile.controller.js";
import { profileValidationRules } from "../middlewares/profile.validator.js";

const router = Router();

router.get("/", getProfiles);
router.post("/", profileValidationRules, createProfile);

export default router;