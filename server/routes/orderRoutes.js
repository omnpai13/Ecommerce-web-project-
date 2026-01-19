import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

import protect from "../middleware/authMiddleware.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);

router.get("/myorders", protect, getMyOrders);

router.get("/", adminProtect, getAllOrders);

router.put("/:id", adminProtect, updateOrderStatus);

export default router;
