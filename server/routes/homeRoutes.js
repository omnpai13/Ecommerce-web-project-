import express from "express";
import { getHome, updateHome } from "../controllers/homeController.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// Public → Home page
router.get("/", getHome);

// Admin → HomeControl
router.put("/", adminProtect, updateHome);

export default router;
