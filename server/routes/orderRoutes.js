import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  markOrderAsPaid,
  markOrderAsDelivered,
} from "../controllers/orderController.js";

import protect from "../middleware/authMiddleware.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// USER
router.post("/", protect, createOrder);
router.get("/myorders", protect, getMyOrders);
router.put("/:id/pay", protect, markOrderAsPaid);

// ADMIN (specific routes FIRST)
router.put("/:id/deliver", adminProtect, markOrderAsDelivered);
router.put("/:id", adminProtect, updateOrderStatus);
router.get("/", adminProtect, getAllOrders);

export default router;
