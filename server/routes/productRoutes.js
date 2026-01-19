import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import adminProtect from "../middleware/adminAuthMiddleware.js";

const router = express.Router();

// PUBLIC
router.get("/", getProducts);
router.get("/:id", getProductById);

// ADMIN
router.post("/", adminProtect, createProduct);
router.put("/:id", adminProtect, updateProduct);
router.delete("/:id", adminProtect, deleteProduct);

export default router;
