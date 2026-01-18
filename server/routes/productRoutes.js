import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";
import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getProducts);
router.get("/:id", getProductById);

// ADMIN ROUTES
router.post("/", adminProtect, createProduct);
router.delete("/:id", adminProtect, deleteProduct);

export default router;
