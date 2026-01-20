import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// PUBLIC ROUTE
router.post("/login", adminLogin);

// PROTECTED ROUTE
router.get("/dashboard", adminProtect, (req, res) => {
  res.json({
    message: "Welcome Admin",
    admin: req.admin,
  });
});

export default router;
