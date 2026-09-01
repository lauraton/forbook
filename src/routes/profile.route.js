import { Router } from "express";
import { createProfile, getProfiles } from "../controllers/profile.controller.js";
import { profileValidationRules } from "../middlewares/validations/profile.validation.js"

export const profileRouter = Router();

profileRouter.get("/profiles", getProfiles);
profileRouter.post("/profiles", profileValidationRules, createProfile);
