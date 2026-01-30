import express from "express";
import {
  createOrder,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.put("/:id", updateOrderStatus);

export default router;
